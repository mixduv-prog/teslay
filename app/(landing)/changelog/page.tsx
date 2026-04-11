import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — Breefy",
  description: "L'historique des évolutions et améliorations apportées à Breefy.",
};

const releases = [
  {
    version: "1.3.0",
    date: "2026-04-11",
    title: "Cas d'usage, exemples et partage public",
    changes: [
      { type: "new", text: "8 nouvelles pages cas d'usage (SaaS, e-commerce, agence, immobilier, finance, santé, éducation, freelance SEO)" },
      { type: "new", text: "Page /exemples avec briefs pré-générés" },
      { type: "new", text: "Partage public de briefs via /b/[id]" },
      { type: "new", text: "Pages de comparaison vs concurrents" },
      { type: "new", text: "Onboarding wizard pour les nouveaux utilisateurs" },
      { type: "improvement", text: "Section 'Comment ça marche' sur la landing" },
    ],
  },
  {
    version: "1.2.0",
    date: "2026-04-10",
    title: "Templates, recherche et sécurité",
    changes: [
      { type: "new", text: "6 templates de briefs (article, produit, landing, comparatif, guide, tutoriel)" },
      { type: "new", text: "Recherche et filtres dans le dashboard" },
      { type: "new", text: "Suppression de briefs avec confirmation" },
      { type: "new", text: "Annual pricing avec -20% de réduction" },
      { type: "new", text: "Testimonials et section Stats" },
      { type: "improvement", text: "Rate limiting sur l'API (10 briefs/min)" },
      { type: "improvement", text: "Validation Zod sur les inputs API" },
    ],
  },
  {
    version: "1.1.0",
    date: "2026-04-09",
    title: "SEO et légal",
    changes: [
      { type: "new", text: "Pages légales (CGU, Confidentialité, Mentions légales)" },
      { type: "new", text: "Blog avec 5 articles SEO" },
      { type: "new", text: "Sitemap.xml et robots.txt dynamiques" },
      { type: "new", text: "Méta-tags OpenGraph et Twitter Cards" },
      { type: "new", text: "Favicon et icon Apple personnalisés" },
    ],
  },
  {
    version: "1.0.0",
    date: "2026-04-08",
    title: "Lancement de Breefy",
    changes: [
      { type: "new", text: "Génération de briefs SEO via Claude Sonnet 4.6" },
      { type: "new", text: "Authentification Google OAuth" },
      { type: "new", text: "Dashboard avec historique" },
      { type: "new", text: "3 plans : Free / Starter / Pro" },
      { type: "new", text: "Intégration Stripe pour les abonnements" },
      { type: "new", text: "Export texte et Markdown" },
    ],
  },
];

const typeColors = {
  new: "bg-green-100 text-green-700 border-green-200",
  improvement: "bg-blue-100 text-blue-700 border-blue-200",
  fix: "bg-orange-100 text-orange-700 border-orange-200",
};

const typeLabels = {
  new: "Nouveau",
  improvement: "Amélioration",
  fix: "Correctif",
};

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <header className="mb-16 text-center">
        <h1 className="font-serif text-5xl text-neutral-900 sm:text-6xl">Changelog</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-500">
          L&apos;historique des améliorations et nouveautés de Breefy.
        </p>
      </header>

      <div className="space-y-12">
        {releases.map((release) => (
          <article key={release.version}>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
                v{release.version}
              </span>
              <time className="text-xs text-neutral-400">
                {new Date(release.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
            <h2 className="font-serif text-2xl text-neutral-900">{release.title}</h2>
            <ul className="mt-4 space-y-2">
              {release.changes.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium flex-shrink-0 ${
                      typeColors[c.type as keyof typeof typeColors]
                    }`}
                  >
                    {typeLabels[c.type as keyof typeof typeLabels]}
                  </span>
                  <span className="text-sm text-neutral-700">{c.text}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
