import Link from "next/link";
import { getFeaturedPosts } from "@/data/blog-posts";
import { formatDate, getCategoryLabel } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function BlogPreview() {
  const posts = getFeaturedPosts();

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
            Expert Tips &amp; Resources
          </h2>
          <p className="text-muted text-lg">Advice on hearing health, eye care &amp; wellness from our clinical team</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-md border border-neutral-100 card-hover group">
              <div className="h-44 bg-gradient-to-br from-sky to-primary/10 flex items-center justify-center">
                <span className="text-5xl opacity-40">
                  {post.category === "hearing-health" ? "👂" : post.category === "eye-care" ? "👁️" : "💚"}
                </span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-3">
                  {getCategoryLabel(post.category)}
                </span>
                <h3 className="font-heading font-bold text-lg text-navy mb-2 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-muted line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>{formatDate(post.datePublished)}</span>
                  <span>{post.readTime} min read</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-4 hover:text-accent transition-colors">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/blog" variant="accent" size="lg">View All Articles</Button>
        </div>
      </div>
    </section>
  );
}
