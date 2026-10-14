import { allListings, type AppState, type Listing, type Property } from "./domain";

/** Qualitative prepared profiles, not measured textile mechanics. */
export interface FabricProfile {
  material: string;
  materialSource: string;
  construction: string;
  summary: string;
  drape: number;
  movement?: number;
  surface: number;
  structure: number;
  stretch?: number;
  observations: Record<Property, string>;
}
export interface FeelPreferences {
  query: string;
  likes: string[];
  dislikes: string[];
  priority: Property;
}
export const FEEL_CHOICES = [
  "Smooth surface", "Crisp structure", "Relaxed drape", "Textured finish", "Some give",
] as const;
export const FEEL_DEFAULTS: FeelPreferences = { query: "", likes: ["Smooth surface"], dislikes: [], priority: "Drape" };

const profiles: Record<string, FabricProfile> = {
  "my-blue-blouse": profile("Cotton blouse", "A familiar, lightly structured woven blouse.", .40, .40, .24, .56),
  "cloud-poplin": profile("Cotton poplin", "Crisp woven fabric with a clean, structured fall.", .24, .30, .18, .84),
  "moss-knit": profile("Knit fabric; fibre content not recorded", "A relaxed knit with visible loops and ribbed edges.", .76, .66, .86, .20),
  "airloom-linen": profile("Linen-style weave; fibre content not recorded", "A relaxed woven shape with visible texture and creases.", .64, .60, .62, .36),
  "petal-tee": profile("Cotton jersey, seller description", "An easy jersey-like shape with a fine-looking surface.", .60, undefined, .36, .22),
  "sunday-denim": profile("Denim; fibre content not recorded", "A firm twill-looking fabric with faded areas.", .16, undefined, .72, .90),
  "ink-trousers": profile("Woven fabric; fibre content not recorded", "Long pleats and a close-looking woven surface.", .48, undefined, .24, .56),
  "apricot-slip": profile("Satin-like surface; fibre content not recorded", "A fluid-looking shape with directional sheen.", .88, undefined, .12, .10),
  "tide-shirt": profile("Woven shirt; fibre content not recorded", "Loose side folds with a relatively smooth-looking surface.", .48, .48, .26, .54),
  "oat-vest": profile("Knit fabric; fibre content not recorded", "Visible knit loops with a compact, ribbed shape.", .50, undefined, .82, .46),
  "lilac-wrap": profile("Woven fabric; fibre content not recorded", "Diagonal folds and a smooth-looking face.", .72, undefined, .26, .30),
  "rose-jacket": profile("Woven jacket; fibre content not recorded", "A structured outline with matte woven panels.", .18, undefined, .52, .86),
  "sage-skirt": profile("Woven fabric; fibre content not recorded", "Gathered folds open into a gently waved hem.", .78, undefined, .36, .30),
};
// Prepared qualitative declarations, not a measured elasticity or image inference.
const declaredGive: Record<string, number> = { "my-blue-blouse": .08, "cloud-poplin": .08, "moss-knit": .68, "airloom-linen": .12, "petal-tee": .42, "tide-shirt": .14, "oat-vest": .58, "lilac-wrap": .18 };
for (const [id, value] of Object.entries(declaredGive)) {
  profiles[id].stretch = value;
  profiles[id].observations.Stretch = value > .4 ? "Some give, according to the prepared seller description. Return after stretching has not been measured." : "Little give, according to the prepared seller description. Return after stretching has not been measured.";
}
function profile(material: string, summary: string, drape: number, movement: number | undefined, surface: number, structure: number): FabricProfile {
  return {
    material,
    materialSource: "Prepared seller description; check the label photograph where supplied",
    construction: surface > .7 ? "Visible knit or twill texture" : "Fine-looking woven or jersey surface",
    summary, drape, movement, surface, structure,
    observations: {
      Drape: drape > .6 ? "Looser folds and a relaxed hanging shape." : drape < .3 ? "A straighter outline that holds its shape." : "Gentle folds with some visible structure.",
      Movement: movement === undefined ? "Not recorded" : "A prepared guided sequence shows the hem changing position. Movement when worn is not recorded.",
      Stretch: "Not recorded. A pull-and-release sequence is needed to compare give and recovery.",
      Surface: surface > .7 ? "Raised texture is visible in the prepared garment views." : surface > .45 ? "Visible weave and creasing add surface texture." : "The surface looks fine and relatively smooth in the prepared views.",
    },
  };
}
export function fabricProfile(listing: Listing): FabricProfile {
  const templateId = (listing as Listing & { templateId?: string }).templateId;
  const prepared = profiles[templateId || listing.id];
  if (prepared) return prepared;
  return { ...profile("Fibre content not recorded", "No prepared fabric profile is available for this garment.", .5, undefined, .5, .5), observations: { Drape: "Not recorded", Movement: "Not recorded", Stretch: "Not recorded", Surface: "Not recorded" } };
}
export function hasFabricProfile(listing: Listing): boolean { return !!profiles[(listing as Listing & { templateId?: string }).templateId || listing.id]; }

