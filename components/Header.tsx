"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#141414",
        borderBottom: "3px solid #FFCD11",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "0 16px",
          height: 66,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <Link
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            flex: "none",
          }}
        >
          <Image
            src="/ozentek-logo-transparent.png"
            alt="Özentek Güç Sistemleri logosu"
            width={36}
            height={44}
            style={{
              height: 44,
              width: "auto",
              maxWidth: 120,
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="nav-links-desktop"
          style={{
            display: "none",
            alignItems: "center",
            gap: 30,
            marginLeft: 8,
          }}
        >
          {["Hizmetler", "Markalar", "İletişim"].map((item) => (
            <a
              key={item}
              href={`#${item === "İletişim" ? "iletisim" : item.toLowerCase()}`}
              style={{
                color: "#ffffff",
                textDecoration: "none",
                font: "600 14px/1 'Barlow', sans-serif",
                letterSpacing: ".03em",
                textTransform: "uppercase",
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: "auto" }}>
          <a
            href="tel:+905434721898"
            className="nav-phone-desktop"
            style={{
              display: "none",
              alignItems: "center",
              gap: 8,
              color: "#ffffff",
              textDecoration: "none",
              font: "700 15px/1 'Oswald', sans-serif",
              letterSpacing: ".02em",
              whiteSpace: "nowrap",
            }}
          >
            <PhoneIcon color="#FFCD11" size={18} />
            0543 472 18 98
          </a>

          <a
            href="tel:+905434721898"
            className="nav-teklif-desktop"
            style={{
              display: "none",
              background: "#FFCD11",
              color: "#141414",
              font: "700 13px/1 'Oswald', sans-serif",
              textTransform: "uppercase",
              letterSpacing: ".04em",
              padding: "12px 20px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Teklif Al
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setNavOpen((v) => !v)}
            className="nav-hamburger"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 42,
              height: 42,
              background: "transparent",
              border: "1px solid rgba(255,255,255,.3)",
              color: "#fff",
              cursor: "pointer",
              flex: "none",
            }}
          >
            {navOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {navOpen && (
        <div
          style={{
            background: "#141414",
            borderTop: "1px solid rgba(255,255,255,.12)",
            padding: "18px 16px 26px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {[
            { label: "Hizmetler", href: "#hizmetler" },
            { label: "Markalar", href: "#markalar" },
            { label: "İletişim", href: "#iletisim" },
          ].map((item, i, arr) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setNavOpen(false)}
              style={{
                color: "#fff",
                textDecoration: "none",
                font: "600 16px/1 'Barlow', sans-serif",
                textTransform: "uppercase",
                letterSpacing: ".03em",
                padding: "14px 6px",
                borderBottom:
                  i < arr.length - 1
                    ? "1px solid rgba(255,255,255,.08)"
                    : undefined,
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+905434721898"
            style={{
              marginTop: 14,
              background: "#FFCD11",
              color: "#141414",
              textAlign: "center",
              font: "700 16px/1 'Oswald', sans-serif",
              textTransform: "uppercase",
              letterSpacing: ".03em",
              padding: 16,
              textDecoration: "none",
            }}
          >
            Hemen Ara — 0543 472 18 98
          </a>
          <a
            href="https://wa.me/905434721898?text=Merhaba%2C%20Ozentek%20Guc%20Sistemleri%2C%20is%20makinem%20icin%20bilgi%20almak%20istiyorum."
            style={{
              marginTop: 10,
              border: "2px solid #fff",
              color: "#fff",
              textAlign: "center",
              font: "700 16px/1 'Oswald', sans-serif",
              textTransform: "uppercase",
              letterSpacing: ".03em",
              padding: 14,
              textDecoration: "none",
            }}
          >
            WhatsApp&apos;tan Yaz
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 901px) {
          .nav-links-desktop { display: flex !important; }
          .nav-phone-desktop { display: flex !important; }
          .nav-teklif-desktop { display: flex !important; }
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </header>
  );
}

function PhoneIcon({ color = "#fff", size = 22 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
