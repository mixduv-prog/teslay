import Link from "next/link";
import { Button } from "../ui/button";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "",
    description: "Pour découvrir BriefCraft",
    features: ["3 briefs SEO gratuits", "Structure complète", "Export texte"],
    cta: "Commencer gratuitement",
    href: "/register",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "19",
    period: "/mois",
    description: "Pour les freelances et petites équipes",
    features: [
      "50 briefs/mois",
      "Structure complète",
      "Export texte",
      "Historique illimité",
      "Support email",
    ],
    cta: "Choisir Starter",
    href: "/register?plan=starter",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "49",
    period: "/mois",
    description: "Pour les agences et équipes SEO",
    features: [
      "Briefs illimités",
      "Structure complète",
      "Export Markdown",
      "Historique illimité",
      "Support prioritaire",
      "API access (bientôt)",
    ],
    cta: "Choisir Pro",
    href: "/register?plan=pro",
    highlighted: false,
  },
];

export function Pricing() {
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
                  <span className="text-neutral-500">{plan.period}</span>
                </div>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-neutral-600">
                    <svg className="h-4 w-4 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
      </div>
    </section>
  );
}
