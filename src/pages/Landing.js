import { useEffect } from "react";
import { Link } from "react-router-dom";
import arrowTypes from "../data/arrowTypes";

export default function Landing() {
  useEffect(() => {
    document.title = "Medieval Arrowheads | LMMC Typology Catalogue";
    document.querySelector('meta[name="description"]')
      ?.setAttribute("content", "A catalogue of medieval European arrowheads classified by the London Museum Medieval Catalogue (Ward-Perkins, 1940). Browse 21 types with descriptions, dimensions, and date ranges.");

    // Preload images
    arrowTypes.forEach((t) => {
      const img = new Image();
      img.src = `${process.env.PUBLIC_URL}/images/${t.id}.png`;
    });
  }, []);

  return (
    <div style={{ maxWidth: 640, margin: "80px auto", padding: "0 24px", fontFamily: "monospace" }}>
      <h1>Medieval Arrowheads</h1>
      <p style={{ marginTop: 12, color: "#555" }}>
        A catalogue of medieval European arrowheads classified by the London
        Museum Medieval Catalogue (Ward-Perkins, 1940).
      </p>
      <p style={{ marginTop: 8, color: "#555" }}>
        {arrowTypes.length} types covering socketed and tanged forms from the
        9th to 16th century. Each entry includes classification, description,
        dimensions, cross-section, and hafting method. Jessop (1996) references
        are provided for cross-referencing.
      </p>
      <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
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
        <Link
          to="/timeline"
          style={{
            display: "inline-block",
            padding: "12px 32px",
            background: "#fff",
            color: "#111",
            textDecoration: "none",
            fontSize: 14,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            border: "1px solid #111",
          }}
        >
          Timeline →
        </Link>
      </div>
      <div style={{ marginTop: 60, paddingTop: 40, borderTop: "1px solid #eee" }}>
        <p style={{ fontSize: 13, color: "#555" }}>
          Have information to contribute, a correction, or a question?
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

      <div style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid #eee" }}>
        <p style={{ fontSize: 11, color: "#aaa", lineHeight: 1.6 }}>
          Primary: Ward-Perkins, J.B. (1940). <em>London Museum Medieval Catalogue</em>.<br />
          Cross-reference: Jessop, O. (1996). <em>Medieval Archaeology</em> 40, 192–205.
        </p>
      </div>
    </div>
  );
}