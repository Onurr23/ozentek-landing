import type { Metadata } from "next";
import { Oswald, Barlow } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Özentek Güç Sistemleri — İş Makinesi Tamir, Bakım ve Onarım | Ankara",
  description:
    "Ekskavatör, yükleyici ve tüm iş makinelerinizde arıza tespiti, periyodik bakım ve yerinde saha servisi. Ankara Kahramankazan. Hızlı çözüm, garantili işçilik.",
  keywords:
    "iş makinesi tamiri, ekskavatör tamiri, yükleyici bakımı, saha servisi, Ankara, Kahramankazan, hidrolik sistem onarımı",
  openGraph: {
    title: "Özentek Güç Sistemleri — İş Makinesi Servisi",
    description:
      "Ankara'da iş makinelerinize güvenilir tamir, bakım ve onarım. Yerinde saha servisi.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${oswald.variable} ${barlow.variable}`}>
      <body style={{ fontFamily: "var(--font-barlow), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
