export default function HeroSection() {
  return (
    <section
      id="top"
      style={{ background: "#141414", color: "#ffffff", padding: "48px 20px 40px" }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* Location badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid #FFCD11",
            color: "#FFCD11",
            font: "700 12px/1 'Barlow', sans-serif",
            textTransform: "uppercase",
            letterSpacing: ".1em",
            padding: "8px 16px",
          }}
        >
          Ankara · Kahramankazan (Kazan)
        </div>

        <h1
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(30px, 7vw, 58px)",
            fontWeight: 700,
            lineHeight: 1.08,
            textTransform: "uppercase",
            margin: 0,
            letterSpacing: ".005em",
          }}
        >
          Ankara&apos;da İş Makinelerinize{" "}
          <span style={{ color: "#FFCD11" }}>Güvenilir</span> Tamir, Bakım ve
          Onarım
        </h1>

        <p
          style={{
            font: "400 17px/1.6 'Barlow', sans-serif",
            color: "#D9D7D2",
            maxWidth: 620,
            margin: 0,
          }}
        >
          Ekskavatör, yükleyici ve tüm iş makinelerinizde arıza tespiti,
          periyodik bakım ve yerinde saha servisi. Hızlı çözüm, garantili
          işçilik.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            justifyContent: "center",
            marginTop: 6,
            width: "100%",
            maxWidth: 480,
          }}
        >
          <a
            href="tel:+905550000000"
            style={{
              flex: 1,
              minWidth: 210,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background: "#FFCD11",
              color: "#141414",
              font: "700 18px/1 'Oswald', sans-serif",
              textTransform: "uppercase",
              letterSpacing: ".02em",
              padding: "18px 20px",
              textDecoration: "none",
            }}
          >
            <PhoneIcon />
            Hemen Ara
          </a>
          <a
            href="https://wa.me/905550000000?text=Merhaba%2C%20Ozentek%20Guc%20Sistemleri%2C%20is%20makinem%20icin%20bilgi%20almak%20istiyorum."
            style={{
              flex: 1,
              minWidth: 210,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background: "transparent",
              color: "#ffffff",
              border: "2px solid #ffffff",
              font: "700 18px/1 'Oswald', sans-serif",
              textTransform: "uppercase",
              letterSpacing: ".02em",
              padding: "16px 20px",
              textDecoration: "none",
            }}
          >
            <WhatsAppIcon />
            WhatsApp&apos;tan Yaz
          </a>
        </div>

        <div
          style={{
            marginTop: 2,
            font: "700 24px/1 'Oswald', sans-serif",
            color: "#ffffff",
            letterSpacing: ".03em",
          }}
        >
          0555 000 00 00
        </div>
      </div>

      {/* Trust badges */}
      <div
        style={{
          maxWidth: 1000,
          margin: "36px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 18,
          borderTop: "1px solid rgba(255,255,255,.16)",
          paddingTop: 26,
        }}
      >
        {[
          "Yılların Tecrübesi",
          "Yerinde Saha Servisi",
          "Garantili İşçilik",
          "Orijinal & Muadil Parça",
        ].map((badge) => (
          <div
            key={badge}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              textAlign: "center",
            }}
          >
            <CheckIcon />
            <span
              style={{ font: "600 13px/1.3 'Barlow', sans-serif", color: "#E7E5E0" }}
            >
              {badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFCD11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
