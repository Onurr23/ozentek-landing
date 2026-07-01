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
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        WhatsApp ile Gönder
      </button>
    </form>
  );
}
