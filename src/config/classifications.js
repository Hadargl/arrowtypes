// ─────────────────────────────────────────────────────────────────────────────
// classifications.js
//
// Single source of truth for all classification systems used on the site.
// To add a new system: add an entry to CLASSIFICATIONS, add its key to
// CLASSIFICATION_ORDER, and populate the key in arrowTypes.js entries.
// No other code changes required.
// ─────────────────────────────────────────────────────────────────────────────

// Metadata for each known classification system.
export const CLASSIFICATIONS = {
  lmmc: {
    key: "lmmc",
    label: "LMMC",
    fullLabel: "London Museum Medieval Catalogue",
    citation: "Ward-Perkins, J.B. (1940). London Museum Medieval Catalogue.",
  },
  jessop: {
    key: "jessop",
    label: "Jessop",
    fullLabel: "Jessop (1996)",
    citation: "Jessop, O. (1996). 'A new artefact typology for the study of medieval arrowheads.' Medieval Archaeology 40, 192–205.",
  },
  // To add a future system, uncomment and populate:
  // hannan: {
  //   key: "hannan",
  //   label: "Hannan",
  //   fullLabel: "Hannan (forthcoming)",
  //   citation: "Hannan, ... (forthcoming).",
  // },
};

// The primary classification — drives headings, SEO titles, and default sort.
export const PRIMARY_CLASSIFICATION = "lmmc";

// Column order in the catalogue table. Primary should always be first.
export const CLASSIFICATION_ORDER = ["lmmc", "jessop"];

// Default sort key for the catalogue.
export const DEFAULT_SORT = "lmmc";

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns the display value for a given classification key on an entry.
 * Falls back to "—" if null or missing.
 */
export function getClassification(entry, key) {
  return entry.classifications?.[key] ?? "—";
}

/**
 * Returns the primary classification value for an entry.
 */
export function getPrimary(entry) {
  return getClassification(entry, PRIMARY_CLASSIFICATION);
}

/**
 * Sorts an array of arrowType entries by a given classification key.
 * Null / missing values sort to the bottom.
 * Uses numeric-aware locale compare so "Type 9" < "Type 10".
 */
export function sortByClassification(entries, key = DEFAULT_SORT) {
  return [...entries].sort((a, b) => {
    const aVal = a.classifications?.[key] ?? null;
    const bVal = b.classifications?.[key] ?? null;
    if (aVal === null && bVal === null) return 0;
    if (aVal === null) return 1;
    if (bVal === null) return -1;
    return aVal.localeCompare(bVal, undefined, { numeric: true, sensitivity: "base" });
  });
}
