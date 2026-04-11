import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Breefy",
  description:
    "Articles, guides et conseils sur le SEO, les briefs éditoriaux, la stratégie de contenu et l'IA générative.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <header className="mb-16 text-center">
        <h1 className="font-serif text-5xl text-neutral-900 sm:text-6xl">Le blog</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-500">
          Guides, conseils et analyses pour maîtriser le SEO et la stratégie de contenu en 2026.
        </p>
      </header>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border border-neutral-200 bg-white p-8 transition-all hover:border-neutral-300 hover:shadow-md"
          >
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
            <h2 className="mt-3 font-serif text-2xl text-neutral-900 group-hover:text-green-600 transition-colors">
              {post.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600">
              Lire l&apos;article
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
