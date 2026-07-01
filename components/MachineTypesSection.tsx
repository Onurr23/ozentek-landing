const machines = [
  "Ekskavatör",
  "Yükleyici",
  "Beko-Loder",
  "Greyder",
  "Silindir",
  "Forklift",
  "Dozer",
];

export default function MachineTypesSection() {
  return (
    <section style={{ background: "#F4F3F0", padding: "40px 20px" }}>
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
          Servis Verdiğimiz Makine Tipleri
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {machines.map((m) => (
            <span
              key={m}
              style={{
                background: "#141414",
                color: "#FFCD11",
                font: "700 13px/1 'Oswald', sans-serif",
                textTransform: "uppercase",
                letterSpacing: ".03em",
                padding: "11px 20px",
              }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
