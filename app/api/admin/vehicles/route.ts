import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { getAllVehicles } from "@/lib/vehicle-store";
import { getPool } from "@/lib/db";

// Colonnes de la table `vehicles` (ordre stable pour les requêtes).
export const COLUMNS = [
  "id", "brand", "model", "version", "chemistry", "capacityKwh", "rangeWltpKm",
  "rangeNote", "trunkL", "trunkNote", "priceFromEur", "priceNote", "charge1080",
  "fastChargeMin", "maxDcKw", "connector", "is800V", "segment", "status",
  "officialUrl", "sources", "flags",
] as const;

const REQUIRED = ["id", "brand", "model", "chemistry", "rangeWltpKm", "charge1080", "connector", "segment", "status", "officialUrl", "sources"];

const num = (v: unknown) => (v === "" || v === null || v === undefined ? null : Number(v));
const str = (v: unknown) => (v === "" || v === null || v === undefined ? null : String(v));

/** Caste un corps de requête vers les valeurs de colonnes MySQL. */
export function normalize(b: Record<string, unknown>): Record<string, unknown> {
  return {
    id: String(b.id),
    brand: String(b.brand),
    model: String(b.model),
    version: str(b.version),
    chemistry: String(b.chemistry),
    capacityKwh: num(b.capacityKwh),
    rangeWltpKm: Number(b.rangeWltpKm),
    rangeNote: str(b.rangeNote),
    trunkL: num(b.trunkL),
    trunkNote: str(b.trunkNote),
    priceFromEur: num(b.priceFromEur),
    priceNote: str(b.priceNote),
    charge1080: String(b.charge1080),
    fastChargeMin: num(b.fastChargeMin),
    maxDcKw: num(b.maxDcKw),
    connector: String(b.connector),
    is800V: b.is800V ? 1 : 0,
    segment: String(b.segment),
    status: String(b.status),
    officialUrl: String(b.officialUrl),
    sources: String(b.sources),
    flags: b.flags ? JSON.stringify(b.flags) : null,
  };
}

// GET : liste (admin) — base si dispo, sinon données statiques.
export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  return NextResponse.json({ vehicles: await getAllVehicles() });
}

// POST : créer un véhicule.
export async function POST(req: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }
  for (const k of REQUIRED) {
    if (body[k] === undefined || body[k] === null || body[k] === "") {
      return NextResponse.json({ error: `Champ requis manquant : ${k}` }, { status: 400 });
    }
  }

  const pool = getPool();
  if (!pool) return NextResponse.json({ error: "Base MySQL non configurée (variables MYSQL_*)" }, { status: 503 });

  try {
    const data = normalize(body);
    const cols = COLUMNS.map((c) => `\`${c}\``).join(", ");
    const placeholders = COLUMNS.map(() => "?").join(", ");
    const values = COLUMNS.map((c) => data[c]);
    await pool.query(`INSERT INTO vehicles (${cols}) VALUES (${placeholders})`, values);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "Échec création", detail: String(e) }, { status: 500 });
  }
}
