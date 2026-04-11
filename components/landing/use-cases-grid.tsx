import Link from "next/link";
import { useCases } from "@/lib/use-cases";

export function UseCasesGrid() {
  return (
    <section id="use-cases" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium text-neutral-600">
            Cas d&apos;usage
          </div>
          <h2 className="mt-4 font-serif text-3xl text-neutral-900 sm:text-4xl">
            Pour chaque secteur, un brief adapté
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Breefy s&apos;adapte à votre métier, votre audience et vos objectifs.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((uc) => (
            <Link
              key={uc.slug}
              href={`/cas-dusage/${uc.slug}`}
              className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-green-500 hover:shadow-md"
            >
              <div className="text-3xl">{uc.emoji}</div>
              <h3 className="mt-4 text-base font-semibold text-neutral-900 group-hover:text-green-600 transition-colors">
                {uc.industry}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-500 line-clamp-2">
                {uc.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
