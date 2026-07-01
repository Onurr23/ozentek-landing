import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="iletisim" style={{ background: "#ffffff", padding: "60px 20px" }}>
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
              color: "#141414",
            }}
          >
            <span style={{ width: 18, height: 3, background: "#FFCD11", display: "inline-block" }} />
            İletişim
          </div>
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(26px, 5vw, 38px)",
              fontWeight: 700,
              lineHeight: 1.15,
              textTransform: "uppercase",
              color: "#141414",
              margin: "12px 0 0",
            }}
          >
            Hemen Teklif Alın
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, 1fr) minmax(300px, 1.1fr)",
            gap: 36,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: contact cards + map */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a
              href="tel:+905434721898"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: "#141414",
                color: "#ffffff",
                padding: 20,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  background: "#FFCD11",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "none",
                }}
              >
                <PhoneIcon />
              </div>
              <div>
                <div
                  style={{
                    font: "600 12px/1 'Barlow', sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                    color: "#FFCD11",
                    marginBottom: 6,
                  }}
                >
                  Telefon — Tıkla, Ara
                </div>
                <div style={{ font: "700 20px/1 'Oswald', sans-serif" }}>
                  0543 472 18 98
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/905434721898?text=Merhaba%2C%20Ozentek%20Guc%20Sistemleri%2C%20is%20makinem%20icin%20bilgi%20almak%20istiyorum."
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: "#F4F3F0",
                color: "#141414",
                padding: 20,
                textDecoration: "none",
                border: "1px solid #E3E1DB",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  background: "#141414",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "none",
                }}
              >
                <WhatsAppIcon />
              </div>
              <div>
                <div
                  style={{
                    font: "600 12px/1 'Barlow', sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                    color: "#5B5B57",
                    marginBottom: 6,
                  }}
                >
                  WhatsApp
                </div>
                <div style={{ font: "700 20px/1 'Oswald', sans-serif" }}>
                  Hemen Yazın
                </div>
              </div>
            </a>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                padding: 20,
                border: "1px solid #E3E1DB",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  background: "#F4F3F0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "none",
                }}
              >
                <LocationIcon />
              </div>
              <div>
                <div
                  style={{
                    font: "600 12px/1 'Barlow', sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                    color: "#5B5B57",
                    marginBottom: 6,
                  }}
                >
                  Adres
                </div>
                <div style={{ font: "600 17px/1.3 'Oswald', sans-serif", color: "#141414" }}>
                  Saray, 1. Cd. no:20, 06980 Kahramankazan/Ankara
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                padding: 20,
                border: "1px solid #E3E1DB",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  background: "#F4F3F0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "none",
                }}
              >
                <ClockIcon />
              </div>
              <div>
                <div
                  style={{
                    font: "600 12px/1 'Barlow', sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                    color: "#5B5B57",
                    marginBottom: 6,
                  }}
                >
                  Çalışma Saatleri
                </div>
                <div style={{ font: "600 17px/1.3 'Oswald', sans-serif", color: "#141414" }}>
                  Pzt – Cmt · 08:30 – 19:00
                </div>
              </div>
            </div>

            <iframe
              title="Özentek Güç Sistemleri konum haritası"
              src="https://www.google.com/maps?q=Saray,+1.+Cd.+no:20,+06980+Kahramankazan+Ankara&output=embed"
              style={{
                width: "100%",
                height: 220,
                border: "1px solid #E3E1DB",
                filter: "grayscale(15%)",
              }}
              loading="lazy"
            />
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFCD11">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.154 8.154 0 0 1 2.42 5.82c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32A8.188 8.188 0 0 1 3.8 11.91c.01-4.54 3.7-8.24 8.25-8.24zM8.53 7.33c-.16 0-.43.06-.66.31C7.65 7.9 7 8.5 7 9.71c0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.72.59.28 1.05.43 1.41.54.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.13-.18.24-.64.8-.78.96-.15.17-.29.19-.54.07-.25-.13-1.03-.39-1.97-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.12.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.3-.01-.47-.01z"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
