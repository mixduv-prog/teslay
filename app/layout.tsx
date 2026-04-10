import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BriefCraft — Générateur de briefs SEO par IA",
  description:
    "Générez des briefs éditoriaux SEO complets, structurés et actionnables en 30 secondes grâce à l'IA Claude.",
  openGraph: {
    title: "BriefCraft — Générateur de briefs SEO par IA",
    description:
      "Des briefs SEO parfaits en 30 secondes. Structure Hn, mots-clés, meta tags et checklist inclus.",
    type: "website",
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
