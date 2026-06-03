"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  filterVehicles,
  type Vehicle,
  type Chemistry,
  type Segment,
  type VehicleStatus,
} from "@/lib/vehicles";

type SortKey = "price-asc" | "price-desc" | "range-desc" | "charge-asc" | "brand";

const SEGMENTS: Segment[] = [
  "Citadine",
  "Compacte",
  "Berline",
  "SUV",
  "SUV 7 places",
  "Familiale / Van",
  "Roadster",
];
const CHEMISTRIES: Chemistry[] = ["LFP", "NMC", "LFP/NMC"];
const STATUSES: VehicleStatus[] = ["neuf", "occasion"];

function fmtPrice(v: number | null): string {
  if (v === null) return "n.c.";
  return v.toLocaleString("fr-FR") + " €";
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-sm transition ${
        active
          ? "border-emerald-600 bg-emerald-600 text-white"
          : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400"
      }`}
    >
      {children}
    </button>
  );
}

export function VeExplorer({
  vehicles,
  brands,
}: {
  vehicles: Vehicle[];
  brands: string[];
}) {
  const [q, setQ] = useState("");
  const [segs, setSegs] = useState<Segment[]>([]);
  const [chems, setChems] = useState<Chemistry[]>([]);
  const [brandSel, setBrandSel] = useState<string[]>([]);
  const [status, setStatus] = useState<VehicleStatus[]>([]);
  const [priceMax, setPriceMax] = useState(150000);
  const [rangeMin, setRangeMin] = useState(0);
  const [only800V, setOnly800V] = useState(false);
  const [sort, setSort] = useState<SortKey>("price-asc");
  const [showFilters, setShowFilters] = useState(false);

  function toggle<T>(arr: T[], val: T, setter: (v: T[]) => void) {
    setter(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  }

  function reset() {
    setQ("");
    setSegs([]);
    setChems([]);
    setBrandSel([]);
    setStatus([]);
    setPriceMax(150000);
    setRangeMin(0);
    setOnly800V(false);
    setSort("price-asc");
  }

  const filtered = useMemo(() => {
    const list = filterVehicles(vehicles, {
      q: q || undefined,
      segments: segs.length ? segs : undefined,
      chemistries: chems.length ? chems : undefined,
      brands: brandSel.length ? brandSel : undefined,
      status: status.length ? status : undefined,
      priceMax: priceMax < 150000 ? priceMax : undefined,
      rangeMin: rangeMin > 0 ? rangeMin : undefined,
      only800V: only800V || undefined,
    });
    const sorted = [...list];
    sorted.sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return (a.priceFromEur ?? Infinity) - (b.priceFromEur ?? Infinity);
        case "price-desc":
          return (b.priceFromEur ?? -Infinity) - (a.priceFromEur ?? -Infinity);
        case "range-desc":
          return b.rangeWltpKm - a.rangeWltpKm;
        case "charge-asc":
          return (a.fastChargeMin ?? Infinity) - (b.fastChargeMin ?? Infinity);
        case "brand":
          return `${a.brand}${a.model}`.localeCompare(`${b.brand}${b.model}`);
        default:
          return 0;
      }
    });
    return sorted;
  }, [vehicles, q, segs, chems, brandSel, status, priceMax, rangeMin, only800V, sort]);

  const activeFilterCount =
    segs.length +
    chems.length +
    brandSel.length +
    status.length +
    (q ? 1 : 0) +
    (priceMax < 150000 ? 1 : 0) +
    (rangeMin > 0 ? 1 : 0) +
    (only800V ? 1 : 0);

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      {/* ───── Panneau de filtres ───── */}
      <aside className="lg:sticky lg:top-4 lg:self-start">
        <button
          type="button"
          onClick={() => setShowFilters((s) => !s)}
          className="mb-3 flex w-full items-center justify-between rounded-xl border border-neutral-300 bg-white px-4 py-3 font-medium lg:hidden"
        >
          <span>Filtres{activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}</span>
          <span>{showFilters ? "▲" : "▼"}</span>
        </button>

        <div
          className={`${showFilters ? "block" : "hidden"} space-y-5 rounded-2xl border border-neutral-200 bg-white p-5 lg:block`}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg">Filtres</h2>
            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={reset}
                className="text-sm text-emerald-700 underline hover:no-underline"
              >
                Réinitialiser
              </button>
            )}
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">
              Recherche
            </label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Modèle, marque…"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-500">Segment</p>
            <div className="flex flex-wrap gap-2">
              {SEGMENTS.map((s) => (
                <Chip key={s} active={segs.includes(s)} onClick={() => toggle(segs, s, setSegs)}>
                  {s}
                </Chip>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-500">Batterie</p>
            <div className="flex flex-wrap gap-2">
              {CHEMISTRIES.map((c) => (
                <Chip key={c} active={chems.includes(c)} onClick={() => toggle(chems, c, setChems)}>
                  {c}
                </Chip>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-500">État</p>
            <div className="flex flex-wrap gap-2">
              {STATUSES.map((s) => (
                <Chip key={s} active={status.includes(s)} onClick={() => toggle(status, s, setStatus)}>
                  {s === "neuf" ? "Neuf" : "Occasion"}
                </Chip>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">
              Prix max : {fmtPrice(priceMax)}
            </label>
            <input
              type="range"
              min={15000}
              max={150000}
              step={1000}
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              className="w-full accent-emerald-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">
              Autonomie min : {rangeMin} km
            </label>
            <input
              type="range"
              min={0}
              max={800}
              step={10}
              value={rangeMin}
              onChange={(e) => setRangeMin(Number(e.target.value))}
              className="w-full accent-emerald-600"
            />
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={only800V}
              onChange={(e) => setOnly800V(e.target.checked)}
              className="size-4 accent-emerald-600"
            />
            Charge ultra-rapide 800 V uniquement
          </label>

          <details className="group">
            <summary className="cursor-pointer text-xs font-medium uppercase tracking-wide text-neutral-500">
              Marque ({brandSel.length || "toutes"})
            </summary>
            <div className="mt-2 flex flex-wrap gap-2">
              {brands.map((b) => (
                <Chip key={b} active={brandSel.includes(b)} onClick={() => toggle(brandSel, b, setBrandSel)}>
                  {b}
                </Chip>
              ))}
            </div>
          </details>
        </div>
      </aside>

      {/* ───── Résultats ───── */}
      <section>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-neutral-600">
            <strong className="text-neutral-900">{filtered.length}</strong> modèle
            {filtered.length > 1 ? "s" : ""} sur {vehicles.length}
          </p>
          <label className="flex items-center gap-2 text-sm">
            <span className="text-neutral-500">Trier&nbsp;:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-sm outline-none focus:border-emerald-500"
            >
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="range-desc">Autonomie ↓</option>
              <option value="charge-asc">Charge la plus rapide</option>
              <option value="brand">Marque (A→Z)</option>
            </select>
          </label>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-10 text-center text-neutral-500">
            Aucun modèle ne correspond à ces filtres.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((v) => (
              <VehicleCard key={v.id} v={v} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-neutral-300 hover:shadow-sm">
      <div className="mb-2 flex items-start justify-between gap-2">
        <div>
          <Link href={`/voitures-electriques/${v.id}`} className="font-serif text-lg leading-tight hover:underline">
            {v.brand} {v.model}
          </Link>
          {v.version && <p className="text-xs text-neutral-500">{v.version}</p>}
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
              v.chemistry === "LFP"
                ? "bg-emerald-100 text-emerald-700"
                : v.chemistry === "NMC"
                  ? "bg-sky-100 text-sky-700"
                  : "bg-neutral-100 text-neutral-600"
            }`}
          >
            {v.chemistry}
          </span>
          {v.is800V && (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
              800 V
            </span>
          )}
          {v.status === "occasion" && (
            <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-700">
              Occasion
            </span>
          )}
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
        <Spec label="Prix dès" value={fmtPrice(v.priceFromEur)} warn={v.flags?.priceUncertain} />
        <Spec label="Autonomie" value={`${v.rangeWltpKm} km`} />
        <Spec label="Charge 10→80 %" value={v.charge1080} warn={v.flags?.chargeUnknown} small />
        <Spec
          label="Coffre"
          value={v.trunkL !== null ? `${v.trunkL} L` : "n.c."}
          warn={v.flags?.trunkUncertain}
        />
        <Spec label="Batterie" value={v.capacityKwh !== null ? `${v.capacityKwh} kWh` : "n.c."} />
        <Spec label="Segment" value={v.segment} small />
      </dl>

      <div className="mt-3 flex items-center gap-3 border-t border-neutral-100 pt-3 text-sm">
        <Link href={`/voitures-electriques/${v.id}`} className="font-medium text-emerald-700 hover:underline">
          Détails & offres →
        </Link>
        <a
          href={v.officialUrl}
          target="_blank"
          rel="noopener"
          className="ml-auto text-neutral-400 hover:text-neutral-700"
        >
          Site officiel ↗
        </a>
      </div>
    </article>
  );
}

function Spec({
  label,
  value,
  warn,
  small,
}: {
  label: string;
  value: string;
  warn?: boolean;
  small?: boolean;
}) {
  return (
    <div>
      <dt className="text-xs text-neutral-400">{label}</dt>
      <dd className={`font-medium ${small ? "text-xs" : ""} ${warn ? "text-amber-600" : "text-neutral-800"}`}>
        {warn && <span title="Valeur non confirmée officiellement">⚠ </span>}
        {value}
      </dd>
    </div>
  );
}