function garmentFamily(category: Listing["category"]) {
  return ["Tops", "Shirts", "Knitwear"].includes(category) ? "upper" : category;
}
export function compatibleGarments(reference: Listing, listing: Listing): boolean {
  return garmentFamily(reference.category) === garmentFamily(listing.category);
}
export function hasStretchDeclaration(listing: Listing): boolean {
  if (fabricProfile(listing).stretch === undefined) return false;
  // A newly recorded personal garment needs its own pull take before its template declaration is usable.
  return !listing.id.startsWith("private-") || listing.evidence.some(e => e.property === "Stretch" && e.support !== "unavailable");
}
export interface FeelMatch {
  listing: Listing;
  reason: string;
  differences: string[];
  profile: FabricProfile;
}
const propertyKey = { Drape: "drape", Movement: "movement", Stretch: "stretch", Surface: "surface" } as const;
function supported(reference: Listing, listing: Listing, property: Property) {
  if (property === "Stretch") return [reference, listing].every(hasStretchDeclaration);
  return [reference, listing].every(item => item.evidence.some(e => e.property === property && e.support !== "unavailable"));
}
function requestTargets(intent: FeelPreferences, reference: FabricProfile) {
  const targets = { drape: reference.drape, surface: reference.surface, structure: reference.structure, stretch: reference.stretch };
  const text = [intent.query, ...intent.likes].join(" ").toLowerCase();
  const avoid = intent.dislikes.join(" ").toLowerCase();
  if (/smooth|fine|silky/.test(text) || /textured|rough/.test(avoid)) targets.surface = .1;
  if (/textured|texture|ribbed|knit/.test(text) || /smooth/.test(avoid)) targets.surface = .86;
  if (/relaxed|flowy|flowing|fluid|soft|supple|loose|drapey/.test(text) || /crisp|stiff|structured/.test(avoid)) { targets.drape = .8; targets.structure = .2; }
  if (/crisp|structured|firm/.test(text) || /relaxed|floppy/.test(avoid)) { targets.structure = .9; targets.drape = .2; }
  if (/less (?:crisp|stiff|structured)|not (?:crisp|stiff|structured)/.test(text)) { targets.drape = .8; targets.structure = .2; }
  if (/give|stretch|elastic/.test(text)) targets.stretch = .7;
  if (/give|stretch|elastic/.test(avoid)) targets.stretch = .05;
  return targets;
}

