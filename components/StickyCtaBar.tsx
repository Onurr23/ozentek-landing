export default function StickyCtaBar() {
  return (
    <>
      <div
        className="sticky-cta-bar"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 60,
          display: "flex",
          background: "#141414",
          borderTop: "3px solid #FFCD11",
        }}
      >
        <a
          href="tel:+905434721898"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: "#FFCD11",
            color: "#141414",
            font: "700 15px/1 'Oswald', sans-serif",
            textTransform: "uppercase",
            letterSpacing: ".02em",
            padding: "15px 8px",
            textDecoration: "none",
          }}
        >
          <PhoneIcon />
          Ara
        </a>
        <a
          href="https://wa.me/905434721898?text=Merhaba%2C%20Ozentek%20Guc%20Sistemleri%2C%20is%20makinem%20icin%20bilgi%20almak%20istiyorum."
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: "#141414",
            color: "#ffffff",
            borderLeft: "2px solid rgba(255,255,255,.15)",
            font: "700 15px/1 'Oswald', sans-serif",
            textTransform: "uppercase",
            letterSpacing: ".02em",
            padding: "15px 8px",
            textDecoration: "none",
          }}
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>

      <style>{`
        .sticky-cta-bar {
          display: none;
        }
        @media (max-width: 900px) {
          .sticky-cta-bar {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
