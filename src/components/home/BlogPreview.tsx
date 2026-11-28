import { blogPosts } from "@/data/blog-posts";
import { PostCard } from "@/components/blog/PostCard";
import { Button } from "@/components/ui/Button";

export function BlogPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
            Expert Tips &amp; Resources
          </h2>
          <p className="text-muted text-lg">Advice on hearing health, eye care &amp; wellness from our clinical team</p>
        </div>
        <ul className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <li key={post.slug} className="flex">
              <PostCard post={post} />
            </li>
          ))}
        </ul>
        <div className="text-center mt-10">
          <Button href="/blog" variant="accent" size="lg">View All Articles</Button>
        </div>
      </div>
    </section>
  );
}
