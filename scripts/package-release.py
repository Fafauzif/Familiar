"""Package the root-level V2 Vercel project and verify every archived member."""
from pathlib import Path
import hashlib, json, zipfile, os
ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT.parent / 'v2-deliverables'
OUTPUT.mkdir(exist_ok=True)
ARCHIVE = 'Familiar_V2_Vercel_Deployable.zip'
EXCLUDE = {'node_modules', '.git', '.vite', '__pycache__'}

def eligible(p):
    rel = p.relative_to(ROOT)
    return (p.is_file() and p.name != 'RELEASE_MANIFEST.json'
        and not any(part in EXCLUDE or part.startswith('.') for part in rel.parts)
        and not p.name.endswith(('.tmp', '.tsbuildinfo', '.partial'))
        and not p.name.startswith('failure-')
        and not rel.as_posix().startswith(('references/normalized/','reference-pack/legacy-v1-qa/')))

files = sorted(p for p in ROOT.rglob('*') if eligible(p))
manifest = {'product': 'Familiar', 'version': '2.0.0', 'archive': ARCHIVE,
    'applicationRoot': 'archive root', 'runtime': 'Photographic local-only prototype',
    'files': [{'path': p.relative_to(ROOT).as_posix(), 'bytes': p.stat().st_size,
               'sha256': hashlib.sha256(p.read_bytes()).hexdigest()} for p in files]}
manifest_bytes = (json.dumps(manifest, indent=2) + '\n').encode()
target = OUTPUT / ARCHIVE
temporary = OUTPUT / (ARCHIVE + '.partial')
with zipfile.ZipFile(temporary, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=6, allowZip64=True) as z:
    for p in files:
        z.write(p, p.relative_to(ROOT).as_posix(), compress_type=zipfile.ZIP_STORED if p.suffix == '.zip' else zipfile.ZIP_DEFLATED)
    z.writestr('RELEASE_MANIFEST.json', manifest_bytes)
with temporary.open('rb') as handle:
    os.fsync(handle.fileno())
os.replace(temporary, target)
with zipfile.ZipFile(target) as z:
    assert z.testzip() is None, 'ZIP CRC'
    names = z.namelist()
    assert len(names) == len(set(names)), 'Unique archive members'
    stored = json.loads(z.read('RELEASE_MANIFEST.json'))
    assert stored['archive'] == ARCHIVE and stored['version'] == '2.0.0'
    assert set(names) == {e['path'] for e in stored['files']} | {'RELEASE_MANIFEST.json'}, 'Exact manifest membership'
    for entry in stored['files']:
        data = z.read(entry['path'])
        assert len(data) == entry['bytes'], entry['path']
        assert hashlib.sha256(data).hexdigest() == entry['sha256'], entry['path']
    for name in ['package.json','package-lock.json','vercel.json','index.html','tsconfig.json',
                 'src/App.tsx','src/domain.ts','src/MarketplacePages.tsx','src/ProductPages.tsx',
                 'src/StudioPages.tsx','src/FeelPages.tsx','src/CommercePages.tsx','src/media.ts',
                 'public/photos/manifest.json','dist/index.html','qa/evidence/browser-results.json',
                 'README.md','reference-pack/current-design/DESIGN_GUIDELINE.md']:
        assert name in names, name
    assert not any('node_modules' in Path(n).parts or n.startswith('/') or '..' in Path(n).parts for n in names)
    assert not any(n.startswith(('public/models/','dist/models/')) for n in names), 'No deployed 3D models'
    assert 'three' not in json.loads(z.read('package.json'))['dependencies'], 'No Three.js dependency'
report = {'archive': ARCHIVE, 'version': '2.0.0', 'bytes': target.stat().st_size,
    'entries': len(names), 'sha256': hashlib.sha256(target.read_bytes()).hexdigest(),
    'rootProject': True, 'crcPassed': True, 'manifestMembershipAndHashesPassed': True}
(OUTPUT / 'release-integrity.json').write_text(json.dumps(report, indent=2) + '\n')
print(json.dumps(report, indent=2))
