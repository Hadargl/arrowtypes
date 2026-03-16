import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={{ maxWidth: 640, margin: "80px auto", padding: "0 24px", fontFamily: "monospace" }}>
      <h1>European Iron Arrowheads</h1>
      <p style={{ marginTop: 12, color: "#555" }}>
        A catalogue of medieval European iron arrowheads classified by the
        Jessop (1996) typology.
      </p>
      <p style={{ marginTop: 8, color: "#555" }}>
        Covers 28 Jessop classifications. Each entry includes classification, dimensions,
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

      <div style={{ marginTop: 60, paddingTop: 40, borderTop: "1px solid #eee" }}>
        <p style={{ fontSize: 13, color: "#555" }}>
          Have informatiob to contribute, a correction, or a question?
        </p>
        <a
          href="mailto:arrowtypeswebsite@gmail.com"
          style={{
            display: "inline-block",
            marginTop: 12,
            fontSize: 13,
            color: "#111",
            textDecoration: "none",
            borderBottom: "1px solid #111",
          }}
        >
          Get in touch →
        </a>
      </div>
    </div>
  );
}
