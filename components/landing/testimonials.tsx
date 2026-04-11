const testimonials = [
  {
    quote:
      "Breefy a divisé par 10 le temps que je passais à préparer mes briefs. Mes rédacteurs adorent la structure, et mes articles se positionnent mieux sur Google.",
    name: "Sophie L.",
    role: "Head of Content, SaaS B2B",
    initials: "SL",
  },
  {
    quote:
      "L'outil que j'aurais voulu avoir il y a 5 ans. Les briefs sont précis, actionnables, et couvrent tous les aspects SEO dont j'ai besoin. Un vrai gain de productivité.",
    name: "Thomas M.",
    role: "Consultant SEO indépendant",
    initials: "TM",
  },
  {
    quote:
      "J'ai testé tous les outils de brief SEO du marché. Breefy est le seul qui produit des briefs qu'on peut utiliser tels quels, sans retouche. Le rapport qualité-prix est imbattable.",
    name: "Julie D.",
    role: "Content Manager, e-commerce",
    initials: "JD",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-neutral-900 sm:text-4xl">
            Ils gagnent des heures chaque semaine
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Rejoignez les équipes SEO qui ont fait de Breefy leur outil indispensable.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-8"
            >
              <svg className="h-8 w-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
              <p className="mt-6 flex-1 text-base leading-relaxed text-neutral-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-700">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-900">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
