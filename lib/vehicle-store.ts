// Accès aux véhicules : lit la base MySQL Hostinger (via mysql2) si configurée,
// sinon retombe sur les données statiques (lib/vehicles.ts). Le site reste donc
// 100 % fonctionnel même sans base, et le build ne casse jamais.

import { getPool } from "./db";
import {
  vehicles as staticVehicles,
  type Vehicle,
  type Chemistry,
  type Segment,
  type VehicleStatus,
} from "./vehicles";

type Row = Record<string, unknown>;

const numOrNull = (v: unknown): number | null =>
  v === null || v === undefined || v === "" ? null : Number(v);

function rowToVehicle(r: Row): Vehicle {
  let flags = r.flags as Vehicle["flags"];
  if (typeof r.flags === "string" && r.flags) {
    try {
      flags = JSON.parse(r.flags);
    } catch {
      flags = undefined;
    }
  }
  return {
    id: String(r.id),
    brand: String(r.brand),
    model: String(r.model),
    version: (r.version as string) || undefined,
    chemistry: r.chemistry as Chemistry,
    capacityKwh: numOrNull(r.capacityKwh),
    rangeWltpKm: Number(r.rangeWltpKm),
    rangeNote: (r.rangeNote as string) || undefined,
    trunkL: numOrNull(r.trunkL),
    trunkNote: (r.trunkNote as string) || undefined,
    priceFromEur: numOrNull(r.priceFromEur),
    priceNote: (r.priceNote as string) || undefined,
    charge1080: String(r.charge1080),
    fastChargeMin: numOrNull(r.fastChargeMin),
    maxDcKw: numOrNull(r.maxDcKw),
    connector: String(r.connector),
    is800V: Boolean(Number(r.is800V)),
    segment: r.segment as Segment,
    status: r.status as VehicleStatus,
    officialUrl: String(r.officialUrl),
    sources: String(r.sources),
    flags: flags || undefined,
  };
}

async function fromDb(): Promise<Vehicle[] | null> {
  const pool = getPool();
  if (!pool) return null;
  try {
    const [rows] = await pool.query(
      "SELECT * FROM vehicles ORDER BY (priceFromEur IS NULL), priceFromEur ASC",
    );
    const list = rows as Row[];
    if (!list.length) return null;
    return list.map(rowToVehicle);
  } catch {
    return null; // base injoignable / table absente → fallback statique
  }
}

/** Source de vérité : base si dispo et non vide, sinon données statiques. */
export async function getAllVehicles(): Promise<Vehicle[]> {
  return (await fromDb()) ?? staticVehicles;
}

export async function getVehicleById(id: string): Promise<Vehicle | undefined> {
  const all = await getAllVehicles();
  return all.find((v) => v.id === id);
}

export function getStaticVehicles(): Vehicle[] {
  return staticVehicles;
}

export function brandsOf(list: Vehicle[]): string[] {
  return Array.from(new Set(list.map((v) => v.brand))).sort();
}
