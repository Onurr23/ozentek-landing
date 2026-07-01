"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    machine: "",
    issue: "",
  });

  const setField = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      "Merhaba, Özentek Güç Sistemleri web sitesinden teklif talebi:",
      form.name ? `Ad Soyad: ${form.name}` : null,
      form.phone ? `Telefon: ${form.phone}` : null,
      form.machine ? `Makine / Marka: ${form.machine}` : null,
      form.issue ? `Arıza: ${form.issue}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/905434721898?text=${encodeURIComponent(lines)}`,
      "_blank"
    );
  };

  const inputStyle: React.CSSProperties = {
    background: "#ffffff",
    color: "#141414",
    border: "none",
    borderBottom: "3px solid transparent",
    padding: "13px 14px",
    font: "400 15px/1 'Barlow', sans-serif",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-bottom-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    font: "700 11.5px/1 'Barlow', sans-serif",
    textTransform: "uppercase",
    letterSpacing: ".06em",
    color: "#FFCD11",
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#141414",
        padding: "30px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div>
        <h3
          style={{
            font: "600 20px/1.2 'Oswald', sans-serif",
            textTransform: "uppercase",
            color: "#ffffff",
            margin: "0 0 6px",
          }}
        >
          Hızlı Teklif Formu
        </h3>
        <p
          style={{
            font: "400 14px/1.5 'Barlow', sans-serif",
            color: "#B9B6AF",
            margin: 0,
          }}
        >
          Bilgilerinizi girin, WhatsApp üzerinden anında iletelim.
        </p>
      </div>

      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={labelStyle}>Ad Soyad</span>
        <input
          type="text"
          required
          value={form.name}
          onChange={setField("name")}
          placeholder="Adınız Soyadınız"
          style={inputStyle}
        />
      </label>

      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={labelStyle}>Telefon</span>
        <input
          type="tel"
          required
          value={form.phone}
          onChange={setField("phone")}
          placeholder="05xx xxx xx xx"
          style={inputStyle}
        />
      </label>

      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={labelStyle}>Makine / Marka</span>
        <input
          type="text"
          value={form.machine}
          onChange={setField("machine")}
          placeholder="Örn: CAT 320 Ekskavatör"
          style={inputStyle}
        />
      </label>

      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={labelStyle}>Arıza Açıklaması</span>
        <textarea
          rows={3}
          value={form.issue}
          onChange={setField("issue")}
          placeholder="Kısaca arızayı anlatın"
          style={{
            ...inputStyle,
            lineHeight: 1.4,
            resize: "vertical",
          }}
        />
      </label>

      <button
        type="submit"
        style={{
          background: "#FFCD11",
          color: "#141414",
          border: "none",
          padding: 17,
          font: "700 16px/1 'Oswald', sans-serif",
          textTransform: "uppercase",
          letterSpacing: ".03em",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#141414">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.154 8.154 0 0 1 2.42 5.82c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32A8.188 8.188 0 0 1 3.8 11.91c.01-4.54 3.7-8.24 8.25-8.24zM8.53 7.33c-.16 0-.43.06-.66.31C7.65 7.9 7 8.5 7 9.71c0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.72.59.28 1.05.43 1.41.54.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.13-.18.24-.64.8-.78.96-.15.17-.29.19-.54.07-.25-.13-1.03-.39-1.97-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.12.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.3-.01-.47-.01z"/>
        </svg>
        WhatsApp ile Gönder
      </button>
    </form>
  );
}
