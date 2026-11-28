import type { BlogPost } from "@/types";
import { earWaxArticle } from "@/data/ear-wax-article";
import { earWaxCostArticle } from "@/data/ear-wax-cost-article";

type Article = typeof earWaxArticle | typeof earWaxCostArticle;

/** Each article has its own page at app/blog/<slug>/page.tsx; this lists it on the site. */
function toPost(article: Article): BlogPost {
  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.metaDescription,
    category: "hearing-health",
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    readTime: 5,
    image: article.heroImage,
  };
}

export const blogPosts: BlogPost[] = [toPost(earWaxArticle), toPost(earWaxCostArticle)];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, limit);
}
