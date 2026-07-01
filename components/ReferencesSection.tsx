import Image from "next/image";

const photos = [null, null, null, null, null, null];

export default function ReferencesSection() {
  return (
    <section
      id="referanslar"
      style={{ background: "#ffffff", padding: "60px 20px" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 32px" }}>
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
            Referanslarımız
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
            Sahadan Kareler
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 12,
          }}
        >
          {photos.map((photo, i) =>
            photo ? (
              <div key={i} style={{ aspectRatio: "4/3", position: "relative", overflow: "hidden" }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : (
              <div
                key={i}
                style={{
                  aspectRatio: "4/3",
                  background: "#F4F3F0",
                  border: "1px dashed #C9C6BE",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A6A39A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <span
                  style={{
                    font: "600 11.5px/1.3 'Barlow', sans-serif",
                    color: "#9C9990",
                    textTransform: "uppercase",
                    letterSpacing: ".04em",
                  }}
                >
                  Fotoğraf Eklenecek
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
