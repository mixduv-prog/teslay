"use client";

import { useState } from "react";
import { Button } from "../ui/button";

const SAMPLE_BRIEF = `# Brief SEO : Comment créer une stratégie de contenu efficace en 2025

## Résumé stratégique
Cet article cible les responsables marketing et entrepreneurs qui souhaitent structurer leur production de contenu. L'objectif est de se positionner sur une requête informationnelle à fort volume, en proposant une méthodologie concrète et actuelle, différenciée par des exemples chiffrés et des templates actionnables.

## Mots-clés
- **Mot-clé principal** : stratégie de contenu (2 400 vol/mois)
- **Mots-clés secondaires** : plan de contenu, calendrier éditorial, content marketing, stratégie éditoriale, pillar page, content mapping, marketing de contenu, création de contenu, SEO content
- **Questions PAA** :
  - Comment élaborer une stratégie de contenu ?
  - Quels sont les piliers d'une bonne stratégie de contenu ?
  - Comment mesurer l'efficacité de sa stratégie de contenu ?
  - Quelle est la différence entre stratégie de contenu et calendrier éditorial ?
  - Combien de contenus publier par mois ?

## Structure de l'article
### H1 : Comment créer une stratégie de contenu efficace en 2025
### H2 : Qu'est-ce qu'une stratégie de contenu ?
  - H3 : Définition et enjeux
  - H3 : Stratégie de contenu vs calendrier éditorial
### H2 : Les 5 étapes pour construire votre stratégie
  - H3 : Étape 1 — Définir vos objectifs business
  - H3 : Étape 2 — Analyser votre audience
  - H3 : Étape 3 — Audit et content mapping
  - H3 : Étape 4 — Planifier avec un calendrier éditorial
  - H3 : Étape 5 — Mesurer et itérer

## Optimisation technique
- **Meta title** : Stratégie de contenu : guide complet 2025
- **Meta description** : Découvrez comment créer une stratégie de contenu performante en 5 étapes. Méthode, templates et exemples concrets.
- **URL suggérée** : /strategie-de-contenu`;

export function Demo() {
  const [keyword, setKeyword] = useState("");
  const [showBrief, setShowBrief] = useState(false);

  const handleDemo = (e: React.FormEvent) => {
    e.preventDefault();
    setShowBrief(true);
  };

  return (
    <section className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-neutral-900 sm:text-4xl">
            Essayez par vous-même
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Entrez un mot-clé et découvrez à quoi ressemble un brief Breefy.
          </p>
        </div>

        <form onSubmit={handleDemo} className="mt-10 flex gap-3">
          <input
            type="text"
            placeholder="Entrez un mot-clé, ex: stratégie de contenu"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="flex-1 rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
          />
          <Button type="submit" size="lg">
            Générer
          </Button>
        </form>

        {showBrief && (
          <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-sm text-green-600">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              Exemple de brief (démonstration)
            </div>
            <div className="prose prose-neutral prose-sm max-w-none">
              <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-neutral-700">
                {SAMPLE_BRIEF}
              </pre>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
