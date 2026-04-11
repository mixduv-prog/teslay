# Templates d'emails — Breefy

## Email 1 — Welcome (après inscription)

**Subject** : Bienvenue sur Breefy 🎉 (+ votre premier brief en 30s)

```
Bonjour {{firstName}},

Bienvenue sur Breefy ! Vous venez de recevoir 3 briefs SEO gratuits, offerts sans carte bancaire.

Voici comment démarrer en 60 secondes :

1. Allez sur votre dashboard : https://getbreefy.com/dashboard
2. Cliquez sur "Nouveau brief"
3. Entrez un mot-clé qui vous intéresse
4. Choisissez un template (article, produit, landing...)
5. Cliquez "Générer"

En 30 secondes, vous aurez un brief SEO complet, structuré, prêt à envoyer à votre rédacteur.

Besoin d'inspiration ? Découvrez des exemples de briefs ici :
https://getbreefy.com/exemples

Une question ? Répondez à cet email, je vous réponds personnellement.

Bon brief !
L'équipe Breefy

PS : Si vous voulez un aperçu de ce que Breefy peut vraiment faire, regardez ce cas d'usage pour {{industry}} : https://getbreefy.com/cas-dusage/{{slug}}
```

---

## Email 2 — Onboarding Day 2 (éducation)

**Subject** : Les 3 erreurs qui ruinent 80% des briefs SEO

```
Bonjour {{firstName}},

Hier vous avez rejoint Breefy. Bien joué 👏

Aujourd'hui, j'aimerais partager avec vous les 3 erreurs que je vois le plus souvent dans les briefs SEO, et comment les éviter (Breefy les évite automatiquement pour vous).

ERREUR #1 : Ignorer l'intention de recherche
Un brief pour "meilleur CRM" doit être un comparatif. Un brief pour "qu'est-ce qu'un CRM" doit être un guide. Mélangez les deux et votre article ne se positionne jamais.

ERREUR #2 : Oublier les questions PAA
Les People Also Ask sont une mine d'or. 5-8 questions intégrées = featured snippets en cadeau.

ERREUR #3 : Meta tags bâclés
Title < 60 car, description < 155 car, mot-clé dans les deux. Sans ça, votre CTR s'effondre.

Breefy coche ces 3 points (et 15 autres) dans chaque brief.

Vous avez encore {{remainingBriefs}} briefs gratuits. Utilisez-en un maintenant :
https://getbreefy.com/new

L'équipe Breefy
```

---

## Email 3 — Onboarding Day 5 (use case)

**Subject** : Comment les agences produisent 40 articles/mois avec Breefy

```
Bonjour {{firstName}},

Petit cas concret aujourd'hui.

Une agence de content marketing que je connais produit 40 articles/mois. Avant Breefy :
- 2 content managers à plein temps pour les briefs
- 2 semaines de délai entre demande et brief
- Qualité variable

Après Breefy :
- 1 content manager qui gère briefs + stratégie
- 30 secondes par brief
- Qualité constante

Économie : 3000€/mois en salaire.
Coût Breefy Pro : 49€/mois.

ROI : 60x.

Vous voulez atteindre ce niveau d'efficacité ?

Starter (50 briefs/mois, 19€) est idéal pour les petites équipes.
Pro (illimité, 49€) est parfait pour les agences.

Upgradez ici : https://getbreefy.com/billing

L'équipe Breefy
```

---

## Email 4 — Trial ending (crédits bientôt épuisés)

**Subject** : Il vous reste {{creditsLeft}} brief{{s}} gratuit{{s}}

```
Bonjour {{firstName}},

Vous avez utilisé {{creditsUsed}} brief{{sUsed}} sur les 3 offerts. Il vous en reste {{creditsLeft}}.

Pas encore prêt à passer en payant ? Aucun souci.

Mais si vous utilisez Breefy régulièrement, voici ce que vous gagnez en upgradant :

📦 Starter (19€/mois)
- 50 briefs/mois
- Templates sectoriels
- Historique illimité
- Support email

📦 Pro (49€/mois)
- Briefs illimités
- Export Markdown
- Partage public
- Support prioritaire

Offre de bienvenue : -20% avec l'abonnement annuel.

Choisir votre plan : https://getbreefy.com/billing

Annulation à tout moment. Aucun engagement.

L'équipe Breefy
```

---

## Email 5 — Post-payment (confirmation abonnement)

**Subject** : Votre abonnement Breefy {{planName}} est actif ✅

```
Bonjour {{firstName}},

C'est confirmé, votre abonnement Breefy {{planName}} est actif !

Voici ce que vous avez maintenant :
{{#if starter}}
✅ 50 briefs SEO par mois
✅ 6 templates (article, produit, landing, comparatif, guide, tutoriel)
✅ Historique illimité
✅ Export texte et Markdown
✅ Support email
{{/if}}
{{#if pro}}
✅ Briefs illimités
✅ Tous les templates
✅ Export Markdown + PDF
✅ Partage public de briefs
✅ Historique illimité
✅ Support prioritaire
{{/if}}

Votre prochain prélèvement : {{nextPaymentDate}}
Montant : {{amount}}€

Gérer votre abonnement : https://getbreefy.com/billing

Merci de votre confiance !
L'équipe Breefy

PS : Vous voulez un refund ou changer de plan ? Répondez à cet email, je m'en occupe.
```

---

## Email 6 — Win back (user inactif 14j)

**Subject** : On ne vous a pas vu depuis 14 jours...

```
Bonjour {{firstName}},

Ça fait 2 semaines que vous n'avez pas généré de brief sur Breefy.

C'est peut-être parce que :
- Vous n'avez pas eu le temps (on comprend)
- L'outil ne vous a pas convaincu (on aimerait savoir)
- Vous avez trouvé mieux ailleurs (dites-nous, on veut s'améliorer)

Quelle que soit la raison, répondez à cet email. Vos retours sont précieux.

Si vous voulez retenter Breefy, il vous reste {{creditsLeft}} brief{{s}} gratuit{{s}} :
https://getbreefy.com/new

Si vous voulez vous désabonner des emails, un clic suffit :
{{unsubscribeLink}}

Merci !
L'équipe Breefy
```

---

## Email 7 — Upsell (user Starter actif)

**Subject** : Vous avez généré {{count}} briefs ce mois. Passez au Pro ?

```
Bonjour {{firstName}},

Vous avez généré {{count}} briefs ce mois avec votre plan Starter. Plutôt actif 👏

Vous approchez de votre limite mensuelle (50 briefs). Si vous avez besoin de plus :

🚀 Plan Pro (49€/mois)
- Briefs illimités
- Export Markdown + PDF
- Partage public
- Support prioritaire
- Templates avancés

Upgrade en 1 clic : https://getbreefy.com/billing

Ou si vous préférez rester en Starter, pas de souci. Vos crédits repartent à 50 le 1er du mois.

L'équipe Breefy
```
