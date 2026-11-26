import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { PostCard } from "@/components/blog/PostCard";
import { blogPosts } from "@/data/blog-posts";
import { generateSEO } from "@/lib/seo";
import { pageKeywords } from "@/lib/keywords";
import { getBlogImage } from "@/lib/blog-images";
import { formatDate, getCategoryLabel } from "@/lib/utils";
import { IMAGES } from "@/lib/images";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: "Eye & Hearing Advice Northampton | Blog | Wootton",
  description:
    "Expert eye care and hearing health advice from Wootton Opticians & Hearing Care in Northampton — eye tests, hearing aids, dry eyes, myopia and more.",
  path: "/blog",
  image: IMAGES.clinic,
  keywords: pageKeywords("blog"),
});

export default function BlogIndexPage() {
  const [latest, ...posts] = [...blogPosts].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
  const latestImage = getBlogImage(latest);

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

      <section className="bg-cream py-14 sm:py-16">
        <div className="container">
          <h2 className="mb-6 font-heading text-2xl font-bold text-navy sm:text-3xl">
            Latest article
          </h2>
          <article className="group relative grid overflow-hidden rounded-3xl border border-cream-dark bg-white shadow-md transition-shadow hover:shadow-2xl focus-within:ring-2 focus-within:ring-primary lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden bg-sky lg:aspect-auto lg:min-h-[24rem]">
              <Image
                src={latestImage.src}
                alt={latestImage.alt}
                fill
                preload
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                {getCategoryLabel(latest.category)}
              </span>
              <h3 className="font-heading text-2xl font-bold leading-tight text-navy group-hover:text-primary sm:text-3xl">
                <Link
                  href={`/blog/${latest.slug}`}
                  className="!text-inherit after:absolute after:inset-0 after:z-10 focus-visible:outline-none"
                >
                  {latest.title}
                </Link>
              </h3>
              <p className="mt-4 leading-relaxed text-navy/80">{latest.excerpt}</p>
              <p className="mt-4 text-sm text-navy/60">
                {formatDate(latest.datePublished)} · {latest.readTime} min read
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">
                Read article
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </div>
          </article>

          <h2 className="mb-6 mt-14 font-heading text-2xl font-bold text-navy sm:text-3xl">
            More articles
          </h2>
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
