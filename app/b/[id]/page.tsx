import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ id: string }>;
}

async function getBrief(id: string) {
  try {
    return await prisma.brief.findUnique({
      where: { id },
      select: {
        id: true,
        keyword: true,
        language: true,
        intent: true,
        tone: true,
        output: true,
        createdAt: true,
      },
    });
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const brief = await getBrief(id);
  if (!brief) return { title: "Brief introuvable" };

  return {
    title: `Brief SEO : ${brief.keyword} — Breefy`,
    description: `Brief SEO complet pour le mot-clé "${brief.keyword}". Généré par Breefy, le générateur de briefs SEO par IA.`,
    openGraph: {
      title: `Brief SEO : ${brief.keyword}`,
      description: `Brief SEO généré en 30 secondes avec Breefy`,
      type: "article",
    },
  };
}

export default async function PublicBriefPage({ params }: Props) {
  const { id } = await params;
  const brief = await getBrief(id);

  if (!brief) notFound();

  const date = new Date(brief.createdAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-medium text-green-700">
              Brief public généré par Breefy
            </div>
            <h1 className="mt-4 font-serif text-4xl text-neutral-900 sm:text-5xl">
              {brief.keyword}
            </h1>
            <div className="mt-4 flex items-center justify-center gap-2">
              <Badge>{brief.language}</Badge>
              <Badge variant="green">{brief.intent}</Badge>
              <Badge>{brief.tone}</Badge>
              <span className="text-xs text-neutral-400">{date}</span>
            </div>
          </div>

          <article className="rounded-xl border border-neutral-200 bg-white p-8">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-neutral-700">
              {brief.output}
            </pre>
          </article>

          <div className="mt-12 rounded-2xl border border-green-200 bg-green-50/50 p-10 text-center">
            <h2 className="font-serif text-2xl text-neutral-900">
              Générez votre propre brief SEO en 30 secondes
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              Breefy produit des briefs structurés comme celui-ci, pour n&apos;importe quel mot-clé,
              dans n&apos;importe quelle langue. 3 briefs gratuits, sans carte bancaire.
            </p>
            <div className="mt-6">
              <Link href="/register">
                <Button size="lg">Essayer gratuitement</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
