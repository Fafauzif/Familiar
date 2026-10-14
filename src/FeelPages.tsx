import { useEffect, useState } from "react";
import { ArrowRightIcon, ArrowsLeftRightIcon, CaretRightIcon, CheckIcon, HeartIcon, LockSimpleIcon, MagnifyingGlassIcon, PlusIcon, SparkleIcon, RulerIcon, XIcon, WarningCircleIcon, CameraIcon, PencilSimpleIcon, TrashIcon, ArrowCounterClockwiseIcon } from "@phosphor-icons/react";
import { PROPERTIES, SHIPPING, allListings, allReferences, getReference, getListing, money, type Listing, type Property } from "./domain";
import { useStore } from "./store";
import { Link, navigate } from "./router";
import { coverFor, mediaFor, type GarmentPhoto } from "./media";
import { FEEL_CHOICES, fabricProfile, findFeelMatches, passesFeelSearchFilters, compatibleGarments, hasFabricProfile, hasStretchDeclaration, MEASUREMENT_LABELS, measurementDifference, type MeasurementKey } from "./feel";
import "./feel.css";

const categories = ["All", "Tops", "Shirts", "Knitwear", "Bottoms", "Dresses", "Outerwear"];
const explanations: Record<Property, string> = { Drape: "How the fabric hangs", Movement: "How the fabric moves", Stretch: "Give and return", Surface: "Visible fabric texture" };
function photoSource(listing: Listing) { return listing.templateId || listing.id; }
function propertySupport(listing: Listing, property: Property) { return !hasFabricProfile(listing) ? "unavailable" : property === "Stretch" && hasStretchDeclaration(listing) ? "limited" : listing.evidence.find(e => e.property === property)?.support || "unavailable"; }
function observation(listing: Listing, property: Property) {
  if (propertySupport(listing, property) === "unavailable") return "Not recorded";
  const text = fabricProfile(listing).observations[property];
  return listing.seller.startsWith("You") ? text.replace("seller description", "owner description") : text;
}
function supportLabel(listing: Listing, property: Property) { if (propertySupport(listing, property) === "unavailable") return "Not recorded"; if (property === "Stretch") return listing.seller.startsWith("You") ? "Owner-described · limited" : "Seller-described · limited"; if (property === "Movement") return "Prepared sequence · limited"; return propertySupport(listing, property) === "limited" ? "Photo / description · limited" : "Photographed view"; }
function useFeelDialog(open: boolean, close: () => void) {
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = document.querySelector<HTMLElement>(".feel-modal-backdrop [role=dialog]");
    const controls = () => Array.from(dialog?.querySelectorAll<HTMLElement>("button, a[href], input, select, [tabindex='0']") || []).filter(el => !el.hasAttribute("disabled"));
    (dialog?.querySelector<HTMLElement>("[autofocus]") || controls()[0])?.focus();
    const keys = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); close(); }
      if (event.key !== "Tab") return;
      const items = controls();
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    window.addEventListener("keydown", keys);
    return () => { document.body.style.overflow = overflow; window.removeEventListener("keydown", keys); previous?.focus(); };
  }, [open]);
}
function PhotoColumn({ listing, own, onZoom }: { listing: Listing; own?: boolean; onZoom: (photo: GarmentPhoto, title: string) => void }) {
  const photos = mediaFor(photoSource(listing)).photos;
  const [selected, setSelected] = useState(0);
  useEffect(() => setSelected(0), [listing.id]);
  const photo = photos[selected] || photos[0];
  const profile = fabricProfile(listing);
  return <article className={`feel-photo-card ${own ? "is-reference" : ""}`}>
    <div className="feel-photo-label"><span className={`feel-pill ${own ? "neutral" : "lilac"}`}>{own ? "Something you own" : "Secondhand find"}</span>{own ? <span className="feel-private"><LockSimpleIcon size={13} /> Private</span> : <strong>{money(listing.price)}</strong>}</div>
    <h2>{listing.name}</h2><p className="feel-meta">Size {listing.size} · {own ? "Your familiar garment" : `Sold by ${listing.seller}`}</p>
    <button className="feel-photo" aria-label={`Enlarge ${listing.name} ${photo?.label || "photo"}`} onClick={() => photo && onZoom(photo, listing.name)}>
      <img src={photo?.src || coverFor(photoSource(listing))} alt={photo?.label ? `${listing.name}: ${photo.label}` : listing.name} width="720" height="900" />
      <span className="feel-zoom"><MagnifyingGlassIcon size={18} /></span><span className="feel-photo-caption">{photo?.label || "Full garment"}</span>
    </button>
    {photos.length > 1 && <div className="feel-thumbs" aria-label={`${listing.name} photographs`}>{photos.map((p, i) => <button key={p.id} aria-label={`Show ${listing.name} ${p.label}`} aria-pressed={selected === i} onClick={() => setSelected(i)}><img src={p.src} alt="" width="64" height="72" /><span>{p.kind === "front" ? "Front" : p.kind === "back" ? "Back" : p.kind === "detail" ? "Fabric" : p.kind === "label" ? "Label" : "Wear"}</span></button>)}</div>}
    <div className="feel-material"><span className="feel-kicker">Fabric at a glance</span><strong>{listing.material || profile.material}</strong><p>{profile.summary}</p><small>{listing.compositionSource || "Seller description; fibre content is not label-verified"}</small></div>
  </article>;
}

