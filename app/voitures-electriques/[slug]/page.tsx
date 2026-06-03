import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildOffers } from "@/lib/offers";
import { getStaticVehicles, getVehicleById } from "@/lib/vehicle-store";

export const dynamicParams = true;

export function generateStaticParams() {
  return getStaticVehicles().map((v) => ({ slug: v.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = await getVehicleById(slug);
  if (!v) return { title: "Modèle introuvable" };
  return {
    title: `${v.brand} ${v.model} — fiche & offres`,
    description: `${v.brand} ${v.model} : ${v.rangeWltpKm} km WLTP, batterie ${v.chemistry}, charge ${v.charge1080}, à partir de ${
      v.priceFromEur ? v.priceFromEur.toLocaleString("fr-FR") + " €" : "n.c."
    }.`,
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = await getVehicleById(slug);
  if (!v) notFound();

  const offers = buildOffers(v.priceFromEur);
  const fmt = (n: number) => n.toLocaleString("fr-FR");

  const specs: { label: string; value: string; warn?: boolean }[] = [
    {
      label: "Prix à partir de",
      value: v.priceFromEur !== null ? `${fmt(v.priceFromEur)} €` : "non communiqué",
      warn: v.flags?.priceUncertain,
    },
    { label: "Autonomie WLTP", value: `${v.rangeWltpKm} km${v.rangeNote ? ` (${v.rangeNote})` : ""}` },
    {
      label: "Batterie",
      value: `${v.chemistry}${v.capacityKwh !== null ? ` · ${v.capacityKwh} kWh` : ""}`,
      warn: v.flags?.chemUncertain,
    },
    { label: "Charge rapide 10→80 %", value: v.charge1080, warn: v.flags?.chargeUnknown },
    { label: "Puissance DC max", value: v.maxDcKw ? `${v.maxDcKw} kW` : "n.c." },
    { label: "Connecteur", value: v.connector },
    { label: "Architecture", value: v.is800V ? "800 V" : "400 V" },
    {
      label: "Coffre",
      value: v.trunkL !== null ? `${v.trunkL} L${v.trunkNote ? ` (${v.trunkNote})` : ""}` : "n.c.",
      warn: v.flags?.trunkUncertain,
    },
    { label: "Segment", value: v.segment },
    { label: "État", value: v.status === "neuf" ? "Neuf" : "Occasion" },
  ];

  return (
    <article className="mx-auto max-w-3xl">
      <Link href="/voitures-electriques" className="text-sm text-emerald-700 hover:underline">
        ← Retour au comparateur
      </Link>

      <header className="mt-4">
        <h1 className="font-serif text-3xl">
          {v.brand} {v.model}
        </h1>
        {v.version && <p className="text-neutral-500">{v.version}</p>}
      </header>

      <section className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
        {specs.map((s) => (
          <div key={s.label} className="bg-white p-4">
            <p className="text-xs text-neutral-400">{s.label}</p>
            <p className={`mt-1 font-medium ${s.warn ? "text-amber-600" : "text-neutral-900"}`}>
              {s.warn && <span title="Valeur non confirmée officiellement">⚠ </span>}
              {s.value}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl">Offres</h2>
        <p className="mt-1 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
          ⚠️ Offres <strong>illustratives</strong> calculées à partir du prix catalogue — ce ne sont pas
          des offres réelles scannées en direct. (Voir <code>/api/offers</code> pour brancher de vrais
          flux.)
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {offers.map((o, i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-semibold text-neutral-600">
                  {o.type}
                </span>
                <span className="text-xs text-neutral-400">source : {o.source}</span>
              </div>
              <p className="mt-2 font-medium">{o.label}</p>
              <p className="mt-1 text-lg font-semibold text-emerald-700">
                {o.priceEur !== undefined && `${fmt(o.priceEur)} €`}
                {o.monthlyEur !== undefined && `${fmt(o.monthlyEur)} €/mois`}
                {o.durationMonths && (
                  <span className="text-sm font-normal text-neutral-400"> · {o.durationMonths} mois</span>
                )}
              </p>
              <p className="mt-1 text-xs text-neutral-500">{o.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 flex flex-wrap gap-3">
        <a
          href={v.officialUrl}
          target="_blank"
          rel="noopener"
          className="rounded-xl bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
        >
          Voir sur le site officiel ↗
        </a>
        <span className="self-center text-xs text-neutral-400">Sources : {v.sources}</span>
      </section>
    </article>
  );
}
