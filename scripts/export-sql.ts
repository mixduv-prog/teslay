// Génère deploy-hostinger/schema.sql et deploy-hostinger/seed.sql à partir des
// données statiques (lib/vehicles.ts). À importer dans phpMyAdmin (Hostinger).
//   node --experimental-strip-types scripts/export-sql.ts

import { writeFileSync } from "node:fs";
import { vehicles } from "../lib/vehicles.ts";

const SCHEMA = `-- Table des véhicules (MySQL / MariaDB Hostinger)
CREATE TABLE IF NOT EXISTS vehicles (
  id            VARCHAR(191) PRIMARY KEY,
  brand         VARCHAR(191) NOT NULL,
  model         VARCHAR(191) NOT NULL,
  version       TEXT,
  chemistry     VARCHAR(32)  NOT NULL,
  capacityKwh   DOUBLE,
  rangeWltpKm   INT          NOT NULL,
  rangeNote     TEXT,
  trunkL        INT,
  trunkNote     TEXT,
  priceFromEur  INT,
  priceNote     TEXT,
  charge1080    TEXT         NOT NULL,
  fastChargeMin INT,
  maxDcKw       INT,
  connector     VARCHAR(191) NOT NULL,
  is800V        TINYINT(1)   NOT NULL DEFAULT 0,
  segment       VARCHAR(64)  NOT NULL,
  status        VARCHAR(32)  NOT NULL DEFAULT 'neuf',
  officialUrl   TEXT         NOT NULL,
  sources       TEXT         NOT NULL,
  flags         JSON
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`;

function sql(v: unknown): string {
  if (v === null || v === undefined) return "NULL";
  if (typeof v === "number") return String(v);
  if (typeof v === "boolean") return v ? "1" : "0";
  return `'${String(v).replace(/\\/g, "\\\\").replace(/'/g, "''")}'`;
}

const cols = [
  "id", "brand", "model", "version", "chemistry", "capacityKwh", "rangeWltpKm",
  "rangeNote", "trunkL", "trunkNote", "priceFromEur", "priceNote", "charge1080",
  "fastChargeMin", "maxDcKw", "connector", "is800V", "segment", "status",
  "officialUrl", "sources", "flags",
];

const rows = vehicles.map((v) => {
  const r = v as Record<string, unknown>;
  const vals = cols.map((c) => {
    if (c === "is800V") return r.is800V ? "1" : "0";
    if (c === "flags") return r.flags ? sql(JSON.stringify(r.flags)) : "NULL";
    return sql(r[c] ?? null);
  });
  return `(${vals.join(", ")})`;
});

const SEED =
  `-- Seed des ${vehicles.length} véhicules. Idempotent (REPLACE).\n` +
  `REPLACE INTO vehicles (${cols.join(", ")}) VALUES\n` +
  rows.join(",\n") +
  ";\n";

writeFileSync("deploy-hostinger/schema.sql", SCHEMA);
writeFileSync("deploy-hostinger/seed.sql", SEED);
console.log(`Généré schema.sql et seed.sql (${vehicles.length} véhicules).`);
