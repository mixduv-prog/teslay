import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Programme d'affiliation — Breefy",
  description: "Gagnez 30% de commission récurrente en recommandant Breefy à votre audience.",
};

export default function AffiliatesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <header className="mb-16 text-center">
        <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-medium text-green-700">
          Programme d&apos;affiliation
        </div>
        <h1 className="mt-4 font-serif text-5xl text-neutral-900 sm:text-6xl">
          Gagnez <span className="text-green-500">30%</span> à vie
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-500">
          Recommandez Breefy à votre audience et touchez 30% de commission récurrente sur chaque client que vous apportez.
        </p>
      </header>

      <section className="mb-16 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-center">
          <div className="font-serif text-4xl text-green-500">30%</div>
          <div className="mt-2 text-sm font-medium text-neutral-900">Commission</div>
          <div className="mt-1 text-xs text-neutral-500">sur chaque paiement</div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-center">
          <div className="font-serif text-4xl text-green-500">12 mois</div>
          <div className="mt-2 text-sm font-medium text-neutral-900">Récurrence</div>
          <div className="mt-1 text-xs text-neutral-500">pour chaque client</div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-center">
          <div className="font-serif text-4xl text-green-500">60 jours</div>
          <div className="mt-2 text-sm font-medium text-neutral-900">Cookie</div>
          <div className="mt-1 text-xs text-neutral-500">durée de tracking</div>
        </div>
      </section>

      <section className="mb-16 space-y-8">
        <h2 className="font-serif text-3xl text-neutral-900 text-center">Comment ça marche</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-semibold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">Créez votre compte affilié</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Remplissez le formulaire ci-dessous. Approbation en 24h.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-semibold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">Partagez votre lien</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Blog, newsletter, réseaux sociaux, YouTube — où bon vous semble.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-semibold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">Touchez vos commissions</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Paiement mensuel via Stripe. Minimum 30€ pour le premier virement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8">
          <h2 className="font-serif text-2xl text-neutral-900 text-center">Exemple de revenus</h2>
          <p className="mt-2 text-center text-sm text-neutral-500">
            Ce que vous pouvez gagner en apportant des clients
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 text-center">
            <div>
              <div className="font-serif text-3xl text-neutral-900">10 clients</div>
              <div className="mt-1 text-sm text-neutral-500">Plan Starter</div>
              <div className="mt-3 text-green-600 font-semibold">57€/mois</div>
              <div className="text-xs text-neutral-400">soit 684€/an</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-neutral-900">50 clients</div>
              <div className="mt-1 text-sm text-neutral-500">Plan Starter</div>
              <div className="mt-3 text-green-600 font-semibold">285€/mois</div>
              <div className="text-xs text-neutral-400">soit 3 420€/an</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-neutral-900">100 clients</div>
              <div className="mt-1 text-sm text-neutral-500">Mix Starter/Pro</div>
              <div className="mt-3 text-green-600 font-semibold">900€/mois</div>
              <div className="text-xs text-neutral-400">soit 10 800€/an</div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-green-200 bg-green-50/50 p-12 text-center">
        <h2 className="font-serif text-3xl text-neutral-900">
          Devenez affilié Breefy
        </h2>
        <p className="mt-4 text-neutral-600">
          Écrivez-nous à affiliates@getbreefy.com pour rejoindre le programme.
        </p>
        <div className="mt-8">
          <a href="mailto:affiliates@getbreefy.com?subject=Demande%20programme%20affili%C3%A9%20Breefy">
            <Button size="lg">Je veux devenir affilié</Button>
          </a>
        </div>
      </section>
    </div>
  );
}
