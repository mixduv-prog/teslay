import { NextRequest, NextResponse } from "next/server";
import {
  filterVehicles,
  type Chemistry,
  type Segment,
  type VehicleStatus,
  type VehicleFilters,
} from "@/lib/vehicles";
import { getAllVehicles } from "@/lib/vehicle-store";

// GET /api/vehicles?q=&brand=&chemistry=&segment=&status=&priceMin=&priceMax=&rangeMin=&only800V=
// Filtrage côté serveur de la base des voitures électriques.
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const num = (key: string): number | undefined => {
    const raw = searchParams.get(key);
    if (raw === null || raw === "") return undefined;
    const n = Number(raw);
    return Number.isFinite(n) ? n : undefined;
  };
  const list = (key: string): string[] | undefined => {
    const raw = searchParams.getAll(key).flatMap((v) => v.split(","));
    const cleaned = raw.map((v) => v.trim()).filter(Boolean);
    return cleaned.length ? cleaned : undefined;
  };

  const filters: VehicleFilters = {
    q: searchParams.get("q") || undefined,
    brands: list("brand"),
    chemistries: list("chemistry") as Chemistry[] | undefined,
    segments: list("segment") as Segment[] | undefined,
    status: list("status") as VehicleStatus[] | undefined,
    priceMin: num("priceMin"),
    priceMax: num("priceMax"),
    rangeMin: num("rangeMin"),
    trunkMin: num("trunkMin"),
    only800V: searchParams.get("only800V") === "true",
  };

  const all = await getAllVehicles();
  const results = filterVehicles(all, filters);

  return NextResponse.json({
    count: results.length,
    total: all.length,
    collectedAt: "2026-06-03",
    results,
  });
}
