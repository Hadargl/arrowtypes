import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={{ maxWidth: 640, margin: "80px auto", padding: "0 24px", fontFamily: "monospace" }}>
      <h1>Medieval Arrowheads</h1>
      <p style={{ marginTop: 12, color: "#555" }}>
        A catalogue of medieval European iron arrowheads classified by the
        Jessop (1996) typology.
      </p>
      <p style={{ marginTop: 8, color: "#555" }}>
        This catalogue covers the 28 Jessop classifications. Each entry includes classification, dimensions,
        cross-section, hafting method, and findspot where known.
      </p>
      <div style={{ marginTop: 40 }}>
        <Link
          to="/catalogue"
          style={{
            display: "inline-block",
            padding: "12px 32px",
            background: "#111",
            color: "#fff",
            textDecoration: "none",
            fontSize: 14,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          View Catalogue →
        </Link>
      </div>
    </div>
  );
}
