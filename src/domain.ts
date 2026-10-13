/** Authored demonstration data: prices and measurements are simulated, not real seller claims. */
export type Property = "Drape" | "Movement" | "Stretch" | "Surface";
export type Support = "supported" | "limited" | "unavailable";
export type ReviewStatus = "unreviewed" | "confirmed" | "corrected" | "unsure";
export type ViewMode =
  | "neutral"
  | "drape"
  | "movement"
  | "surface"
  | "front"
  | "label"
  | "wear";
export interface Evidence {
  property: Property;
  support: Support;
  observation: string;
  source: string;
  frame: string;
  sellerStatus: ReviewStatus;
  correctionNote?: string;
  originalSupport?: Support;
}
export interface Listing {
  id: string;
  name: string;
  category:
    | "Tops"
    | "Knitwear"
    | "Shirts"
    | "Bottoms"
    | "Dresses"
    | "Outerwear";
  price: number;
  size: "S" | "M" | "L";
  color: string;
  background: string;
  seller: string;
  condition: string;
  description: string;
  measurements: { chest?: number; length?: number; sleeve?: number };
  model?: string;
  poster: string;
  evidence: Evidence[];
  hero: boolean;
}
export type OrderStatus =
  | "reserved"
  | "confirmed"
  | "packed"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "expired"
  | "disputed";
