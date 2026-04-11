"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Qu'est-ce qu'un brief SEO ?",
    answer:
      "Un brief SEO est un document qui guide la rédaction d'un article optimisé pour les moteurs de recherche. Il contient les mots-clés cibles, la structure recommandée (H1, H2, H3), les consignes de rédaction, les meta tags et une checklist de publication. C'est l'outil essentiel pour produire du contenu qui se positionne.",
  },
  {
    question: "Comment fonctionne la génération de briefs ?",
    answer:
      "Breefy utilise l'API Claude d'Anthropic pour analyser votre mot-clé et générer un brief complet. Notre système est pré-configuré avec l'expertise d'un consultant SEO senior : il analyse l'intention de recherche, identifie les mots-clés sémantiques, structure le contenu et produit des recommandations techniques actionnables.",
  },
  {
    question: "Puis-je utiliser Breefy pour du contenu multilingue ?",
    answer:
      "Oui ! Breefy supporte la génération de briefs en français, anglais, espagnol, allemand, italien et portugais. Le brief sera entièrement rédigé dans la langue choisie, avec des recommandations SEO adaptées au marché local.",
  },
  {
    question: "Que se passe-t-il quand j'utilise mes 3 briefs gratuits ?",
    answer:
      "Une fois vos 3 briefs gratuits épuisés, vous pouvez passer au plan Starter (19€/mois pour 50 briefs) ou Pro (49€/mois pour des briefs illimités). Vous conservez l'accès à vos briefs générés précédemment.",
  },
  {
    question: "Puis-je exporter mes briefs ?",
    answer:
      "Oui. Tous les plans permettent de copier vos briefs en texte brut. Le plan Pro ajoute l'export en Markdown, idéal pour l'intégrer directement dans vos outils de rédaction ou votre CMS.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-neutral-900 sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-neutral-200 bg-white">
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-base font-medium text-neutral-900">{faq.question}</span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-neutral-400 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed text-neutral-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
