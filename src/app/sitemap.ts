import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

  return [
    "",
    "/hearing",
    "/optics",
    "/about",
    "/services",
    "/appointments",
    "/contact",
    "/privacy",
    "/cookies",
    "/accessibility",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path === "/hearing" || path === "/optics" ? 0.9 : 0.7,
  }));
}
