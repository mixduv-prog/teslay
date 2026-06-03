// Accès aux véhicules : lit la base (Prisma/MySQL) si disponible, sinon retombe
// sur les données statiques de lib/vehicles.ts. Le site reste donc 100 %
// fonctionnel même sans base configurée (et le build ne casse jamais).

import {
  vehicles as staticVehicles,
  type Vehicle,
  type Chemistry,
  type Segment,
  type VehicleStatus,
} from "./vehicles";

type Row = Record<string, unknown>;

function rowToVehicle(r: Row): Vehicle {
  return {
    id: String(r.id),
    brand: String(r.brand),
    model: String(r.model),
    version: (r.version as string) ?? undefined,
    chemistry: r.chemistry as Chemistry,
    capacityKwh: r.capacityKwh === null || r.capacityKwh === undefined ? null : Number(r.capacityKwh),
    rangeWltpKm: Number(r.rangeWltpKm),
    rangeNote: (r.rangeNote as string) ?? undefined,
    trunkL: r.trunkL === null || r.trunkL === undefined ? null : Number(r.trunkL),
    trunkNote: (r.trunkNote as string) ?? undefined,
    priceFromEur: r.priceFromEur === null || r.priceFromEur === undefined ? null : Number(r.priceFromEur),
    priceNote: (r.priceNote as string) ?? undefined,
    charge1080: String(r.charge1080),
    fastChargeMin: r.fastChargeMin === null || r.fastChargeMin === undefined ? null : Number(r.fastChargeMin),
    maxDcKw: r.maxDcKw === null || r.maxDcKw === undefined ? null : Number(r.maxDcKw),
    connector: String(r.connector),
    is800V: Boolean(r.is800V),
    segment: r.segment as Segment,
    status: r.status as VehicleStatus,
    officialUrl: String(r.officialUrl),
    sources: String(r.sources),
    flags: (r.flags as Vehicle["flags"]) ?? undefined,
  };
}

async function fromDb(): Promise<Vehicle[] | null> {
  if (!process.env.DATABASE_URL) return null;
  try {
    const { prisma } = await import("./prisma");
    const rows = await prisma.vehicle.findMany({ orderBy: { priceFromEur: "asc" } });
    if (!rows.length) return null;
    return rows.map((r) => rowToVehicle(r as Row));
  } catch {
    // base injoignable / non migrée → fallback statique
    return null;
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
