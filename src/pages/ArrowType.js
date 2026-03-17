import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import arrowTypes from "../data/arrowTypes";
import {
  CLASSIFICATIONS,
  CLASSIFICATION_ORDER,
  PRIMARY_CLASSIFICATION,
  getClassification,
  getPrimary,
} from "../config/classifications";
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

function entryTitle(t) {
  // Primary classification label, e.g. "Type 1", falling back to site id
  return getPrimary(t) !== "—" ? getPrimary(t) : `Entry ${t.id}`;
}

export default function ArrowType() {
  const { id } = useParams();
  const type = arrowTypes.find((t) => t.id === parseInt(id));

  useEffect(() => {
    if (!type) return;
    const primary = entryTitle(type);
    document.title = `${primary} — ${type.name} | Medieval Arrowheads`;
    document.querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        `${primary} ${type.name}. ${type.description || ""}`
      );
  }, [type]);

  if (!type) return (
    <div style={{ maxWidth: 640, margin: "80px auto", padding: "0 24px", fontFamily: "monospace" }}>
      <p>Type not found.</p>
      <Link to="/catalogue">← Back to catalogue</Link>
    </div>
  );

  const prev = arrowTypes.find((t) => t.id === type.id - 1);
  const next = arrowTypes.find((t) => t.id === type.id + 1);

  const primaryLabel = CLASSIFICATIONS[PRIMARY_CLASSIFICATION].fullLabel;

  return (
    <div style={{ maxWidth: 860, margin: "60px auto", padding: "0 24px", fontFamily: "monospace" }}>

      {/* Breadcrumb */}
      <div style={{ marginBottom: 32, fontSize: 12, color: "#888", display: "flex", gap: 12 }}>
        <Link to="/" style={{ color: "#888", textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link to="/catalogue" style={{ color: "#888", textDecoration: "none" }}>Catalogue</Link>
        <span>/</span>
        <span style={{ color: "#111" }}>{entryTitle(type)} — {type.name}</span>
      </div>

      {/* Header */}
      <div style={{ borderBottom: "2px solid #111", paddingBottom: 20, marginBottom: 40 }}>
        <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "#888", marginBottom: 8 }}>
          {primaryLabel.toUpperCase()} · RECORD {String(type.id).padStart(2, "0")} OF {arrowTypes.length}
        </div>
        <h1 style={{ fontSize: 28, fontWeight: "bold", margin: "0 0 12px" }}>
          {entryTitle(type)} — {type.name}
        </h1>
        <div style={{ display: "flex", gap: 32, fontSize: 13, color: "#555", flexWrap: "wrap" }}>
          {type.function && <span><span style={{ color: "#888" }}>Function: </span>{type.function}</span>}
          {type.period && <span><span style={{ color: "#888" }}>Period: </span>{type.period}</span>}
        </div>
      </div>

      {/* Main grid */}
      <div className="type-grid">

        {/* Image column */}
        <div>
          <div style={label}>Plan View</div>
          <ArrowImage key={type.id} id={type.id} name={type.name} />
          <div style={{ marginTop: 8, fontSize: 10, color: "#aaa", textAlign: "center" }}>
            {entryTitle(type)}
          </div>
        </div>

        {/* Detail column */}
        <div>

          {/* Classifications block — rendered from config, primary first */}
          {CLASSIFICATION_ORDER.map((key) => {
            const val = getClassification(type, key);
            if (val === "—") return null;
            const isPrimary = key === PRIMARY_CLASSIFICATION;
            return (
              <div key={key}>
                <div style={label}>
                  {CLASSIFICATIONS[key].fullLabel}
                  {isPrimary && (
                    <span style={{ marginLeft: 6, color: "#bbb", fontWeight: "normal", letterSpacing: 0, textTransform: "none", fontSize: 9 }}>
                      primary
                    </span>
                  )}
                </div>
                <div style={{ ...value, fontWeight: isPrimary ? "bold" : "normal" }}>
                  {val}
                </div>
              </div>
            );
          })}

          <Field l="Function" v={type.function} />
          <Field l="Date Range" v={type.period} />
          <Field l="Description" v={type.description} />

          {type.lengthMin && (
            <>
              <div style={label}>Dimensions</div>
              <div style={{ ...value, display: "flex", gap: 40 }}>
                <div>
                  <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>Length</div>
                  <div>
                    {type.lengthMin === type.lengthMax
                      ? `${type.lengthMin} mm`
                      : `${type.lengthMin}–${type.lengthMax} mm`}
                  </div>
                </div>
                {type.widthMin && (
                  <div>
                    <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>Width</div>
                    <div>
                      {type.widthMin === type.widthMax
                        ? `${type.widthMin} mm`
                        : `${type.widthMin}–${type.widthMax} mm`}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          <Field l="Cross Section" v={type.section} />
          <Field l="Hafting" v={type.hafting} />

          {/* Citation footer */}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #eee" }}>
            <div style={{ fontSize: 10, color: "#bbb", lineHeight: 1.6 }}>
              <div>Ward-Perkins, J.B. (1940). <em>London Museum Medieval Catalogue</em>. [primary]</div>
              <div>Jessop, O. (1996). <em>Medieval Archaeology</em> 40, 192–205. [cross-reference]</div>
            </div>
          </div>

        </div>
      </div>

      {/* Prev / Next navigation */}
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
              ← {entryTitle(prev)} {prev.name}
            </Link>
          )}
        </div>
        <Link to="/catalogue" style={{ color: "#888", textDecoration: "none", fontSize: 12 }}>
          All types
        </Link>
        <div>
          {next && (
            <Link to={`/type/${next.id}`} style={{ color: "#111", textDecoration: "none" }}>
              {entryTitle(next)} {next.name} →
            </Link>
          )}
        </div>
      </div>

    </div>
  );
}