export interface OrderItemSnapshot {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly size: Listing["size"];
  readonly poster: string;
  readonly condition: string;
}
export interface Order {
  id: string;
  items: string[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  itemSnapshots?: readonly OrderItemSnapshot[];
  disputeNote?: string;
  feedback?: { fit: "as-expected" | "different"; note: string };
}
export type Availability =
  | "active"
  | "reserved"
  | "sold"
  | "paused"
  | "removed";
export interface AppState {
  version: 1;
  saved: string[];
  bag: string[];
  checkoutMode: "bag" | "buy-now";
  buyNowId?: string;
  availability: Record<string, Availability>;
  selectedReference: string;
  privateReferenceName: string;
  referenceAvailable: boolean;
  comparison: ComparisonContext;
  captureStage: number;
  captureComplete: boolean;
  decisions: Record<string, { status: ReviewStatus; note: string }>;
  published: boolean;
  publishedSnapshot?: PublishedSnapshot;
  draft: {
    name: string;
    price: number;
    size: "S" | "M" | "L";
    description: string;
  };
  orders: Order[];
  guided: boolean;
  paymentError: boolean;
}
export interface ComparisonContext {
  listingId?: string;
  property: Property;
  size: "All" | Listing["size"];
  category: "All" | Listing["category"];
}
export interface PublishedSnapshot {
  draft: AppState["draft"];
  decisions: AppState["decisions"];
}
export type Action =
  | { type: "SAVE"; id: string }
  | { type: "BAG_ADD"; id: string }
  | { type: "BAG_REMOVE"; id: string }
  | { type: "BUY_NOW"; id: string }
  | { type: "BAG_VIEW" }
  | { type: "LISTING_PAUSE"; id: string }
  | { type: "LISTING_RESUME"; id: string }
  | { type: "LISTING_REMOVE"; id: string }
  | { type: "COMPARISON"; comparison: Partial<AppState["comparison"]> }
  | { type: "REFERENCE"; id: string }
  | { type: "REFERENCE_RENAME"; name: string }
  | { type: "REFERENCE_DELETE" }
  | { type: "REFERENCE_RESTORE" }
  | { type: "CAPTURE_NEXT" }
  | { type: "CAPTURE_BACK" }
  | { type: "CAPTURE_RETAKE"; stage: number }
  | { type: "DECIDE"; property: Property; status: ReviewStatus; note?: string }
  | { type: "PUBLISH" }
  | { type: "DRAFT"; draft: Partial<AppState["draft"]> }
  | { type: "CHECKOUT"; payment: "success" | "declined" }
  | { type: "ORDER_ADVANCE"; id: string }
  | { type: "ORDER_CANCEL"; id: string }
  | { type: "ORDER_EXPIRE"; id: string }
  | { type: "ORDER_DISPUTE"; id: string; note: string }
  | {
      type: "ORDER_FEEDBACK";
      id: string;
      fit: "as-expected" | "different";
      note?: string;
    }
  | { type: "GUIDE"; value: boolean }
  | { type: "RESET" };
export interface MatchProperty {
  property: Property;
  support: Support;
  explanation: string;
  evidenceCount: number;
}
export interface MatchResult {
  listing: Listing;
  properties: MatchProperty[];
  discoveryKind?: "authored-fixture-order";
  discoveryReason?: string;
}
export interface MatchFilters {
  size?: "All" | Listing["size"];
  category?: "All" | Listing["category"];
}
export const PROPERTIES: Property[] = [
  "Drape",
  "Movement",
  "Stretch",
  "Surface",
];
export const SHIPPING = 5;

interface FixtureInput {
  id: string;
  name: string;
  category: Listing["category"];
  price: number;
  size: Listing["size"];
  color: string;
  background: string;
  seller: string;
  condition: string;
  description: string;
  measurements: Listing["measurements"];
  drape: string;
  surface: string;
  movement?: string;
  stretch?: string;
  hero?: boolean;
}
function fixture(input: FixtureInput): Listing {
  const { drape, surface, movement, stretch, ...listing } = input;
  const evidence: Evidence[] = [
    {
      property: "Drape",
      support: "supported",
      observation: drape,
      source: `/evidence/${input.id}-drape.svg`,
      frame: "Frame 01 · full garment, hanging",
      sellerStatus: "unreviewed",
    },
    {
      property: "Movement",
      support: movement ? "limited" : "unavailable",
      observation:
        movement ??
        "A still frame cannot establish movement during wear. No continuous movement clip is supplied.",
      source: `/evidence/${input.id}-movement.svg`,
      frame: "Frame 02 · side movement illustration",
      sellerStatus: "unreviewed",
    },
    {
      property: "Stretch",
      support: stretch ? "limited" : "unavailable",
      observation:
        stretch ??
        "No controlled stretch-and-return capture is supplied. Elasticity and recovery remain unknown.",
      source: `/evidence/${input.id}-stretch.svg`,
      frame: "Frame 03 · fabric detail, no stretch test",
      sellerStatus: "unreviewed",
    },
    {
      property: "Surface",
      support: "supported",
      observation: surface,
      source: `/evidence/${input.id}-surface.svg`,
      frame: "Frame 04 · surface and visible wear detail",
      sellerStatus: "unreviewed",
    },
  ];
  return {
    ...listing,
    hero: !!input.hero,
    model: input.hero ? `/models/${input.id}.glb` : undefined,
    poster: `/posters/${input.id}.svg`,
    evidence,
  };
}
export const CATALOG: Listing[] = [
  fixture({
    id: "cloud-poplin",
    name: "Cloud Poplin Blouse",
    category: "Tops",
    price: 32,
    size: "M",
    color: "Warm ivory",
    background: "#e3e8ef",
    seller: "Maya",
    condition: "Very good · small cuff mark",
    description:
      "An ivory cotton blouse with a structured collar, button placket and crisp hem. A tiny mark sits on the right cuff; exact feel and hidden wear remain unknown.",
    measurements: { chest: 52, length: 62, sleeve: 54 },
    drape:
      "The structured collar and straight button placket hold their shape. Angular side folds meet a crisp, nearly level hem in the prepared hanging frame.",
    movement:
      "The prepared side sequence shows a small shift at the structured hem and cuff. It cannot establish movement during wear or fabric weight.",
    surface:
      "The prepared close-up shows a fine plain weave, button placket and tiny mark on the right cuff. Hidden damage and tactile softness remain unknown.",
    hero: true,
  }),
  fixture({
    id: "moss-knit",
    name: "Moss Knit Cardigan",
    category: "Knitwear",
    price: 46,
    size: "M",
    color: "Moss green",
    background: "#e7e9db",
    seller: "June",
    condition: "Good · light visible pilling",
    description:
      "A moss-green open-front cardigan with ribbed edges and full sleeves. Light pilling appears at the cuff. Fibre content, warmth and stretch recovery are unknown.",
    measurements: { chest: 54, length: 59, sleeve: 56 },
    drape:
      "The open front falls in two loose vertical edges; fuller sleeves gather above the ribbed cuffs in the prepared hanging frame.",
    movement:
      "The prepared side illustration shows a small change at the cuff and hem. A still sequence does not establish movement when worn.",
    stretch:
      "The rib structure is visible, but no controlled stretch-and-return test was captured. Stretch recovery is unknown.",
    surface:
      "Raised knit loops, ribbed cuffs and light pilling are visible in the prepared detail frame.",
    hero: true,
  }),
  fixture({
    id: "airloom-linen",
    name: "Airloom Linen Overshirt",
    category: "Shirts",
    price: 38,
    size: "L",
    color: "Stone",
    background: "#e9e2d6",
    seller: "Ari",
    condition: "Very good · visible natural creases",
    description:
      "A relaxed stone overshirt with a pointed collar, button front and two patch pockets. Creases run through the textured weave. Fibre content and breathability are unverified.",
    measurements: { chest: 58, length: 72, sleeve: 57 },
    drape:
      "Long creases follow the button placket between two raised patch pockets. The relaxed body falls into a broad, nearly level hem in the prepared frame.",
    movement:
      "An authored side view shows the open hem shifting outward. Real fluidity and breathability cannot be established from the fixture.",
    surface:
      "A textured plain weave, raised patch-pocket edges and visible creases appear in the prepared close-up; tactile feel remains unknown.",
    hero: true,
  }),
  fixture({
    id: "petal-tee",
    name: "Petal Cotton Tee",
    category: "Tops",
    price: 18,
    size: "S",
    color: "Dusty pink",
    background: "#f0e1e3",
    seller: "Elena",
    condition: "Good · faint collar wear",
    description:
      "A dusty-pink tee with short sleeves and an easy round neckline. The collar edge shows faint wear. Composition, exact feel and stretch are unknown.",
    measurements: { chest: 46, length: 57, sleeve: 18 },
    drape:
      "The straight body ends in a level hem, with two small folds visible below the armholes.",
    surface:
      "Fine jersey-like lines and a faintly worn collar edge appear in the prepared detail; other wear is unknown.",
  }),
  fixture({
    id: "sunday-denim",
    name: "Sunday Straight Denim",
    category: "Bottoms",
    price: 42,
    size: "M",
    color: "Washed blue",
    background: "#dce7ed",
    seller: "Noor",
    condition: "Good · faded knee panels",
    description:
      "Washed-blue denim with straight legs and a high waistband. Faded knees and contrast stitching give it a lived-in look. Waist, inseam and fibre content are unknown.",
    measurements: { length: 98 },
    drape:
      "The legs hold a straight outline with angular folds below the waistband and near the hems.",
    surface:
      "Diagonal weave lines, faded knee panels and contrast stitching are visible in the prepared detail.",
  }),
  fixture({
    id: "ink-trousers",
    name: "Ink Pleated Trousers",
    category: "Bottoms",
    price: 44,
    size: "L",
    color: "Charcoal",
    background: "#e5e3df",
    seller: "Robin",
    condition: "Very good · minor hem rub",
    description:
      "Charcoal trousers with front pleats and gently tapered legs. A small pale rub appears at the right hem. Waist and inseam measurements are unavailable.",
    measurements: { length: 102 },
    drape:
      "Front pleats continue into long vertical folds; the narrower hems gather slightly inward.",
    surface:
      "The prepared detail shows a close plain weave and a small pale rub at the right hem.",
  }),
  fixture({
    id: "apricot-slip",
    name: "Apricot Slip Dress",
    category: "Dresses",
    price: 52,
    size: "S",
    color: "Soft apricot",
    background: "#efe1d7",
    seller: "Lina",
    condition: "Very good · tiny strap crease",
    description:
      "An apricot slip dress with narrow straps, a gentle flare and a directional sheen. One strap has a tiny crease. Lining, daylight opacity and exact softness are unknown.",
    measurements: { chest: 43, length: 109 },
    drape:
      "Narrow diagonal folds run from the bust toward a gently flared, curved hem.",
    surface:
      "A smooth-looking face with a directional sheen and a tiny strap crease is visible in the authored detail.",
  }),
  fixture({
    id: "tide-shirt",
    name: "Tide Stripe Shirt",
    category: "Shirts",
    price: 36,
    size: "M",
    color: "Sea blue stripe",
    background: "#e0e8e9",
    seller: "Sam",
    condition: "Good · slight collar fading",
    description:
      "A sea-blue striped shirt with a pointed collar, button front and rounded hem. The collar edge is slightly faded. Fibre composition and laundering history are unknown.",
    measurements: { chest: 54, length: 69, sleeve: 58 },
    drape:
      "The placket stays straight while soft side folds lead toward a rounded shirt-tail hem.",
    surface:
      "Narrow blue stripes and slight fading along the collar edge are visible in the prepared close-up.",
  }),
  fixture({
    id: "oat-vest",
    name: "Oat Knit Vest",
    category: "Knitwear",
    price: 29,
    size: "M",
    color: "Oat beige",
    background: "#ebe5d8",
    seller: "Kit",
    condition: "Good · small knit snag",
    description:
      "An oat-beige knit vest with a V-neck and ribbed edges. A small snag sits near the lower edge. Warmth and elasticity are unverified.",
    measurements: { chest: 50, length: 55 },
    drape:
      "The sleeveless body keeps a compact, square outline; the ribbed hem turns gently inward.",
    surface:
      "Knit loops, ribbed edging and a small snag at the lower edge are visible in the authored close-up.",
    stretch:
      "Ribbing is visible, but no controlled stretch or recovery test is supplied.",
  }),
  fixture({
    id: "lilac-wrap",
    name: "Lilac Wrap Top",
    category: "Tops",
    price: 58,
    size: "L",
    color: "Lilac",
    background: "#e6e0ec",
    seller: "Tessa",
    condition: "Very good · faint tie crease",
    description:
      "A lilac wrap top with a diagonal front fold, short sleeves and a side tie. A faint crease runs across the tie. Opacity, fibre composition and exact feel are unknown.",
    measurements: { chest: 53, length: 60, sleeve: 31 },
    drape:
      "The wrap overlap creates a diagonal front fold that meets a side tie above the short, gently curved hem.",
    surface:
      "A fine plain-looking face and a faint crease across the waist tie appear in the prepared detail.",
  }),
  fixture({
    id: "rose-jacket",
    name: "Rose Chore Jacket",
    category: "Outerwear",
    price: 64,
    size: "M",
    color: "Dusty rose",
    background: "#eee1dd",
    seller: "Bea",
    condition: "Good · cuff edge wear",
    description:
      "A dusty-rose chore jacket with a collar, button front, patch pockets and roomy sleeves. Light wear appears at the cuffs. Lining, water resistance and hidden seam damage are unknown.",
    measurements: { chest: 56, length: 56, sleeve: 57 },
    drape:
      "The cropped body keeps a structured outline, with angular folds at the elbows and a nearly level hem.",
    surface:
      "Matte woven panels, button edges, patch-pocket stitching and light abrasion at the cuff edge are visible in the prepared detail.",
  }),
  fixture({
    id: "sage-skirt",
    name: "Sage Midi Skirt",
    category: "Bottoms",
    price: 34,
    size: "S",
    color: "Sage green",
    background: "#e6eadf",
    seller: "Nell",
    condition: "Very good · light waistband creasing",
    description:
      "A sage midi skirt with a gathered waistband and a broad, gently waved hem. Light creasing appears at the waist. Waist circumference, lining and stretch are unknown.",
    measurements: { length: 78 },
    drape:
      "Gathered waist folds open into a broad A-line silhouette and a slightly waved hem.",
    surface:
      "Fine woven lines and light creasing near the waistband appear in the prepared detail.",
  }),
];
export const REFERENCE: Listing = fixture({
  id: "my-blue-blouse",
  name: "My blue blouse",
  category: "Tops",
  price: 30,
  size: "M",
  color: "Cornflower blue",
  background: "#e0e9ef",
  seller: "You · private reference",
  condition: "Private · your familiar garment",
  description:
    "Your cornflower-blue blouse, with a round neckline, gathered front and short sleeves. A lightly creased cuff is visible. Keep it private as the familiar side of a comparison.",
  measurements: { chest: 51, length: 61, sleeve: 31 },
  drape:
    "Vertical front folds and a softly curved hem appear in the prepared full-garment frame.",
  movement:
    "The authored side sequence illustrates a loose hem moving outward. Real movement during wear cannot be verified from the fixture.",
  surface:
    "A plain-looking weave and a lightly creased cuff appear in the prepared reference detail.",
  hero: true,
});
const ids = new Set(CATALOG.map((listing) => listing.id));
const categories: Listing["category"][] = [
  "Tops",
  "Knitwear",
  "Shirts",
  "Bottoms",
  "Dresses",
  "Outerwear",
];
const statuses: ReviewStatus[] = [
  "unreviewed",
  "confirmed",
  "corrected",
  "unsure",
];
const orderStatuses: OrderStatus[] = [
  "reserved",
  "confirmed",
  "packed",
  "shipped",
  "delivered",
  "cancelled",
  "expired",
  "disputed",
];
const lifecycle: OrderStatus[] = [
  "reserved",
  "confirmed",
  "packed",
  "shipped",
  "delivered",
];
const isPrice = (value: unknown): value is number =>
  typeof value === "number" &&
  Number.isFinite(value) &&
  value >= 1 &&
  value <= 9999;
const isSize = (value: unknown): value is Listing["size"] =>
  value === "S" || value === "M" || value === "L";
const cleanText = (value: unknown, max: number): string | undefined =>
  typeof value === "string" &&
  value.trim().length > 0 &&
  value.trim().length <= max
    ? value.trim()
    : undefined;
const record = (value: unknown): Record<string, unknown> | undefined =>
  value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined;
const uniqueIds = (value: unknown): string[] =>
  Array.isArray(value)
    ? [
        ...new Set(
          value.filter(
            (id): id is string => typeof id === "string" && ids.has(id),
          ),
        ),
      ]
    : [];

function orderItemSnapshots(
  value: unknown,
  items: string[],
  total: number,
): readonly OrderItemSnapshot[] | undefined {
  if (!Array.isArray(value) || value.length !== items.length) return undefined;
  const snapshots: OrderItemSnapshot[] = [];
  for (let i = 0; i < items.length; i++) {
    const item = record(value[i]),
      name = cleanText(item?.name, 100),
      condition = cleanText(item?.condition, 200);
    if (
      !item ||
      item.id !== items[i] ||
      !name ||
      !condition ||
      !isPrice(item.price) ||
      !isSize(item.size) ||
      item.poster !== `/posters/${items[i]}.svg`
    )
      return undefined;
    snapshots.push(
      Object.freeze({
        id: items[i],
        name,
        price: item.price,
        size: item.size,
        poster: item.poster,
        condition,
      }),
    );
  }
  if (
    Math.round(
      (snapshots.reduce((sum, item) => sum + item.price, 0) + SHIPPING) * 100,
    ) !== Math.round(total * 100)
  )
    return undefined;
  return Object.freeze(snapshots);
}
function comparisonContext(
  value: unknown,
  previous: ComparisonContext,
): ComparisonContext {
  const input = record(value);
  if (!input) return { ...previous };
  const comparison = { ...previous };
  if (typeof input.listingId === "string" && ids.has(input.listingId))
    comparison.listingId = input.listingId;
  if (PROPERTIES.includes(input.property as Property))
    comparison.property = input.property as Property;
  if (input.size === "All" || isSize(input.size)) comparison.size = input.size;
  if (
    input.category === "All" ||
    categories.includes(input.category as Listing["category"])
  )
    comparison.category = input.category as ComparisonContext["category"];
  return comparison;
}
export function initialState(): AppState {
  const cloud = CATALOG[0];
  return {
    version: 1,
    saved: [],
    bag: [],
    checkoutMode: "bag",
    availability: Object.fromEntries(CATALOG.map((x) => [x.id, "active"])),
    selectedReference: REFERENCE.id,
    privateReferenceName: REFERENCE.name,
    referenceAvailable: true,
    comparison: { property: "Drape", size: "All", category: "All" },
    captureStage: 0,
    captureComplete: false,
    decisions: {},
    published: false,
    draft: {
      name: cloud.name,
      price: cloud.price,
      size: cloud.size,
      description: cloud.description,
    },
    orders: [],
    guided: false,
    paymentError: false,
  };
}
export function getListing(state: AppState, id: string): Listing | undefined {
  if (id === REFERENCE.id)
    return state.referenceAvailable
      ? { ...REFERENCE, name: state.privateReferenceName }
      : undefined;
  if (state.availability[id] === "removed") return undefined;
  const listing = CATALOG.find((x) => x.id === id);
  const snapshot = state.publishedSnapshot;
  if (!listing || id !== "cloud-poplin" || !snapshot) return listing;
  return {
    ...listing,
    ...snapshot.draft,
    evidence: listing.evidence.map((e) => {
      const decision = snapshot.decisions[e.property];
      if (!decision) return e;
      return {
        ...e,
        originalSupport: e.support,
        sellerStatus: decision.status,
        support:
          decision.status === "unsure" && e.support !== "unavailable"
            ? "limited"
            : e.support,
        ...(decision.status === "corrected"
          ? { correctionNote: decision.note }
          : {}),
      };
    }),
  };
}
export function allListings(state: AppState): Listing[] {
  return CATALOG.map((x) => getListing(state, x.id)).filter(
    (listing): listing is Listing => listing !== undefined,
  );
}
const canPublish = (state: AppState) =>
  state.captureComplete &&
  state.captureStage === 6 &&
  PROPERTIES.every((p) => {
    const d = state.decisions[p];
    return (
      d &&
      d.status !== "unreviewed" &&
      (d.status !== "corrected" || !!d.note.trim())
    );
  });
function copyPublishedSnapshot(
  state: Pick<AppState, "draft" | "decisions">,
): PublishedSnapshot {
  return {
    draft: { ...state.draft },
    decisions: Object.fromEntries(
      PROPERTIES.map((p) => [p, { ...state.decisions[p] }]),
    ),
  };
}
/** Public snapshots require a complete valid draft and a decision for every source property. */
function validatedSnapshot(value: unknown): PublishedSnapshot | undefined {
  const snapshot = record(value),
    draft = record(snapshot?.draft),
    rawDecisions = record(snapshot?.decisions);
  const name = cleanText(draft?.name, 100);
  if (
    !draft ||
    !name ||
    !isPrice(draft.price) ||
    !isSize(draft.size) ||
    typeof draft.description !== "string" ||
    draft.description.trim().length > 2000 ||
    !rawDecisions
  )
    return undefined;
  const decisions: AppState["decisions"] = {};
  for (const property of PROPERTIES) {
    const d = record(rawDecisions[property]);
    if (
      !d ||
      !statuses.includes(d.status as ReviewStatus) ||
      d.status === "unreviewed" ||
      typeof d.note !== "string" ||
      d.note.trim().length > 2000 ||
      (d.status === "corrected" && !d.note.trim())
    )
      return undefined;
    decisions[property] = {
      status: d.status as ReviewStatus,
      note: d.note.trim(),
    };
  }
  return {
    draft: {
      name,
      price: draft.price,
      size: draft.size,
      description: draft.description.trim(),
    },
    decisions,
  };
}
const retakeProperties: Record<number, Property[]> = {
  0: PROPERTIES,
  1: ["Stretch"],
  2: [],
  3: ["Surface"],
  4: ["Drape", "Movement"],
  5: ["Surface"],
};
function updateOrder(
  state: AppState,
  order: Order,
  updated: Order,
  availability = state.availability,
): AppState {
  return {
    ...state,
    orders: state.orders.map((x) => (x.id === order.id ? updated : x)),
    availability,
  };
}
export function transition(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SAVE":
      return ids.has(action.id)
        ? {
            ...state,
            saved: state.saved.includes(action.id)
              ? state.saved.filter((x) => x !== action.id)
              : [...state.saved, action.id],
          }
        : state;
    case "BAG_ADD": {
      if (!ids.has(action.id) || state.availability[action.id] !== "active")
        return state;
      const bagState = bagCheckoutState(state);
      return state.bag.includes(action.id)
        ? bagState
        : { ...bagState, bag: [...state.bag, action.id], paymentError: false };
    }
    case "BUY_NOW":
      return ids.has(action.id) && state.availability[action.id] === "active"
        ? {
            ...state,
            checkoutMode: "buy-now",
            buyNowId: action.id,
            paymentError: false,
          }
        : state;
    case "BAG_VIEW":
      return bagCheckoutState(state);
    case "LISTING_PAUSE":
    case "LISTING_REMOVE":
    case "LISTING_RESUME": {
      if (action.id !== "cloud-poplin") return state;
      const current = state.availability[action.id];
      const allowed =
        action.type === "LISTING_PAUSE"
          ? current === "active"
          : action.type === "LISTING_REMOVE"
            ? current === "active" || current === "paused"
            : current === "paused" || current === "removed";
      if (!allowed) return state;
      const status: Availability =
        action.type === "LISTING_PAUSE"
          ? "paused"
          : action.type === "LISTING_REMOVE"
            ? "removed"
            : "active";
      return {
        ...state,
        availability: { ...state.availability, [action.id]: status },
      };
    }
    case "COMPARISON": {
      const comparison = comparisonContext(action.comparison, state.comparison);
      return comparison.listingId !== state.comparison.listingId ||
        comparison.property !== state.comparison.property ||
        comparison.size !== state.comparison.size ||
        comparison.category !== state.comparison.category
        ? { ...state, comparison }
        : state;
    }
    case "BAG_REMOVE":
      return state.bag.includes(action.id)
        ? {
            ...state,
            bag: state.bag.filter((x) => x !== action.id),
            paymentError: false,
          }
        : state;
    case "REFERENCE":
      return getListing(state, action.id) &&
        action.id !== state.selectedReference
        ? { ...state, selectedReference: action.id }
        : state;
    case "REFERENCE_RENAME": {
      const name = cleanText(action.name, 100);
      return state.referenceAvailable &&
        name &&
        name !== state.privateReferenceName
        ? { ...state, privateReferenceName: name }
        : state;
    }
    case "REFERENCE_DELETE":
      return state.referenceAvailable
        ? { ...state, referenceAvailable: false, selectedReference: "" }
        : state;
    case "REFERENCE_RESTORE":
      return !state.referenceAvailable
        ? {
            ...state,
            referenceAvailable: true,
            privateReferenceName: REFERENCE.name,
            selectedReference: REFERENCE.id,
          }
        : state;
    case "CAPTURE_NEXT": {
      if (state.captureStage >= 6) return state;
      const stage = state.captureStage + 1;
      return { ...state, captureStage: stage, captureComplete: stage === 6 };
    }
    case "CAPTURE_BACK":
      return state.captureStage > 0
        ? {
            ...state,
            captureStage: state.captureStage - 1,
            captureComplete: false,
            published: false,
          }
        : state;
    case "CAPTURE_RETAKE": {
      if (
        !Number.isInteger(action.stage) ||
        action.stage < 0 ||
        action.stage > 5
      )
        return state;
      const decisions = { ...state.decisions };
      for (const p of retakeProperties[action.stage]) delete decisions[p];
      return {
        ...state,
        captureStage: action.stage,
        captureComplete: false,
        decisions,
        published: false,
      };
    }
    case "DECIDE": {
      if (
        !state.captureComplete ||
        !PROPERTIES.includes(action.property) ||
        !statuses.includes(action.status)
      )
        return state;
      const note = typeof action.note === "string" ? action.note.trim() : "";
      if (note.length > 2000 || (action.status === "corrected" && !note))
        return state;
      return {
        ...state,
        decisions: {
          ...state.decisions,
          [action.property]: { status: action.status, note },
        },
        published: false,
      };
    }
    case "PUBLISH":
      return canPublish(state) && !state.published
        ? {
            ...state,
            published: true,
            publishedSnapshot: copyPublishedSnapshot(state),
          }
        : state;
    case "DRAFT": {
      const draft = { ...state.draft };
      const name = cleanText(action.draft.name, 100);
      if (name) draft.name = name;
      if (isPrice(action.draft.price)) draft.price = action.draft.price;
      if (isSize(action.draft.size)) draft.size = action.draft.size;
      if (
        typeof action.draft.description === "string" &&
        action.draft.description.trim().length <= 2000
      )
        draft.description = action.draft.description.trim();
      return Object.keys(draft).some(
        (k) =>
          draft[k as keyof typeof draft] !==
          state.draft[k as keyof typeof draft],
      )
        ? { ...state, draft, published: false }
        : state;
    }
    case "CHECKOUT": {
      const items = checkoutItems(state);
      if (
        !items.length ||
        items.some((id) => !ids.has(id) || state.availability[id] !== "active")
      )
        return state;
      if (action.payment === "declined")
        return { ...state, paymentError: true };
      if (action.payment !== "success") return state;
      const availability = { ...state.availability };
      for (const id of items) availability[id] = "reserved";
      const itemSnapshots = Object.freeze(
        items.map((id) => {
          const listing = getListing(state, id)!;
          return Object.freeze({
            id,
            name: listing.name,
            price: listing.price,
            size: listing.size,
            poster: listing.poster,
            condition: listing.condition,
          });
        }),
      );
      let sequence = state.orders.length + 1;
      const existingOrderIds = new Set(state.orders.map((order) => order.id));
      while (existingOrderIds.has(`FAM-${String(sequence).padStart(4, "0")}`))
        sequence++;
      const order: Order = {
        id: `FAM-${String(sequence).padStart(4, "0")}`,
        items: [...items],
        itemSnapshots,
        total:
          Math.round(
            (itemSnapshots.reduce((total, item) => total + item.price, 0) +
              SHIPPING) *
              100,
          ) / 100,
        status: "reserved",
        createdAt: new Date(
          Date.UTC(2026, 9, 13, 12, sequence - 1),
        ).toISOString(),
      };
      return {
        ...bagCheckoutState(state),
        bag: state.bag.filter((id) => !items.includes(id)),
        availability,
        orders: [...state.orders, order],
        paymentError: false,
      };
    }
    case "ORDER_ADVANCE": {
      const order = state.orders.find((x) => x.id === action.id);
      if (!order) return state;
      const index = lifecycle.indexOf(order.status);
      if (index < 0 || index === lifecycle.length - 1) return state;
      const availability = { ...state.availability };
      for (const id of order.items) availability[id] = "sold";
      return updateOrder(
        state,
        order,
        { ...order, status: lifecycle[index + 1] },
        availability,
      );
    }
    case "ORDER_CANCEL":
    case "ORDER_EXPIRE": {
      const order = state.orders.find((x) => x.id === action.id);
      if (!order || !["reserved", "confirmed"].includes(order.status))
        return state;
      const availability = { ...state.availability };
      for (const id of order.items) availability[id] = "active";
      return updateOrder(
        state,
        order,
        {
          ...order,
          status: action.type === "ORDER_CANCEL" ? "cancelled" : "expired",
        },
        availability,
      );
    }
    case "ORDER_DISPUTE": {
      const order = state.orders.find((x) => x.id === action.id);
      const note = cleanText(action.note, 2000);
      return order?.status === "delivered" && note
        ? updateOrder(state, order, {
            ...order,
            status: "disputed",
            disputeNote: note,
          })
        : state;
    }
    case "ORDER_FEEDBACK": {
      const order = state.orders.find((x) => x.id === action.id);
      const note = typeof action.note === "string" ? action.note.trim() : "";
      return order?.status === "delivered" &&
        ["as-expected", "different"].includes(action.fit) &&
        note.length <= 2000
        ? updateOrder(state, order, {
            ...order,
            feedback: { fit: action.fit, note },
          })
        : state;
    }
    case "GUIDE":
      return typeof action.value === "boolean" && action.value !== state.guided
        ? { ...state, guided: action.value }
        : state;
    case "RESET":
      return initialState();
    default:
      return state;
  }
}

