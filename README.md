# Breefy — Générateur de briefs SEO par IA

Breefy est un SaaS qui génère des briefs éditoriaux SEO complets, structurés et actionnables en quelques secondes grâce à l'API Claude d'Anthropic.

## Stack technique

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Prisma + PostgreSQL** (Supabase / Neon)
- **NextAuth.js** (Google + Email magic link)
- **Stripe** (abonnements + webhooks)
- **API Anthropic Claude** (Sonnet 4.6)

## Installation

### 1. Cloner et installer

```bash
git clone <repo-url>
cd breefy
npm install
```

### 2. Configurer la base de données

Créez une base PostgreSQL gratuite sur [Supabase](https://supabase.com) ou [Neon](https://neon.tech).

Copiez l'URL de connexion.

### 3. Configurer les variables d'environnement

```bash
cp .env.example .env
```

Remplissez `.env` avec vos clés :

- **DATABASE_URL** : URL PostgreSQL de Supabase/Neon
- **NEXTAUTH_SECRET** : `openssl rand -base64 32`
- **GOOGLE_CLIENT_ID / SECRET** : depuis [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
- **ANTHROPIC_API_KEY** : depuis [Anthropic Console](https://console.anthropic.com)
- **STRIPE_SECRET_KEY** : depuis [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
- **STRIPE_WEBHOOK_SECRET** : depuis Stripe > Webhooks
- **STRIPE_STARTER_PRICE_ID / STRIPE_PRO_PRICE_ID** : créez 2 produits récurrents dans Stripe (19€/mois et 49€/mois)

### 4. Initialiser la base de données

```bash
npx prisma db push
```

### 5. Lancer le serveur

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Configuration Stripe

1. Créez 2 produits dans Stripe Dashboard :
   - **Starter** : 19€/mois (récurrent)
   - **Pro** : 49€/mois (récurrent)
2. Copiez les `price_id` dans `.env`
3. Configurez un webhook vers `https://votre-domaine.com/api/stripe/webhook`
4. Événements à écouter :
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

## Configuration Google OAuth

1. Allez sur [Google Cloud Console](https://console.cloud.google.com)
2. Créez un projet et activez l'API Google+
3. Créez des identifiants OAuth 2.0
4. Ajoutez `http://localhost:3000/api/auth/callback/google` aux URIs de redirection
5. Copiez Client ID et Secret dans `.env`

## Déploiement Vercel

1. Pushez sur GitHub
2. Importez dans [Vercel](https://vercel.com)
3. Ajoutez toutes les variables d'environnement
4. Mettez à jour `NEXTAUTH_URL` avec votre domaine Vercel
5. Mettez à jour l'URI de redirection Google OAuth

## Plans

| Plan | Prix | Briefs |
|------|------|--------|
| Free | 0€ | 3 briefs (à vie) |
| Starter | 19€/mois | 50 briefs/mois |
| Pro | 49€/mois | Illimités + export Markdown |

## Structure du projet

```
app/
├── page.tsx                      # Landing page
├── (auth)/login, register        # Auth pages
├── (dashboard)/                  # Dashboard, new brief, brief view, settings, billing
└── api/                          # Auth, generate, briefs CRUD, Stripe
components/
├── ui/                           # Button, Input, Card, Select, Badge, Textarea
├── landing/                      # Navbar, Hero, Features, Demo, Pricing, FAQ, Footer
├── dashboard/                    # Sidebar, BriefCard, CreditsDisplay
└── brief/                        # BriefForm, BriefOutput
lib/
├── anthropic.ts                  # Claude API + prompt engineering
├── prisma.ts                     # Prisma client
├── stripe.ts                     # Stripe config + plans
├── auth.ts                       # NextAuth config
└── usage.ts                      # Credits/limits logic
```
