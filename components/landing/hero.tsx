"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-serif text-5xl font-normal leading-tight tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
          Des briefs SEO parfaits
          <br />
          <span className="text-green-500">en 30 secondes</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 leading-relaxed">
          Breefy génère des briefs éditoriaux SEO complets, structurés et actionnables.
          Plus besoin de passer des heures à analyser la SERP — votre brief est prêt en un clic.
        </p>

        {submitted ? (
          <div className="mt-10 inline-flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 px-6 py-4 text-green-700">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Merci ! Vous serez notifié au lancement.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 mx-auto flex max-w-md gap-3">
            <input
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
            />
            <Button size="lg" type="submit">
              Commencer
            </Button>
          </form>
        )}

        <p className="mt-4 text-sm text-neutral-400">
          3 briefs gratuits — Aucune carte bancaire requise
        </p>
      </div>
    </section>
  );
}
