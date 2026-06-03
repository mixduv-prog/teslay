import { NextRequest, NextResponse } from "next/server";
import { getVehicle } from "@/lib/vehicles";
import { buildOffers } from "@/lib/offers";

/**
 * GET /api/offers?vehicleId=tesla-model-3
 *
 * ⚠️ HONNÊTETÉ : ceci est un *scaffold* d'API d'agrégation d'offres.
 *
 * Une vraie API « qui scanne les sites pour sortir les meilleures offres »
 * suppose :
 *   1. des connecteurs par source (configurateurs constructeurs, mandataires,
 *      comparateurs LLD/LOA, marchés d'occasion…),
 *   2. un planificateur (CRON / worker) qui rafraîchit les données,
 *   3. une base de données pour historiser les prix,
 *   4. la prise en compte du cadre légal (robots.txt, CGU, RGPD) — beaucoup de
 *      sites interdisent le scraping ; privilégier les API/flux partenaires.
 *
 * Cet environnement étant éphémère, on ne peut pas faire tourner ce service en
 * continu ici. Cette route renvoie donc des offres ILLUSTRATIVES dérivées du
 * prix catalogue (cf. `lib/offers.ts`), pour que l'UI soit fonctionnelle.
 * Branchez de vrais connecteurs dans `buildOffers()` quand vous hébergez.
 */

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const vehicleId = searchParams.get("vehicleId");

  if (!vehicleId) {
    return NextResponse.json({ error: "Paramètre `vehicleId` requis" }, { status: 400 });
  }

  const vehicle = getVehicle(vehicleId);
  if (!vehicle) {
    return NextResponse.json({ error: "Véhicule introuvable" }, { status: 404 });
  }

  return NextResponse.json({
    vehicleId,
    model: `${vehicle.brand} ${vehicle.model}`,
    disclaimer:
      "Offres ILLUSTRATIVES générées à partir du prix catalogue. Ce ne sont pas des offres réelles scannées en direct — voir la doc de l'API pour brancher de vrais connecteurs.",
    offers: buildOffers(vehicle.priceFromEur),
  });
}
