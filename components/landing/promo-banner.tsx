"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function PromoBanner() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const seen = localStorage.getItem("breefy_promo_dismissed");
    if (!seen) setDismissed(false);
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("breefy_promo_dismissed", "1");
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-green-500 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2.5">
        <div className="flex-1 text-center text-sm">
          🎉 Offre de lancement : <strong>-50% sur le premier mois</strong> avec le code{" "}
          <span className="rounded bg-white/20 px-2 py-0.5 font-mono font-semibold">
            LAUNCH50
          </span>{" "}
          ·{" "}
          <Link href="/register" className="underline underline-offset-2 hover:no-underline">
            En profiter
          </Link>
        </div>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 rounded p-1 hover:bg-white/20"
          aria-label="Fermer"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
