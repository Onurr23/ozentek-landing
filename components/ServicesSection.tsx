const services = [
  {
    title: "Tamir & Onarım",
    desc: "Motor, şanzıman ve tüm aksamlarda uzman onarım.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />
      </svg>
    ),
  },
  {
    title: "Periyodik Bakım",
    desc: "Yağ, filtre ve kontrolle arızadan önce koruma.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2s7 7.58 7 12a7 7 0 0 1-14 0c0-4.42 7-12 7-12z" />
      </svg>
    ),
  },
  {
    title: "Arıza Tespiti",
    desc: "Dijital diagnostikle hızlı ve kesin teşhis.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Hidrolik Sistem",
    desc: "Pompa, valf ve silindir tamir/revizyonu.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    title: "Motor & Şanzıman",
    desc: "Rektifiye, revizyon ve komple değişim.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Saha Servisi",
    desc: "Makineniz sahada mı? Ekibimiz yerinde müdahale eder.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Yedek Parça",
    desc: "Orijinal ve muadil yedek parça tedariği.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section
      id="hizmetler"
      style={{ background: "#ffffff", padding: "60px 20px" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 36px" }}>
          <SectionLabel>Hizmetlerimiz</SectionLabel>
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(26px, 5vw, 40px)",
              fontWeight: 700,
              lineHeight: 1.12,
              textTransform: "uppercase",
              color: "#141414",
              margin: "12px 0 10px",
            }}
          >
            Uçtan Uca İş Makinesi Servisi
          </h2>
          <p style={{ color: "#5B5B57", font: "400 16px/1.6 'Barlow', sans-serif", margin: 0 }}>
            Arızadan bakıma, saha servisinden yedek parçaya kadar tek adres.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 2,
            background: "#141414",
            border: "2px solid #141414",
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: "#ffffff",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  background: "#FFCD11",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "none",
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  font: "600 19px/1.2 'Oswald', sans-serif",
                  textTransform: "uppercase",
                  color: "#141414",
                  margin: 0,
                }}
              >
                {s.title}
              </h3>
              <p style={{ font: "400 14.5px/1.55 'Barlow', sans-serif", color: "#5B5B57", margin: 0 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </div>
  );
}
