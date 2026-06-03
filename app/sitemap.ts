import type { MetadataRoute } from "next";
import { getStaticVehicles } from "@/lib/vehicle-store";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXTAUTH_URL || "https://peachpuff-wolverine-278515.hostingersite.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${baseUrl}/voitures-electriques`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const vehiclePages: MetadataRoute.Sitemap = getStaticVehicles().map((v) => ({
    url: `${baseUrl}/voitures-electriques/${v.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...vehiclePages];
}
