import type { Metadata } from "next";
import { vehicles, brands } from "@/lib/vehicles";
import { VeExplorer } from "@/components/ve/ve-explorer";

export const metadata: Metadata = {
  title: { absolute: "Comparateur de voitures électriques — France 2026" },
  description:
    "Comparez les voitures électriques vendues en France : autonomie WLTP, type de batterie (LFP/NMC), charge 10→80 %, coffre, prix et offres. Filtres multiples, neuf & occasion.",
};

export default function Home() {
  const neuf = vehicles.filter((v) => v.status === "neuf").length;
  const occasion = vehicles.length - neuf;

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1a]">
      <header className="border-b border-neutral-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <span className="font-serif text-xl">⚡ Comparateur VE</span>
          <span className="text-xs text-neutral-400">France · 2026</span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl">Comparateur de voitures électriques</h1>
          <p className="mt-2 max-w-2xl text-neutral-600">
            {vehicles.length} modèles &amp; versions du marché français — filtrez par segment,
            batterie, marque, prix, autonomie ou charge 800&nbsp;V. Autonomie en cycle WLTP, prix
            catalogue France.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Stat value={vehicles.length} label="modèles & versions" />
            <Stat value={neuf} label="neufs" />
            {occasion > 0 && <Stat value={occasion} label="occasion" />}
            <Stat value={brands.length} label="marques" />
          </div>
        </div>

        <VeExplorer vehicles={vehicles} brands={brands} />
      </main>

      <footer className="border-t border-neutral-200 px-4 py-8 text-center text-xs text-neutral-400">
        Données collectées le 3 juin 2026 via sources constructeurs et presse spécialisée. Vérifiez
        toujours le configurateur officiel avant un achat.
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <span className="rounded-xl border border-neutral-200 bg-white px-3 py-2">
      <strong className="text-neutral-900">{value}</strong>{" "}
      <span className="text-neutral-500">{label}</span>
    </span>
  );
}
