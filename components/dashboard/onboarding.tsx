"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Onboarding({ userName }: { userName?: string }) {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = localStorage.getItem("breefy_onboarding_dismissed");
    if (seen) setDismissed(true);
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("breefy_onboarding_dismissed", "1");
    setDismissed(true);
  };

  if (!mounted || dismissed) return null;

  return (
    <div className="mb-8 rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-8 relative">
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 transition-colors"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-500 text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
        </div>
        <div className="flex-1">
          <h2 className="font-serif text-xl text-neutral-900">
            Bienvenue{userName ? `, ${userName}` : ""} sur Breefy ! 🎉
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Vous avez <strong>3 briefs gratuits</strong> à votre disposition. Créez votre premier
            brief SEO en 30 secondes : choisissez un mot-clé, sélectionnez un template, et laissez
            l&apos;IA faire le reste.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/new">
              <Button>
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Créer mon premier brief
              </Button>
            </Link>
            <Link href="/exemples">
              <Button variant="outline">Voir des exemples</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
