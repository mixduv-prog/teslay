import Link from "next/link";

const comparisons = [
  { slug: "semrush", name: "Semrush", price: "139$/mois" },
  { slug: "surfer", name: "Surfer SEO", price: "89$/mois" },
  { slug: "frase", name: "Frase", price: "45$/mois" },
  { slug: "ahrefs", name: "Ahrefs", price: "129$/mois" },
];

export function Comparison() {
  return (
    <section className="border-y border-neutral-200 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif text-3xl text-neutral-900 sm:text-4xl">
          Jusqu&apos;à 7x moins cher que les alternatives
        </h2>
        <p className="mt-4 text-lg text-neutral-500">
          Breefy est conçu pour une seule chose : générer des briefs SEO parfaits. Spécialisation = prix compétitif.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Link
            href="/#pricing"
            className="rounded-xl border-2 border-green-500 bg-green-50/50 p-5 transition-all hover:shadow-md"
          >
            <div className="text-xs font-medium uppercase tracking-wider text-green-600">
              Breefy
            </div>
            <div className="mt-2 font-serif text-3xl text-neutral-900">19€</div>
            <div className="text-xs text-neutral-500">/mois</div>
          </Link>
          {comparisons.map((c) => (
            <Link
              key={c.slug}
              href={`/vs/${c.slug}`}
              className="group rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-300 hover:shadow-md"
            >
              <div className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                {c.name}
              </div>
              <div className="mt-2 font-serif text-3xl text-neutral-400">{c.price.split("/")[0]}</div>
              <div className="text-xs text-neutral-400">/mois</div>
              <div className="mt-3 text-xs text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Comparer →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
