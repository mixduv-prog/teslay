import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { getAllVehicles } from "@/lib/vehicle-store";

// GET : liste (admin) — base si dispo, sinon données statiques.
export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  const vehicles = await getAllVehicles();
  return NextResponse.json({ vehicles });
}

// POST : créer un véhicule.
export async function POST(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }

  const required = ["id", "brand", "model", "chemistry", "rangeWltpKm", "charge1080", "connector", "segment", "status", "officialUrl", "sources"];
  for (const k of required) {
    if (body[k] === undefined || body[k] === null || body[k] === "") {
      return NextResponse.json({ error: `Champ requis manquant : ${k}` }, { status: 400 });
    }
  }

  try {
    const { prisma } = await import("@/lib/prisma");
    const created = await prisma.vehicle.create({ data: normalize(body) });
    return NextResponse.json({ vehicle: created }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: "Échec création (base configurée ?)", detail: String(e) },
      { status: 500 },
    );
  }
}

// Normalise/caste les champs entrants vers le schéma Prisma.
export function normalize(b: Record<string, unknown>) {
  const numOrNull = (v: unknown) =>
    v === "" || v === null || v === undefined ? null : Number(v);
  return {
    id: String(b.id),
    brand: String(b.brand),
    model: String(b.model),
    version: b.version ? String(b.version) : null,
    chemistry: String(b.chemistry),
    capacityKwh: numOrNull(b.capacityKwh),
    rangeWltpKm: Number(b.rangeWltpKm),
    rangeNote: b.rangeNote ? String(b.rangeNote) : null,
    trunkL: numOrNull(b.trunkL),
    trunkNote: b.trunkNote ? String(b.trunkNote) : null,
    priceFromEur: numOrNull(b.priceFromEur),
    priceNote: b.priceNote ? String(b.priceNote) : null,
    charge1080: String(b.charge1080),
    fastChargeMin: numOrNull(b.fastChargeMin),
    maxDcKw: numOrNull(b.maxDcKw),
    connector: String(b.connector),
    is800V: Boolean(b.is800V),
    segment: String(b.segment),
    status: String(b.status),
    officialUrl: String(b.officialUrl),
    sources: String(b.sources),
    flags: (b.flags as object) ?? undefined,
  };
}
