import { allListings, type AppState } from "./domain";
export function visibleListings(
  state: AppState,
  filters: { query: string; category: string; size: string; saved: boolean },
) {
  const explicitSize = filters.query
    .match(/\bsize\s+([sml])\b/i)?.[1]
    .toUpperCase();
  const query = filters.query
    .replace(/\bsize\s+[sml]\b/gi, "")
    .trim()
    .toLowerCase();
  const tokens = query
    .split(/\s+/)
    .filter(Boolean)
    .filter((x) => !["a", "the", "in", "with"].includes(x));
  return allListings(state).filter(
    (item) =>
      tokens.every((token) =>
        [item.name, item.category, item.color, item.seller, item.description]
          .join(" ")
          .toLowerCase()
          .includes(token),
      ) &&
      (filters.category === "All" || item.category === filters.category) &&
      (filters.size === "All" || item.size === filters.size) &&
      (!explicitSize || item.size === explicitSize) &&
      (!filters.saved || state.saved.includes(item.id)),
  );
}
