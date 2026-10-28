import type { Metadata } from "next";
import type { EyeCareService } from "@/data/eye-care-services";
import { generateSEO } from "@/lib/seo";
import { pageKeywords } from "@/lib/keywords";
import { IMAGES } from "@/lib/images";

export function eyeServiceMetadata(service: EyeCareService): Metadata {
  return generateSEO({
    title: service.metaTitle,
    description: service.metaDescription,
    path: service.path,
    image: IMAGES.clinic,
    keywords: pageKeywords(service.slug),
  });
}
