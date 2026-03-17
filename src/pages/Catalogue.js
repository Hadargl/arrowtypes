import { useState } from "react";
import { Link } from "react-router-dom";
import arrowTypes from "../data/arrowTypes";
import {
  CLASSIFICATIONS,
  CLASSIFICATION_ORDER,
  DEFAULT_SORT,
  getClassification,
  sortByClassification,
} from "../config/classifications";

const SORT_DIRECTIONS = { asc: "asc", desc: "desc" };

function SortIndicator({ active, direction }) {
  if (!active) return <span style={{ color: "#ddd", marginLeft: 4 }}>↕</span>;
  return (
    <span style={{ marginLeft: 4 }}>
      {direction === "asc" ? "↑" : "↓"}
    </span>
  );
}

function CatalogueTable({ types, sortKey, sortDir, onSort }) {
  const thStyle = (key) => ({
    padding: "6px 12px 6px 0",
    color: sortKey === key ? "#111" : "#888",
    fontWeight: sortKey === key ? "bold" : "normal",
    fontSize: 11,
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
  });

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, tableLayout: "fixed" }}>
      <colgroup>
        <col style={{ width: "4%" }} />
        {CLASSIFICATION_ORDER.map((key) => (
          <col key={key} style={{ width: key === DEFAULT_SORT ? "10%" : "10%" }} />
        ))}
        <col style={{ width: "24%" }} />
        <col style={{ width: "22%" }} />
        <col style={{ width: "18%" }} />
        <col style={{ width: "8%" }} />
      </colgroup>
      <thead>
        <tr style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>
          <th style={{ ...thStyle(null), cursor: "default" }}>#</th>
          {CLASSIFICATION_ORDER.map((key) => (
            <th
              key={key}
              style={thStyle(key)}
              onClick={() => onSort(key)}
            >
              {CLASSIFICATIONS[key].label.toUpperCase()}
              <SortIndicator active={sortKey === key} direction={sortDir} />
            </th>
          ))}
          <th style={{ ...thStyle(null), cursor: "default" }}>NAME</th>
          <th
            style={thStyle("period")}
            onClick={() => onSort("period")}
          >
            PERIOD
            <SortIndicator active={sortKey === "period"} direction={sortDir} />
          </th>
          <th
            style={thStyle("function")}
            onClick={() => onSort("function")}
          >
            FUNCTION
            <SortIndicator active={sortKey === "function"} direction={sortDir} />
          </th>
          <th style={{ ...thStyle(null), cursor: "default" }} />
        </tr>
      </thead>
      <tbody>
        {types.map((t) => (
          <tr key={t.id} style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "7px 12px 7px 0", color: "#bbb" }}>
              {String(t.id).padStart(2, "0")}
            </td>
            {CLASSIFICATION_ORDER.map((key, i) => (
              <td key={key} style={{ padding: "7px 12px 7px 0", fontWeight: "bold" }}>
                {i === 0 ? (
                  // Primary classification — always a link
                  <Link
                    to={`/type/${t.id}`}
                    style={{ color: "#111", textDecoration: "none" }}
                  >
                    {getClassification(t, key)}
                  </Link>
                ) : (
                  // Secondary classifications — plain text
                  <span style={{ color: getClassification(t, key) === "—" ? "#ccc" : "#111" }}>
                    {getClassification(t, key)}
                  </span>
                )}
              </td>
            ))}
            <td style={{ padding: "7px 12px 7px 0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {t.name || "—"}
            </td>
            <td style={{ padding: "7px 12px 7px 0", color: "#777", fontSize: 12 }}>
              {t.period || "—"}
            </td>
            <td style={{ padding: "7px 12px 7px 0", color: "#777", fontSize: 12 }}>
              {t.function || "—"}
            </td>
            <td style={{ padding: "7px 12px 7px 0" }}>
              <Link to={`/type/${t.id}`} style={{ fontSize: 12, color: "#111", textDecoration: "none" }}>
                View →
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Catalogue() {
  const [sortKey, setSortKey] = useState(DEFAULT_SORT);
  const [sortDir, setSortDir] = useState(SORT_DIRECTIONS.asc);

  function handleSort(key) {
    if (key === sortKey) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir(SORT_DIRECTIONS.asc);
    }
  }

  const sorted = (() => {
    // For classification keys, use the config helper
    if (CLASSIFICATION_ORDER.includes(sortKey)) {
      const result = sortByClassification(arrowTypes, sortKey);
      return sortDir === "desc" ? result.reverse() : result;
    }
    // For plain string fields (period, function)
    return [...arrowTypes].sort((a, b) => {
      const aVal = a[sortKey] ?? "";
      const bVal = b[sortKey] ?? "";
      const cmp = aVal.localeCompare(bVal, undefined, { numeric: true, sensitivity: "base" });
      return sortDir === "desc" ? -cmp : cmp;
    });
  })();

  const primaryLabel = CLASSIFICATIONS[DEFAULT_SORT].fullLabel;
  const citationYear = "1940";

  return (
    <div style={{ maxWidth: 1040, margin: "60px auto", padding: "0 24px", fontFamily: "monospace" }}>

      <div style={{ marginBottom: 24 }}>
        <Link to="/" style={{ fontSize: 12, color: "#555", textDecoration: "none" }}>← Home</Link>
      </div>

      <h1 style={{ margin: "0 0 8px" }}>Catalogue</h1>
      <p style={{ margin: "0 0 4px", color: "#555", fontSize: 13 }}>
        {arrowTypes.length} types · classified by {primaryLabel} ({citationYear})
      </p>
      <p style={{ margin: "0 0 40px", color: "#999", fontSize: 12 }}>
        Click any column header to sort. LMMC is the primary classification.
        Jessop references are provided for cross-referencing only.
      </p>

      <CatalogueTable
        types={sorted}
        sortKey={sortKey}
        sortDir={sortDir}
        onSort={handleSort}
      />

      <div style={{ marginTop: 48, borderTop: "1px solid #eee", paddingTop: 24 }}>
        <p style={{ fontSize: 11, color: "#aaa", margin: "0 0 4px" }}>
          Primary: Ward-Perkins, J.B. (1940). <em>London Museum Medieval Catalogue</em>.
        </p>
        <p style={{ fontSize: 11, color: "#aaa", margin: 0 }}>
          Cross-reference: Jessop, O. (1996). 'A new artefact typology for the study of medieval arrowheads.'{" "}
          <em>Medieval Archaeology</em> 40, 192–205.
        </p>
      </div>

    </div>
  );
}
