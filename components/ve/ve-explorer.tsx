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

type SortKey = "price-asc" | "price-desc" | "range-desc" | "charge-asc" | "trunk-desc" | "brand";

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
      className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
        active
          ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm shadow-emerald-500/30"
          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
      }`}
    >
      {children}
    </button>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
      {children}
    </p>
  );
}

export function VeExplorer({ vehicles, brands }: { vehicles: Vehicle[]; brands: string[] }) {
  const [q, setQ] = useState("");
  const [segs, setSegs] = useState<Segment[]>([]);
  const [chems, setChems] = useState<Chemistry[]>([]);
  const [brandSel, setBrandSel] = useState<string[]>([]);
  const [status, setStatus] = useState<VehicleStatus[]>([]);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(150000);
  const [rangeMin, setRangeMin] = useState(0);
  const [trunkMin, setTrunkMin] = useState(0);
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
    setPriceMin(0);
    setPriceMax(150000);
    setRangeMin(0);
    setTrunkMin(0);
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
      priceMin: priceMin > 0 ? priceMin : undefined,
      priceMax: priceMax < 150000 ? priceMax : undefined,
      rangeMin: rangeMin > 0 ? rangeMin : undefined,
      trunkMin: trunkMin > 0 ? trunkMin : undefined,
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
        case "trunk-desc":
          return (b.trunkL ?? -1) - (a.trunkL ?? -1);
        case "brand":
          return `${a.brand}${a.model}`.localeCompare(`${b.brand}${b.model}`);
        default:
          return 0;
      }
    });
    return sorted;
  }, [vehicles, q, segs, chems, brandSel, status, priceMin, priceMax, rangeMin, trunkMin, only800V, sort]);

  const activeFilterCount =
    segs.length +
    chems.length +
    brandSel.length +
    status.length +
    (q ? 1 : 0) +
    (priceMin > 0 ? 1 : 0) +
    (priceMax < 150000 ? 1 : 0) +
    (rangeMin > 0 ? 1 : 0) +
    (trunkMin > 0 ? 1 : 0) +
    (only800V ? 1 : 0);

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
      {/* ───── Filtres ───── */}
      <aside className="lg:sticky lg:top-6 lg:self-start">
        <button
          type="button"
          onClick={() => setShowFilters((s) => !s)}
          className="mb-3 flex w-full items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-3 font-medium shadow-sm lg:hidden"
        >
          <span>Filtres{activeFilterCount > 0 ? ` · ${activeFilterCount}` : ""}</span>
          <span className="text-neutral-400">{showFilters ? "▲" : "▼"}</span>
        </button>

        <div
          className={`${showFilters ? "block" : "hidden"} space-y-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm lg:block`}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg">Filtres</h2>
            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={reset}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 transition hover:bg-neutral-200"
              >
                Réinitialiser
              </button>
            )}
          </div>

          <div>
            <Label>Recherche</Label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Modèle, marque…"
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
            />
          </div>

          <div>
            <Label>Segment</Label>
            <div className="flex flex-wrap gap-2">
              {SEGMENTS.map((s) => (
                <Chip key={s} active={segs.includes(s)} onClick={() => toggle(segs, s, setSegs)}>
                  {s}
                </Chip>
              ))}
            </div>
          </div>

          <div>
            <Label>Batterie</Label>
            <div className="flex flex-wrap gap-2">
              {CHEMISTRIES.map((c) => (
                <Chip key={c} active={chems.includes(c)} onClick={() => toggle(chems, c, setChems)}>
                  {c}
                </Chip>
              ))}
            </div>
          </div>

          <div>
            <Label>État</Label>
            <div className="flex flex-wrap gap-2">
              {STATUSES.map((s) => (
                <Chip key={s} active={status.includes(s)} onClick={() => toggle(status, s, setStatus)}>
                  {s === "neuf" ? "Neuf" : "Occasion"}
                </Chip>
              ))}
            </div>
          </div>

          <Slider
            label="Prix min"
            value={priceMin}
            display={priceMin <= 0 ? "0 €" : fmtPrice(priceMin)}
            min={0}
            max={150000}
            step={1000}
            onChange={(val) => {
              setPriceMin(val);
              if (val > priceMax) setPriceMax(val);
            }}
          />
          <Slider
            label="Prix max"
            value={priceMax}
            display={priceMax >= 150000 ? "illimité" : fmtPrice(priceMax)}
            min={15000}
            max={150000}
            step={1000}
            onChange={(val) => {
              setPriceMax(val);
              if (val < priceMin) setPriceMin(val);
            }}
          />
          <Slider
            label="Autonomie min"
            value={rangeMin}
            display={`${rangeMin} km`}
            min={0}
            max={800}
            step={10}
            onChange={setRangeMin}
          />
          <Slider
            label="Coffre min"
            value={trunkMin}
            display={`${trunkMin} L`}
            min={0}
            max={900}
            step={25}
            onChange={setTrunkMin}
          />

          <label className="flex cursor-pointer items-center gap-2.5 rounded-xl bg-amber-50 px-3 py-2.5 text-sm">
            <input
              type="checkbox"
              checked={only800V}
              onChange={(e) => setOnly800V(e.target.checked)}
              className="size-4 accent-amber-500"
            />
            <span className="font-medium text-amber-700">⚡ Charge 800 V uniquement</span>
          </label>

          <details className="group">
            <summary className="cursor-pointer list-none">
              <Label>Marque · {brandSel.length || "toutes"} ▾</Label>
            </summary>
            <div className="mt-1 flex flex-wrap gap-2">
              {brands.map((b) => (
                <Chip
                  key={b}
                  active={brandSel.includes(b)}
                  onClick={() => toggle(brandSel, b, setBrandSel)}
                >
                  {b}
                </Chip>
              ))}
            </div>
          </details>
        </div>
      </aside>

      {/* ───── Résultats ───── */}
      <section>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-neutral-500">
            <strong className="text-lg text-neutral-900">{filtered.length}</strong> modèle
            {filtered.length > 1 ? "s" : ""} <span className="text-neutral-400">/ {vehicles.length}</span>
          </p>
          <label className="flex items-center gap-2 text-sm">
            <span className="text-neutral-400">Trier</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-medium outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10"
            >
              <option value="price-asc">Prix croissant ↑</option>
              <option value="price-desc">Prix décroissant ↓</option>
              <option value="range-desc">Autonomie ↓</option>
              <option value="trunk-desc">Coffre ↓</option>
              <option value="charge-asc">Charge la plus rapide</option>
              <option value="brand">Marque (A→Z)</option>
            </select>
          </label>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-neutral-300 bg-white p-16 text-center text-neutral-400">
            Aucun modèle ne correspond à ces filtres.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((v) => (
              <VehicleCard key={v.id} v={v} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function Slider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">{label}</span>
        <span className="text-sm font-semibold text-emerald-600">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}

function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <article className="group relative flex animate-fade-up flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 opacity-0 transition group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <Link
            href={`/voitures-electriques/${v.id}`}
            className="font-serif text-lg leading-tight transition group-hover:text-emerald-700"
          >
            {v.brand} {v.model}
          </Link>
          {v.version && <p className="truncate text-xs text-neutral-400">{v.version}</p>}
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
          <span
            className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
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
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-700">
              800 V
            </span>
          )}
          {v.status === "occasion" && (
            <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[11px] font-bold text-orange-700">
              Occasion
            </span>
          )}
        </div>
      </div>

      {/* stats principales */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <StatTile
          label="Prix dès"
          value={fmtPrice(v.priceFromEur)}
          warn={v.flags?.priceUncertain}
        />
        <StatTile label="Autonomie" value={`${v.rangeWltpKm} km`} accent />
      </div>

      {/* specs secondaires */}
      <dl className="mt-3 space-y-1.5 text-sm">
        <Row label="Charge 10→80 %" value={v.charge1080} warn={v.flags?.chargeUnknown} />
        <Row
          label="Coffre"
          value={v.trunkL !== null ? `${v.trunkL} L` : "n.c."}
          warn={v.flags?.trunkUncertain}
        />
        <Row
          label="Batterie"
          value={v.capacityKwh !== null ? `${v.capacityKwh} kWh` : "n.c."}
        />
        <Row label="Segment" value={v.segment} />
      </dl>

      <div className="mt-4 flex items-center gap-3 border-t border-neutral-100 pt-3 text-sm">
        <Link
          href={`/voitures-electriques/${v.id}`}
          className="font-semibold text-emerald-700 transition hover:gap-2"
        >
          Détails &amp; offres →
        </Link>
        <a
          href={v.officialUrl}
          target="_blank"
          rel="noopener"
          className="ml-auto text-neutral-300 transition hover:text-neutral-600"
        >
          Officiel ↗
        </a>
      </div>
    </article>
  );
}

function StatTile({
  label,
  value,
  accent,
  warn,
}: {
  label: string;
  value: string;
  accent?: boolean;
  warn?: boolean;
}) {
  return (
    <div className={`rounded-2xl px-3 py-2.5 ${accent ? "bg-emerald-50" : "bg-neutral-50"}`}>
      <div className="text-[11px] text-neutral-400">{label}</div>
      <div
        className={`font-serif text-lg leading-tight ${
          warn ? "text-amber-600" : accent ? "text-emerald-700" : "text-neutral-900"
        }`}
      >
        {warn && <span title="Valeur non confirmée">⚠ </span>}
        {value}
      </div>
    </div>
  );
}

function Row({ label, value, warn }: { label: string; value: string; warn?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <dt className="shrink-0 text-xs text-neutral-400">{label}</dt>
      <dd className={`truncate text-right text-xs font-medium ${warn ? "text-amber-600" : "text-neutral-700"}`}>
        {warn && "⚠ "}
        {value}
      </dd>
    </div>
  );
}
