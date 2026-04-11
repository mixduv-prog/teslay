import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "À propos — Breefy",
  description: "L'histoire de Breefy, notre mission et pourquoi on a créé le meilleur générateur de briefs SEO.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <header className="mb-16 text-center">
        <h1 className="font-serif text-5xl text-neutral-900 sm:text-6xl">
          Notre mission
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600 leading-relaxed">
          Rendre la création de contenu SEO <em>rapide</em>, <em>structurée</em> et <em>accessible</em> à tous.
        </p>
      </header>

      <section className="mb-16 space-y-6">
        <h2 className="font-serif text-3xl text-neutral-900">Le problème</h2>
        <p className="text-base leading-relaxed text-neutral-700">
          Créer un bon brief SEO prend entre 1 et 3 heures par article. Analyse de la SERP,
          recherche de mots-clés, structure Hn, questions PAA, meta tags, checklist... C&apos;est
          un travail rigoureux mais répétitif.
        </p>
        <p className="text-base leading-relaxed text-neutral-700">
          Résultat : les équipes content passent plus de temps à préparer qu&apos;à créer.
          Les briefs sont bâclés, les articles perdent en qualité SEO, et la production ralentit.
        </p>
      </section>

      <section className="mb-16 space-y-6">
        <h2 className="font-serif text-3xl text-neutral-900">La solution : Breefy</h2>
        <p className="text-base leading-relaxed text-neutral-700">
          Breefy utilise l&apos;IA Claude d&apos;Anthropic pour générer des briefs SEO complets
          en 30 secondes. Pas un template générique — un vrai brief, structuré comme celui
          d&apos;un consultant SEO senior avec 15 ans d&apos;expérience.
        </p>
        <p className="text-base leading-relaxed text-neutral-700">
          Nous avons investi des dizaines d&apos;heures à perfectionner le prompt, les templates
          et la structure. Chaque brief contient tout ce qu&apos;un rédacteur a besoin pour
          produire un article qui se positionne.
        </p>
      </section>

      <section className="mb-16 space-y-6">
        <h2 className="font-serif text-3xl text-neutral-900">Nos valeurs</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <div className="text-2xl">⚡</div>
            <h3 className="mt-3 font-semibold text-neutral-900">Rapidité</h3>
            <p className="mt-2 text-sm text-neutral-600">
              30 secondes pour un brief complet. Pas de friction, pas d&apos;attente.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <div className="text-2xl">🎯</div>
            <h3 className="mt-3 font-semibold text-neutral-900">Qualité</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Pas de génération générique. Chaque brief est directement actionnable.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <div className="text-2xl">💰</div>
            <h3 className="mt-3 font-semibold text-neutral-900">Accessibilité</h3>
            <p className="mt-2 text-sm text-neutral-600">
              7x moins cher que Semrush ou Ahrefs. Un freelance doit pouvoir se l&apos;offrir.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <div className="text-2xl">🔒</div>
            <h3 className="mt-3 font-semibold text-neutral-900">Respect</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Vos briefs sont privés. Pas de tracking intrusif, pas de revente de données.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 space-y-6">
        <h2 className="font-serif text-3xl text-neutral-900">Nos ambitions</h2>
        <p className="text-base leading-relaxed text-neutral-700">
          Nous construisons Breefy pour qu&apos;il devienne l&apos;outil indispensable de toute
          équipe content : agences, freelances, in-house. Notre roadmap inclut :
        </p>
        <ul className="space-y-2 text-neutral-700">
          <li className="flex items-start gap-3">
            <svg className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Analyse SERP en temps réel pour chaque brief</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Intégration Notion, Google Docs, Asana</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Mode équipe : partage, commentaires, validation</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>API publique pour intégrations custom</span>
          </li>
        </ul>
      </section>

      <section className="rounded-2xl border border-green-200 bg-green-50/50 p-12 text-center">
        <h2 className="font-serif text-3xl text-neutral-900">
          Rejoignez-nous dans l&apos;aventure
        </h2>
        <p className="mt-4 text-neutral-600">
          Testez Breefy gratuitement et devenez l&apos;un de nos premiers utilisateurs.
        </p>
        <div className="mt-8">
          <Link href="/register">
            <Button size="lg">Créer mon compte gratuit</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
