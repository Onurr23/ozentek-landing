import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#141414",
        color: "#ffffff",
        padding: "44px 20px 26px",
        borderTop: "4px solid #FFCD11",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 32,
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Image
            src="/ozentek-logo-cropped.png"
            alt="Özentek Güç Sistemleri"
            width={43}
            height={52}
            style={{ height: 52, width: "auto", maxWidth: 140, background: "#fff", padding: 4, borderRadius: 3 }}
          />
          <p
            style={{
              font: "400 14px/1.6 'Barlow', sans-serif",
              color: "#B9B6AF",
              margin: 0,
              maxWidth: 260,
            }}
          >
            İş makineleri tamiri, bakımı ve onarımı — Ankara ve çevresinde saha servisiyle yanınızdayız.
          </p>
        </div>

        {/* Contact */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <h4
            style={{
              font: "600 13px/1 'Barlow', sans-serif",
              textTransform: "uppercase",
              letterSpacing: ".08em",
              color: "#FFCD11",
              margin: "0 0 6px",
            }}
          >
            İletişim
          </h4>
          <a
            href="tel:+905434721898"
            style={{ color: "#ffffff", textDecoration: "none", font: "600 15px/1.4 'Barlow', sans-serif" }}
          >
            0543 472 18 98
          </a>
          <a
            href="https://wa.me/905434721898?text=Merhaba%2C%20Ozentek%20Guc%20Sistemleri%2C%20is%20makinem%20icin%20bilgi%20almak%20istiyorum."
            style={{ color: "#ffffff", textDecoration: "none", font: "600 15px/1.4 'Barlow', sans-serif" }}
          >
            WhatsApp&apos;tan Yazın
          </a>
        </div>

        {/* Location */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <h4
            style={{
              font: "600 13px/1 'Barlow', sans-serif",
              textTransform: "uppercase",
              letterSpacing: ".08em",
              color: "#FFCD11",
              margin: "0 0 6px",
            }}
          >
            Konum &amp; Saatler
          </h4>
          <span style={{ font: "400 15px/1.5 'Barlow', sans-serif", color: "#B9B6AF" }}>
            Saray, 1. Cd. no:20, 06980 Kahramankazan/Ankara
          </span>
          <span style={{ font: "400 15px/1.5 'Barlow', sans-serif", color: "#B9B6AF" }}>
            Pzt – Cmt · 08:30 – 19:00
          </span>
        </div>

        {/* Quick links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <h4
            style={{
              font: "600 13px/1 'Barlow', sans-serif",
              textTransform: "uppercase",
              letterSpacing: ".08em",
              color: "#FFCD11",
              margin: "0 0 6px",
            }}
          >
            Hızlı Bağlantılar
          </h4>
          {[
            { label: "Hizmetler", href: "#hizmetler" },
            { label: "Markalar", href: "#markalar" },
            { label: "İletişim", href: "#iletisim" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{ color: "#ffffff", textDecoration: "none", font: "600 15px/1.4 'Barlow', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: 1160,
          margin: "30px auto 0",
          paddingTop: 18,
          borderTop: "1px solid rgba(255,255,255,.12)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <span style={{ font: "400 13px/1.4 'Barlow', sans-serif", color: "#8f8c86" }}>
          © {year} Özentek Güç Sistemleri. Tüm hakları saklıdır.
        </span>
        <span style={{ font: "400 13px/1.4 'Barlow', sans-serif", color: "#8f8c86" }}>
          Saray, 1. Cd. no:20, 06980 Kahramankazan/Ankara
        </span>
      </div>
    </footer>
  );
}
