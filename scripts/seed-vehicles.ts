// Remplit la table Vehicle à partir des données statiques (lib/vehicles.ts).
// À lancer APRÈS `npx prisma db push`, avec DATABASE_URL pointant sur ta base :
//   node --experimental-strip-types scripts/seed-vehicles.ts
// Idempotent : relançable sans créer de doublons (upsert par id).

import { PrismaClient } from "@prisma/client";
import { vehicles } from "../lib/vehicles.ts";

const prisma = new PrismaClient();

async function main() {
  let n = 0;
  for (const v of vehicles) {
    const data = {
      brand: v.brand,
      model: v.model,
      version: v.version ?? null,
      chemistry: v.chemistry,
      capacityKwh: v.capacityKwh,
      rangeWltpKm: v.rangeWltpKm,
      rangeNote: v.rangeNote ?? null,
      trunkL: v.trunkL,
      trunkNote: v.trunkNote ?? null,
      priceFromEur: v.priceFromEur,
      priceNote: v.priceNote ?? null,
      charge1080: v.charge1080,
      fastChargeMin: v.fastChargeMin,
      maxDcKw: v.maxDcKw,
      connector: v.connector,
      is800V: v.is800V,
      segment: v.segment,
      status: v.status,
      officialUrl: v.officialUrl,
      sources: v.sources,
      flags: v.flags ?? undefined,
    };
    await prisma.vehicle.upsert({
      where: { id: v.id },
      create: { id: v.id, ...data },
      update: data,
    });
    n++;
  }
  console.log(`Seed terminé : ${n} véhicules insérés/mis à jour.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
