const reasons = [
  {
    title: "Hızlı Müdahale",
    desc: "Arama sonrası en kısa sürede sahaya çıkıyoruz. Makineniz beklemez, biz de beklettirmeyiz.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFCD11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Yerinde Saha Servisi",
    desc: "Servis aracımızla şantiyenize, tarlaya veya iş yerinize geliyoruz. Nakliye masrafı ve bekleme yok.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFCD11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Garantili İşçilik",
    desc: "Her tamir ve bakım işimiz işçilik garantisi kapsamındadır. Aynı arıza tekrarlarsa tekrar geliyoruz.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFCD11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Şeffaf Fiyatlandırma",
    desc: "İşe başlamadan önce fiyat veriyoruz. Sürpriz fatura yok, söz verdiğimiz fiyatla çıkıyoruz.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFCD11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41L11 22.83a2 2 0 0 1-2.83 0L2.41 17a2 2 0 0 1 0-2.83L12 5h8a2 2 0 0 1 2 2v6.41a2 2 0 0 1-.59 1.41z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
];

export default function WhyOzentekSection() {
  return (
    <section style={{ background: "#141414", color: "#ffffff", padding: "60px 20px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 40px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              font: "700 12px/1 'Barlow', sans-serif",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "#FFCD11",
            }}
          >
            <span style={{ width: 18, height: 3, background: "#FFCD11", display: "inline-block" }} />
            Neden Özentek
          </div>
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(26px, 5vw, 38px)",
              fontWeight: 700,
              lineHeight: 1.15,
              textTransform: "uppercase",
              color: "#ffffff",
              margin: "12px 0 0",
            }}
          >
            Sahada Güvenilir Çözüm Ortağınız
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 30,
          }}
        >
          {reasons.map((r) => (
            <div
              key={r.title}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  border: "2px solid #FFCD11",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {r.icon}
              </div>
              <h3
                style={{
                  font: "600 18px/1.2 'Oswald', sans-serif",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                {r.title}
              </h3>
              <p style={{ font: "400 14.5px/1.55 'Barlow', sans-serif", color: "#B9B6AF", margin: 0 }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
