import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { blogPosts } from "@/data/blog-posts";
import { generateSEO } from "@/lib/seo";
import { formatDate, getCategoryLabel } from "@/lib/utils";

export const metadata = generateSEO({
  title: "Health Resources | Hearing & Eye Care Blog",
  description:
    "Expert articles on hearing health, eye care, and wellness from Wootton Hearing & Optics. Tips, guides, and advice from our Ilford clinical team.",
  path: "/blog",
  keywords: [
    "hearing health tips",
    "eye care advice",
    "hearing aids guide",
    "vision care Essex",
  ],
});

const categories = [
  { id: "all", label: "All Articles" },
  { id: "hearing-health", label: "Hearing Health" },
  { id: "eye-care", label: "Eye Care" },
  { id: "wellness", label: "Wellness" },
] as const;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category || "all";
  const filtered =
    category === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.category === category);

  return (
    <>
      <PageHeader
        title="Health & Wellness Resources"
        subtitle="Expert advice on hearing health, eye care, and overall wellness from our clinical team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
      />

      <section className="py-12 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.id === "all" ? "/blog" : `/blog?category=${cat.id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[40px] flex items-center ${
                  category === cat.id
                    ? "bg-primary text-white"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary/10"
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <p className="text-neutral-500 mb-8">
            {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-shadow group"
              >
                <div className="h-48 bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center">
                  <span className="text-5xl opacity-30">
                    {post.category === "hearing-health"
                      ? "👂"
                      : post.category === "eye-care"
                        ? "👁️"
                        : "💚"}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {getCategoryLabel(post.category)}
                  </span>
                  <h2 className="font-heading font-bold text-lg mt-2 mb-3 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span>{post.author}</span>
                    <span>
                      {formatDate(post.datePublished)} · {post.readTime} min
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
