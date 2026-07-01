const regions = [
  "Kahramankazan",
  "Sincan",
  "Organize Sanayi Bölgeleri",
  "Şantiyeler",
];

export default function RegionSection() {
  return (
    <section
      id="bolge"
      style={{ background: "#F4F3F0", padding: "56px 20px" }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            font: "700 12px/1 'Barlow', sans-serif",
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "#141414",
          }}
        >
          <span style={{ width: 18, height: 3, background: "#FFCD11", display: "inline-block" }} />
          Hizmet Bölgesi
        </div>
        <h2
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(24px, 4.5vw, 34px)",
            fontWeight: 700,
            lineHeight: 1.2,
            textTransform: "uppercase",
            color: "#141414",
            margin: "12px 0 12px",
          }}
        >
          Ankara ve Çevresine Hızlı Ulaşım
        </h2>
        <p
          style={{
            font: "400 16px/1.6 'Barlow', sans-serif",
            color: "#5B5B57",
            margin: "0 0 24px",
          }}
        >
          Ankara ve çevresi — Kahramankazan, Sincan, organize sanayi bölgeleri ve şantiyeler.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {regions.map((r) => (
            <span
              key={r}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "#ffffff",
                border: "1px solid #141414",
                color: "#141414",
                font: "600 13px/1 'Barlow', sans-serif",
                textTransform: "uppercase",
                letterSpacing: ".03em",
                padding: "9px 16px",
              }}
            >
              <LocationIcon />
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
