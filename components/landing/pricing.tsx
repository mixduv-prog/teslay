"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

type Period = "monthly" | "annual";

const getPlans = (period: Period) => [
  {
    name: "Free",
    price: "0",
    period: "",
    description: "Pour découvrir Breefy",
    features: ["3 briefs SEO gratuits", "Structure complète", "Export texte", "Historique illimité"],
    cta: "Commencer gratuitement",
    href: "/register",
    highlighted: false,
  },
  {
    name: "Starter",
    price: period === "monthly" ? "19" : "15",
    period: period === "monthly" ? "/mois" : "/mois (facturé annuellement)",
    description: "Pour les freelances et petites équipes",
    features: [
      "50 briefs/mois",
      "Structure complète",
      "Export texte",
      "Historique illimité",
      "Templates de briefs",
      "Support email",
    ],
    cta: "Choisir Starter",
    href: "/register?plan=starter",
    highlighted: true,
  },
  {
    name: "Pro",
    price: period === "monthly" ? "49" : "39",
    period: period === "monthly" ? "/mois" : "/mois (facturé annuellement)",
    description: "Pour les agences et équipes SEO",
    features: [
      "Briefs illimités",
      "Structure complète",
      "Export Markdown & PDF",
      "Historique illimité",
      "Tous les templates",
      "Partage public de briefs",
      "Support prioritaire",
    ],
    cta: "Choisir Pro",
    href: "/register?plan=pro",
    highlighted: false,
  },
];

export function Pricing() {
  const [period, setPeriod] = useState<Period>("monthly");
  const plans = getPlans(period);

  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-neutral-900 sm:text-4xl">
            Un prix simple, transparent
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Commencez gratuitement. Passez à un plan payant quand vous êtes prêt.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white p-1">
            <button
              onClick={() => setPeriod("monthly")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                period === "monthly" ? "bg-neutral-900 text-white" : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setPeriod("annual")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                period === "annual" ? "bg-neutral-900 text-white" : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Annuel
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">-20%</span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-green-500 bg-white shadow-lg shadow-green-500/10"
                  : "border-neutral-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-4 py-1 text-xs font-medium text-white">
                  Populaire
                </div>
              )}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-neutral-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-neutral-500">{plan.description}</p>
                <div className="mt-6">
                  <span className="font-serif text-5xl text-neutral-900">{plan.price}€</span>
                  <span className="text-sm text-neutral-500">{plan.period}</span>
                </div>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-neutral-600">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href={plan.href}>
                  <Button
                    variant={plan.highlighted ? "primary" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-neutral-500">
          <p>Paiement sécurisé via Stripe • Annulation à tout moment • Aucun engagement</p>
        </div>
      </div>
    </section>
  );
}
