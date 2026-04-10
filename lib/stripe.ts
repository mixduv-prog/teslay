import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-03-25.dahlia",
      typescript: true,
    });
  }
  return _stripe;
}

export const PLANS = {
  FREE: {
    name: "Free",
    price: 0,
    briefs: 3,
    features: ["3 briefs SEO gratuits", "Structure complète", "Export texte"],
  },
  STARTER: {
    name: "Starter",
    price: 19,
    priceId: process.env.STRIPE_STARTER_PRICE_ID!,
    briefs: 50,
    features: [
      "50 briefs/mois",
      "Structure complète",
      "Export texte",
      "Historique illimité",
      "Support email",
    ],
  },
  PRO: {
    name: "Pro",
    price: 49,
    priceId: process.env.STRIPE_PRO_PRICE_ID!,
    briefs: -1,
    features: [
      "Briefs illimités",
      "Structure complète",
      "Export Markdown",
      "Historique illimité",
      "Support prioritaire",
      "API access (bientôt)",
    ],
  },
} as const;
