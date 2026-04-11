import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXTAUTH_URL || "https://getbreefy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Breefy — Générateur de briefs SEO par IA",
    template: "%s | Breefy",
  },
  description:
    "Générez des briefs éditoriaux SEO complets, structurés et actionnables en 30 secondes grâce à l'IA Claude. Mots-clés, structure Hn, meta tags, checklist : tout est inclus.",
  keywords: [
    "brief SEO",
    "générateur brief SEO",
    "brief éditorial",
    "SEO",
    "IA SEO",
    "Claude",
    "content marketing",
    "rédaction SEO",
  ],
  authors: [{ name: "Breefy" }],
  creator: "Breefy",
  publisher: "Breefy",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    title: "Breefy — Générateur de briefs SEO par IA",
    description:
      "Des briefs SEO parfaits en 30 secondes. Structure Hn, mots-clés, meta tags et checklist inclus.",
    siteName: "Breefy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breefy — Générateur de briefs SEO par IA",
    description:
      "Des briefs SEO parfaits en 30 secondes. Structure Hn, mots-clés, meta tags et checklist inclus.",
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
