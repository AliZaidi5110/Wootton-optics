import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/shared/PageHeader";
import { BlogContent } from "@/components/blog/BlogContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/data/blog-posts";
import { generateSEO, articleSchema } from "@/lib/seo";
import { keywordsFromTags } from "@/lib/keywords";
import { formatDate, getCategoryLabel } from "@/lib/utils";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/constants";

export const revalidate = 86400;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return generateSEO({
    title: `${post.title} | Wootton`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: IMAGES.clinic,
    keywords: keywordsFromTags(post.tags, [
      "Wootton Optician",
      "Northampton",
      getCategoryLabel(post.category),
    ]),
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          author: post.author,
          image: `${SITE.url}${IMAGES.clinic}`,
          category: getCategoryLabel(post.category),
        })}
      />

      <PageHeader
        title={post.title}
        subtitle={post.excerpt}
        currentPath={`/blog/${post.slug}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="py-16 bg-white">
        <div className="container max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-sm text-navy/65 mb-8">
            <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
              {getCategoryLabel(post.category)}
            </span>
            <span>{formatDate(post.datePublished)}</span>
            <span>·</span>
            <span>{post.readTime} min read</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>

          <BlogContent content={post.content} />

          <div className="mt-10 pt-8 border-t border-navy/10">
            <p className="text-sm font-semibold text-navy mb-3">Topics</p>
            <ul className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-cream text-navy/80"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-cream p-6 sm:p-8">
              <h2 className="font-heading text-xl font-bold text-navy mb-2">
                Book at our Northampton clinic
              </h2>
              <p className="text-sm text-navy/80 mb-4">
                {SITE.address.full} · Call {SITE.phoneDisplay ?? SITE.phone}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/appointments" variant="primary">
                  Book an Appointment
                </Button>
                <Button href="/services" variant="outline">
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="container max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-navy text-center mb-8">
              Related articles
            </h2>
            <ul className="grid sm:grid-cols-3 gap-6">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="block bg-white rounded-xl p-5 border border-navy/10 hover:border-primary/40 transition-colors h-full"
                  >
                    <p className="text-xs text-primary font-semibold mb-2">
                      {getCategoryLabel(item.category)}
                    </p>
                    <p className="font-heading font-bold text-navy text-sm mb-2">
                      {item.title}
                    </p>
                    <p className="text-xs text-navy/70 line-clamp-2">{item.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