/** Recorded discovery orders are authored examples grounded in the supplied source silhouettes/weaves. */
export const MATCH_DISCOVERY_ORDER: Record<Property, readonly string[]> = {
  Drape: ["cloud-poplin", "airloom-linen", "moss-knit"],
  Movement: ["airloom-linen", "cloud-poplin", "moss-knit"],
  Stretch: ["moss-knit", "oat-vest"],
  Surface: ["cloud-poplin", "airloom-linen", "petal-tee"],
};
const discoveryBasis: Record<Property, string> = {
  Drape:
    "Source silhouettes: structured blouse, relaxed overshirt, then open knit.",
  Movement:
    "Limited source sequences: relaxed overshirt, structured blouse, then open knit. Movement during wear remains unverified.",
  Stretch:
    "Limited source details: ribbed cardigan, then ribbed vest. Rib structure does not establish stretch or recovery.",
  Surface:
    "Source weave details: fine plain weave, textured plain weave, then fine jersey-like lines.",
};
/** Focus changes candidate discovery, while evidence always stays in Drape/Movement/Stretch/Surface order. */
export function rankMatches(
  state: AppState,
  reference: Listing,
  property?: Property,
  filters: MatchFilters = {},
): MatchResult[] {
  const focus: Property =
    property && PROPERTIES.includes(property) ? property : "Drape";
  const priority = MATCH_DISCOVERY_ORDER[focus];
  const sequence = [
    ...priority,
    ...CATALOG.map((x) => x.id).filter((id) => !priority.includes(id)),
  ];
  const evidenceFor = (listing: Listing, p: Property) =>
    listing.evidence.find((e) => e.property === p);
  return allListings(state)
    .filter(
      (x) =>
        x.id !== reference.id &&
        state.availability[x.id] === "active" &&
        (!filters.size || filters.size === "All" || x.size === filters.size) &&
        (!filters.category ||
          filters.category === "All" ||
          x.category === filters.category),
    )
    .sort((a, b) => sequence.indexOf(a.id) - sequence.indexOf(b.id))
    .slice(0, 3)
    .map((listing) => ({
      listing,
      discoveryKind: "authored-fixture-order",
      discoveryReason: `${discoveryBasis[focus]} ${priority.includes(listing.id) ? "This candidate appears in the recorded priority sequence." : "Remaining candidates follow catalog order after the priority sequence."} Active inventory and filters determine eligibility; comparisons use source frames.`,
      properties: PROPERTIES.map((p) => {
        const candidate = evidenceFor(listing, p),
          familiar = evidenceFor(reference, p);
        const support: Support =
          !candidate ||
          !familiar ||
          candidate.support === "unavailable" ||
          familiar.support === "unavailable"
            ? "unavailable"
            : candidate.support === "limited" || familiar.support === "limited"
              ? "limited"
              : "supported";
        const evidenceCount = support === "unavailable" ? 0 : 2;
        const explanation =
          support === "unavailable"
            ? `A property comparison is unavailable: ${!familiar || familiar.support === "unavailable" ? "the reference" : "the candidate"} source lacks supported ${p.toLowerCase()} evidence. No material behaviour is inferred.`
            : `${support === "limited" ? "Limited source comparison" : "Visible source comparison"}: ${listing.name} — ${candidate!.observation} Reference — ${familiar!.observation} Two prepared frames; this does not establish feel or fit.`;
        return { property: p, support, explanation, evidenceCount };
      }),
    }));
}
export function money(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

/** Accept only known schema values. Orphan reservations recover to active; sold inventory remains conservative. */
export function sanitizeStoredState(value: unknown): AppState {
  const raw = record(value),
    base = initialState();
  if (!raw || raw.version !== 1) return base;
  const availability = { ...base.availability };
  const rawAvailability = record(raw.availability);
  for (const id of ids)
    if (rawAvailability?.[id] === "sold") availability[id] = "sold";
  if (
    rawAvailability?.["cloud-poplin"] === "paused" ||
    rawAvailability?.["cloud-poplin"] === "removed"
  )
    availability["cloud-poplin"] = rawAvailability["cloud-poplin"];
  const orders: Order[] = [];
  const orderIds = new Set<string>(),
    claimed = new Set<string>();
  if (Array.isArray(raw.orders))
    for (const item of raw.orders.slice(0, 500)) {
      const order = record(item);
      if (!order) continue;
      const id = cleanText(order.id, 100),
        items = uniqueIds(order.items),
        status = order.status as OrderStatus;
      if (
        !id ||
        orderIds.has(id) ||
        !items.length ||
        !Array.isArray(order.items) ||
        items.length !== order.items.length ||
        !orderStatuses.includes(status) ||
        typeof order.total !== "number" ||
        !Number.isFinite(order.total) ||
        order.total <= 0 ||
        order.total > 120000 ||
        typeof order.createdAt !== "string" ||
        !Number.isFinite(Date.parse(order.createdAt))
      )
        continue;
      const occupying = !["cancelled", "expired"].includes(status);
      if (occupying && items.some((id) => claimed.has(id))) continue;
      const disputeNote = cleanText(order.disputeNote, 2000);
      if (status === "disputed" && !disputeNote) continue;
      const output: Order = {
        id,
        items,
        total: order.total,
        status,
        createdAt: order.createdAt,
      };
      if (disputeNote) output.disputeNote = disputeNote;
      const snapshots = orderItemSnapshots(
        order.itemSnapshots,
        items,
        order.total,
      );
      if (snapshots) output.itemSnapshots = snapshots;
      const feedback = record(order.feedback);
      if (
        feedback &&
        (feedback.fit === "as-expected" || feedback.fit === "different") &&
        typeof feedback.note === "string" &&
        feedback.note.trim().length <= 2000 &&
        (status === "delivered" || status === "disputed")
      )
        output.feedback = { fit: feedback.fit, note: feedback.note.trim() };
      orders.push(output);
      orderIds.add(id);
      if (occupying)
        for (const id of items) {
          claimed.add(id);
          availability[id] = status === "reserved" ? "reserved" : "sold";
        }
    }
  const captureStage =
    typeof raw.captureStage === "number" &&
    Number.isInteger(raw.captureStage) &&
    raw.captureStage >= 0 &&
    raw.captureStage <= 6
      ? raw.captureStage
      : 0;
  const captureComplete = captureStage === 6 && raw.captureComplete === true;
  const decisions: AppState["decisions"] = {};
  const rawDecisions = record(raw.decisions);
  for (const p of PROPERTIES) {
    const d = record(rawDecisions?.[p]);
    if (
      !d ||
      !statuses.includes(d.status as ReviewStatus) ||
      typeof d.note !== "string" ||
      d.note.trim().length > 2000 ||
      (d.status === "corrected" && !d.note.trim())
    )
      continue;
    decisions[p] = { status: d.status as ReviewStatus, note: d.note.trim() };
  }
  const rawDraft = record(raw.draft),
    draft = { ...base.draft };
  const name = cleanText(rawDraft?.name, 100);
  if (name) draft.name = name;
  if (isPrice(rawDraft?.price)) draft.price = rawDraft.price;
  if (isSize(rawDraft?.size)) draft.size = rawDraft.size;
  if (
    typeof rawDraft?.description === "string" &&
    rawDraft.description.trim().length <= 2000
  )
    draft.description = rawDraft.description.trim();
  const referenceAvailable = raw.referenceAvailable !== false;
  const selectedReference =
    typeof raw.selectedReference === "string" &&
    (ids.has(raw.selectedReference) ||
      (raw.selectedReference === REFERENCE.id && referenceAvailable))
      ? raw.selectedReference
      : referenceAvailable
        ? REFERENCE.id
        : "";
  const state: AppState = {
    ...base,
    comparison: comparisonContext(raw.comparison, base.comparison),
    saved: uniqueIds(raw.saved),
    bag: uniqueIds(raw.bag).filter((id) => availability[id] === "active"),
    availability,
    orders,
    captureStage,
    captureComplete,
    decisions,
    draft,
    referenceAvailable,
    selectedReference,
    privateReferenceName:
      cleanText(raw.privateReferenceName, 100) ?? base.privateReferenceName,
    guided: raw.guided === true,
    paymentError: raw.paymentError === true,
    published: false,
  };
  if (
    raw.checkoutMode === "buy-now" &&
    typeof raw.buyNowId === "string" &&
    ids.has(raw.buyNowId) &&
    availability[raw.buyNowId] === "active"
  ) {
    state.checkoutMode = "buy-now";
    state.buyNowId = raw.buyNowId;
  }
  const snapshot = validatedSnapshot(raw.publishedSnapshot);
  if (snapshot) state.publishedSnapshot = snapshot;
  const currentSnapshot = validatedSnapshot({
    draft: raw.draft,
    decisions: raw.decisions,
  });
  state.published =
    raw.published === true &&
    canPublish(state) &&
    !!currentSnapshot &&
    (!snapshot || JSON.stringify(snapshot) === JSON.stringify(currentSnapshot));
  if (state.published && !snapshot) state.publishedSnapshot = currentSnapshot;
  return state;
}

export function checkoutItems(state: AppState): string[] {
  if (state.checkoutMode === "buy-now")
    return state.buyNowId &&
      ids.has(state.buyNowId) &&
      state.availability[state.buyNowId] === "active"
      ? [state.buyNowId]
      : [];
  return [...state.bag];
}
function bagCheckoutState(state: AppState): AppState {
  if (state.checkoutMode === "bag" && state.buyNowId === undefined)
    return state;
  const { buyNowId: _discard, ...rest } = state;
  return { ...rest, checkoutMode: "bag", paymentError: false };
}
