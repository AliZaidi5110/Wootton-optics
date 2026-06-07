import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogPosts,
  getBlogPost,
  getRelatedPosts,
} from "@/data/blog-posts";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateSEO, articleSchema, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { formatDate, getCategoryLabel } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Share2, Clock, User } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return generateSEO({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    keywords: post.tags,
  });
}

function renderContent(content: string) {
  const blocks = content.split("\n\n");
  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="font-heading text-2xl font-bold mt-8 mb-4">
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("**") && block.includes(":**")) {
      const [title, ...rest] = block.split(":");
      return (
        <p key={i} className="mb-4 leading-relaxed">
          <strong>{title.replace(/\*\*/g, "")}:</strong>
          {rest.join(":")}
        </p>
      );
    }
    return (
      <p key={i} className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.excerpt,
            slug: post.slug,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            author: post.author,
            image: post.image,
            category: getCategoryLabel(post.category),
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Resources", url: `${SITE.url}/blog` },
            { name: post.title, url: `${SITE.url}/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="py-12">
        <div className="container max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>

          <span className="text-xs font-semibold text-primary uppercase tracking-wide">
            {getCategoryLabel(post.category)}
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-8 pb-8 border-b border-neutral-200 dark:border-neutral-800">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" /> {post.author}
            </span>
            <span>{formatDate(post.datePublished)}</span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {post.readTime} min read
            </span>
            <button
              className="flex items-center gap-2 hover:text-primary transition-colors ml-auto"
              aria-label="Share article"
            >
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>

          <div className="h-64 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-2xl mb-10 flex items-center justify-center">
            <span className="text-6xl opacity-30">
              {post.category === "hearing-health"
                ? "👂"
                : post.category === "eye-care"
                  ? "👁️"
                  : "💚"}
            </span>
          </div>

          <div className="prose max-w-none">{renderContent(post.content)}</div>

          <div className="mt-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl">
            <h3 className="font-heading font-bold mb-2">About the Author</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              <strong>{post.author}</strong> — {post.authorBio}
            </p>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-heading text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-sm line-clamp-2">{r.title}</p>
                    <p className="text-xs text-neutral-500 mt-2">{r.readTime} min read</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <Button href="/appointments">Book Free Consultation</Button>
          </div>
        </div>
      </article>
    </>
  );
}
