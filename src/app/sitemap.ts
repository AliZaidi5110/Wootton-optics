import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { blogPosts } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

  const staticPages = [
    "",
    "/hearing",
    "/optics",
    "/about",
    "/services",
    "/blog",
    "/appointments",
    "/contact",
    "/care-packages",
    "/testimonials",
    "/privacy",
    "/cookies",
    "/accessibility",
    "/login",
    "/register",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/blog" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path === "/hearing" || path === "/optics" ? 0.9 : 0.7,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
