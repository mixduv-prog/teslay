const steps = [
  {
    number: "01",
    title: "Entrez un mot-clé",
    description:
      "Saisissez le mot-clé cible de votre article. Choisissez la langue, le ton et l'intention de recherche en 10 secondes.",
  },
  {
    number: "02",
    title: "L'IA analyse et structure",
    description:
      "Claude Sonnet 4.6 analyse le mot-clé, identifie les intentions, génère la structure Hn complète et les meta tags.",
  },
  {
    number: "03",
    title: "Récupérez votre brief",
    description:
      "Un brief éditorial complet est prêt en 30 secondes : mots-clés sémantiques, plan détaillé, consignes, checklist.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium text-neutral-600">
            Comment ça marche
          </div>
          <h2 className="mt-4 font-serif text-3xl text-neutral-900 sm:text-4xl">
            Un brief complet en 3 étapes
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Fini les heures de recherche et de mise en forme. Breefy fait le travail pour vous.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="rounded-2xl border border-neutral-200 bg-white p-8 h-full">
                <div className="font-serif text-5xl text-green-500">{step.number}</div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                  <svg className="h-6 w-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
