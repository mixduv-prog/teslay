import { writeFileSync } from "node:fs";
import { vehicles, brands } from "../lib/vehicles.ts";

writeFileSync(
  "deploy-hostinger/vehicles.json",
  JSON.stringify({ collectedAt: "2026-06-03", brands, vehicles }, null, 2),
);
console.log(`Exporté ${vehicles.length} véhicules vers deploy-hostinger/vehicles.json`);