export function passesFeelSearchFilters(listing: Listing, queryText: string, filters: { category: string; size: string }): boolean {
  const query = queryText.toLowerCase();
  const explicitSize = query.match(/\bsize\s+([sml])\b/i)?.[1]?.toUpperCase();
  const maxPrice = query.match(/\b(?:under|below|less than)\s*\$?\s*(\d+(?:\.\d+)?)/)?.[1];
  const ordinary = query
    .replace(/\bsize\s+[sml]\b/g, "")
    .replace(/\b(?:under|below|less than)\s*\$?\s*\d+(?:\.\d+)?/g, "")
    .replace(/\b(smooth(?:er)?|fine|silky|textured|texture|ribbed|knit|relaxed|flowy|flowing|fluid|soft(?:er|ness)?|supple|loose|drapey|crisp(?:er)?|structured|stiff(?:er)?|firm|give|stretch(?:y)?|elastic|similar|feeling|feel|like|to|my|a|the|and|with|some|fabric|surface|finish|structure|drape|less|more|not|but)\b/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/\s+/).filter(Boolean);
    if (filters.category !== "All" && listing.category !== filters.category) return false;
    if (filters.size !== "All" && listing.size !== filters.size) return false;
    if (explicitSize && listing.size !== explicitSize) return false;
    if (maxPrice && listing.price >= Number(maxPrice)) return false;
    const haystack = [listing.name, listing.category, listing.color, listing.description, listing.material, fabricProfile(listing).material].join(" ").toLowerCase();
    return ordinary.every(token => ["shirt", "blouse", "top"].includes(token) ? garmentFamily(listing.category) === "upper" : haystack.includes(token));
}

/** Searches ordinary constraints and then ranks only eligible, available compatible garments. */
export function findFeelMatches(state: AppState, reference: Listing, intent: FeelPreferences, filters: { category: string; size: string }, limit = 3): FeelMatch[] {
  const refProfile = fabricProfile(reference);
  const key = propertyKey[intent.priority];
  if (!hasFabricProfile(reference) || !supported(reference, reference, intent.priority) || refProfile[key] === undefined) return [];
  const targets = requestTargets(intent, refProfile);
  const ranked = allListings(state).filter(listing => {
    if (!hasFabricProfile(listing) || (state.availability[listing.id] || "active") !== "active" || !compatibleGarments(reference, listing)) return false;
    if (!passesFeelSearchFilters(listing, intent.query, filters)) return false;
    return supported(reference, listing, intent.priority) && fabricProfile(listing)[key] !== undefined;
  }).map(listing => {
    const p = fabricProfile(listing);
    let distance = Math.abs(p.drape - targets.drape) * (intent.priority === "Drape" ? 3 : 1) + Math.abs(p.surface - targets.surface) * (intent.priority === "Surface" ? 3 : 1) + Math.abs(p.structure - targets.structure) * 1.6;
    if (intent.priority === "Movement" && p.movement !== undefined && refProfile.movement !== undefined) distance += Math.abs(p.movement - refProfile.movement) * 3;
    if (p.stretch !== undefined && targets.stretch !== undefined) distance += Math.abs(p.stretch - targets.stretch) * (intent.priority === "Stretch" ? 3 : 1);
    const chosen = [...intent.likes, ...intent.dislikes.map(x => `less ${x.toLowerCase()}`)];
    const reason = chosen.length ? `Suggested for ${chosen.slice(0, 2).join(" and ").toLowerCase()}.` : `A similar ${intent.priority.toLowerCase()} direction to your familiar garment.`;
    const differences = [p.summary, listing.condition];
    return { listing, profile: p, reason, differences, distance };
  }).sort((a, b) => a.distance - b.distance || a.listing.id.localeCompare(b.listing.id));
  return ranked.slice(0, limit).map(({ distance: _distance, ...result }) => result);
}

export type MeasurementKey = "chest" | "length" | "shoulder" | "sleeve";
export const MEASUREMENT_LABELS: Record<MeasurementKey, string> = { chest: "Chest width", length: "Length", shoulder: "Shoulder width", sleeve: "Sleeve length" };
export function measurementDifference(reference: Listing, listing: Listing, key: MeasurementKey): { reference?: number; candidate?: number; delta?: number; text: string } {
  const a = (reference.measurements as Partial<Record<MeasurementKey, number>>)[key];
  const b = (listing.measurements as Partial<Record<MeasurementKey, number>>)[key];
  if (a === undefined || b === undefined) return { reference: a, candidate: b, text: "Not recorded" };
  const delta = Math.round((b - a) * 10) / 10;
  if (delta === 0) return { reference: a, candidate: b, delta, text: "Same measurement" };
  const dimension = key === "chest" || key === "shoulder" ? (delta > 0 ? "wider" : "narrower") : (delta > 0 ? "longer" : "shorter");
  return { reference: a, candidate: b, delta, text: `${Math.abs(delta)} cm ${dimension}` };
}
