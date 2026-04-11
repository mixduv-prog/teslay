import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Exemples de briefs SEO — Breefy",
  description:
    "Découvrez des exemples de briefs SEO générés par Breefy pour différents types de contenus et secteurs.",
};

const examples = [
  {
    keyword: "stratégie de contenu 2026",
    intent: "Informationnel",
    industry: "Marketing",
    preview:
      "Brief complet pour un article de fond sur la stratégie de contenu en 2026. Structure pillar page, mots-clés sémantiques, questions PAA, meta tags optimisés.",
  },
  {
    keyword: "meilleur CRM pour startup",
    intent: "Commercial",
    industry: "SaaS",
    preview:
      "Brief pour un comparatif CRM B2B. Intention commerciale, tableau comparatif, critères de choix, CTA vers essais gratuits.",
  },
  {
    keyword: "recette pain maison facile",
    intent: "Informationnel",
    industry: "Cuisine",
    preview:
      "Brief pour un tutoriel culinaire. Structure pas-à-pas, schema HowTo, photos suggérées, FAQ finale.",
  },
  {
    keyword: "assurance vie comparatif 2026",
    intent: "Commercial",
    industry: "Finance",
    preview:
      "Brief YMYL conforme E-E-A-T. Comparatif assurances, mentions légales, garanties, fiscalité, cas d'usage.",
  },
  {
    keyword: "yoga débutant maison",
    intent: "Informationnel",
    industry: "Bien-être",
    preview:
      "Brief pour guide complet yoga. Postures illustrées, routine 15 min, contre-indications, progressions.",
  },
  {
    keyword: "investir immobilier locatif",
    intent: "Commercial",
    industry: "Immobilier",
    preview:
      "Brief stratégie d'investissement. Calcul rendement, fiscalité, zones attractives, erreurs à éviter.",
  },
];

export default function ExamplesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <header className="mb-16 text-center">
        <h1 className="font-serif text-5xl text-neutral-900 sm:text-6xl">
          Exemples de briefs
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-500">
          Voici le type de briefs que Breefy génère en 30 secondes pour vos mots-clés. Créez votre compte gratuit pour en tester 3.
        </p>
        <div className="mt-8">
          <Link href="/register">
            <Button size="lg">Créer mon compte gratuit</Button>
          </Link>
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {examples.map((ex, i) => (
          <div
            key={i}
            className="rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                {ex.industry}
              </span>
              <span className="text-xs text-neutral-400">{ex.intent}</span>
            </div>
            <h3 className="mt-4 font-serif text-xl text-neutral-900">{ex.keyword}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{ex.preview}</p>
            <div className="mt-4 flex items-center gap-1 text-xs text-neutral-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Généré en 30 secondes
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-2xl border border-green-200 bg-green-50/50 p-12 text-center">
        <h2 className="font-serif text-3xl text-neutral-900">
          Générez votre premier brief gratuitement
        </h2>
        <p className="mt-4 text-neutral-600">
          3 briefs offerts. Aucune carte bancaire requise.
        </p>
        <div className="mt-8">
          <Link href="/register">
            <Button size="lg">Commencer gratuitement</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
