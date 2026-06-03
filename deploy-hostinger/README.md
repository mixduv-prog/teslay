# Déploiement sur Hostinger (Node.js + MySQL)

## 1) L'app — « Node.js Web App »

Dans hPanel → **Node.js Web App → Deploy from GitHub** :

| Champ | Valeur |
|---|---|
| Dépôt | `mixduv-prog/teslay` |
| Branche | `claude/dazzling-hawking-ozpaI` |
| Version Node | **20 ou 22** |
| Install | `npm install` |
| Build | `npm run build` |
| Start | `npm start` |

> Si une build échoue (mémoire/temps), Hostinger garde l'ancienne version en
> ligne — d'où l'impression que « rien ne change ». Vérifie les **logs de build**
> et relance un **Redeploy** sur le dernier commit.

## 2) La base — MySQL Hostinger (sans Prisma, via `mysql2`)

1. hPanel → **Bases de données MySQL** : tu as déjà `u167380016_voiture`.
2. Ouvre **phpMyAdmin** sur cette base et **importe** dans l'ordre :
   - `deploy-hostinger/schema.sql` (crée la table `vehicles`)
   - `deploy-hostinger/seed.sql` (insère les 105 véhicules — idempotent)
3. Dans l'app Node.js, ajoute les **variables d'environnement** :

```
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=<ton utilisateur MySQL Hostinger>
MYSQL_PASSWORD=<ton mot de passe>
MYSQL_DATABASE=u167380016_voiture
ADMIN_PASSWORD=<un mot de passe pour /admin>
NEXTAUTH_SECRET=<une chaîne aléatoire>
```

> 🔐 Ne mets **jamais** ces valeurs dans le code/Git — uniquement dans les
> variables d'environnement de l'app. Si un mot de passe a fuité, **régénère-le**
> dans hPanel.

4. **Redeploy**. C'est tout.

- Sans ces variables, le site fonctionne quand même (il affiche les 105 modèles
  **statiques** en lecture seule). Avec, il lit/écrit dans MySQL.
- **Admin** : `https://<ton-domaine>/admin` (mot de passe = `ADMIN_PASSWORD`) →
  ajouter / modifier / supprimer des véhicules.

Régénérer les fichiers SQL après une modif du fichier de données :
```bash
node --experimental-strip-types scripts/export-sql.ts
```

## 3) (Option) Hébergement Web pur, sans Node

Si tu n'utilises pas l'app Node.js, le dossier `api/` fournit une **API JSON en
PHP** (`vehicles.php`, `offers.php`) qui lit `vehicles.json` — à uploader dans
`public_html`. Pratique en repli, mais l'admin et l'écriture en base ne sont
disponibles qu'avec la version Node + MySQL ci-dessus.
