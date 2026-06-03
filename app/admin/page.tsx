"use client";

import { useCallback, useEffect, useState } from "react";
import type { Vehicle } from "@/lib/vehicles";

const SEGMENTS = ["Citadine", "Compacte", "Berline", "SUV", "SUV 7 places", "Familiale / Van", "Roadster"];
const CHEMS = ["LFP", "NMC", "LFP/NMC", "inconnue"];

type Mode = "loading" | "login" | "list" | "form";
type Form = Partial<Vehicle> & { id?: string };

const EMPTY: Form = {
  id: "", brand: "", model: "", chemistry: "NMC", rangeWltpKm: 0,
  charge1080: "", connector: "CCS Combo", segment: "SUV", status: "neuf",
  officialUrl: "", sources: "", is800V: false,
};

export default function AdminPage() {
  const [mode, setMode] = useState<Mode>("loading");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [form, setForm] = useState<Form>(EMPTY);
  const [editing, setEditing] = useState(false);

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/vehicles");
    if (res.status === 401) { setMode("login"); return; }
    const data = await res.json();
    setVehicles(data.vehicles ?? []);
    setMode("list");
  }, []);

  useEffect(() => { load(); }, [load]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) { setError((await res.json()).error ?? "Erreur"); return; }
    setPassword("");
    load();
  }

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    setMode("login");
  }

  function newVehicle() { setForm(EMPTY); setEditing(false); setMode("form"); }
  function editVehicle(v: Vehicle) { setForm({ ...v }); setEditing(true); setMode("form"); }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const url = editing ? `/api/admin/vehicles/${form.id}` : "/api/admin/vehicles";
    const res = await fetch(url, {
      method: editing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!res.ok) { setError((await res.json()).error ?? "Erreur"); return; }
    await load();
  }

  async function remove(id: string) {
    if (!confirm(`Supprimer ${id} ?`)) return;
    const res = await fetch(`/api/admin/vehicles/${id}`, { method: "DELETE" });
    if (!res.ok) { setError((await res.json()).error ?? "Erreur"); return; }
    load();
  }

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const t = e.target;
    const val = t.type === "checkbox" ? (t as HTMLInputElement).checked
      : t.type === "number" ? (t.value === "" ? null : Number(t.value))
      : t.value;
    setForm((f) => ({ ...f, [k]: val as never }));
  };

  if (mode === "loading") {
    return <Shell><p className="text-neutral-500">Chargement…</p></Shell>;
  }

  if (mode === "login") {
    return (
      <Shell>
        <form onSubmit={login} className="mx-auto mt-10 max-w-sm rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h1 className="font-serif text-2xl">Admin · connexion</h1>
          <p className="mt-1 text-sm text-neutral-500">Entre le mot de passe administrateur.</p>
          <input
            type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe" autoFocus
            className="mt-4 w-full rounded-xl border border-neutral-200 px-3 py-2.5 outline-none focus:border-emerald-400"
          />
          {error && <p className="mt-2 text-sm text-rose-600">{error}</p>}
          <button className="mt-4 w-full rounded-xl bg-emerald-600 py-2.5 font-semibold text-white hover:bg-emerald-700">
            Se connecter
          </button>
        </form>
      </Shell>
    );
  }

  if (mode === "form") {
    return (
      <Shell>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-serif text-2xl">{editing ? `Modifier ${form.id}` : "Nouveau véhicule"}</h1>
          <button onClick={() => setMode("list")} className="text-sm text-neutral-500 hover:underline">← Liste</button>
        </div>
        {error && <p className="mb-4 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</p>}
        <form onSubmit={save} className="grid gap-4 rounded-3xl border border-neutral-200 bg-white p-6 sm:grid-cols-2">
          <Field label="id (slug, unique)"><input className={inp} value={form.id ?? ""} onChange={set("id")} disabled={editing} required /></Field>
          <Field label="Marque"><input className={inp} value={form.brand ?? ""} onChange={set("brand")} required /></Field>
          <Field label="Modèle"><input className={inp} value={form.model ?? ""} onChange={set("model")} required /></Field>
          <Field label="Version"><input className={inp} value={form.version ?? ""} onChange={set("version")} /></Field>
          <Field label="Batterie"><select className={inp} value={form.chemistry ?? "NMC"} onChange={set("chemistry")}>{CHEMS.map((c) => <option key={c}>{c}</option>)}</select></Field>
          <Field label="Capacité (kWh)"><input type="number" step="0.1" className={inp} value={form.capacityKwh ?? ""} onChange={set("capacityKwh")} /></Field>
          <Field label="Autonomie WLTP (km)"><input type="number" className={inp} value={form.rangeWltpKm ?? ""} onChange={set("rangeWltpKm")} required /></Field>
          <Field label="Coffre (L)"><input type="number" className={inp} value={form.trunkL ?? ""} onChange={set("trunkL")} /></Field>
          <Field label="Prix dès (€)"><input type="number" className={inp} value={form.priceFromEur ?? ""} onChange={set("priceFromEur")} /></Field>
          <Field label="Charge 10→80 %"><input className={inp} value={form.charge1080 ?? ""} onChange={set("charge1080")} required /></Field>
          <Field label="Charge (min, pour tri)"><input type="number" className={inp} value={form.fastChargeMin ?? ""} onChange={set("fastChargeMin")} /></Field>
          <Field label="Puissance DC max (kW)"><input type="number" className={inp} value={form.maxDcKw ?? ""} onChange={set("maxDcKw")} /></Field>
          <Field label="Connecteur"><input className={inp} value={form.connector ?? ""} onChange={set("connector")} required /></Field>
          <Field label="Segment"><select className={inp} value={form.segment ?? "SUV"} onChange={set("segment")}>{SEGMENTS.map((s) => <option key={s}>{s}</option>)}</select></Field>
          <Field label="État"><select className={inp} value={form.status ?? "neuf"} onChange={set("status")}><option value="neuf">neuf</option><option value="occasion">occasion</option></select></Field>
          <Field label="Site officiel (URL)"><input className={inp} value={form.officialUrl ?? ""} onChange={set("officialUrl")} required /></Field>
          <Field label="Sources"><input className={inp} value={form.sources ?? ""} onChange={set("sources")} required /></Field>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={!!form.is800V} onChange={set("is800V")} className="size-4 accent-emerald-600" /> Architecture 800 V</label>
          <div className="sm:col-span-2">
            <button className="rounded-xl bg-emerald-600 px-6 py-2.5 font-semibold text-white hover:bg-emerald-700">
              {editing ? "Enregistrer" : "Créer"}
            </button>
          </div>
        </form>
      </Shell>
    );
  }

  // list
  return (
    <Shell>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-serif text-2xl">Admin · {vehicles.length} véhicules</h1>
        <div className="flex gap-2">
          <button onClick={newVehicle} className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">+ Nouveau</button>
          <button onClick={logout} className="rounded-xl border border-neutral-200 px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-100">Déconnexion</button>
        </div>
      </div>
      {error && <p className="mb-4 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</p>}
      <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-neutral-200 text-left text-xs uppercase tracking-wide text-neutral-400">
            <tr><th className="p-3">Modèle</th><th className="p-3">Prix</th><th className="p-3">WLTP</th><th className="p-3">Batt.</th><th className="p-3">État</th><th className="p-3"></th></tr>
          </thead>
          <tbody>
            {vehicles.map((v) => (
              <tr key={v.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                <td className="p-3 font-medium">{v.brand} {v.model}<span className="block text-xs text-neutral-400">{v.version}</span></td>
                <td className="p-3">{v.priceFromEur ? `${v.priceFromEur.toLocaleString("fr-FR")} €` : "n.c."}</td>
                <td className="p-3">{v.rangeWltpKm} km</td>
                <td className="p-3">{v.chemistry}</td>
                <td className="p-3">{v.status}</td>
                <td className="p-3 text-right whitespace-nowrap">
                  <button onClick={() => editVehicle(v)} className="text-emerald-700 hover:underline">Éditer</button>
                  <button onClick={() => remove(v.id)} className="ml-3 text-rose-600 hover:underline">Suppr.</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-neutral-400">
        Les ajouts/modifications nécessitent une base configurée (DATABASE_URL). Sans base, la liste
        affiche les données statiques en lecture seule.
      </p>
    </Shell>
  );
}

const inp = "w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-emerald-400";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-xs font-medium text-neutral-500">{label}</span>
      {children}
    </label>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1a]">
      <div className="mx-auto max-w-5xl px-4 py-10">{children}</div>
    </div>
  );
}
