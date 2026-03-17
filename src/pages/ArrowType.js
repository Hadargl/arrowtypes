import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import arrowTypes from "../data/arrowTypes";
import "./ArrowType.css";

const label = {
  fontSize: 10,
  fontWeight: "bold",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#888",
  marginBottom: 4,
};

const value = {
  fontSize: 14,
  color: "#111",
  marginBottom: 20,
};

function Field({ l, v }) {
  if (!v) return null;
  return (
    <div>
      <div style={label}>{l}</div>
      <div style={value}>{v}</div>
    </div>
  );
}

function ArrowImage({ id, name }) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div style={{
        width: "100%",
        aspectRatio: "1 / 2.5",
        background: "#f5f5f5",
        border: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#bbb",
        fontSize: 11,
        letterSpacing: "0.08em",
        textAlign: "center",
        lineHeight: 1.8,
      }}>
        No image<br />available
      </div>
    );
  }

  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/${id}.png`}
      alt={name}
      onError={() => setMissing(true)}
      style={{
        width: "100%",
        display: "block",
        border: "1px solid #ddd",
      }}
    />
  );
}

export default function ArrowType() {
  const { id } = useParams();
  const type = arrowTypes.find((t) => t.id === parseInt(id));

  useEffect(() => {
    if (!type) return;
    const title = type.jessop || type.lmmc || `Entry ${type.id}`;
    document.title = `${title} — ${type.name} | Medieval Arrowheads`;
    document.querySelector('meta[name="description"]')
      ?.setAttribute("content", `${title} ${type.name}. ${type.description || ""}`);
  }, [type]);

  if (!type) return (
    <div style={{ maxWidth: 640, margin: "80px auto", padding: "0 24px", fontFamily: "monospace" }}>
      <p>Type not found.</p>
      <Link to="/catalogue">← Back to catalogue</Link>
    </div>
  );

  const prev = arrowTypes.find((t) => t.id === type.id - 1);
  const next = arrowTypes.find((t) => t.id === type.id + 1);

  const displayTitle = type.jessop || type.lmmc || `Entry ${type.id}`;

  return (
    <div style={{ maxWidth: 860, margin: "60px auto", padding: "0 24px", fontFamily: "monospace" }}>

      <div style={{ marginBottom: 32, fontSize: 12, color: "#888", display: "flex", gap: 12 }}>
        <Link to="/" style={{ color: "#888", textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link to="/catalogue" style={{ color: "#888", textDecoration: "none" }}>Catalogue</Link>
        <span>/</span>
        <span style={{ color: "#111" }}>{displayTitle} — {type.name}</span>
      </div>

      <div style={{ borderBottom: "2px solid #111", paddingBottom: 20, marginBottom: 40 }}>
        <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "#888", marginBottom: 8 }}>
          {type.group ? type.group.toUpperCase() : "UNCLASSIFIED"} · RECORD {String(type.id).padStart(2, "0")} OF {arrowTypes.length}
        </div>
        <h1 style={{ fontSize: 28, fontWeight: "bold", margin: "0 0 12px" }}>
          {displayTitle} — {type.name}
        </h1>
        <div style={{ display: "flex", gap: 32, fontSize: 13, color: "#555", flexWrap: "wrap" }}>
          {type.function && <span><span style={{ color: "#888" }}>Function: </span>{type.function}</span>}
          {type.period && <span><span style={{ color: "#888" }}>Period: </span>{type.period}</span>}
        </div>
      </div>

      <div className="type-grid">

        <div>
          <div style={label}>Plan View</div>
          <ArrowImage key={type.id} id={type.id} name={type.name} />
          <div style={{ marginTop: 8, fontSize: 10, color: "#aaa", textAlign: "center" }}>
            {displayTitle}
          </div>
        </div>

        <div>
          {type.jessop && <Field l="Jessop Type" v={type.jessop} />}
          {type.lmmc && <Field l="LMMC" v={type.lmmc} />}
          <Field l="Group" v={type.group} />
          <Field l="Function" v={type.function} />
          <Field l="Date Range" v={type.period} />
          <Field l="Description" v={type.description} />

          {type.lengthMin && (
            <>
              <div style={label}>Dimensions</div>
              <div style={{ ...value, display: "flex", gap: 40 }}>
                <div>
                  <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>Length</div>
                  <div>{type.lengthMin}–{type.lengthMax} mm</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>Width</div>
                  <div>{type.widthMin}–{type.widthMax} mm</div>
                </div>
              </div>
            </>
          )}

          <Field l="Cross Section" v={type.section} />
          <Field l="Hafting" v={type.hafting} />
        </div>
      </div>

      <div style={{
        marginTop: 64,
        paddingTop: 24,
        borderTop: "1px solid #e0e0e0",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 13,
      }}>
        <div>
          {prev && (
            <Link to={`/type/${prev.id}`} style={{ color: "#111", textDecoration: "none" }}>
              ← {prev.jessop || prev.lmmc || `Entry ${prev.id}`} {prev.name}
            </Link>
          )}
        </div>
        <Link to="/catalogue" style={{ color: "#888", textDecoration: "none", fontSize: 12 }}>
          All types
        </Link>
        <div>
          {next && (
            <Link to={`/type/${next.id}`} style={{ color: "#111", textDecoration: "none" }}>
              {next.jessop || next.lmmc || `Entry ${next.id}`} {next.name} →
            </Link>
          )}
        </div>
      </div>

    </div>
  );
}