export function FeelPage({ listingId }: { listingId?: string }) {
  const { state, dispatch } = useStore();
  const [preferencesOpen, setPreferencesOpen] = useState(!listingId);
  const [zoom, setZoom] = useState<{ photo: GarmentPhoto; title: string } | null>(null);
  const references = allReferences(state);
  const selectedRecord = references.find(r => r.id === state.selectedReference) || references[0];
  const reference = selectedRecord ? getReference(state, selectedRecord.id) : undefined;
  const intent = state.feelIntent;
  useEffect(() => { if (selectedRecord && state.selectedReference !== selectedRecord.id) dispatch({ type: "REFERENCE", id: selectedRecord.id }); }, [selectedRecord?.id, state.selectedReference, dispatch]);
  useEffect(() => {
    const readQuery = () => { const query = new URLSearchParams(location.search).get("q"); if (query !== null) dispatch({ type: "FEEL_INTENT", intent: { query } }); };
    readQuery();
    if (listingId && state.comparison.listingId !== listingId) dispatch({ type: "COMPARISON", comparison: { listingId } });
    window.addEventListener("popstate", readQuery);
    return () => window.removeEventListener("popstate", readQuery);
  }, [listingId, dispatch]);
  function updateQuery(query: string) {
    dispatch({ type: "FEEL_INTENT", intent: { query } });
    const url = new URL(location.href);
    if (query) url.searchParams.set("q", query); else url.searchParams.delete("q");
    history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }
  useFeelDialog(!!zoom, () => setZoom(null));
  const matches = reference ? findFeelMatches(state, reference, intent, state.comparison) : [];
  const requestedId = listingId || state.comparison.listingId || "";
  const requested = allListings(state).some(item => item.id === requestedId) ? getListing(state, requestedId) : undefined;
  const eligibleRequested = requested && reference && compatibleGarments(reference, requested) && (state.availability[requested.id] || "active") === "active";
  const candidate = listingId ? eligibleRequested ? requested : undefined : eligibleRequested && matches.some(match => match.listing.id === requested.id) ? requested : matches[0]?.listing;
  const chosenOutsideFilters = !!listingId && !!candidate && !passesFeelSearchFilters(candidate, intent.query, state.comparison);
  const candidateSaved = candidate ? state.saved.includes(candidate.id) : false;
  const missingProperty = !!reference && propertySupport(reference, intent.priority) === "unavailable";
  const createReference = () => { navigate("/reference/capture?new=1"); };
  function toggleChoice(choice: string, kind: "likes" | "dislikes") {
    const next = intent[kind].includes(choice) ? intent[kind].filter(x => x !== choice) : [...intent[kind], choice];
    const other = kind === "likes" ? "dislikes" : "likes";
    dispatch({ type: "FEEL_INTENT", intent: { [kind]: next, [other]: intent[other].filter(x => x !== choice) } });
  }
  return <section className="feel">
    <div className="feel-breadcrumb"><Link href="/shop">Discover</Link><CaretRightIcon size={13} /><span>Search by feel</span></div>
    <header className="feel-heading"><div><p className="feel-eyebrow"><SparkleIcon size={15} /> Familiar Match</p><h1>{listingId && candidate ? "A closer look, together." : "Find your kind of fabric."}</h1><p>Start with something you know. Keep the feel you like, or find a little change.</p></div><Link href="/wardrobe" className="feel-text-link"><LockSimpleIcon size={16} /> My familiar pieces <ArrowRightIcon size={16} /></Link></header>

    <section className="feel-search-panel" aria-label="Your feel search">
      <div className="feel-reference-picker">
        {reference && <img src={coverFor(photoSource(reference))} alt="" width="64" height="78" />}
        <div><label htmlFor="feel-reference">Compare with something you own</label>{references.length ? <select id="feel-reference" value={selectedRecord?.id || ""} onChange={e => dispatch({ type: "REFERENCE", id: e.target.value })}>{references.map(r => <option key={r.id} value={r.id}>{r.listing.name}{r.ready ? "" : " · recording in progress"}</option>)}</select> : <p>You haven’t added a familiar piece yet.</p>}<span><LockSimpleIcon size={12} /> Private to this browser</span></div>
        <button className="feel-icon-button" aria-label="Add a familiar piece" onClick={createReference}><PlusIcon size={19} /></button>
      </div>
      <div className="feel-search-controls"><label className="feel-query" htmlFor="feel-query"><MagnifyingGlassIcon size={19} /><input id="feel-query" aria-label="Describe the feel or garment you want" type="search" value={intent.query} placeholder="Try ‘crisp shirt, size M’" onChange={e => updateQuery(e.target.value)} /></label><button className="feel-secondary" onClick={() => setPreferencesOpen(!preferencesOpen)} aria-expanded={preferencesOpen}><ArrowsLeftRightIcon size={17} /> {preferencesOpen ? "Close preferences" : "Adjust the feel"}</button></div>
      {preferencesOpen && <div className="feel-preferences">
        <div><span className="feel-kicker">What would you like to keep?</span><div className="feel-choice-row">{FEEL_CHOICES.map(choice => <button key={choice} className={intent.likes.includes(choice) ? "selected" : ""} aria-pressed={intent.likes.includes(choice)} onClick={() => toggleChoice(choice, "likes")}>{intent.likes.includes(choice) && <CheckIcon size={13} />}{choice}</button>)}</div></div>
        <div><span className="feel-kicker">What would you prefer less of?</span><div className="feel-choice-row">{FEEL_CHOICES.map(choice => <button key={choice} className={intent.dislikes.includes(choice) ? "selected" : ""} aria-pressed={intent.dislikes.includes(choice)} onClick={() => toggleChoice(choice, "dislikes")}>{intent.dislikes.includes(choice) && <CheckIcon size={13} />}{choice}</button>)}</div></div>
        <div className="feel-filter-row"><label>Focus on<select value={intent.priority} onChange={e => dispatch({ type: "FEEL_INTENT", intent: { priority: e.target.value as Property } })}>{PROPERTIES.map(p => <option key={p} value={p}>{p} · {explanations[p]}</option>)}</select></label><label>Category<select value={state.comparison.category} onChange={e => dispatch({ type: "COMPARISON", comparison: { category: e.target.value as typeof state.comparison.category, listingId: undefined } })}>{categories.map(c => <option key={c}>{c}</option>)}</select></label><label>Size<select value={state.comparison.size} onChange={e => dispatch({ type: "COMPARISON", comparison: { size: e.target.value as typeof state.comparison.size, listingId: undefined } })}>{["All", "S", "M", "L"].map(s => <option key={s}>{s}</option>)}</select></label></div>
      </div>}
    </section>

    {!reference ? <div className="feel-empty"><LockSimpleIcon size={28} /><h2>Start with a piece you know.</h2><p>A private recording gives you a familiar starting point. You can also keep shopping normally.</p><button className="feel-primary" onClick={createReference}>Add a familiar piece <ArrowRightIcon size={17} /></button><Link href="/shop">Continue browsing</Link><button className="feel-text-link" onClick={() => dispatch({ type: "REFERENCE_RESTORE" })}><ArrowCounterClockwiseIcon size={15} /> Restore the prepared blue blouse</button></div> : <>
      {selectedRecord && !selectedRecord.ready && <div className="feel-notice"><CameraIcon size={21} /><div><strong>Your private recording is in progress.</strong><p>Finish the guided views to compare all the available details.</p></div><Link href="/reference/capture" className="feel-secondary">Continue recording</Link></div>}
      {listingId && !requested && <div className="feel-notice"><WarningCircleIcon size={21} /><div><strong>This public comparison isn’t available.</strong><p>Choose an available find below, or return to browsing.</p></div><Link href="/shop" className="feel-secondary">Browse garments</Link></div>}
      {listingId && requested && !compatibleGarments(reference, requested) && <div className="feel-notice"><ArrowsLeftRightIcon size={21} /><div><strong>These are different garment types.</strong><p>{requested.name} and {reference.name} don’t share a useful flat-measurement comparison. Choose a matching reference, or one of the compatible finds below.</p></div><Link href="/wardrobe" className="feel-secondary">Choose another reference</Link></div>}
      {listingId && requested && (state.availability[requested.id] || "active") !== "active" && <div className="feel-notice"><WarningCircleIcon size={21} /><div><strong>{requested.name} is {state.availability[requested.id]}.</strong><p>It can’t be purchased now. The suggestions below include available garments.</p></div><Link href={`/listing/${requested.id}`} className="feel-secondary">View listing status</Link></div>}
      {missingProperty && <div className="feel-notice"><WarningCircleIcon size={21} /><div><strong>{intent.priority} isn’t recorded for this piece yet.</strong><p>Choose another focus, or add its guided recording. We won’t guess how it feels.</p></div><Link href="/reference/capture" className="feel-secondary">Record this detail</Link></div>}
      <section className="feel-results" aria-label="Similar-feel suggestions"><div className="feel-section-heading"><div><span className="feel-kicker">Your direction · {intent.priority.toLowerCase()}</span><h2>{matches.length ? `${matches.length} ${matches.length === 1 ? "find" : "finds"} to look at more closely` : "No similar-feel finds for these choices"}</h2></div><span className="feel-result-note">Available pieces · chosen for your preferences</span></div>
        {matches.length ? <div className="feel-candidates">{matches.map((result, i) => <button key={result.listing.id} className={`feel-candidate ${candidate?.id === result.listing.id ? "selected" : ""}`} onClick={() => { dispatch({ type: "COMPARISON", comparison: { listingId: result.listing.id } }); if (listingId) navigate(`/listing/${result.listing.id}/compare`); }} aria-pressed={candidate?.id === result.listing.id}><img src={coverFor(photoSource(result.listing))} alt={result.listing.name} width="80" height="96" /><span><small>Find {i + 1}</small><strong>{result.listing.name}</strong><span>{money(result.listing.price)} · Size {result.listing.size}</span><em>{result.reason}</em></span><CaretRightIcon size={18} /></button>)}</div> : <div className="feel-no-results"><p>{missingProperty ? "This comparison needs a recorded reference property first." : "Try another size, a broader category, or a different fabric preference."}</p><button className="feel-secondary" onClick={() => { dispatch({ type: "COMPARISON", comparison: { size: "All", category: "All", listingId: undefined } }); updateQuery(""); dispatch({ type: "FEEL_INTENT", intent: { priority: "Drape" } }); }}>Reset search choices</button><Link href="/shop">Browse all garments</Link></div>}
      </section>

      {candidate && <>
        {listingId && <div className="feel-chosen-piece"><span className="feel-pill lilac">Your chosen comparison</span><p>{chosenOutsideFilters ? `${candidate.name} is kept here because you opened it directly. It doesn’t match your current search filters; the suggestions above do.` : `${candidate.name} is the piece you chose to compare. Suggestions above are alternatives for your feel search.`}</p>{chosenOutsideFilters && <button className="feel-text-link" onClick={() => { updateQuery(""); dispatch({ type: "COMPARISON", comparison: { size: "All", category: "All" } }); }}>Clear search filters <XIcon size={14} /></button>}</div>}
        <section className="feel-paired" aria-label="Garment comparison"><PhotoColumn listing={reference} own onZoom={(photo, title) => setZoom({ photo, title })} /><PhotoColumn listing={candidate} onZoom={(photo, title) => setZoom({ photo, title })} /></section>

        <section className="feel-fabric-section"><div className="feel-section-heading"><div><span className="feel-kicker">What the fabric shows</span><h2>Look at the feel, one detail at a time.</h2></div><span className="feel-pill lilac">Your focus: {intent.priority}</span></div><div className="feel-property-grid">{PROPERTIES.map(property => <article key={property} className={property === intent.priority ? "focused" : ""}><h3>{property}<span>{explanations[property]}</span></h3><div><small>Your familiar piece</small><p>{observation(reference, property)}</p><span className={`feel-support ${propertySupport(reference, property)}`}>{supportLabel(reference, property)}</span></div><div><small>{candidate.name}</small><p>{observation(candidate, property)}</p><span className={`feel-support ${propertySupport(candidate, property)}`}>{supportLabel(candidate, property)}</span></div><div className="feel-source-links"><Link href={`/reference/capture?step=${property === "Drape" ? 0 : property === "Movement" ? 3 : property === "Stretch" ? 4 : 5}&return=${encodeURIComponent(location.pathname + location.search)}`} aria-label={`Review your ${property.toLowerCase()} recording`} className="feel-text-link">Your recording <ArrowRightIcon size={14} /></Link><Link href={`/listing/${candidate.id}/evidence?property=${property.toLowerCase()}&return=${encodeURIComponent(location.pathname + location.search)}`} aria-label={`See ${candidate.name} ${property.toLowerCase()} photographs`} className="feel-text-link">Seller’s views <ArrowRightIcon size={14} /></Link></div></article>)}</div><p className="feel-footnote">A photograph or guided sequence helps you inspect a garment. Exact skin softness, warmth and movement when worn still depend on your own experience.</p></section>

        <section className="feel-measurements"><div className="feel-section-heading"><div><span className="feel-kicker"><RulerIcon size={14} /> Measurements, in centimetres</span><h2>A little wider? A little longer?</h2></div><p>Measured flat · candidate compared with your piece</p></div><div className="feel-measure-table"><div className="feel-measure-header"><span>Measurement</span><span>Your piece</span><span>This find</span><span>Difference</span></div>{(Object.keys(MEASUREMENT_LABELS) as MeasurementKey[]).map(key => { const m = measurementDifference(reference, candidate, key); return <div className="feel-measure-row" key={key}><strong>{MEASUREMENT_LABELS[key]}</strong><span>{m.reference === undefined ? "Not recorded" : `${m.reference} cm`}</span><span>{m.candidate === undefined ? "Not recorded" : `${m.candidate} cm`}</span><span className={m.delta === undefined ? "unknown" : m.delta === 0 ? "same" : "difference"}>{m.text}</span></div>; })}</div><p className="feel-footnote">Chest is measured straight across below the underarms; length from the high shoulder to the hem; shoulder seam to seam; sleeve from shoulder seam to cuff. Garment differences do not guarantee body fit.</p></section>

        <section className="feel-detail-grid"><article><span className="feel-kicker">Material & construction</span><h3>Start with the fabric facts.</h3><dl><div><dt>Your piece</dt><dd>{reference.material || fabricProfile(reference).material}</dd></div><div><dt>This find</dt><dd>{candidate.material || fabricProfile(candidate).material}</dd></div><div><dt>Composition source</dt><dd>{candidate.compositionSource || "Seller description; exact fibre percentages not recorded"}</dd></div></dl><p>Fabric weight and exact fibre percentages: <strong>not recorded</strong>.</p></article><article><span className="feel-kicker">Condition</span><h3>Know what’s different.</h3><p className="feel-condition">{candidate.condition}</p><p>{candidate.description}</p><Link href={`/listing/${candidate.id}/evidence`} className="feel-condition-source"><img src={mediaFor(photoSource(candidate)).photos.find(p => p.kind === "wear")?.src || coverFor(photoSource(candidate))} alt={`${candidate.name}, seller photograph`} width="56" height="62" /><span><strong>Inspect the condition views</strong><small>Original photographs and seller notes</small></span><ArrowRightIcon size={17} /></Link></article><article><span className="feel-kicker">The practical details</span><h3>Keep the whole choice in view.</h3><dl><div><dt>Label size</dt><dd>{candidate.size}</dd></div><div><dt>Item price</dt><dd>{money(candidate.price)}</dd></div><div><dt>Standard delivery</dt><dd>{money(SHIPPING)}</dd></div><div><dt>Item + delivery</dt><dd>{money(candidate.price + SHIPPING)}</dd></div></dl><Link href={`/listing/${candidate.id}#seller`} className="feel-text-link">Ask {candidate.seller} a question <ArrowRightIcon size={15} /></Link></article></section>
        <section className="feel-decision"><div><span className="feel-kicker">Like this direction?</span><h2>Take another look at {candidate.name}.</h2><span>{money(candidate.price)} · Size {candidate.size} · Available</span></div><div><button className={`feel-secondary ${candidateSaved ? "is-saved" : ""}`} aria-pressed={candidateSaved} onClick={() => dispatch({ type: "SAVE", id: candidate.id })}><HeartIcon size={18} weight={candidateSaved ? "fill" : "regular"} />{candidateSaved ? "Saved" : "Save this find"}</button><Link href={`/listing/${candidate.id}`} className="feel-primary">View garment <ArrowRightIcon size={18} /></Link><button className="feel-text-link" onClick={() => { dispatch({ type: "BUY_NOW", id: candidate.id }); navigate("/checkout"); }}>Buy now · {money(candidate.price)}</button></div></section>
      </>}
    </>}
    <p className="feel-method"><SparkleIcon size={14} /> Suggestions use the prepared garment profiles and the choices above. Compare the photographs and seller descriptions before deciding. <Link href="/about">How Familiar Match works</Link></p>
    {zoom && <div className="feel-modal-backdrop" onClick={() => setZoom(null)}><section className="feel-photo-modal" role="dialog" aria-modal="true" aria-label={`${zoom.title} original photograph`} onClick={e => e.stopPropagation()}><header><div><strong>{zoom.title}</strong><span>{zoom.photo.label} · original view</span></div><button className="feel-icon-button" autoFocus aria-label="Close original photograph" onClick={() => setZoom(null)}><XIcon size={23} /></button></header><img src={zoom.photo.src} alt={`${zoom.title}: ${zoom.photo.label}`} /><p>Use your browser’s image zoom to inspect details. <a href={zoom.photo.src} target="_blank" rel="noreferrer">Open full image</a></p></section></div>}
  </section>;
}

