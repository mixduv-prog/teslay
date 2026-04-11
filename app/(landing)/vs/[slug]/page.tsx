import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { competitors, getCompetitorBySlug } from "@/lib/competitors";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompetitorBySlug(slug);
  if (!c) return { title: "Comparaison introuvable" };

  return {
    title: `Breefy vs ${c.name} — Lequel choisir ?`,
    description: `Comparatif détaillé entre Breefy et ${c.name}. Prix, fonctionnalités, cas d'usage. Découvrez lequel correspond le mieux à vos besoins.`,
    openGraph: {
      title: `Breefy vs ${c.name}`,
      description: c.tagline,
      type: "website",
    },
  };
}

export default async function VsPage({ params }: Props) {
  const { slug } = await params;
  const c = getCompetitorBySlug(slug);

  if (!c) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6">
      <header className="mb-16 text-center">
        <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-medium text-green-700">
          Comparatif
        </div>
        <h1 className="mt-4 font-serif text-4xl text-neutral-900 sm:text-5xl leading-tight">
          Breefy vs {c.name}
        </h1>
        <p className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto">{c.tagline}</p>
      </header>

      <section className="mb-16">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8">
          <p className="text-base leading-relaxed text-neutral-700">{c.summary}</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-serif text-2xl text-neutral-900 text-center mb-8">
          Comparaison détaillée
        </h2>
        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">
                  Fonctionnalité
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-green-700">
                  Breefy
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">
                  {c.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {c.differences.map((d, i) => (
                <tr key={i} className="border-b border-neutral-100 last:border-b-0">
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">{d.feature}</td>
                  <td className="px-6 py-4 text-sm text-green-700">{d.breefy}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">{d.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-2xl border border-green-200 bg-green-50/50 p-12 text-center">
        <h2 className="font-serif text-3xl text-neutral-900">
          Essayez Breefy gratuitement
        </h2>
        <p className="mt-4 text-neutral-600">
          3 briefs offerts. Aucune carte bancaire requise. Décidez après avoir testé.
        </p>
        <div className="mt-8">
          <Link href="/register">
            <Button size="lg">Commencer gratuitement</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
