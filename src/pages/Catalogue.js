import { Link } from "react-router-dom";
import arrowTypes from "../data/arrowTypes";

const groups = ["Tanged", "Multi-Purpose", "Military", "Hunting"];

const groupDescriptions = {
  "Tanged":        "Tang-hafted forms. Early types.",
  "Multi-Purpose": "Socketed forms with mixed hunting and military use, including practice heads.",
  "Military":      "Socketed warheads and armour-piercing forms.",
  "Hunting":       "Specialist hunting forms: forkers, broadheads, bird bolts.",
};

export default function Catalogue() {
  return (
    <div style={{ maxWidth: 860, margin: "60px auto", padding: "0 24px", fontFamily: "monospace" }}>

      <div style={{ marginBottom: 24 }}>
        <Link to="/" style={{ fontSize: 12, color: "#555", textDecoration: "none" }}>← Home</Link>
      </div>

      <h1>Catalogue</h1>
      <p style={{ marginTop: 8, color: "#555", fontSize: 13 }}>
        28 types · Jessop typology (1996)
      </p>

      {groups.map((group) => {
        const types = arrowTypes.filter((t) => t.group === group);
        return (
          <div key={group} style={{ marginTop: 48 }}>
            <div style={{ borderBottom: "2px solid #111", paddingBottom: 8, marginBottom: 4 }}>
              <h2 style={{ fontSize: 15, margin: 0 }}>{group}</h2>
            </div>
            <p style={{ fontSize: 12, color: "#777", margin: "6px 0 16px" }}>
              {groupDescriptions[group]}
            </p>

            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>
                  <th style={{ padding: "6px 12px 6px 0", color: "#888", fontWeight: "normal", fontSize: 11 }}>#</th>
                  <th style={{ padding: "6px 12px", color: "#888", fontWeight: "normal", fontSize: 11 }}>JESSOP</th>
                  <th style={{ padding: "6px 12px", color: "#888", fontWeight: "normal", fontSize: 11 }}>FEATURES</th>
                  <th style={{ padding: "6px 12px", color: "#888", fontWeight: "normal", fontSize: 11 }}>PERIOD</th>
                  <th style={{ padding: "6px 12px", color: "#888", fontWeight: "normal", fontSize: 11 }}>FUNCTION</th>
                  <th style={{ padding: "6px 12px", color: "#888", fontWeight: "normal", fontSize: 11 }}></th>
                </tr>
              </thead>
              <tbody>
                {types.map((t) => (
                  <tr key={t.id} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "7px 12px 7px 0", color: "#bbb" }}>{String(t.id).padStart(2, "0")}</td>
                    <td style={{ padding: "7px 12px", fontWeight: "bold" }}>
                      <Link to={`/type/${t.id}`} style={{ color: "#111", textDecoration: "none" }}>{t.jessop}</Link>
                    </td>
                    <td style={{ padding: "7px 12px" }}>{t.name}</td>
                    <td style={{ padding: "7px 12px", color: "#777", fontSize: 12 }}>{t.period}</td>
                    <td style={{ padding: "7px 12px", color: "#777", fontSize: 12 }}>{t.function}</td>
                    <td style={{ padding: "7px 12px" }}>
                      <Link to={`/type/${t.id}`} style={{ fontSize: 12, color: "#111", textDecoration: "none" }}>
                        View →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
