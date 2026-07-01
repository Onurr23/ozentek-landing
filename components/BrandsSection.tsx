import Image from "next/image";

const brands = [
  { key: "cat",        name: "CAT",         file: "cat.svg" },
  { key: "komatsu",    name: "Komatsu",     file: "komatsu.svg" },
  { key: "volvo",      name: "Volvo CE",    file: "volvo.svg" },
  { key: "jcb",        name: "JCB",         file: "jcb.svg" },
  { key: "hitachi",    name: "Hitachi",     file: "hitachi.svg" },
  { key: "hidromek",   name: "Hidromek",    file: "hidromek.svg" },
  { key: "liebherr",   name: "Liebherr",    file: "liebherr.svg" },
  { key: "doosan",     name: "Doosan",      file: "doosan.svg" },
  { key: "hyundai",    name: "Hyundai",     file: "hyundai.svg" },
  { key: "case",       name: "Case CE",     file: "case.svg" },
  { key: "newholland", name: "New Holland", file: "newholland.svg" },
  { key: "bobcat",     name: "Bobcat",      file: "bobcat.svg" },
  { key: "yanmar",     name: "Yanmar",      file: "yanmar.svg" },
];

export default function BrandsSection() {
  return (
    <section
      id="markalar"
      style={{
        background: "#ffffff",
        padding: "52px 20px",
        borderTop: "1px solid #E3E1DB",
        borderBottom: "1px solid #E3E1DB",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", textAlign: "center" }}>
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
          Servis Verdiğimiz Markalar
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          {brands.map((b) => (
            <div
              key={b.key}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 52,
                padding: "0 8px",
                filter: "grayscale(100%)",
                opacity: 0.65,
                transition: "filter 0.2s, opacity 0.2s",
              }}
              className="brand-logo"
              title={b.name}
            >
              <Image
                src={`/logos/${b.file}`}
                alt={b.name}
                width={120}
                height={44}
                style={{ objectFit: "contain", maxWidth: 120, height: 44, width: "auto" }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .brand-logo:hover {
          filter: grayscale(0%) !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
