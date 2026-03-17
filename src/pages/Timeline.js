import { useEffect } from "react";
import { Link } from "react-router-dom";
import arrowTypes from "../data/arrowTypes";

const GROUP_COLORS = {
  "Tanged":        "#aaaaaa",
  "Multi-Purpose": "#666666",
  "Military":      "#111111",
  "Hunting":       "#999999",
};

const CENTURIES = [900, 1000, 1100, 1200, 1300, 1400, 1500, 1600];
const EARLIEST = 900;
const LATEST = 1600;
const RANGE = LATEST - EARLIEST;
const LABEL_WIDTH = 52;

export default function Timeline() {
  useEffect(() => {
    document.title = "Timeline | Medieval Arrowheads";
  }, []);

  const timedTypes = arrowTypes.filter((t) => t.yearStart && t.yearEnd);

  return (
    <div style={{ maxWidth: 900, margin: "60px auto", padding: "0 24px", fontFamily: "monospace" }}>

      <div style={{ marginBottom: 24 }}>
        <Link to="/" style={{ fontSize: 12, color: "#555", textDecoration: "none" }}>← Home</Link>
      </div>

      <h1>Timeline</h1>
      <p style={{ marginTop: 8, color: "#555", fontSize: 13, marginBottom: 40 }}>
        Approximate date ranges · 9th–16th century
      </p>

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

      <div style={{ position: "relative" }}>

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
          const left = ((t.yearStart - EARLIEST) / RANGE) * 100;
          const width = ((t.yearEnd - t.yearStart) / RANGE) * 100;
          const color = GROUP_COLORS[t.group] || "#bbbbbb";
          const displayLabel = t.jessop || t.lmmc || `#${t.id}`;

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
                }}>
                  {displayLabel}
                </div>
                <div style={{ flex: 1, position: "relative", height: 12 }}>
                  <div style={{
                    position: "absolute",
                    left: `${left}%`,
                    width: `${Math.max(width, 1)}%`,
                    height: "100%",
                    background: `linear-gradient(to right, transparent, ${color} 10%, ${color} 90%, transparent)`,
                    transition: "opacity 0.1s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "0.5"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid #eee", display: "flex", gap: 24, flexWrap: "wrap" }}>
        {Object.entries(GROUP_COLORS).map(([group, color]) => (
          <div key={group} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "#555" }}>
            <div style={{
              width: 32,
              height: 10,
              background: `linear-gradient(to right, transparent, ${color} 20%, ${color} 80%, transparent)`,
            }} />
            {group}
          </div>
        ))}
      </div>

      <p style={{ marginTop: 32, fontSize: 11, color: "#aaa" }}>
        Date ranges are approximate. Based on Jessop 1996.
      </p>

    </div>
  );
}
