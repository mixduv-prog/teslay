import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useCases, getUseCaseBySlug } from "@/lib/use-cases";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);
  if (!useCase) return { title: "Cas d'usage introuvable" };

  return {
    title: `${useCase.title} — Breefy`,
    description: useCase.description,
    openGraph: {
      title: useCase.title,
      description: useCase.description,
      type: "website",
    },
  };
}

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6">
      <Link
        href="/#use-cases"
        className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Tous les cas d&apos;usage
      </Link>

      <header className="mt-8 mb-16 text-center">
        <div className="text-6xl mb-6">{useCase.emoji}</div>
        <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-medium text-green-700">
          {useCase.industry}
        </div>
        <h1 className="mt-4 font-serif text-4xl text-neutral-900 sm:text-5xl leading-tight">
          {useCase.title}
        </h1>
        <p className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto">{useCase.description}</p>
        <div className="mt-8">
          <Link href="/register">
            <Button size="lg">Essayer gratuitement</Button>
          </Link>
        </div>
      </header>

      <section className="mt-20">
        <h2 className="font-serif text-2xl text-neutral-900 text-center">
          Pourquoi Breefy pour {useCase.industry.toLowerCase()}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {useCase.benefits.map((benefit, i) => (
            <div key={i} className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-50">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-neutral-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-serif text-2xl text-neutral-900 text-center">
          Exemples de mots-clés
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-500">
          Voici des mots-clés typiques que vous pourrez utiliser pour générer vos briefs.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {useCase.exampleKeywords.map((kw) => (
            <span
              key={kw}
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700"
            >
              {kw}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center">
          <svg className="mx-auto h-8 w-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>
          <p className="mt-6 font-serif text-2xl text-neutral-900 leading-relaxed">
            &ldquo;{useCase.quote}&rdquo;
          </p>
          <p className="mt-4 text-sm text-neutral-500">— {useCase.persona}</p>
        </div>
      </section>

      <section className="mt-20 rounded-2xl border border-green-200 bg-green-50/50 p-12 text-center">
        <h2 className="font-serif text-3xl text-neutral-900">
          Commencez avec 3 briefs gratuits
        </h2>
        <p className="mt-4 text-neutral-600">
          Aucune carte bancaire requise. Testez Breefy en 30 secondes.
        </p>
        <div className="mt-8">
          <Link href="/register">
            <Button size="lg">Créer mon compte gratuit</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
