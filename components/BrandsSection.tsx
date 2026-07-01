const brands = [
  "CAT", "Komatsu", "Volvo", "JCB", "Hitachi", "Hidromek",
  "Liebherr", "Doosan", "Hyundai", "Case", "New Holland", "Bobcat", "Yanmar",
];

export default function BrandsSection() {
  return (
    <section
      id="markalar"
      style={{
        background: "#ffffff",
        padding: "44px 20px",
        borderTop: "1px solid #E3E1DB",
        borderBottom: "1px solid #E3E1DB",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", textAlign: "center" }}>
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
          Servis Verdiğimiz Markalar
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px 40px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 26,
          }}
        >
          {brands.map((b) => (
            <span
              key={b}
              style={{
                font: "700 22px/1 'Oswald', sans-serif",
                textTransform: "uppercase",
                letterSpacing: ".04em",
                color: "#141414",
                opacity: 0.6,
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
