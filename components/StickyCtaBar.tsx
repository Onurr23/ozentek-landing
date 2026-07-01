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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.154 8.154 0 0 1 2.42 5.82c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32A8.188 8.188 0 0 1 3.8 11.91c.01-4.54 3.7-8.24 8.25-8.24zM8.53 7.33c-.16 0-.43.06-.66.31C7.65 7.9 7 8.5 7 9.71c0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.72.59.28 1.05.43 1.41.54.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.13-.18.24-.64.8-.78.96-.15.17-.29.19-.54.07-.25-.13-1.03-.39-1.97-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.12.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.3-.01-.47-.01z"/>
    </svg>
  );
}
