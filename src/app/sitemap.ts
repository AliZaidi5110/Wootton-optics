import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { blogPosts } from "@/data/blog-posts";

const routes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/hearing", changeFrequency: "weekly", priority: 0.95 },
  { path: "/optics", changeFrequency: "weekly", priority: 0.95 },
  { path: "/eye-care-northampton", changeFrequency: "weekly", priority: 0.94 },
  { path: "/ear-wax-removal-northampton", changeFrequency: "monthly", priority: 0.92 },
  { path: "/free-hearing-test-northampton", changeFrequency: "monthly", priority: 0.92 },
  { path: "/nhs-eye-test-northampton", changeFrequency: "monthly", priority: 0.92 },
  { path: "/myopia-management-northampton", changeFrequency: "monthly", priority: 0.88 },
  { path: "/hearing-aid-repairs-northampton", changeFrequency: "monthly", priority: 0.88 },
  { path: "/dry-eye-assessment-northampton", changeFrequency: "monthly", priority: 0.88 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.86 },
  { path: "/appointments", changeFrequency: "weekly", priority: 0.9 },
  { path: "/services", changeFrequency: "monthly", priority: 0.85 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
  { path: "/accessibility", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;
  const lastModified = new Date();

  const staticUrls = routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified || post.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls];
}
