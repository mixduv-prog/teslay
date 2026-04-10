"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    id: "FREE",
    name: "Free",
    price: "0",
    period: "",
    features: ["3 briefs SEO gratuits", "Structure complète", "Export texte"],
  },
  {
    id: "STARTER",
    name: "Starter",
    price: "19",
    period: "/mois",
    features: ["50 briefs/mois", "Structure complète", "Export texte", "Historique illimité", "Support email"],
  },
  {
    id: "PRO",
    name: "Pro",
    price: "49",
    period: "/mois",
    features: [
      "Briefs illimités",
      "Structure complète",
      "Export Markdown",
      "Historique illimité",
      "Support prioritaire",
    ],
  },
];

export default function BillingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handleSubscribe = async (planId: string) => {
    setLoading(planId);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setLoading(null);
    }
  };

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent" />
      </div>
    );
  }

  const currentPlan = session?.user?.plan || "FREE";

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-2xl text-neutral-900">Abonnement</h1>
        <p className="mt-2 text-sm text-neutral-500">
          Gérez votre abonnement et vos moyens de paiement.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const isCurrent = currentPlan === plan.id;
          return (
            <div
              key={plan.id}
              className={`rounded-xl border p-6 ${isCurrent ? "border-green-500 bg-green-50/50" : "border-neutral-200 bg-white"}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-neutral-900">{plan.name}</h3>
                {isCurrent && <Badge variant="green">Actuel</Badge>}
              </div>
              <div className="mt-4">
                <span className="font-serif text-3xl text-neutral-900">{plan.price}€</span>
                <span className="text-sm text-neutral-500">{plan.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-neutral-600">
                    <svg className="h-4 w-4 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                {isCurrent ? (
                  <Button variant="outline" className="w-full" disabled>
                    Plan actuel
                  </Button>
                ) : plan.id === "FREE" ? (
                  <Button variant="outline" className="w-full" disabled>
                    Plan gratuit
                  </Button>
                ) : (
                  <Button
                    className="w-full"
                    loading={loading === plan.id}
                    onClick={() => handleSubscribe(plan.id)}
                  >
                    Passer au {plan.name}
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