export function WardrobePage() {
  const { state, dispatch } = useStore();
  const references = allReferences(state);
  const [editing, setEditing] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);
  const [error, setError] = useState("");
  useFeelDialog(!!editing || !!deleting, () => { setEditing(null); setDeleting(null); });
  const add = () => { navigate("/reference/capture?new=1"); };
  const saveName = () => { if (!name.trim() || name.trim().length > 80) { setError("Use a name between 1 and 80 characters."); return; } dispatch({ type: "REFERENCE_RENAME", id: editing || undefined, name: name.trim() }); setEditing(null); setError(""); };
  return <section className="wardrobe"><div className="feel-breadcrumb"><Link href="/account">Account</Link><CaretRightIcon size={13} /><span>My familiar pieces</span></div><header className="feel-heading"><div><p className="feel-eyebrow"><LockSimpleIcon size={15} /> Your private wardrobe</p><h1>Pieces you know by heart.</h1><p>Keep a few familiar garments as a starting point for your next find.</p></div><button className="feel-primary" onClick={add}><PlusIcon size={17} /> Add a familiar piece</button></header><aside className="wardrobe-privacy"><LockSimpleIcon size={18} /><p>Your references stay in this browser. They aren’t public listings, and clearing browser data removes them.</p><Link href="/account">Privacy settings</Link></aside>{references.length ? <section className="wardrobe-grid">{references.map(r => <article className="wardrobe-card" key={r.id}><button className="wardrobe-photo" onClick={() => { dispatch({ type: "REFERENCE", id: r.id }); navigate("/match"); }} aria-label={`Compare with ${r.listing.name}`}><img src={coverFor(photoSource(r.listing))} alt={r.listing.name} width="600" height="750" /><span className="feel-pill neutral"><LockSimpleIcon size={12} /> Private</span>{!r.ready && <span className="wardrobe-progress">{r.capturedSteps.length} of 6 recordings</span>}</button><div className="wardrobe-card-body"><div className="wardrobe-title"><h2>{r.listing.name}</h2><button className="feel-icon-button" aria-label={`Rename ${r.listing.name}`} onClick={() => { setEditing(r.id); setName(r.listing.name); setError(""); }}><PencilSimpleIcon size={17} /></button></div><p>Size {r.listing.size} · {r.listing.material || fabricProfile(r.listing).material}</p><div className="wardrobe-properties">{PROPERTIES.map(p => <span key={p} className={propertySupport(getReference(state, r.id) || r.listing, p) === "unavailable" ? "missing" : ""}>{propertySupport(getReference(state, r.id) || r.listing, p) !== "unavailable" && <CheckIcon size={11} />}{p}</span>)}</div><div className="wardrobe-actions"><button className="feel-primary" onClick={() => { dispatch({ type: "REFERENCE", id: r.id }); navigate(r.ready ? "/match" : "/reference/capture"); }}>{r.ready ? "Find a similar feel" : "Continue recording"}<ArrowRightIcon size={16} /></button><button className="feel-text-link" onClick={() => { dispatch({ type: "REFERENCE", id: r.id }); navigate("/reference/capture"); }}>Review recordings</button><button className="feel-icon-button" aria-label={`Delete ${r.listing.name}`} onClick={() => setDeleting(r.id)}><TrashIcon size={18} /></button></div></div></article>)}</section> : <div className="feel-empty"><CameraIcon size={32} /><h2>A familiar starting point.</h2><p>Add a garment you already like. The guided recording helps you describe its shape, texture and feel.</p><button className="feel-primary" onClick={add}>Record your first piece <ArrowRightIcon size={17} /></button><button className="feel-text-link" onClick={() => dispatch({ type: "REFERENCE_RESTORE" })}><ArrowCounterClockwiseIcon size={15} /> Restore the prepared blue blouse</button></div>}<p className="feel-footnote">You can browse and buy without a private reference. Familiar Match is always optional.</p>
    {editing && <div className="feel-modal-backdrop"><section className="feel-edit-modal" role="dialog" aria-modal="true" aria-labelledby="rename-title"><button className="feel-icon-button modal-close" aria-label="Close rename" onClick={() => setEditing(null)}><XIcon size={20} /></button><h2 id="rename-title">A name you’ll remember.</h2><label htmlFor="reference-name">Garment name</label><input id="reference-name" maxLength={80} autoFocus value={name} onChange={e => setName(e.target.value)} />{error && <p role="alert">{error}</p>}<div><button className="feel-secondary" onClick={() => setEditing(null)}>Cancel</button><button className="feel-primary" onClick={saveName}>Save name</button></div></section></div>}
    {deleting && <div className="feel-modal-backdrop"><section className="feel-edit-modal" role="dialog" aria-modal="true" aria-labelledby="delete-title"><h2 id="delete-title">Remove this familiar piece?</h2><p>It will leave your private wardrobe and future Match choices. Your saved finds and order history will stay.</p><div><button className="feel-secondary" autoFocus onClick={() => setDeleting(null)}>Keep piece</button><button className="feel-primary" onClick={() => { dispatch({ type: "REFERENCE_DELETE", id: deleting }); setDeleting(null); }}>Remove piece</button></div></section></div>}
  </section>;
}
