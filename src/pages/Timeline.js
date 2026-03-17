import { useEffect } from "react";
import { Link } from "react-router-dom";
import arrowTypes from "../data/arrowTypes";
import { getPrimary, CLASSIFICATIONS, PRIMARY_CLASSIFICATION } from "../config/classifications";


const CENTURIES = [900, 1000, 1100, 1200, 1300, 1400, 1500, 1600];
const EARLIEST = 900;
const LATEST = 1600;
const RANGE = LATEST - EARLIEST;
const LABEL_WIDTH = 64;

export default function Timeline() {
  useEffect(() => {
    document.title = "Timeline | Medieval Arrowheads";
  }, []);

  const timedTypes = arrowTypes.filter((t) => t.yearStart && t.yearEnd);
  const primaryMeta = CLASSIFICATIONS[PRIMARY_CLASSIFICATION];

  return (
    <div style={{ maxWidth: 900, margin: "60px auto", padding: "0 24px", fontFamily: "monospace" }}>

      <div style={{ marginBottom: 24 }}>
        <Link to="/" style={{ fontSize: 12, color: "#555", textDecoration: "none" }}>← Home</Link>
      </div>

      <h1>Timeline</h1>
      <p style={{ marginTop: 8, color: "#555", fontSize: 13, marginBottom: 40 }}>
        Approximate date ranges · 9th–16th century · classified by {primaryMeta.fullLabel}
      </p>

      {/* Century headers */}
      <div style={{ display: "flex", paddingLeft: LABEL_WIDTH, marginBottom: 4 }}>
        {CENTURIES.map((y, i) => (
          <div key={y} style={{
            flex: i === CENTURIES.length - 1 ? 0 : 1,
            fontSize: 10,
            color: "#bbb",
            letterSpacing: "0.08em",
          }}>
            {y}
          </div>
        ))}
      </div>

      {/* Chart */}
      <div style={{ position: "relative" }}>

        {/* Grid lines */}
        <div style={{ position: "absolute", left: LABEL_WIDTH, right: 0, top: 0, bottom: 0, display: "flex", pointerEvents: "none" }}>
          {CENTURIES.map((y, i) => (
            <div key={y} style={{
              flex: i === CENTURIES.length - 1 ? 0 : 1,
              borderLeft: "1px solid #f0f0f0",
              height: "100%",
            }} />
          ))}
          <div style={{ borderLeft: "1px solid #f0f0f0", height: "100%" }} />
        </div>

        {timedTypes.map((t) => {
          const left  = ((t.yearStart - EARLIEST) / RANGE) * 100;
          const width = ((t.yearEnd - t.yearStart) / RANGE) * 100;
          const color = "#999999";
          const displayLabel = getPrimary(t) !== "—" ? getPrimary(t) : `#${t.id}`;

          return (
            <Link key={t.id} to={`/type/${t.id}`} style={{ textDecoration: "none", display: "block" }}>
              <div style={{ display: "flex", alignItems: "center", height: 22, marginBottom: 3 }}>
                <div style={{
                  width: LABEL_WIDTH,
                  fontSize: 10,
                  color: "#888",
                  textAlign: "right",
                  paddingRight: 10,
                  flexShrink: 0,
                  letterSpacing: "0.05em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}>
                  {displayLabel}
                </div>
                <div style={{ flex: 1, position: "relative", height: 12 }}>
                  <div
                    style={{
                      position: "absolute",
                      left: `${left}%`,
                      width: `${Math.max(width, 1)}%`,
                      height: "100%",
                      background: `linear-gradient(to right, transparent, ${color} 10%, ${color} 90%, transparent)`,
                      transition: "opacity 0.1s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.5"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>


      <p style={{ marginTop: 32, fontSize: 11, color: "#aaa", lineHeight: 1.7 }}>
        Date ranges are approximate and draw on estimates from two sources:{" "}
        Ward-Perkins, J.B. (1940). <em>London Museum Medieval Catalogue</em>;{" "}
        and Jessop, O. (1996). 'A new artefact typology for the study of medieval arrowheads.'{" "}
        <em>Medieval Archaeology</em> 40, 192–205.{" "}
        Where the two sources conflict, Ward-Perkins is treated as primary.
      </p>

    </div>
  );
}