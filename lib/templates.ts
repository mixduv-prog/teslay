export interface BriefTemplate {
  id: string;
  name: string;
  description: string;
  intent: string;
  tone: string;
  wordCount: number;
  notesTemplate: string;
}

export const templates: BriefTemplate[] = [
  {
    id: "article",
    name: "Article de blog",
    description: "Article de fond informationnel pour capter du trafic SEO organique",
    intent: "Informationnel",
    tone: "Pédagogique",
    wordCount: 1800,
    notesTemplate:
      "Article de blog informationnel. Objectif : se positionner sur Google et établir l'expertise. Structure claire avec intro, développement en sections, conclusion. Intégrer des exemples concrets et un CTA final vers une ressource/produit.",
  },
  {
    id: "product",
    name: "Page produit",
    description: "Page produit optimisée pour la conversion et le SEO transactionnel",
    intent: "Transactionnel",
    tone: "Commercial",
    wordCount: 1200,
    notesTemplate:
      "Page produit optimisée conversion. Mettre en avant : bénéfices utilisateur, caractéristiques clés, preuves sociales, garanties, CTA multiples. Structure orientée décision d'achat.",
  },
  {
    id: "landing",
    name: "Landing page",
    description: "Landing page de campagne avec objectif de conversion clair",
    intent: "Transactionnel",
    tone: "Commercial",
    wordCount: 900,
    notesTemplate:
      "Landing page de conversion. Un seul objectif. Hero avec proposition de valeur, sections courtes, preuves sociales, FAQ, CTA répété. Ton direct et orienté bénéfices.",
  },
  {
    id: "comparatif",
    name: "Comparatif",
    description: "Article comparatif pour capter des requêtes investigation commerciale",
    intent: "Commercial",
    tone: "Expert",
    wordCount: 2500,
    notesTemplate:
      "Comparatif d'outils/produits. Présenter un tableau comparatif, analyser chaque option (pros/cons), recommandations par cas d'usage. Ton expert et objectif. Inclure critères de choix.",
  },
  {
    id: "guide",
    name: "Guide complet",
    description: "Guide exhaustif (pillar page) pour dominer une thématique",
    intent: "Informationnel",
    tone: "Expert",
    wordCount: 3500,
    notesTemplate:
      "Pillar page exhaustive. Couvrir TOUS les aspects du sujet. Table des matières cliquable, sections denses, exemples, outils, ressources. Objectif : devenir la référence. Inclure des liens vers des articles satellites.",
  },
  {
    id: "howto",
    name: "Tutoriel",
    description: "Tutoriel pas-à-pas orienté action",
    intent: "Informationnel",
    tone: "Pédagogique",
    wordCount: 1500,
    notesTemplate:
      "Tutoriel pas-à-pas. Structure en étapes numérotées, captures d'écran, prérequis, résultat attendu, troubleshooting. Ton direct et pratique. Inclure schema markup HowTo.",
  },
];

export function getTemplateById(id: string): BriefTemplate | undefined {
  return templates.find((t) => t.id === id);
}
