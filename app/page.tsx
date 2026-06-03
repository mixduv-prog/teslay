import type { Metadata } from "next";
import Link from "next/link";
import { type Vehicle } from "@/lib/vehicles";
import { getAllVehicles, brandsOf } from "@/lib/vehicle-store";
import { BatteryGuide } from "@/components/ve/battery-guide";

export const metadata: Metadata = {
  title: { absolute: "Voltage — Comparateur de voitures électriques (France 2026)" },
  description:
    "Comparez 105 voitures électriques vendues en France : autonomie WLTP, batterie LFP/NMC, charge 10→80 %, coffre, prix, neuf & occasion. Filtres précis et guide batteries.",
};

const FEATURED = [
  "renault-5-etech",
  "tesla-model-y-standard-propulsion",
  "hyundai-ioniq-5",
  "dacia-spring",
  "kia-ev3",
  "byd-seal",
  "peugeot-e-3008",
  "tesla-model-3",
];

export default async function Home() {
  const vehicles = await getAllVehicles();
  const brands = brandsOf(vehicles);
  const neuf = vehicles.filter((v) => v.status === "neuf").length;
  const occasion = vehicles.length - neuf;
  const maxRange = Math.max(...vehicles.map((v) => v.rangeWltpKm));
  const minPrice = Math.min(...vehicles.map((v) => v.priceFromEur ?? Infinity));
  const featured = FEATURED.map((id) => vehicles.find((v) => v.id === id)).filter(
    Boolean,
  ) as Vehicle[];

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1a]">
      {/* ───────── HERO ───────── */}
      <header className="relative overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-emerald-500/30 blur-[120px] animate-glow" />
        <div className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-sky-500/20 blur-[120px] animate-glow" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="hero-grid pointer-events-none absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-4">
          <nav className="flex items-center justify-between py-5">
            <span className="flex items-center gap-2 font-serif text-xl tracking-tight">
              <span className="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-sky-500 text-slate-950 shadow-lg shadow-emerald-500/30">
                ⚡
              </span>
              Voltage
            </span>
            <div className="flex items-center gap-2 text-sm">
              <Link href="/voitures-electriques" className="rounded-full px-3 py-1.5 text-white/70 transition hover:text-white">
                Comparateur
              </Link>
              <Link
                href="/voitures-electriques"
                className="rounded-full bg-white px-4 py-1.5 font-medium text-slate-950 transition hover:bg-white/90"
              >
                Explorer
              </Link>
            </div>
          </nav>

          <div className="animate-fade-up py-14 sm:py-24">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur">
              <span className="size-1.5 rounded-full bg-emerald-400" /> {vehicles.length} modèles · données vérifiées · neuf &amp; occasion
            </span>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.05] sm:text-6xl">
              La voiture électrique idéale,
              <br className="hidden sm:block" /> <span className="text-gradient">comparée en un coup d'œil.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/60">
              Autonomie, batterie, recharge, coffre, prix — filtrez {vehicles.length} modèles &amp;
              versions du marché français et trouvez la vôtre.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/voitures-electriques"
                className="rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:scale-[1.03]"
              >
                Explorer les {vehicles.length} modèles →
              </Link>
              <a
                href="#batteries"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Guide batteries &amp; SoH
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <HeroStat value={vehicles.length} label="modèles & versions" />
              <HeroStat value={neuf} label="neufs" />
              <HeroStat value={occasion} label="occasion" />
              <HeroStat value={brands.length} label="marques" />
              <HeroStat value={maxRange} suffix=" km" label="autonomie max" />
            </div>
          </div>
        </div>

        <div className="relative h-10 sm:h-16">
          <svg className="absolute bottom-0 h-full w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
            <path d="M0 80 L1440 80 L1440 30 C1080 70 360 0 0 35 Z" fill="#fafaf8" />
          </svg>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4">
        {/* ───────── Accès rapide ───────── */}
        <section className="grid gap-5 sm:grid-cols-3">
          <QuickCard
            href="/voitures-electriques"
            emoji="🔎"
            title="Comparateur complet"
            desc={`${vehicles.length} modèles, filtres prix / autonomie / coffre / batterie / 800 V.`}
          />
          <QuickCard
            href="/voitures-electriques?tri=occasion"
            emoji="🅿️"
            title="Neuf & occasion"
            desc={`${neuf} modèles neufs et ${occasion} modèles d'occasion, clairement distingués.`}
          />
          <QuickCard
            href="#batteries"
            emoji="🔋"
            title="Guide batteries"
            desc="LFP vs NMC, et ce qu'est un bon état de santé (SoH)."
          />
        </section>

        {/* ───────── Modèles populaires ───────── */}
        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl">Modèles populaires</h2>
              <p className="mt-1 text-neutral-500">À partir de {minPrice.toLocaleString("fr-FR")} €.</p>
            </div>
            <Link href="/voitures-electriques" className="text-sm font-semibold text-emerald-700 hover:underline">
              Tout voir →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((v) => (
              <FeaturedCard key={v.id} v={v} />
            ))}
          </div>
        </section>

        {/* ───────── Guide batteries ───────── */}
        <div id="batteries" className="scroll-mt-6">
          <BatteryGuide />
        </div>
      </main>

      <footer className="mt-16 border-t border-neutral-200 px-4 py-10 text-center text-xs text-neutral-400">
        Voltage · données collectées le 3 juin 2026 (sources constructeurs + presse spécialisée).
        Valeurs non confirmées signalées ⚠. Vérifiez le configurateur officiel avant un achat.
      </footer>
    </div>
  );
}

function HeroStat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur transition hover:border-white/25 hover:bg-white/10">
      <div className="font-serif text-2xl text-white sm:text-3xl">
        {value.toLocaleString("fr-FR")}
        {suffix}
      </div>
      <div className="text-xs text-white/50">{label}</div>
    </div>
  );
}

function QuickCard({
  href,
  emoji,
  title,
  desc,
}: {
  href: string;
  emoji: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10"
    >
      <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-emerald-100 to-sky-100 text-2xl">
        {emoji}
      </div>
      <h3 className="mt-4 font-serif text-xl">{title}</h3>
      <p className="mt-1 text-sm text-neutral-500">{desc}</p>
      <span className="mt-3 inline-block text-sm font-semibold text-emerald-700 transition group-hover:translate-x-0.5">
        Ouvrir →
      </span>
    </Link>
  );
}

function FeaturedCard({ v }: { v: Vehicle }) {
  return (
    <Link
      href={`/voitures-electriques/${v.id}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-neutral-400">{v.brand}</span>
        <span
          className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
            v.chemistry === "LFP" ? "bg-emerald-100 text-emerald-700" : "bg-sky-100 text-sky-700"
          }`}
        >
          {v.chemistry}
        </span>
      </div>
      <h3 className="mt-1 font-serif text-lg leading-tight transition group-hover:text-emerald-700">
        {v.model}
      </h3>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <div className="text-[11px] text-neutral-400">dès</div>
          <div className="font-serif text-xl">
            {v.priceFromEur ? `${v.priceFromEur.toLocaleString("fr-FR")} €` : "n.c."}
          </div>
        </div>
        <div className="text-right">
          <div className="text-[11px] text-neutral-400">WLTP</div>
          <div className="font-serif text-xl text-emerald-700">{v.rangeWltpKm} km</div>
        </div>
      </div>
    </Link>
  );
}
