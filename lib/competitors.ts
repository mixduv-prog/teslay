export interface Competitor {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  differences: {
    feature: string;
    breefy: string;
    competitor: string;
  }[];
  summary: string;
}

export const competitors: Competitor[] = [
  {
    slug: "semrush",
    name: "Semrush",
    tagline: "Suite SEO complète vs Breefy : générateur de briefs spécialisé",
    price: "139$/mois",
    summary:
      "Semrush est une suite SEO complète avec recherche de mots-clés, audit de site, analyse backlink et bien plus. Breefy est 7x moins cher et se concentre sur ce qui compte vraiment pour les équipes content : des briefs SEO prêts à l'emploi en 30 secondes.",
    differences: [
      { feature: "Prix de départ", breefy: "19€/mois", competitor: "139$/mois" },
      { feature: "Génération de briefs", breefy: "En 30 secondes, IA Claude", competitor: "Template générique, saisie manuelle" },
      { feature: "Templates sectoriels", breefy: "6 templates inclus", competitor: "Non" },
      { feature: "Onboarding", breefy: "< 1 minute", competitor: "Plusieurs heures" },
      { feature: "Export Markdown", breefy: "Oui (Pro)", competitor: "Non" },
      { feature: "Partage public de briefs", breefy: "Oui", competitor: "Non" },
    ],
  },
  {
    slug: "surfer",
    name: "Surfer SEO",
    tagline: "Optimisation on-page vs Breefy : brief éditorial complet",
    price: "89$/mois",
    summary:
      "Surfer SEO est un excellent outil d'optimisation on-page, mais il se concentre sur l'analyse post-rédaction. Breefy vous donne le brief AVANT l'écriture, avec structure, mots-clés et consignes. Complémentaires, mais Breefy est indispensable pour la phase de planification.",
    differences: [
      { feature: "Prix de départ", breefy: "19€/mois", competitor: "89$/mois" },
      { feature: "Type d'outil", breefy: "Brief avant rédaction", competitor: "Analyse après rédaction" },
      { feature: "Structure Hn auto", breefy: "Oui", competitor: "Suggestions uniquement" },
      { feature: "Templates", breefy: "6 templates", competitor: "Non" },
      { feature: "Langues", breefy: "6 langues natives", competitor: "Multi-langue limité" },
      { feature: "Export Markdown", breefy: "Oui (Pro)", competitor: "Non" },
    ],
  },
  {
    slug: "frase",
    name: "Frase",
    tagline: "Éditeur AI vs Breefy : brief structuré pur jus",
    price: "45$/mois",
    summary:
      "Frase est un éditeur AI qui mélange brief et écriture. Breefy est ultra-focalisé sur le brief éditorial : pas d'éditeur, pas de génération d'article, juste le meilleur brief possible, livré en 30 secondes. Parfait pour les équipes qui ont déjà leurs rédacteurs.",
    differences: [
      { feature: "Prix de départ", breefy: "19€/mois", competitor: "45$/mois" },
      { feature: "Focus", breefy: "Brief éditorial", competitor: "Brief + édition" },
      { feature: "Vitesse", breefy: "30 secondes", competitor: "2-5 minutes" },
      { feature: "IA", breefy: "Claude Sonnet 4.6", competitor: "GPT" },
      { feature: "Partage public", breefy: "Oui", competitor: "Limité" },
      { feature: "Interface", breefy: "Minimaliste, éditoriale", competitor: "Dense, technique" },
    ],
  },
  {
    slug: "ahrefs",
    name: "Ahrefs",
    tagline: "Analyse backlinks vs Breefy : briefs éditoriaux actionnables",
    price: "129$/mois",
    summary:
      "Ahrefs est la référence pour l'analyse backlinks et la recherche de mots-clés. Mais pour produire du contenu, il faut autre chose. Breefy prend le relais : un brief SEO prêt à l'emploi en 30 secondes, pour 7x moins cher. Idéal en complément d'Ahrefs.",
    differences: [
      { feature: "Prix de départ", breefy: "19€/mois", competitor: "129$/mois" },
      { feature: "Force principale", breefy: "Briefs éditoriaux", competitor: "Analyse backlinks" },
      { feature: "Génération de briefs", breefy: "IA en 30 secondes", competitor: "Manuel" },
      { feature: "Templates sectoriels", breefy: "6 templates", competitor: "Non" },
      { feature: "Export Markdown", breefy: "Oui", competitor: "Non" },
      { feature: "Onboarding", breefy: "< 1 minute", competitor: "Formation nécessaire" },
    ],
  },
];

export function getCompetitorBySlug(slug: string): Competitor | undefined {
  return competitors.find((c) => c.slug === slug);
}
