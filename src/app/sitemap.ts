import type { MetadataRoute } from "next";
import { getCourseSlugs } from "@/lib/courses";
import { getBlogSlugs } from "@/lib/blog";
import { SITE_URL, ROUTES, LEGAL_ROUTES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const main: MetadataRoute.Sitemap = ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified: new Date(),
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.path === "/" ? 1 : route.path === "/programs" ? 0.9 : 0.7,
  }));

  const courses: MetadataRoute.Sitemap = getCourseSlugs().map((slug) => ({
    url: `${SITE_URL}/programs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blog: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    ...getBlogSlugs().map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  const legal: MetadataRoute.Sitemap = LEGAL_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...main, ...courses, ...blog, ...legal];
}
