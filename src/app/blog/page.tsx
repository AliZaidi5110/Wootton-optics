import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { PostCard } from "@/components/blog/PostCard";
import { blogPosts } from "@/data/blog-posts";
import { generateSEO } from "@/lib/seo";
import { pageKeywords } from "@/lib/keywords";
import { IMAGES } from "@/lib/images";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: "Eye & Hearing Advice Northampton | Blog | Wootton",
  description:
    "Hearing health advice from Wootton Opticians & Hearing Care in Northampton: ear wax removal methods, costs and what to expect.",
  path: "/blog",
  image: IMAGES.clinic,
  keywords: pageKeywords("blog"),
});

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.dateModified).getTime() - new Date(a.dateModified).getTime()
  );

  return (
    <>
      <PageHeader
        title="Eye & Hearing Advice"
        subtitle="Practical guides from our Northampton clinic on ear wax removal and hearing health."
        currentPath="/blog"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="bg-cream py-14 sm:py-16">
        <div className="container">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-navy sm:text-3xl">
            Latest articles
          </h2>
          <ul className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug} className="flex">
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}
