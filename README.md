# ⚡ Voltage — Comparateur de voitures électriques (France)

Site de comparaison des voitures électriques vendues en France : autonomie WLTP,
type de batterie (LFP/NMC), charge 10→80 %, coffre, prix, neuf & occasion. Filtres
multiples, fiches détaillées, guide batteries/SoH, et une administration pour gérer
les véhicules.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** + **Tailwind CSS v4**
- **MySQL** (Hostinger) en accès direct via **mysql2** — avec *fallback* sur des
  données statiques (`lib/vehicles.ts`) si la base n'est pas configurée.

## Développement

```bash
npm install
npm run dev   # http://localhost:3000
```

Le site fonctionne **sans base** (105 modèles statiques). Pour activer la base et
l'admin, renseigne les variables d'environnement (voir `.env.example`).

## Données & base

- Données de référence : `lib/vehicles.ts` (typé, versionné).
- Pour MySQL : importe `deploy-hostinger/schema.sql` puis `deploy-hostinger/seed.sql`
  dans phpMyAdmin, puis définis `MYSQL_HOST/PORT/USER/PASSWORD/DATABASE`.
- Régénérer les SQL : `node --experimental-strip-types scripts/export-sql.ts`

## Admin

`/admin` (protégé par `ADMIN_PASSWORD`) : ajouter / modifier / supprimer des
véhicules. Nécessite la base MySQL configurée.

## Déploiement

Voir **`deploy-hostinger/README.md`** (Node.js Web App + MySQL Hostinger).

## Structure

```
app/
├── page.tsx                       # Accueil (landing)
├── voitures-electriques/          # Comparateur + fiches [slug]
├── admin/                         # Gestion des véhicules
└── api/                           # vehicles, offers, admin/*
components/ve/                      # Explorateur (filtres) + guide batteries
lib/                               # vehicles, vehicle-store, db, offers, admin-auth
deploy-hostinger/                  # schema.sql, seed.sql, API PHP de repli, guide
```
