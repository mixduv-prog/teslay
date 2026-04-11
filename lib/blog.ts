export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "brief-seo-guide-complet-2026",
    title: "Brief SEO : le guide complet pour 2026",
    excerpt:
      "Tout ce qu'il faut savoir pour créer un brief SEO efficace qui guide votre rédacteur et performe sur Google.",
    date: "2026-04-08",
    readTime: "8 min",
    content: `## Qu'est-ce qu'un brief SEO ?

Un brief SEO est un document qui guide la rédaction d'un article optimisé pour les moteurs de recherche. Il contient tous les éléments dont un rédacteur a besoin pour produire un contenu qui se positionne : mots-clés cibles, structure, ton, longueur, meta tags, et consignes techniques.

C'est l'outil central de toute stratégie de contenu performante. Sans brief, vos articles manquent de cohérence, perdent en qualité SEO, et dépendent du talent individuel du rédacteur.

## Les 6 éléments essentiels d'un brief SEO

### 1. Le mot-clé principal et son univers sémantique
Votre brief doit identifier clairement le mot-clé cible, son volume de recherche, et surtout son **univers sémantique** : mots-clés secondaires, entités liées, questions People Also Ask. C'est cette richesse sémantique qui permet à Google de comprendre la profondeur de votre contenu.

### 2. L'intention de recherche
Informationnelle, transactionnelle, navigationnelle, ou investigation commerciale ? L'intention détermine le type de contenu à produire. Un brief qui ignore l'intention produit des articles qui ne convertissent pas.

### 3. La structure Hn
Plan H1 → H2 → H3 détaillé, avec le mot-clé intégré naturellement dans chaque heading. La structure doit suivre une logique informationnelle claire et couvrir tous les aspects du sujet.

### 4. Les consignes de rédaction
Ton, style, longueur, angle différenciant, CTA, liens internes. Ces consignes garantissent la cohérence éditoriale entre tous vos articles.

### 5. L'optimisation technique
Meta title (< 60 caractères), meta description (< 155 caractères), URL suggérée, schema markup recommandé, alt-texts pour les images.

### 6. La checklist de publication
Une liste de 8-10 points de vérification avant mise en ligne : mots-clés, balises, liens, images, Yoast/RankMath, etc.

## Pourquoi automatiser la création de briefs ?

Créer un brief SEO manuellement prend entre 1h et 3h par article. Multiplié par une production hebdomadaire, c'est un goulot d'étranglement majeur pour les équipes content.

Breefy génère un brief complet en 30 secondes, avec la même qualité qu'un consultant SEO senior. Vous libérez un temps précieux pour vous concentrer sur la stratégie, le suivi des performances et l'optimisation.

## Conclusion

Un bon brief SEO, c'est la différence entre un article qui se positionne et un article qui reste invisible. En 2026, avec la saturation du web et la rigueur croissante des algorithmes Google, ne pas avoir de brief structuré, c'est partir avec un handicap.`,
  },
  {
    slug: "5-erreurs-brief-seo",
    title: "Les 5 erreurs qui ruinent vos briefs SEO",
    excerpt:
      "Ces erreurs fréquentes coûtent des positions sur Google. Voici comment les éviter et produire des briefs qui performent.",
    date: "2026-04-05",
    readTime: "6 min",
    content: `## Erreur n°1 : Oublier l'intention de recherche

Beaucoup de briefs listent des mots-clés sans se demander ce que l'utilisateur attend. Résultat : on produit un article informationnel pour une requête transactionnelle, et le taux de rebond explose.

**Solution** : pour chaque mot-clé cible, demandez-vous : que veut obtenir l'internaute ? Un guide ? Un comparatif ? Une page produit ? La réponse détermine le format.

## Erreur n°2 : Ne pas analyser la SERP

Un brief créé sans regarder la première page Google, c'est un brief à l'aveugle. Vous risquez de produire un article qui ne correspond ni au format attendu ni à la profondeur nécessaire.

**Solution** : analysez les 10 premiers résultats. Quelle est leur structure ? Leur longueur moyenne ? Leurs angles ? Votre article doit faire au moins aussi bien, idéalement mieux.

## Erreur n°3 : Donner trop de liberté au rédacteur

Paradoxe : plus un brief est vague, moins l'article performe. Un rédacteur, même excellent, ne devinera pas votre stratégie. S'il n'a pas de consignes claires, il fera du généraliste.

**Solution** : spécifiez le ton, l'angle différenciant, les exemples à inclure, les CTAs, les liens internes obligatoires.

## Erreur n°4 : Négliger les meta tags

Le meta title et la meta description sont la première chose que l'utilisateur voit sur Google. S'ils ne sont pas définis dans le brief, le rédacteur les improvise. Résultat : un CTR faible et un mauvais positionnement.

**Solution** : rédigez meta title et meta description dans le brief, en respectant les longueurs (60/155 caractères).

## Erreur n°5 : Oublier les questions PAA

Les questions "People Also Ask" sont une mine d'or SEO. Les intégrer dans votre contenu augmente vos chances d'apparaître en featured snippet et de capter du trafic additionnel.

**Solution** : incluez 5-8 questions PAA dans chaque brief, à traiter dans des sous-sections H2 ou H3.

## Conclusion

Ces 5 erreurs sont frustrantes parce qu'elles sont faciles à corriger. Un bon brief prend du temps à produire manuellement — c'est pour ça que Breefy existe. En 30 secondes, vous obtenez un brief qui évite tous ces pièges.`,
  },
  {
    slug: "comment-positionner-mots-cles-concurrentiels",
    title: "Comment se positionner sur des mots-clés concurrentiels",
    excerpt:
      "Stratégies pour attaquer des mots-clés à fort volume et forte concurrence, même avec un petit site.",
    date: "2026-04-02",
    readTime: "10 min",
    content: `## Le paradoxe des mots-clés concurrentiels

Les mots-clés à fort volume attirent tout le monde. C'est logique : plus de recherches = plus de trafic potentiel = plus de revenus. Mais ce sont aussi ceux où la compétition est la plus rude, souvent dominée par des mastodontes avec 10 ans d'historique et des milliers de backlinks.

Alors, faut-il abandonner ? Non. Il existe des stratégies éprouvées pour se positionner, même contre plus gros que vous.

## Stratégie 1 : La longue traîne ciblée

Plutôt que d'attaquer "meilleur CRM", visez "meilleur CRM pour agence immobilière". Le volume est plus faible, mais :
- La concurrence est divisée par 10
- L'intention est plus précise
- Le taux de conversion est bien meilleur

Accumulez 50 articles longue traîne, et vous avez un trafic qualifié stable que même les mastodontes ne peuvent pas vous voler.

## Stratégie 2 : Le "10x content"

Au lieu de produire un article "comme les autres mais en mieux", produisez un article **10 fois meilleur**. Plus long, plus visuel, plus pratique, avec des éléments uniques : études de cas, outils gratuits, calculateurs, templates téléchargeables.

Google récompense la différenciation. Un article 10x est celui qui devient la référence.

## Stratégie 3 : Le topic cluster

Ne publiez pas un article isolé. Publiez un **pillar page** (article pilier) sur le sujet principal, puis 10-15 articles satellites qui le complètent et pointent vers lui par des liens internes.

Ce maillage indique à Google votre expertise sur la thématique. Résultat : même un pillar jeune peut rapidement passer devant des pages concurrentes isolées.

## Stratégie 4 : Le brief SEO optimal

Un bon brief fait la différence. Il garantit que votre article :
- Couvre l'intention de recherche à 100%
- Intègre tous les mots-clés sémantiques
- Répond aux questions PAA
- Respecte la structure attendue par Google
- A des meta tags optimisés

C'est là que Breefy entre en jeu : un brief parfait, en 30 secondes, sans arbitrage manuel.

## Conclusion

Attaquer un mot-clé concurrentiel, c'est possible. Mais ça demande de la stratégie, pas de la force brute. Longue traîne, 10x content, topic cluster, briefs optimaux : voilà votre arsenal.`,
  },
  {
    slug: "ia-seo-2026",
    title: "IA et SEO en 2026 : ce qui a changé",
    excerpt:
      "Comment l'IA générative transforme le SEO, et pourquoi l'humain reste indispensable pour la stratégie.",
    date: "2026-03-28",
    readTime: "7 min",
    content: `## Le grand bouleversement

En 3 ans, l'IA générative a bouleversé le SEO. Les outils comme Claude, GPT et Gemini permettent de produire du contenu 100 fois plus vite qu'avant. Mais cette productivité a un prix : la saturation du web.

Google a répondu avec des mises à jour majeures (Helpful Content, E-E-A-T renforcé), qui pénalisent le contenu généré sans valeur ajoutée. En 2026, l'IA seule ne suffit plus.

## Ce qui marche en 2026

### 1. L'IA pour la structure, l'humain pour l'expertise
Utilisez l'IA pour ce qu'elle fait bien : structurer, analyser, suggérer. Mais gardez l'humain pour l'expertise réelle, les exemples concrets, les anecdotes. C'est ce que Google appelle l'E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).

### 2. Le brief SEO assisté par IA
L'endroit où l'IA apporte le plus de valeur : la préparation du brief. Analyse de la SERP, identification des mots-clés sémantiques, structure Hn, meta tags. Ce qui prenait 2h se fait en 30 secondes.

### 3. La personnalisation du contenu
L'IA permet de produire rapidement des variations d'un même contenu pour différentes audiences, personas, ou secteurs. Utile pour le programmatic SEO.

## Ce qui ne marche plus

- Le contenu 100% généré sans relecture
- Les articles sans exemples concrets
- Les textes sans personnalité éditoriale
- Le bourrage de mots-clés (depuis longtemps, mais c'est redevenu critique)

## Conclusion

L'IA est un outil puissant, mais ce n'est qu'un outil. En 2026, les gagnants sont ceux qui combinent productivité IA et expertise humaine. Breefy s'inscrit dans cette logique : l'IA fait le travail préparatoire, vous faites le travail éditorial.`,
  },
  {
    slug: "checklist-seo-avant-publication",
    title: "Checklist SEO : 15 points à vérifier avant de publier",
    excerpt:
      "La checklist complète pour vous assurer que chaque article est parfaitement optimisé avant la mise en ligne.",
    date: "2026-03-25",
    readTime: "5 min",
    content: `## La checklist SEO 2026

Voici les 15 points à vérifier avant toute publication.

### Mots-clés et sémantique
1. **Mot-clé principal** présent dans le H1, le premier paragraphe, et au moins 3 H2
2. **Mots-clés secondaires** répartis naturellement dans le corps
3. **Questions PAA** traitées dans des sous-sections
4. **Densité** : 1-2% pour le mot-clé principal, pas plus

### Structure
5. **Un seul H1**, qui contient le mot-clé principal
6. **Hiérarchie respectée** : H1 → H2 → H3, jamais de saut de niveau
7. **Longueur** : au moins 1500 mots pour un article de fond

### Meta tags
8. **Meta title** : < 60 caractères, contient le mot-clé, incite au clic
9. **Meta description** : < 155 caractères, contient le mot-clé, avec un CTA
10. **URL** : courte, lisible, contient le mot-clé

### Technique
11. **Images optimisées** : compression + alt-texts descriptifs avec mots-clés
12. **Liens internes** : au moins 3 vers des articles connexes
13. **Liens externes** : 1-2 vers des sources autoritaires
14. **Schema markup** : Article, FAQ, HowTo selon le type de contenu

### Qualité éditoriale
15. **Relecture humaine** : orthographe, cohérence, valeur ajoutée par rapport aux concurrents

## Automatiser la checklist

Breefy génère cette checklist automatiquement à la fin de chaque brief, adaptée au mot-clé et à l'intention. Plus besoin de la recréer manuellement à chaque article.

## Conclusion

Une checklist SEO rigoureuse, c'est la différence entre un article qui performe et un article qui stagne en page 3. Prenez 10 minutes avant chaque publication pour tout vérifier : c'est le meilleur investissement en SEO.`,
  },
  {
    slug: "longue-traine-seo-strategie",
    title: "La stratégie longue traîne : capter du trafic qualifié sans budget",
    excerpt:
      "Comment la longue traîne peut vous ramener plus de trafic qualifié que n'importe quelle autre stratégie SEO.",
    date: "2026-03-22",
    readTime: "9 min",
    content: `## Qu'est-ce que la longue traîne ?

En SEO, la longue traîne désigne les requêtes de recherche spécifiques, souvent composées de 4 mots ou plus, avec un volume de recherche individuel faible mais une intention très précise.

La longue traîne représente 70% des recherches Google. Et pourtant, la plupart des entreprises l'ignorent et s'épuisent à attaquer quelques mots-clés génériques ultra-compétitifs.

## Pourquoi la longue traîne gagne

### 1. Moins de concurrence
Les gros sites ciblent les mots-clés à fort volume. Vous pouvez vous positionner en page 1 sur une longue traîne en 2 semaines, là où il faudrait 2 ans pour une requête générique.

### 2. Taux de conversion supérieur
Plus la requête est précise, plus l'intention est claire. "Acheter chaussures running" convertit 10x mieux que "chaussures".

### 3. Effet cumulatif
50 articles longue traîne génèrent plus de trafic qu'un seul article générique. Et ce trafic est stable, car personne ne cherche à vous le voler.

## Comment trouver des mots-clés longue traîne

1. Google Suggest : tapez votre mot-clé + espace
2. People Also Ask : les questions liées
3. Forums (Reddit, Quora) : les vraies questions des gens
4. Outils : Semrush, Ahrefs, Google Search Console
5. Avis clients : comment ils décrivent leurs problèmes

## Structurer votre contenu longue traîne

Chaque article doit :
- Répondre précisément à UNE question
- Contenir la requête exacte dans le H1 et le premier paragraphe
- Être assez long (800-1500 mots suffisent)
- Inclure des questions PAA connexes

C'est là que Breefy excelle : un brief longue traîne ultra-ciblé en 30 secondes. Scalez à 50 articles sans y passer des mois.

## Conclusion

La longue traîne est le levier le plus puissant pour les sites qui démarrent. Avec 50 articles bien ciblés, vous construisez une moat SEO que personne ne peut vous prendre.`,
  },
  {
    slug: "e-e-a-t-google-2026",
    title: "E-E-A-T : comment Google évalue votre contenu en 2026",
    excerpt:
      "Experience, Expertise, Authoritativeness, Trustworthiness — les 4 piliers que Google utilise pour classer votre contenu.",
    date: "2026-03-18",
    readTime: "7 min",
    content: `## L'évolution de E-A-T à E-E-A-T

En décembre 2022, Google a ajouté un "E" à son célèbre E-A-T. Ce nouveau E signifie "Experience" — l'expérience vécue. Google veut savoir si vous avez réellement utilisé le produit, visité le lieu, testé la méthode.

En 2026, E-E-A-T est le critère numéro 1 pour évaluer la qualité d'un contenu, en particulier sur les sujets YMYL (Your Money Your Life).

## Les 4 piliers

### 1. Experience
Avez-vous personnellement vécu ce dont vous parlez ? Un test de chaussures par quelqu'un qui les a portées 6 mois vaut mille fois mieux qu'un résumé technique.

### 2. Expertise
Avez-vous les connaissances nécessaires ? Diplômes, certifications, années d'expérience pro.

### 3. Authoritativeness
Êtes-vous reconnu comme source fiable ? Mentions sur d'autres sites, backlinks, citations.

### 4. Trustworthiness
Votre site est-il fiable ? HTTPS, mentions légales, contact, informations à jour, transparence des sources.

## Comment appliquer E-E-A-T

### Créez des auteurs visibles
Chaque article doit avoir un nom d'auteur avec bio détaillée.

### Montrez votre expérience
Photos prises par vous, captures d'écran, anecdotes vécues.

### Citez vos sources
Liens vers études et experts reconnus.

### Mettez à jour
Révisez vos articles tous les 6 mois.

## E-E-A-T et briefs SEO

Un bon brief doit explicitement demander : exemples concrets, sources autoritaires, bio d'auteur, date de mise à jour. Breefy intègre E-E-A-T par défaut, particulièrement pour les sujets YMYL.

## Conclusion

En 2026, E-E-A-T n'est plus une option. C'est la base. Un contenu sans expérience, expertise, autorité et fiabilité ne se positionne plus.`,
  },
  {
    slug: "search-intent-guide",
    title: "Intention de recherche : comment l'identifier et l'exploiter",
    excerpt:
      "L'intention de recherche est le critère qui fait la différence entre un article qui convertit et un article qui déçoit.",
    date: "2026-03-14",
    readTime: "8 min",
    content: `## Qu'est-ce que l'intention de recherche ?

L'intention de recherche désigne ce que l'utilisateur cherche VRAIMENT quand il tape une requête. Elle se décompose en 4 familles :

1. **Informationnelle** : "comment faire du pain"
2. **Navigationnelle** : "facebook login"
3. **Transactionnelle** : "acheter iPhone 15"
4. **Investigation commerciale** : "meilleur CRM B2B"

Google est devenu expert pour identifier l'intention. Si vous ne répondez pas exactement à cette intention, votre article ne se positionnera pas.

## Comment identifier l'intention

### Méthode 1 : Analyser la SERP
Regardez les 10 premiers résultats Google :
- Articles de blog → informationnel
- Pages produit → transactionnel
- Comparatifs → investigation commerciale
- Sites officiels → navigationnel

### Méthode 2 : Les SERP Features
- Featured snippet → informationnel
- Shopping ads → transactionnel
- Local pack → local
- People Also Ask → informationnel approfondi

### Méthode 3 : Les modificateurs
- "comment", "pourquoi" → informationnel
- "acheter", "prix" → transactionnel
- "meilleur", "vs" → investigation commerciale

## Adapter votre contenu

### Pour l'informationnel
Article de blog long (1500+ mots), structure H1-H2-H3, réponse immédiate en début, FAQ en bas.

### Pour le transactionnel
Page produit concise, bénéfices, photos HD, CTA multiples, avis clients.

### Pour l'investigation commerciale
Comparatif structuré, tableau, pros/cons, recommandation claire, CTA vers essai gratuit.

## Brief SEO et intention

Breefy identifie automatiquement l'intention et génère un brief adapté : structure, longueur, angle, CTA. Vous choisissez l'intention, l'IA fait le reste.

## Conclusion

L'intention de recherche, c'est LE critère qui différencie un article qui performe d'un article qui déçoit. Prenez 30 secondes pour la valider à chaque brief.`,
  },
  {
    slug: "pillar-page-topic-cluster",
    title: "Pillar page et topic clusters : dominer une thématique",
    excerpt:
      "Comment structurer votre contenu en pillar pages et articles satellites pour dominer votre niche SEO.",
    date: "2026-03-10",
    readTime: "10 min",
    content: `## Le problème du contenu isolé

La plupart des blogs publient des articles isolés, sans liens entre eux. Google ne comprend pas votre expertise, votre topical authority reste faible.

La solution : le modèle **pillar page + topic cluster**.

## Qu'est-ce qu'une pillar page ?

Une pillar page est un contenu long et exhaustif qui couvre TOUS les aspects d'un sujet large. Exemple : "Stratégie de contenu : le guide complet 2026" (5000+ mots).

Elle résume chaque sous-sujet et pointe vers des articles satellites qui approfondissent.

## Qu'est-ce qu'un topic cluster ?

Un ensemble d'articles qui traitent chacun un sous-sujet en profondeur. Chaque satellite pointe vers la pillar page, et vice-versa.

Exemple autour de "Stratégie de contenu" :
- Pillar : Guide complet
- Satellite 1 : Calendrier éditorial
- Satellite 2 : Brief SEO
- Satellite 3 : KPIs content marketing
- Satellite 4 : Audit de contenu

## Pourquoi ça marche

1. **Topical authority** : Google comprend votre expertise
2. **Maillage interne puissant** : l'autorité circule dans le cluster
3. **Couverture exhaustive** : aucune requête longue traîne n'échappe
4. **UX** : les lecteurs restent plus longtemps sur votre site

## Comment construire un topic cluster

1. Choisissez un sujet large stratégique
2. Brainstorm des sous-sujets (20+)
3. Regroupez par thématique
4. Rédigez la pillar page (5000+ mots)
5. Rédigez les satellites (1500-2500 mots)
6. Maillez pillar ↔ satellites
7. Publiez 1-2 satellites par semaine

## Brief SEO pour pillar page

Breefy propose un template "Guide complet" spécifiquement pour les pillar pages. Utilisez-le pour démarrer votre cluster en 30 secondes.

## Conclusion

Les topic clusters sont la stratégie SEO la plus puissante pour construire une autorité durable. Plus de travail qu'un article isolé, mais 100x plus efficace sur le long terme.`,
  },
  {
    slug: "meta-title-description-optimization",
    title: "Meta title et description : les secrets pour exploser votre CTR",
    excerpt:
      "Comment écrire des meta tags qui attirent les clics et améliorent votre positionnement Google.",
    date: "2026-03-06",
    readTime: "6 min",
    content: `## Pourquoi les meta tags sont cruciaux

Le meta title et la meta description sont la première chose que Google montre de votre page. Si cet ensemble n'est pas attirant, personne ne clique, et votre article rate son potentiel.

Le CTR est un signal fort pour Google : plus il est élevé, plus votre page monte.

## Les règles du meta title

### 1. Longueur : 50-60 caractères
Au-delà, Google tronque avec "...".

### 2. Mot-clé en début
Dans les 30 premiers caractères.

### 3. Année si pertinent
"2026", "cette année" — les gens cliquent plus sur du frais.

### 4. Promesse de valeur
Power words : "complet", "guide", "meilleur", "gratuit", "étape par étape".

### 5. Nombre
Les titres avec chiffres performent mieux : "7 erreurs", "15 astuces".

## Les règles de la meta description

### 1. Longueur : 140-155 caractères

### 2. Reprendre le mot-clé
Il apparaîtra en gras dans Google.

### 3. Bénéfice clair
"Découvrez comment X en 5 minutes" > "Article sur X"

### 4. CTA implicite
"Découvrez", "Apprenez", "Téléchargez".

## Exemples avant/après

### Mauvais
- Title : "Comment faire du pain maison"
- Description : "Article sur comment faire du pain"

### Bon
- Title : "Recette pain maison : guide complet 2026 (sans machine)"
- Description : "Découvrez comment faire un pain maison croustillant en 1h, sans machine. Recette testée, photos et astuces du boulanger."

**Impact** : +40% de CTR en moyenne.

## Automatiser avec Breefy

Breefy génère automatiquement meta title et description optimisés pour chaque brief. Longueurs respectées, mots-clés intégrés, power words utilisés.

## Conclusion

Les meta tags sont souvent bâclés. C'est une opportunité énorme : soignez-les, et vous dépasserez des concurrents mieux positionnés, juste grâce à un meilleur CTR.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
