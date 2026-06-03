import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXTAUTH_URL || "https://peachpuff-wolverine-278515.hostingersite.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Voltage — Comparateur de voitures électriques (France 2026)",
    template: "%s | Voltage",
  },
  description:
    "Comparez les voitures électriques vendues en France : autonomie WLTP, batterie LFP/NMC, charge 10→80 %, coffre, prix et offres. Filtres multiples, neuf & occasion.",
  keywords: [
    "voiture électrique",
    "comparateur voiture électrique",
    "autonomie WLTP",
    "batterie LFP",
    "batterie NMC",
    "recharge rapide",
    "prix voiture électrique",
    "véhicule électrique France",
  ],
  authors: [{ name: "Voltage" }],
  creator: "Voltage",
  publisher: "Voltage",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    title: "Voltage — Comparateur de voitures électriques",
    description:
      "105 modèles & versions du marché français comparés : autonomie, batterie, recharge, coffre, prix.",
    siteName: "Voltage",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voltage — Comparateur de voitures électriques",
    description:
      "105 modèles & versions du marché français comparés : autonomie, batterie, recharge, coffre, prix.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[#fafaf8] text-[#1a1a1a]">{children}</body>
    </html>
  );
}
