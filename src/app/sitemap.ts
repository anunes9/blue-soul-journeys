import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { routing } from "@/i18n/routing";

const siteUrl = "https://www.bluesouljourneys.com";

const staticRoutes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/journeys", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/destinations", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/how-it-works", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/what-i-do", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/why-travel-with-me", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/my-story", changeFrequency: "monthly" as const, priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.flatMap(({ path, changeFrequency, priority }) =>
    routing.locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    }))
  );

  const destinationEntries = routing.locales.flatMap((locale) =>
    destinations.map((d) => ({
      url: `${siteUrl}/${locale}/destinations/${d.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  return [...staticEntries, ...destinationEntries];
}
