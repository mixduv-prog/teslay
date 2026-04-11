const stats = [
  { value: "30s", label: "Temps de génération moyen" },
  { value: "6", label: "Langues supportées" },
  { value: "100%", label: "Structure SEO-ready" },
  { value: "24/7", label: "Disponibilité" },
];

export function Stats() {
  return (
    <section className="border-y border-neutral-200 bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl text-neutral-900 sm:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
