import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article introuvable" };

  return {
    title: `${post.title} — Breefy`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const sections = post.content.split("\n\n");

  return (
    <div className="mx-auto max-w-3xl px-6">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Retour au blog
      </Link>

      <header className="mt-8 mb-12">
        <div className="flex items-center gap-3 text-xs text-neutral-400">
          <time>
            {new Date(post.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span>·</span>
          <span>{post.readTime} de lecture</span>
        </div>
        <h1 className="mt-4 font-serif text-4xl text-neutral-900 sm:text-5xl leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-neutral-500">{post.excerpt}</p>
      </header>

      <article className="space-y-6">
        {sections.map((section, i) => {
          if (section.startsWith("## ")) {
            return (
              <h2 key={i} className="font-serif text-2xl text-neutral-900 mt-10 mb-2">
                {section.replace(/^## /, "")}
              </h2>
            );
          }
          if (section.startsWith("### ")) {
            return (
              <h3 key={i} className="font-serif text-xl text-neutral-900 mt-6 mb-2">
                {section.replace(/^### /, "")}
              </h3>
            );
          }
          return (
            <p key={i} className="text-base leading-relaxed text-neutral-700">
              {section}
            </p>
          );
        })}
      </article>

      <div className="mt-16 rounded-2xl border border-green-200 bg-green-50/50 p-8 text-center">
        <h3 className="font-serif text-2xl text-neutral-900">Prêt à générer votre premier brief ?</h3>
        <p className="mt-2 text-sm text-neutral-600">
          3 briefs gratuits, aucune carte bancaire requise.
        </p>
        <Link
          href="/register"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white hover:bg-green-600 transition-colors"
        >
          Commencer gratuitement
        </Link>
      </div>
    </div>
  );
}
