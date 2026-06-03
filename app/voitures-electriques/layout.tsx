import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comparateur de voitures électriques — France 2026",
  description:
    "Comparez les voitures électriques vendues en France : autonomie WLTP, batterie (LFP/NMC), charge 10→80 %, coffre, prix et offres. Filtres multiples.",
};

export default function VeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1a]">
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">
          <Link href="/" className="flex items-center gap-2 font-serif text-lg">
            <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-sky-500 text-slate-950 shadow shadow-emerald-500/30">
              ⚡
            </span>
            Voltage
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            <Link
              href="/voitures-electriques"
              className="rounded-full px-3 py-1.5 font-medium text-neutral-600 transition hover:bg-neutral-100"
            >
              Comparateur
            </Link>
            <Link
              href="/#batteries"
              className="rounded-full px-3 py-1.5 font-medium text-neutral-600 transition hover:bg-neutral-100"
            >
              Batteries
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
      <footer className="border-t border-neutral-200 px-4 py-10 text-center text-xs text-neutral-400">
        Données collectées le 3 juin 2026 (sources constructeurs + presse spécialisée). Valeurs non
        confirmées signalées ⚠. Vérifiez le configurateur officiel avant un achat.
      </footer>
    </div>
  );
}
