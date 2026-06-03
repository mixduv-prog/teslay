# Déploiement sur Hostinger

Deux options selon ton offre.

## ✅ Option recommandée — « Node.js Web App » (API live incluse)

Si tu vois **« Node.js Web App — Deploy from GitHub »** dans ton panel Hostinger,
c'est la bonne : le vrai projet Next.js tourne, **avec les API live**
(`/api/vehicles`, `/api/offers`) et le comparateur sur `/voitures-electriques`.

Réglages :

| Champ | Valeur |
|---|---|
| Source | GitHub → dépôt `mixduv-prog/teslay` |
| Branche | `claude/dazzling-hawking-ozpaI` (ou la branche par défaut après merge de la PR) |
| Version Node | **20 ou 22** |
| Install command | `npm install` |
| Build command | `npm run build` |
| Start command | `npm start` |
| Port | celui fourni par Hostinger (`next start` lit la variable `PORT`) |

Variables d'environnement à définir (celles de Breefy — voir `.env.example`) :
`DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `ANTHROPIC_API_KEY`,
`STRIPE_SECRET_KEY`, etc.
👉 La page `/voitures-electriques` et ses API **n'ont besoin d'aucune** de ces
variables ; elles ne servent qu'aux pages Breefy. Mais elles doivent exister
pour que le build complet passe.

Une fois déployé :
- Comparateur : `https://<ton-domaine>/voitures-electriques`
- API : `https://<ton-domaine>/api/vehicles` et `/api/offers?vehicleId=tesla-model-3`

## 🟡 Option de secours — hébergement Web / PHP pur (sans Node)

Si tu n'utilises PAS l'option Node.js, ce dossier fournit une **API JSON live en
PHP** qui marche sur n'importe quel hébergement mutualisé :

1. Upload de `vehicles.json` et du dossier `api/` dans `public_html`.
2. Endpoints :
   - `GET /api/vehicles.php?segment=SUV&priceMax=40000&only800V=true`
   - `GET /api/offers.php?vehicleId=tesla-model-3`

> ⚠️ Les offres sont **illustratives** (dérivées du prix catalogue), pas un scan
> en direct. Pour un vrai agrégateur, alimentez `vehicles.json` via une tâche
> **CRON** Hostinger interrogeant des flux/API partenaires (en respectant
> robots.txt / CGU / RGPD).

Régénérer `vehicles.json` depuis la base TypeScript :
```bash
node --experimental-strip-types scripts/export-vehicles.ts
```
