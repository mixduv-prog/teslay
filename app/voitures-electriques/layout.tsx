import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voitures électriques — comparateur France 2026",
  description:
    "Comparez les voitures électriques vendues en France : autonomie WLTP, type de batterie (LFP/NMC), charge 10→80 %, coffre, prix et offres. Filtres multiples.",
};

export default function VeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1a]">
      <header className="border-b border-neutral-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/voitures-electriques" className="font-serif text-xl">
            ⚡ Comparateur VE
          </Link>
          <span className="text-xs text-neutral-400">France · 2026</span>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
      <footer className="border-t border-neutral-200 px-4 py-8 text-center text-xs text-neutral-400">
        Données collectées le 3 juin 2026 via sources constructeurs et presse spécialisée. Vérifiez
        toujours le configurateur officiel avant un achat.
      </footer>
    </div>
  );
}
