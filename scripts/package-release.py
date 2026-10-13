"""Create and inspect the two root-level Familiar release archives."""
from pathlib import Path
import hashlib,json,zipfile,os
ROOT=Path(__file__).resolve().parent.parent
OUTPUT=ROOT.parent/'deliverables';OUTPUT.mkdir(exist_ok=True)
EXCLUDE={'node_modules','.git','.vite','__pycache__'}

def eligible(path):
 rel=path.relative_to(ROOT)
 return path.name!='RELEASE_MANIFEST.json' and path.is_file() and not any(p in EXCLUDE or p.startswith('.') for p in rel.parts) and not path.name.endswith(('.tmp','.tsbuildinfo')) and not path.name.startswith('failure-')
files=sorted(p for p in ROOT.rglob('*') if eligible(p))
required=['package.json','package-lock.json','vercel.json','index.html','tsconfig.json','src/App.tsx','src/domain.ts','src/store.tsx','public/models/cloud-poplin.glb','public/models/moss-knit.glb','public/models/airloom-linen.glb','public/models/my-blue-blouse.glb','dist/index.html','qa/evidence/browser-results.json','README.md']
reports=[]
for filename,full in [('Familiar_Final_Vercel_Deployable.zip',False),('Familiar_Final_Source_Assets.zip',True)]:
 target=OUTPUT/filename
 temporary=OUTPUT/(filename+'.partial')
 included=[p for p in files if full or not p.relative_to(ROOT).as_posix().startswith('references/originals/')]
 manifest={'product':'Familiar','version':'1.0.0','archive':filename,'applicationRoot':'archive root','embeddedOriginalArchives':full,'sourceFiles':len(included),'files':[{'path':p.relative_to(ROOT).as_posix(),'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in included]}
 manifest_text=json.dumps(manifest,indent=2)+'\n'
 if full:(ROOT/'RELEASE_MANIFEST.json').write_text(manifest_text)
 with zipfile.ZipFile(temporary,'w',compression=zipfile.ZIP_DEFLATED,compresslevel=6,allowZip64=True) as z:
  for path in included:
   rel=path.relative_to(ROOT).as_posix()
   z.write(path,rel,compress_type=zipfile.ZIP_STORED if path.suffix.lower()=='.zip' else zipfile.ZIP_DEFLATED)
  z.writestr('RELEASE_MANIFEST.json',manifest_text)
 with temporary.open('rb') as handle:os.fsync(handle.fileno())
 os.replace(temporary,target)
 with zipfile.ZipFile(target) as z:
  assert z.testzip() is None
  names=z.namelist()
  archived_manifest=json.loads(z.read('RELEASE_MANIFEST.json'))
  assert archived_manifest['archive']==filename
  assert len(names)==len(set(names))
  assert set(names)=={entry['path'] for entry in archived_manifest['files']}|{'RELEASE_MANIFEST.json'}
  for entry in archived_manifest['files']:
   assert z.getinfo(entry['path']).file_size==entry['bytes'],(filename,entry['path'],'size')
   with z.open(entry['path']) as handle:digest=hashlib.file_digest(handle,'sha256').hexdigest()
   assert digest==entry['sha256'],(filename,entry['path'],'sha256')
  for name in required:assert name in names,(filename,name)
  assert not any('node_modules' in n or '/.git/' in n or n.startswith('/') or '..' in Path(n).parts for n in names)
  assert 'context/original/Familiar_TGIC_2026_Master_Context_original.md' in names
  if full:
   originals=list((ROOT/'references/originals').glob('*.zip'))
   for p in originals:assert z.read(p.relative_to(ROOT).as_posix())==p.read_bytes()
  reports.append({'file':filename,'status':'passed','bytes':target.stat().st_size,'entries':len(names),'sha256':hashlib.sha256(target.read_bytes()).hexdigest(),'rootProject':True,'crcPassed':True,'manifestMembershipAndHashesPassed':True,'embeddedOriginalArchives':full})
(OUTPUT/'release-integrity.json').write_text(json.dumps({'archives':reports},indent=2)+'\n')
print(json.dumps(reports,indent=2))
