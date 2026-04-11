import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { useCases } from "@/lib/use-cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXTAUTH_URL || "https://getbreefy.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/login`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/register`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/exemples`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/legal`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const useCasePages: MetadataRoute.Sitemap = useCases.map((uc) => ({
    url: `${baseUrl}/cas-dusage/${uc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...useCasePages];
}
