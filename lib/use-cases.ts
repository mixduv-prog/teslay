export interface UseCase {
  slug: string;
  industry: string;
  emoji: string;
  title: string;
  description: string;
  benefits: string[];
  exampleKeywords: string[];
  quote: string;
  persona: string;
}

export const useCases: UseCase[] = [
  {
    slug: "saas",
    industry: "SaaS",
    emoji: "⚡",
    title: "Breefy pour les équipes SaaS",
    description:
      "Générez des briefs SEO pour votre blog SaaS, vos pages produit, vos comparatifs et vos landing pages. Optimisés pour le positionnement sur des requêtes techniques.",
    benefits: [
      "Briefs adaptés au jargon technique et aux personas tech",
      "Structure type pour comparatifs (vs concurrents)",
      "Optimisation pour les requêtes de considération commerciale",
      "Intégration naturelle de CTAs vers l'essai gratuit",
    ],
    exampleKeywords: [
      "meilleur CRM pour startups",
      "outils de project management",
      "alternative à Notion",
      "SaaS B2B marketing",
    ],
    quote:
      "Breefy nous a permis de scaler notre production de contenu de 5 à 20 articles par mois.",
    persona: "Content Manager SaaS",
  },
  {
    slug: "ecommerce",
    industry: "E-commerce",
    emoji: "🛍️",
    title: "Breefy pour les e-commerçants",
    description:
      "Créez des briefs optimisés pour vos pages produit, vos guides d'achat, vos articles de blog. Parfait pour le SEO transactionnel et informationnel.",
    benefits: [
      "Briefs structurés pour pages produit optimisées conversion",
      "Guides d'achat avec intention commerciale",
      "Articles de blog pour capter du trafic organique",
      "Optimisation meta title et description pour CTR Google",
    ],
    exampleKeywords: [
      "meilleur aspirateur robot 2026",
      "comment choisir un matelas",
      "guide d'achat vélo électrique",
      "comparatif machines à café",
    ],
    quote:
      "En 3 mois, notre trafic organique a doublé grâce aux briefs Breefy.",
    persona: "Responsable acquisition e-commerce",
  },
  {
    slug: "agence-marketing",
    industry: "Agence marketing",
    emoji: "🎯",
    title: "Breefy pour les agences",
    description:
      "Produisez rapidement des briefs professionnels pour vos clients. Standardisez votre processus et libérez du temps pour la stratégie.",
    benefits: [
      "10x plus de briefs produits à qualité constante",
      "Standardisation pour toute l'équipe",
      "Briefs white-label personnalisables",
      "Templates adaptés à chaque client",
    ],
    exampleKeywords: [
      "marketing automation B2B",
      "stratégie inbound marketing",
      "agence SEO Paris",
      "growth hacking startup",
    ],
    quote:
      "On a divisé par 5 le temps passé sur les briefs. Nos clients sont ravis de la qualité.",
    persona: "Directeur d'agence marketing",
  },
  {
    slug: "freelance-seo",
    industry: "Freelance SEO",
    emoji: "🧑‍💻",
    title: "Breefy pour les freelances SEO",
    description:
      "L'outil indispensable pour freelances qui gèrent plusieurs clients. Produisez des briefs premium sans y passer des heures.",
    benefits: [
      "Scalez votre production sans embaucher",
      "Briefs premium à livrer à vos clients",
      "Templates pour chaque type de contenu",
      "Export Markdown prêt à partager",
    ],
    exampleKeywords: [
      "consultant SEO indépendant",
      "audit SEO complet",
      "stratégie netlinking",
      "optimisation on-page",
    ],
    quote:
      "Grâce à Breefy, je prends 3x plus de clients sans exploser mon planning.",
    persona: "Consultant SEO freelance",
  },
  {
    slug: "immobilier",
    industry: "Immobilier",
    emoji: "🏡",
    title: "Breefy pour l'immobilier",
    description:
      "Briefs SEO spécifiquement pour les agences immobilières, plateformes d'annonces et blogs spécialisés. Optimisation locale et requêtes commerciales.",
    benefits: [
      "Contenu local-friendly avec entités géographiques",
      "Briefs pour guides de quartier et conseils achat",
      "Optimisation pour les requêtes à forte intention",
      "Focus sur les conversions et prises de contact",
    ],
    exampleKeywords: [
      "acheter appartement Paris 15e",
      "investir dans l'immobilier locatif",
      "diagnostic énergétique obligatoire",
      "PTZ 2026 conditions",
    ],
    quote:
      "Nos guides de quartier génèrent 40% de leads en plus depuis qu'on utilise Breefy.",
    persona: "Marketing manager, réseau d'agences",
  },
  {
    slug: "finance",
    industry: "Finance",
    emoji: "💰",
    title: "Breefy pour la finance",
    description:
      "Créez des contenus financiers optimisés YMYL (Your Money Your Life). Structure E-E-A-T pour respecter les exigences de Google.",
    benefits: [
      "Briefs conformes aux standards YMYL de Google",
      "Structure E-E-A-T (expertise, autorité, fiabilité)",
      "Intégration des mentions légales obligatoires",
      "Optimisation pour la confiance utilisateur",
    ],
    exampleKeywords: [
      "meilleur PEA 2026",
      "comment investir en bourse",
      "assurance vie comparatif",
      "crédit immobilier taux",
    ],
    quote:
      "Les briefs sont rigoureux et respectent nos obligations légales. Gain de temps énorme.",
    persona: "Responsable contenu, fintech",
  },
  {
    slug: "sante",
    industry: "Santé",
    emoji: "🏥",
    title: "Breefy pour la santé et bien-être",
    description:
      "Générez des briefs santé E-E-A-T compliant. Idéal pour cliniques, plateformes de téléconsultation, blogs médicaux, marques wellness.",
    benefits: [
      "Conformité E-E-A-T pour contenus YMYL santé",
      "Structure favorisant l'autorité médicale",
      "Integration des disclaimer santé",
      "Optimisation pour les featured snippets médicaux",
    ],
    exampleKeywords: [
      "symptômes du stress chronique",
      "régime méditerranéen bénéfices",
      "qualité du sommeil",
      "téléconsultation médicale",
    ],
    quote:
      "Les briefs Breefy nous aident à produire du contenu santé rigoureux et bien positionné.",
    persona: "Directrice éditoriale, plateforme santé",
  },
  {
    slug: "education",
    industry: "Éducation",
    emoji: "📚",
    title: "Breefy pour l'éducation et la formation",
    description:
      "Briefs optimisés pour organismes de formation, edtech, écoles, blogs pédagogiques. Parfait pour le SEO informationnel et le lead gen.",
    benefits: [
      "Briefs pédagogiques structurés pour apprentissage",
      "Intégration des CTAs vers catalogues de formation",
      "Optimisation des pages descriptives de cours",
      "Contenus evergreen pour trafic long terme",
    ],
    exampleKeywords: [
      "formation développeur web",
      "apprendre l'anglais rapidement",
      "bootcamp data science",
      "certification Google Analytics",
    ],
    quote:
      "Nos pages de formation sont mieux positionnées grâce aux briefs structurés.",
    persona: "Marketing lead, organisme de formation",
  },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}
