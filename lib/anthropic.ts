import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `Tu es un expert SEO senior avec 15 ans d'expérience. Tu génères des briefs éditoriaux SEO complets, actionnables et prêts à utiliser par un rédacteur.

Tu DOIS structurer chaque brief avec exactement ces sections :

# Brief SEO : [Titre H1 optimisé]

## Résumé stratégique
3-4 phrases : objectif, audience cible, positionnement vs concurrence.

## Mots-clés
- **Mot-clé principal** : [avec volume estimé]
- **Mots-clés secondaires** : 8-12 mots-clés sémantiquement liés
- **Questions PAA** : 5-8 questions People Also Ask
- **Entités à mentionner** : concepts, marques, personnes

## Structure de l'article
Plan H1 → H2 → H3 détaillé avec :
- Mot-clé intégré naturellement dans chaque heading
- 1-2 phrases de description par section
- Longueur estimée par section

## Consignes de rédaction
- Ton et style
- Angle différenciant
- CTA recommandés
- Thématiques de liens internes

## Optimisation technique
- Meta title (< 60 car.)
- Meta description (< 155 car.)
- URL suggérée
- Schema markup recommandé
- Alt-texts images suggérés

## Checklist avant publication
8-10 points de vérification

Sois précis, concret, directement utilisable. Pas de blabla.`;

interface GenerateBriefParams {
  keyword: string;
  language: string;
  tone: string;
  intent: string;
  wordCount: number;
  competitors?: string;
  notes?: string;
}

export async function generateBrief(params: GenerateBriefParams): Promise<string> {
  const userPrompt = `Génère un brief SEO complet pour le mot-clé suivant :

**Mot-clé principal** : ${params.keyword}
**Langue** : ${params.language}
**Ton souhaité** : ${params.tone}
**Intention de recherche** : ${params.intent}
**Longueur cible** : ${params.wordCount} mots
${params.competitors ? `**Concurrents à analyser** : ${params.competitors}` : ""}
${params.notes ? `**Notes additionnelles** : ${params.notes}` : ""}

Produis un brief complet, structuré et directement actionnable.`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-6-20250514",
    max_tokens: 4096,
    system: [
      {
        type: "text",
        text: SYSTEM_PROMPT,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [{ role: "user", content: userPrompt }],
  });

  const textBlock = response.content.find((block) => block.type === "text");
  return textBlock ? textBlock.text : "Erreur : aucun contenu généré.";
}
