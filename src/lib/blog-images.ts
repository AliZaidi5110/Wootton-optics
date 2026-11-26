import { blogPosts } from "@/data/blog-posts";
import { earWaxArticle } from "@/data/ear-wax-article";
import type { BlogCategory, BlogPost } from "@/types";

/** `position` is an optional Tailwind object-position class for photos that crop badly when centred. */
type BlogImage = { src: string; alt: string; position?: string };

/** Photos in /public, grouped by blog category. */
const CATEGORY_IMAGES: Record<BlogCategory, BlogImage[]> = {
  "hearing-health": [
    { src: "/hearing-3.avif", alt: "A man wearing a hearing aid at a hearing consultation" },
    {
      src: "/about-1.avif",
      alt: "A clinician holding an anatomical model of the ear",
      position: "object-[center_78%]",
    },
    { src: "/hearing-1.webp", alt: "A clinician checking a patient's ear" },
  ],
  "eye-care": [
    { src: "/welcome-1.jpg", alt: "A woman having her vision tested" },
    { src: "/optics-2.webp", alt: "A man trying on glasses in an optical practice" },
    { src: "/welcome-2.jpg", alt: "An optometrist examining a patient's eyes" },
    { src: "/optics-1.avif", alt: "A child having an eye test" },
    { src: "/img-2.avif", alt: "A girl choosing a new pair of glasses" },
    { src: "/optics-3.avif", alt: "A pair of glasses next to a bottle of eye drops" },
    { src: "/about-2.avif", alt: "Close-up of a healthy eye" },
  ],
  wellness: [{ src: "/img-1.jpg", alt: "A clinician talking through results with a patient" }],
};

/** A photo for a post, rotating through its category so neighbouring cards differ. */
export function getBlogImage(post: BlogPost): BlogImage {
  if (post.slug === earWaxArticle.slug) return earWaxArticle.heroImage;

  const pool = CATEGORY_IMAGES[post.category];
  const index = blogPosts
    .filter((p) => p.category === post.category && p.slug !== earWaxArticle.slug)
    .findIndex((p) => p.slug === post.slug);

  return pool[Math.max(index, 0) % pool.length];
}
