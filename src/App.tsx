import { useEffect, useState, Suspense, lazy, type ReactNode } from "react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  HeartIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  SlidersHorizontalIcon,
  CheckIcon,
  LockSimpleIcon,
  ArrowUpRightIcon,
  SparkleIcon,
  LeafIcon,
  InfoIcon,
  XIcon,
} from "@phosphor-icons/react";
import {
  CATALOG,
  REFERENCE,
  PROPERTIES,
  getListing,
  rankMatches,
  money,
  type Listing,
  type Property,
  type ViewMode,
} from "./domain";
import { useStore } from "./store";
import { Link, navigate, usePath } from "./router";
import { visibleListings } from "./buyer";
import SourceCapture from "./components/SourceCapture";
import {
  ListingConversation,
  ReferencePreparation,
  PrivacyControls,
  SellerSupportPanel,
  useRetainedState,
  getPreparedReferenceStatus,
  resetRetainedState,
} from "./components/RetainedFlows";
const SellPage = lazy(() =>
  import("./SellerCommerce").then((m) => ({ default: m.SellPage })),
);
const CapturePage = lazy(() =>
  import("./SellerCommerce").then((m) => ({ default: m.CapturePage })),
);
const ReviewPage = lazy(() =>
  import("./SellerCommerce").then((m) => ({ default: m.ReviewPage })),
);
const PublishPage = lazy(() =>
  import("./SellerCommerce").then((m) => ({ default: m.PublishPage })),
);
const CheckoutPage = lazy(() =>
  import("./SellerCommerce").then((m) => ({ default: m.CheckoutPage })),
);
const OrdersPage = lazy(() =>
  import("./SellerCommerce").then((m) => ({ default: m.OrdersPage })),
);
const GarmentViewer = lazy(() => import("./components/GarmentViewer"));
const CATEGORIES = [
  "All",
  "Tops",
  "Knitwear",
  "Shirts",
  "Bottoms",
  "Dresses",
  "Outerwear",
];
function IconArrow() {
  return <ArrowRightIcon size={19} aria-hidden="true" />;
}
function Scene({
  listing,
  reference,
  mode,
}: {
  listing: Listing;
  reference?: Listing;
  mode?: ViewMode;
}) {
  return (
    <Suspense
      fallback={
        <div className="scene-loading">
          <img
            src={listing.poster}
            alt={listing.name}
            width="600"
            height="700"
          />
          <span>Opening the garment view…</span>
        </div>
      }
    >
      <GarmentViewer listing={listing} reference={reference} mode={mode} />
    </Suspense>
  );
}
function SupportTag({ support }: { support: string }) {
  return (
    <span className={`tag support-${support}`}>
      {support === "supported"
        ? "Source supported"
        : support === "limited"
          ? "Limited support"
          : "Unavailable"}
    </span>
  );
}
function PageLead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="page-lead">
      <p className="eyebrow">{eyebrow}</p>
      <h1 tabIndex={-1}>{title}</h1>
      {children}
    </header>
  );
}
function Guide({
  step,
  next,
  label,
}: {
  step: number;
  next?: string;
  label?: string;
}) {
  const { state } = useStore();
  if (!state.guided) return null;
  return (
    <aside className="guide">
      <span className="tag">Explore both · {step} / 6</span>
      <p>
        {[
          "",
          "Discover a piece you like.",
          "Inspect what the source supports.",
          "Compare it with your own familiar piece.",
          "Keep the differences in mind as you choose.",
          "Follow your order, then try the seller side.",
        ][step] || "Build a clearer listing with the six-stage walkthrough."}
      </p>
      {next && (
        <Link className="text-link" href={next}>
          {label || "Continue the tour"} <IconArrow />
        </Link>
      )}
    </aside>
  );
}
function ProductCard({ listing }: { listing: Listing }) {
  const { state, dispatch } = useStore();
  const saved = state.saved.includes(listing.id);
  const availability = state.availability[listing.id] || "active";
  return (
    <article
      className="product-card"
      data-testid="active-card"
      data-id={listing.id}
    >
      <div className="product-image" style={{ background: listing.background }}>
        <Link
          href={`/listing/${listing.id}`}
          aria-label={`View ${listing.name}`}
        >
          <img
            src={listing.poster}
            alt={listing.name}
            width="540"
            height="650"
            loading="lazy"
          />
        </Link>
        <button
          className={`save-button ${saved ? "saved" : ""}`}
          aria-label={`${saved ? "Unsave" : "Save"} ${listing.name}`}
          aria-pressed={saved}
          onClick={() => dispatch({ type: "SAVE", id: listing.id })}
        >
          <HeartIcon size={21} weight={saved ? "fill" : "regular"} />
        </button>
        {listing.hero && <span className="image-chip">Familiar Evidence</span>}
        {availability !== "active" && (
          <span className="availability-chip">{availability}</span>
        )}
      </div>
      <div className="product-info">
        <div>
          <Link href={`/listing/${listing.id}`}>{listing.name}</Link>
          <p>
            {listing.category} <span>·</span> Size {listing.size} <span>·</span>{" "}
            {listing.condition}
          </p>
        </div>
        <strong>{money(listing.price)}</strong>
      </div>
    </article>
  );
}
function Gateway() {
  const { dispatch } = useStore();
  return (
    <div className="gateway page">
      <div className="gateway-copy">
        <p className="eyebrow">
          <span className="tiny-star">✳</span> CLOTHES WITH MORE TO TELL
        </p>
        <h1 tabIndex={-1}>
          Secondhand.
          <br />
          <em>First-choice</em>
          <br />
          feeling.
        </h1>
        <p className="intro">
          Find a piece you can picture yourself in. Get to know the details,
          then compare it with something already familiar.
        </p>
        <div className="role-cards">
          <Link
            className="role-card buyer-role"
            aria-label="Shop Familiar"
            href="/shop"
            onClick={() => dispatch({ type: "GUIDE", value: false })}
          >
            <span>
              <span className="eyebrow">FIND YOUR NEXT PIECE</span>
              <strong>Shop Familiar</strong>
            </span>
            <ArrowUpRightIcon size={27} />
          </Link>
          <Link
            className="role-card seller-role"
            aria-label="Sell with Familiar Evidence"
            href="/sell"
            onClick={() => dispatch({ type: "GUIDE", value: false })}
          >
            <span>
              <span className="eyebrow">GIVE IT A CLEARER STORY</span>
              <strong>Sell with Familiar Evidence</strong>
            </span>
            <ArrowUpRightIcon size={27} />
          </Link>
        </div>
        <Link
          className="text-link explore"
          aria-label="Explore both"
          href="/shop"
          onClick={() => dispatch({ type: "GUIDE", value: true })}
        >
          Explore both <IconArrow />
          <span>A guided look around</span>
        </Link>
      </div>
      <div className="gateway-art" aria-label="Three garment collection">
        <div className="art-shape" />
        <div className="hero-garment hero-one">
          <img
            src="/posters/cloud-poplin.svg"
            width="500"
            height="600"
            alt="Cloud Poplin Blouse"
          />
          <span>
            Cloud Poplin <small>crisp & easy</small>
          </span>
        </div>
        <div className="hero-garment hero-two">
          <img
            src="/posters/moss-knit.svg"
            width="500"
            height="600"
            alt="Moss Knit Cardigan"
          />
          <span>
            Moss Knit <small>softly structured</small>
          </span>
        </div>
        <div className="hero-note">
          <SparkleIcon size={24} />
          <p>
            A little less guesswork.
            <br />
            <b>A little more familiar.</b>
          </p>
        </div>
        <div className="round-stamp">
          <span>
            ANOTHER
            <br />
            GOOD CHAPTER
          </span>
          <LeafIcon size={30} />
        </div>
      </div>
    </div>
  );
}
function Shop({ saved = false }: { saved?: boolean }) {
  const { state } = useStore();
  const [query, setQuery] = useState(
    new URLSearchParams(location.search).get("q") || "",
  );
  const [category, setCategory] = useState(
    new URLSearchParams(location.search).get("category") || "All",
  );
  const [size, setSize] = useState(
    new URLSearchParams(location.search).get("size") || "All",
  );
  const [filters, setFilters] = useState(false);
  const [sort, setSort] = useState(
    new URLSearchParams(location.search).get("sort") || "Recommended",
  );
  useEffect(() => {
    const p = new URLSearchParams();
    if (query) p.set("q", query);
    if (category !== "All") p.set("category", category);
    if (size !== "All") p.set("size", size);
    if (sort !== "Recommended") p.set("sort", sort);
    history.replaceState(
      {},
      "",
      location.pathname + (p.size ? "?" + p.toString() : ""),
    );
  }, [query, category, size, sort]);
  const listings = visibleListings(state, { query, category, size, saved });
  if (sort === "Price: low to high") listings.sort((a, b) => a.price - b.price);
  if (sort === "Price: high to low") listings.sort((a, b) => b.price - a.price);
  return (
    <div className="page shop-page">
      <Guide step={1} />
      <div className="shop-heading">
        <PageLead
          eyebrow={saved ? "YOUR LITTLE COLLECTION" : "THE FAMILIAR EDIT"}
          title={
            saved ? (
              <>
                Good pieces.
                <br />
                <em>Kept in mind.</em>
              </>
            ) : (
              <>
                Your next
                <br />
                <em>familiar thing.</em>
              </>
            )
          }
        >
          <p>Previously loved. Ready for another good chapter.</p>
        </PageLead>
        <div className="shop-note">
          <span className="tag">
            <SparkleIcon size={15} /> See a little closer
          </span>
          <p>
            Explore the piece.
            <br />
            Follow the evidence.
            <br />
            Make it your own.
          </p>
          <Link href="/match" className="text-link">
            Try Familiar Match <IconArrow />
          </Link>
        </div>
      </div>
      <div className="discovery-toolbar">
        <label className="search-field">
          <MagnifyingGlassIcon size={21} />
          <span className="sr-only">Search clothes</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search clothes, colors, or sellers…"
          />
        </label>
        <button
          className={`button secondary ${filters ? "selected" : ""}`}
          onClick={() => setFilters(!filters)}
          aria-expanded={filters}
        >
          <SlidersHorizontalIcon size={20} />
          Filters{size !== "All" && <span>1</span>}
        </button>
      </div>
      {filters && (
        <div className="filter-panel panel">
          <label className="field">
            Size
            <select
              aria-label="Size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option>All</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>
          </label>
          <button
            className="button quiet"
            onClick={() => {
              setSize("All");
              setCategory("All");
              setQuery("");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
      <div className="category-tabs" role="group" aria-label="Garment category">
        {CATEGORIES.map((c) => (
          <button
            className={category === c ? "active" : ""}
            key={c}
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
          >
            {c === "All" ? "All pieces" : c}
          </button>
        ))}
      </div>
      <div className="selected-filters">
        {category !== "All" && (
          <button
            className="filter-chip"
            aria-label={`Remove ${category} category filter`}
            onClick={() => setCategory("All")}
          >
            {category}
            <XIcon size={13} />
          </button>
        )}
        {size !== "All" && (
          <button
            className="filter-chip"
            aria-label="Remove size filter"
            onClick={() => setSize("All")}
          >
            Size {size}
            <XIcon size={13} />
          </button>
        )}
      </div>
      <div className="results-caption">
        <span>
          {listings.length} {saved ? "saved " : ""}pieces
          {query && ` for “${query}”`}
        </span>
        <label className="sort-control">
          Sort by
          <select
            aria-label="Sort pieces"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option>Recommended</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
          </select>
        </label>
      </div>
      {listings.length === 0 ? (
        <div className="empty panel">
          <HeartIcon size={36} />
          <h2>
            {saved ? "Keep a little collection." : "No pieces here just yet."}
          </h2>
          <p>
            {saved
              ? "Tap the heart on a piece to keep it in mind."
              : "Try another color, category, or size."}
          </p>
          <Link
            href="/shop"
            onClick={() => {
              setQuery("");
              setCategory("All");
              setSize("All");
            }}
            className="button primary"
          >
            Browse all pieces <IconArrow />
          </Link>
        </div>
      ) : (
        <div className="product-grid">
          {listings.map((item) => (
            <ProductCard key={item.id} listing={item} />
          ))}
        </div>
      )}
      {!saved && (
        <>
          <div className="coming-heading">
            <div>
              <p className="eyebrow">A FEW THINGS TO LOOK FORWARD TO</p>
              <h2>Still finding their way here.</h2>
            </div>
            <span className="tag">50 pieces · Coming soon</span>
          </div>
          <div className="product-grid coming-grid">
            {Array.from({ length: 50 }, (_, i) => (
              <article
                data-testid="coming-soon-card"
                className="coming-card"
                key={i}
                aria-label={`Coming soon garment ${i + 1}`}
              >
                <div
                  style={{
                    background: ["#eee4fa", "#e6eff8", "#e2f0e8", "#f7e5ec"][
                      i % 4
                    ],
                  }}
                >
                  {i < 12 ? (
                    <img
                      src={`/posters/coming-soon-${String(i + 1).padStart(2, "0")}.svg`}
                      alt=""
                      width="540"
                      height="650"
                      loading="lazy"
                    />
                  ) : (
                    <div className="fold-placeholder" aria-hidden="true">
                      <span />
                      <span />
                    </div>
                  )}
                  <span className="image-chip">Coming soon</span>
                </div>
                <p>A new chapter, soon.</p>
                <small>Not yet available</small>
              </article>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
function ListingPage({ id }: { id: string }) {
  const { state, dispatch } = useStore();
  const listing = getListing(state, id);
  const [notice, setNotice] = useState("");
  if (!listing || id === REFERENCE.id) return <NotFound />;
  const availability = state.availability[id] || "active";
  const buy = () => {
    dispatch({ type: "BUY_NOW", id });
    navigate("/checkout");
  };
  return (
    <div className="page listing-page">
      <Link href="/shop" className="text-link back">
        <ArrowLeftIcon size={18} />
        Back to the edit
      </Link>
      <div className="listing-layout">
        <div className="listing-stage">
          <Scene listing={listing} />
          <p className="stage-caption">
            Garment illustration <span>·</span> Original capture frames are in
            Evidence.
          </p>
        </div>
        <div className="listing-copy">
          <p className="eyebrow">
            {listing.category.toUpperCase()} · {listing.color.toUpperCase()}
          </p>
          <h1 tabIndex={-1}>{listing.name}</h1>
          <div className="price-row">
            <strong>{money(listing.price)}</strong>
            <span className="tag">Size {listing.size}</span>
            <button
              className="button icon quiet"
              aria-label={`${state.saved.includes(id) ? "Unsave" : "Save"} ${listing.name}`}
              aria-pressed={state.saved.includes(id)}
              onClick={() => dispatch({ type: "SAVE", id })}
            >
              <HeartIcon
                size={23}
                weight={state.saved.includes(id) ? "fill" : "regular"}
              />
            </button>
          </div>
          <p className="listing-description">{listing.description}</p>
          <div className="seller-row">
            <span className="avatar">{listing.seller.charAt(0)}</span>
            <div>
              <strong>{listing.seller}’s wardrobe</strong>
              <span>One piece · {listing.condition}</span>
            </div>
          </div>
          <div className="measurement-row">
            {Object.entries(listing.measurements).map(([key, value]) => (
              <div key={key}>
                <span>{key}</span>
                <strong>
                  {value === undefined ? "Not recorded" : `${value} cm`}
                </strong>
              </div>
            ))}
          </div>
          <div className="evidence-teaser">
            <div>
              <SparkleIcon size={21} />
              <strong>Familiar Evidence</strong>
              <Link
                href={`/listing/${id}/evidence`}
                aria-label={`Open evidence for ${listing.name}`}
              >
                <ArrowUpRightIcon size={21} />
              </Link>
            </div>
            <p>
              {
                listing.evidence.filter((x) => x.support !== "unavailable")
                  .length
              }{" "}
              properties with source material. See what’s visible, what the
              seller reviewed, and what stays unknown.
            </p>
            <div className="tags">
              {listing.evidence.map((e) => (
                <span key={e.property} className={`dot-tag ${e.support}`}>
                  {e.property}
                </span>
              ))}
            </div>
          </div>
          <div className="buy-actions">
            <button
              className="button primary"
              disabled={availability !== "active"}
              onClick={() => {
                dispatch({ type: "BAG_ADD", id });
                setNotice("Kept in your bag.");
              }}
            >
              <ShoppingBagIcon size={20} />
              {availability === "active"
                ? state.bag.includes(id)
                  ? "In your bag"
                  : "Add to bag"
                : availability === "reserved"
                  ? "Reserved"
                  : availability === "paused"
                    ? "Paused"
                    : availability === "removed"
                      ? "Unavailable"
                      : "Sold"}
            </button>
            <button
              className="button secondary"
              disabled={availability !== "active"}
              onClick={buy}
            >
              Buy now <IconArrow />
            </button>
          </div>
          <p className="notice live-notice" role="status">
            {notice}
          </p>
          <Link href={`/listing/${id}/compare`} className="compare-link">
            <span className="compare-symbol">
              <LockSimpleIcon size={20} />
            </span>
            <span>
              <strong>Compare with something I own</strong>
              <small>A private, property-by-property look.</small>
            </span>
            <ArrowRightIcon size={21} />
          </Link>
          {availability !== "active" && (
            <div className="alternative-pieces">
              <p className="eyebrow">OTHER PIECES TO EXPLORE</p>
              {CATALOG.filter(
                (x) => x.id !== id && state.availability[x.id] === "active",
              )
                .slice(0, 3)
                .map((x) => (
                  <Link
                    className="text-link"
                    href={`/listing/${x.id}`}
                    key={x.id}
                  >
                    {x.name} · {money(x.price)} <IconArrow />
                  </Link>
                ))}
            </div>
          )}
          <p className="delivery-note">
            Ships in 2–3 days <span>·</span> $5 delivery per order
            <br />
            Delivery estimate: 5–7 days after dispatch
          </p>
        </div>
      </div>
      <Guide
        step={state.comparison.listingId === id ? 4 : 2}
        next={
          state.comparison.listingId === id
            ? undefined
            : `/listing/${id}/evidence`
        }
        label="Get to know the evidence"
      />
      <div className="listing-bottom">
        <div>
          <p className="eyebrow">A PIECE WITH A PAST</p>
          <h2>
            Details you can
            <br />
            <em>get to know.</em>
          </h2>
        </div>
        <div className="panel">
          <h3>What to keep in mind</h3>
          <p>
            Visible condition and fabric behavior are separate. A clearer source
            helps you judge the piece; it cannot establish hidden damage, odor,
            hygiene, authenticity, or exact softness.
          </p>
          <Link href={`/listing/${id}/evidence`} className="text-link">
            Inspect source frames <IconArrow />
          </Link>
        </div>
        <ListingConversation listing={listing} />
      </div>
    </div>
  );
}
function EvidencePage({ id }: { id: string }) {
  const { state } = useStore();
  const listing = getListing(state, id);
  const [selected, setSelected] = useState<Property>(
    PROPERTIES.find(
      (p) =>
        p.toLowerCase() ===
        new URLSearchParams(location.search).get("property"),
    ) || "Drape",
  );
  const [sourceAvailable, setSourceAvailable] = useState(true);
  if (!listing || id === REFERENCE.id) return <NotFound />;
  const e = listing.evidence.find((x) => x.property === selected)!;
  const correction = (e as typeof e & { correctionNote?: string })
    .correctionNote;
  return (
    <div className="page evidence-page">
      <Link href={`/listing/${id}`} className="text-link back">
        <ArrowLeftIcon size={18} />
        Back to {listing.name}
      </Link>
      <PageLead
        eyebrow="FAMILIAR EVIDENCE"
        title={
          <>
            A closer look.
            <br />
            <em>A clearer choice.</em>
          </>
        }
      >
        <p>{listing.name} · Follow each observation to its source.</p>
      </PageLead>
      <div
        className="evidence-property-tabs"
        role="group"
        aria-label="Evidence property"
      >
        {PROPERTIES.map((p) => (
          <button
            key={p}
            className={`button ${selected === p ? "primary" : "secondary"}`}
            onClick={() => setSelected(p)}
            aria-pressed={selected === p}
          >
            {p}
          </button>
        ))}
      </div>
      <div className="source-layout">
        <SourceCapture
          listing={listing}
          evidence={e}
          onAvailable={setSourceAvailable}
        />
        <section className="panel evidence-reading" aria-live="polite">
          <div className="spread">
            <h2>{selected}</h2>
            <SupportTag support={sourceAvailable ? e.support : "unavailable"} />
          </div>
          {!sourceAvailable && (
            <p className="field-error" role="status">
              Source unavailable on this visit. The recorded observation is
              preserved below.
            </p>
          )}
          <p className="eyebrow">SOURCE OBSERVATION</p>
          <p className="observation">{e.observation}</p>
          <div className="seller-status">
            <span className={`status-dot ${e.sellerStatus}`} />
            <div>
              <strong>
                {e.sellerStatus === "confirmed"
                  ? "Seller confirmed"
                  : e.sellerStatus === "corrected"
                    ? "Seller correction"
                    : e.sellerStatus === "unsure"
                      ? "Seller is unsure"
                      : "Awaiting seller review"}
              </strong>
              <p>
                {correction ||
                  (e.sellerStatus === "confirmed"
                    ? "The seller agrees with this observation."
                    : e.sellerStatus === "unsure"
                      ? "The seller has not confirmed this finding. Read it with its source limitation."
                      : "An observation is separate from a seller declaration.")}
              </p>
            </div>
          </div>
          <div className="notice">
            <InfoIcon size={21} />
            <p>
              {selected === "Stretch"
                ? "Stretch comparison unavailable without a compatible controlled stretch capture."
                : selected === "Surface"
                  ? "Visible texture cannot establish exact softness against your skin."
                  : "This source supports a visual comparison, not a laboratory measurement."}
            </p>
          </div>
          <a
            className="text-link"
            href={e.source}
            target="_blank"
            rel="noreferrer"
          >
            Open source frame <ArrowUpRightIcon size={17} />
          </a>
        </section>
      </div>
      <div className="unknown-panel">
        <div>
          <p className="eyebrow">WHAT THIS CAPTURE CANNOT TELL YOU</p>
          <h2>Some things stay unknown.</h2>
        </div>
        <div className="tags">
          {[
            "Odor",
            "Hygiene",
            "Authenticity",
            "Exact softness",
            "Hidden damage",
            "Laboratory mechanics",
          ].map((x) => (
            <span className="tag" key={x}>
              {x}
            </span>
          ))}
        </div>
        <p>
          Evidence coverage describes available source material. It is never a
          quality or condition score.
        </p>
      </div>
      <Guide
        step={3}
        next={`/listing/${id}/compare`}
        label="Compare with your own piece"
      />
      <Link href={`/listing/${id}/compare`} className="button primary">
        Compare with something I own <IconArrow />
      </Link>
    </div>
  );
}
function ReferencePicker() {
  const { state, dispatch } = useStore();
  const [name, setName] = useState(
    state.privateReferenceName || REFERENCE.name,
  );
  const [remove, setRemove] = useState(false);
  return (
    <section className="reference-card panel">
      <p className="eyebrow">
        <LockSimpleIcon size={15} /> YOUR PRIVATE REFERENCE
      </p>
      {state.referenceAvailable ? (
        <>
          <div className="reference-mini">
            <img
              src={REFERENCE.poster}
              alt="Your prepared blue blouse"
              width="140"
              height="160"
            />
            <div>
              <h3>{state.privateReferenceName || REFERENCE.name}</h3>
              <p>Size {REFERENCE.size} · Tops</p>
              <span className="tag">Only you can see this</span>
            </div>
            <CheckIcon size={20} />
          </div>
          <details>
            <summary>Manage this reference</summary>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch({ type: "REFERENCE_RENAME", name });
              }}
            >
              <label className="field">
                Reference name
                <input
                  maxLength={80}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <button className="button secondary" type="submit">
                Save name
              </button>
            </form>
            {remove ? (
              <div className="notice stack">
                <p>Remove this reference from future comparisons?</p>
                <div className="actions">
                  <button
                    className="button secondary"
                    onClick={() => dispatch({ type: "REFERENCE_DELETE" })}
                  >
                    Remove reference
                  </button>
                  <button
                    className="button quiet"
                    onClick={() => setRemove(false)}
                  >
                    Keep it
                  </button>
                </div>
              </div>
            ) : (
              <button className="button quiet" onClick={() => setRemove(true)}>
                Remove private reference
              </button>
            )}
          </details>
        </>
      ) : (
        <div className="empty">
          <h3>No private reference selected.</h3>
          <p>
            You can keep shopping without one, or restore the prepared blue
            blouse to try a comparison.
          </p>
          <button
            className="button secondary"
            onClick={() => dispatch({ type: "REFERENCE_RESTORE" })}
          >
            Restore prepared reference
          </button>
        </div>
      )}
      <ReferencePreparation />
      <p className="muted">
        Your reference stays separate from public listings.
      </p>
    </section>
  );
}
function ComparePage({ id }: { id?: string }) {
  const { state, dispatch } = useStore();
  const { state: retained } = useRetainedState();
  const referenceStatus = getPreparedReferenceStatus(retained);
  const property = state.comparison.property;
  const matchSize = state.comparison.size;
  const matchCategory = state.comparison.category;
  const listing = id ? getListing(state, id) : undefined;
  const results = rankMatches(state, REFERENCE, property, {
    size: matchSize as "All" | "S" | "M" | "L",
    category: matchCategory as "All" | Listing["category"],
  });
  const candidate =
    listing ||
    results.find((r) => r.listing.id === state.comparison.listingId)?.listing ||
    results[0]?.listing;
  useEffect(() => {
    dispatch({
      type: "COMPARISON",
      comparison: {
        listingId: candidate?.id,
      },
    });
  }, [candidate?.id, dispatch]);
  const reference = {
    ...REFERENCE,
    name: state.privateReferenceName || REFERENCE.name,
  };
  if (id && (!listing || id === REFERENCE.id)) return <NotFound />;
  return (
    <div className="page match-page">
      {listing && (
        <Link href={`/listing/${id}`} className="text-link back">
          <ArrowLeftIcon size={18} />
          Back to {listing.name}
        </Link>
      )}
      <PageLead
        eyebrow="FAMILIAR MATCH"
        title={
          <>
            Start with what
            <br />
            <em>feels familiar.</em>
          </>
        }
      >
        <p>
          One piece you know. Four properties to compare.
          <br />
          Look at the supported differences, one at a time.
        </p>
      </PageLead>
      <div className="match-top">
        <ReferencePicker />
        <div className="match-intro panel">
          <span className="match-symbol">
            <SparkleIcon size={34} />
          </span>
          <h2>
            Similar in one way.
            <br />
            Different in another.
          </h2>
          <p>
            There’s no single match score. Your reference gives each visual
            difference a little more context.
          </p>
          <label className="field">
            What matters most?
            <select
              aria-label="What matters most?"
              value={property}
              onChange={(e) =>
                dispatch({
                  type: "COMPARISON",
                  comparison: { property: e.target.value as Property },
                })
              }
            >
              {PROPERTIES.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </label>
          <div className="match-eligibility">
            <label className="field">
              Size
              <select
                aria-label="Match size"
                value={matchSize}
                onChange={(e) =>
                  dispatch({
                    type: "COMPARISON",
                    comparison: { size: e.target.value as typeof matchSize },
                  })
                }
              >
                {["All", "S", "M", "L"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="field">
              Category
              <select
                aria-label="Match category"
                value={matchCategory}
                onChange={(e) =>
                  dispatch({
                    type: "COMPARISON",
                    comparison: {
                      category: e.target.value as typeof matchCategory,
                    },
                  })
                }
              >
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
      {state.referenceAvailable && referenceStatus === "ready" && candidate ? (
        <>
          <div className="paired-heading">
            <div>
              <p className="eyebrow">THE PIECE YOU KNOW</p>
              <h3>{reference.name}</h3>
            </div>
            <div>
              <p className="eyebrow">THE PIECE YOU’RE EXPLORING</p>
              <h3>{candidate.name}</h3>
            </div>
          </div>
          <Scene
            listing={candidate}
            reference={reference}
            mode={
              property === "Drape"
                ? "drape"
                : property === "Movement"
                  ? "movement"
                  : property === "Surface"
                    ? "surface"
                    : "neutral"
            }
          />
          <div className="property-comparison">
            {PROPERTIES.map((p) => {
              const ce = candidate.evidence.find((e) => e.property === p)!;
              const re = reference.evidence.find((e) => e.property === p)!;
              const support =
                ce.support === "unavailable" || re.support === "unavailable"
                  ? "unavailable"
                  : ce.support === "limited" || re.support === "limited"
                    ? "limited"
                    : "supported";
              return (
                <section
                  className={`property-panel ${p === property ? "selected" : ""}`}
                  key={p}
                >
                  <div className="spread">
                    <h3>{p}</h3>
                    <SupportTag support={support} />
                  </div>
                  <div className="paired-property">
                    <div>
                      <span className="eyebrow">YOUR REFERENCE</span>
                      <p>{re.observation}</p>
                    </div>
                    <div>
                      <span className="eyebrow">
                        {candidate.name.toUpperCase()}
                      </span>
                      <p>
                        {support === "unavailable"
                          ? `${p} comparison unavailable. Compatible source material is missing.`
                          : ce.observation}
                      </p>
                      {ce.sellerStatus === "unsure" && (
                        <small>Seller unsure · treat this as limited.</small>
                      )}
                    </div>
                  </div>
                  <Link
                    href={`/listing/${candidate.id}/evidence?property=${p.toLowerCase()}`}
                    className="text-link"
                  >
                    View this source <ArrowUpRightIcon size={16} />
                  </Link>
                </section>
              );
            })}
          </div>
          <Guide
            step={4}
            next={`/listing/${candidate.id}`}
            label="Return to the piece and choose"
          />
          <div className="ranked-heading">
            <div>
              <p className="eyebrow">PERSONAL DISCOVERY</p>
              <h2>
                {results.length === 3
                  ? "Three pieces to get to know."
                  : `${results.length} ${results.length === 1 ? "piece" : "pieces"} within your choices.`}
              </h2>
            </div>
            <p>
              {reference.evidence.find((e) => e.property === property)
                ?.support === "unavailable"
                ? `${property} comparison is unavailable for this reference.`
                : `${property} is your discovery focus.`}
              <br />
              Explore the supported differences below.
            </p>
          </div>
          <div className="ranked-grid">
            {results.map((r, i) => (
              <article
                className="ranked-card panel"
                data-testid="match-result"
                key={r.listing.id}
              >
                {reference.evidence.find((e) => e.property === property)
                  ?.support !== "unavailable" && (
                  <span className="rank-number">0{i + 1}</span>
                )}
                <Link href={`/listing/${r.listing.id}`}>
                  <img
                    src={r.listing.poster}
                    alt={r.listing.name}
                    width="420"
                    height="500"
                    loading="lazy"
                  />
                  <h3>{r.listing.name}</h3>
                </Link>
                <div className="spread">
                  <span>Size {r.listing.size}</span>
                  <strong>{money(r.listing.price)}</strong>
                </div>
                <div className="rank-properties">
                  {r.properties.map((p) => (
                    <div key={p.property}>
                      <div className="spread">
                        <strong>{p.property}</strong>
                        <SupportTag support={p.support} />
                      </div>
                      <p>{p.explanation}</p>
                      <small>
                        {p.evidenceCount} compatible source{" "}
                        {p.evidenceCount === 1 ? "frame" : "frames"}
                      </small>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/listing/${r.listing.id}/compare`}
                  className="button secondary"
                >
                  Compare this piece <IconArrow />
                </Link>
              </article>
            ))}
          </div>
        </>
      ) : (
        <div className="notice">
          <p>
            {state.referenceAvailable
              ? referenceStatus !== "ready"
                ? "Your reference checks are not complete. Finish or restore the prepared reference above to compare."
                : "No available pieces fit these choices. Broaden the category or size to compare."
              : "Restore a private reference to compare. Every listing remains available to browse without one."}
          </p>
        </div>
      )}
    </div>
  );
}
function About() {
  const { dispatch } = useStore();
  const [confirm, setConfirm] = useState(false);
  return (
    <div className="page about-page">
      <PageLead
        eyebrow="GET TO KNOW FAMILIAR"
        title={
          <>
            A little less guessing.
            <br />
            <em>A little more knowing.</em>
          </>
        }
      />
      <div className="prose">
        <h2>Clothes with more to tell.</h2>
        <p>
          Familiar brings ordinary secondhand browsing together with
          source-linked visual evidence and an optional private comparison. You
          can shop without adding a reference.
        </p>
        <h2>What this experience demonstrates</h2>
        <p>
          This is a complete vision demonstrator. Listings, sellers, captured
          source frames, measurements, conversations, delivery estimates,
          comparisons and orders are prepared examples. The 3D garments are
          original authored illustrations. They are not scans and do not create
          evidence or prove tactile properties. Match discovery order is
          authored for these prepared fixtures using their visible silhouettes
          and textures; it is not a measured inference result or a universal fit
          score.
        </p>
        <p>
          Payment, capture, review and order progress happen locally in your
          browser. No card details are collected, no money moves, no seller
          receives a message, and no camera access is required. There is no real
          account, inventory, shipping service, inference model or cloud
          storage.
        </p>
        <h2>Private means separate</h2>
        <p>
          The prepared reference is stored separately from public listing
          choices on this device. No real reference media is uploaded. Changing
          or removing it affects future comparisons. Anyone using the same
          browser profile can access its local state.
        </p>
        <h2>The evidence boundary</h2>
        <p>
          Source observations, seller confirmations, corrections, uncertainty
          and unavailable properties appear separately. Drape and movement views
          can help explain visible differences; they cannot establish exact
          softness, odor, hygiene, authenticity, hidden damage or laboratory
          fabric mechanics.
        </p>
        <h2>Demo controls</h2>
        <p>
          Your bag, saved pieces, reference choices, draft, review and orders
          persist on this device when browser storage is available. Reset
          returns every prepared piece to its starting state.
        </p>
        {confirm ? (
          <div className="panel">
            <h3>Reset this local experience?</h3>
            <p>
              Saved choices, bag, seller decisions and order history will be
              cleared.
            </p>
            <div className="actions">
              <button
                className="button primary"
                onClick={() => {
                  dispatch({ type: "RESET" });
                  resetRetainedState();
                  setConfirm(false);
                  navigate("/");
                }}
              >
                Reset demo
              </button>
              <button
                className="button secondary"
                onClick={() => setConfirm(false)}
              >
                Keep my choices
              </button>
            </div>
          </div>
        ) : (
          <button className="button secondary" onClick={() => setConfirm(true)}>
            Reset local demo
          </button>
        )}
        <PrivacyControls />
        <p className="muted">
          Familiar’s name and mark are design concepts. Trademark clearance has
          not been performed.
        </p>
      </div>
    </div>
  );
}
function PublicationGate() {
  const { state } = useRetainedState();
  const { state: core } = useStore();
  return state.moderation.status === "clear" ? (
    <PublishPage />
  ) : (
    <div className="page">
      <PageLead eyebrow="SELLER LISTING REVIEW" title="Publication is on hold.">
        <p>
          Resolve the listing review separately from source confirmation and
          visible condition.
          {core.publishedSnapshot
            ? " Your last published version remains unchanged."
            : ""}
        </p>
      </PageLead>
      <SellerSupportPanel />
      <Link href="/sell" className="text-link">
        Back to your workspace <IconArrow />
      </Link>
    </div>
  );
}
function NotFound() {
  return (
    <div className="page empty recovery">
      <p className="eyebrow">THIS PIECE ISN’T HERE</p>
      <h1 tabIndex={-1}>
        Let’s find a<br />
        <em>different chapter.</em>
      </h1>
      <p>
        This link has no active listing. Coming soon pieces will have a page
        when they’re ready.
      </p>
      <Link className="button primary" href="/shop">
        Back to the edit <IconArrow />
      </Link>
    </div>
  );
}
export default function App() {
  const path = usePath();
  const { state, dispatch, storageAvailable } = useStore();
  const [online, setOnline] = useState(navigator.onLine);
  useEffect(() => {
    const on = () => setOnline(navigator.onLine);
    window.addEventListener("online", on);
    window.addEventListener("offline", on);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", on);
    };
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    let finished = false;
    const focus = () => {
      const heading = document.querySelector<HTMLElement>("#main h1");
      if (heading && !finished) {
        finished = true;
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
        observer.disconnect();
      }
    };
    const observer = new MutationObserver(focus);
    observer.observe(document.getElementById("main")!, {
      subtree: true,
      childList: true,
    });
    const t = setTimeout(focus, 50);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, [path]);
  let content: ReactNode;
  const match = path.match(/^\/listing\/([^/]+)(?:\/(evidence|compare))?$/);
  if (match)
    content =
      match[2] === "evidence" ? (
        <EvidencePage key={path} id={match[1]} />
      ) : match[2] === "compare" ? (
        <ComparePage key={path} id={match[1]} />
      ) : (
        <ListingPage key={path} id={match[1]} />
      );
  else
    switch (path) {
      case "/":
        content = <Gateway />;
        break;
      case "/shop":
        content = <Shop key="shop" />;
        break;
      case "/saved":
        content = <Shop key="saved" saved />;
        break;
      case "/match":
        content = <ComparePage />;
        break;
      case "/sell":
        content = <SellPage />;
        break;
      case "/sell/capture":
        content = <CapturePage />;
        break;
      case "/sell/review":
        content = <ReviewPage />;
        break;
      case "/sell/publish":
        content = <PublicationGate />;
        break;
      case "/checkout":
        content = <CheckoutPage />;
        break;
      case "/orders":
        content = <OrdersPage />;
        break;
      case "/about":
        content = <About />;
        break;
      default:
        content = <NotFound />;
    }
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Familiar home">
          <img
            src="/brand/familiar-wordmark.svg"
            alt="Familiar"
            width="151"
            height="40"
          />
        </Link>
        <nav aria-label="Main navigation">
          <Link className={path === "/shop" ? "active" : ""} href="/shop">
            Shop
          </Link>
          <Link
            className={
              path.includes("compare") || path === "/match" ? "active" : ""
            }
            href="/match"
          >
            Match <span className="nav-spark">✳</span>
          </Link>
          <Link
            className={path.startsWith("/sell") ? "active" : ""}
            href="/sell"
          >
            Sell
          </Link>
        </nav>
        <div className="header-tools">
          <Link
            className="header-icon"
            href="/saved"
            aria-label={`Saved pieces (${state.saved.length})`}
          >
            <HeartIcon size={22} />
            {state.saved.length > 0 && (
              <span className="counter">{state.saved.length}</span>
            )}
          </Link>
          <Link
            className="header-icon"
            href="/checkout"
            onClick={() => dispatch({ type: "BAG_VIEW" })}
            aria-label={`Bag (${state.bag.length})`}
          >
            <ShoppingBagIcon size={22} />
            {state.bag.length > 0 && (
              <span className="counter">{state.bag.length}</span>
            )}
          </Link>
          <Link
            className="avatar user-avatar"
            href="/orders"
            aria-label="Your orders"
          >
            J
          </Link>
        </div>
      </header>
      {!online && (
        <div className="global-notice" role="status">
          You’re offline. Loaded pieces and local choices are still here; new
          media may need a connection.
        </div>
      )}
      {!storageAvailable && (
        <div className="global-notice" role="status">
          Browser storage is unavailable. Choices will last for this visit only.
        </div>
      )}
      <main id="main">
        <Suspense
          fallback={
            <div className="page">
              <p className="muted" role="status">
                Opening your next chapter…
              </p>
            </div>
          }
        >
          {content}
        </Suspense>
      </main>
      <footer className="site-footer">
        <Link href="/" className="brand" aria-label="Familiar home">
          <img
            src="/brand/familiar-wordmark.svg"
            alt="Familiar"
            width="132"
            height="35"
          />
        </Link>
        <p>A little less guesswork. A little more familiar.</p>
        <div>
          <Link href="/about">About & privacy</Link>
          <Link href="/orders">Your orders</Link>
          <Link href="/sell">Sell a piece</Link>
        </div>
        <span>Another good chapter.</span>
      </footer>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        <Link href="/shop" className={path === "/shop" ? "active" : ""}>
          <MagnifyingGlassIcon size={21} />
          Shop
        </Link>
        <Link
          href="/match"
          className={
            path === "/match" || path.includes("compare") ? "active" : ""
          }
        >
          <SparkleIcon size={21} />
          Match
        </Link>
        <Link href="/saved" className={path === "/saved" ? "active" : ""}>
          <HeartIcon size={21} />
          Saved
        </Link>
        <Link href="/sell" className={path.startsWith("/sell") ? "active" : ""}>
          <ArrowUpRightIcon size={21} />
          Sell
        </Link>
        <Link
          href="/checkout"
          onClick={() => dispatch({ type: "BAG_VIEW" })}
          className={path === "/checkout" ? "active" : ""}
        >
          <ShoppingBagIcon size={21} />
          Bag {state.bag.length || ""}
        </Link>
      </nav>
    </>
  );
}
