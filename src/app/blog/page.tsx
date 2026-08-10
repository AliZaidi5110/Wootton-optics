import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { blogPosts } from "@/data/blog-posts";
import { generateSEO } from "@/lib/seo";
import { pageKeywords } from "@/lib/keywords";
import { formatDate, getCategoryLabel } from "@/lib/utils";
import { IMAGES } from "@/lib/images";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: "Eye & Hearing Advice Northampton | Blog | Wootton",
  description:
    "Expert eye care and hearing health advice from Wootton Optician & Hearing Care in Northampton — eye tests, hearing aids, dry eyes, myopia and more.",
  path: "/blog",
  image: IMAGES.clinic,
  keywords: pageKeywords("blog"),
});

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  return (
    <>
      <PageHeader
        title="Eye & Hearing Advice"
        subtitle="Practical guides from our Northampton clinical team on eye tests, hearing aids, ear wax, myopia and everyday eye and ear health."
        currentPath="/blog"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="py-16 bg-cream">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-navy/10 overflow-hidden shadow-sm"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-3">
                    {getCategoryLabel(post.category)}
                  </span>
                  <h2 className="font-heading font-bold text-lg text-navy mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-navy/75 line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-navy/60 mb-4">
                    <span>{formatDate(post.datePublished)}</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <li
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded bg-cream text-navy/70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    Read article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
