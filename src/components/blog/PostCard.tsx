import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate, getCategoryLabel } from "@/lib/utils";
import type { BlogPost } from "@/types";

/** Blog list card with a photo. The title link is stretched so the whole card is clickable. */
export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-cream-dark bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
      <div className="relative aspect-[16/10] overflow-hidden bg-sky">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow">
          {getCategoryLabel(post.category)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs text-navy/60">
          {formatDate(post.datePublished)} · {post.readTime} min read
        </p>
        <h3 className="font-heading text-xl font-bold leading-snug text-navy group-hover:text-primary">
          <Link
            href={`/blog/${post.slug}`}
            className="!text-inherit after:absolute after:inset-0 after:z-10 focus-visible:outline-none"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-navy/75">
          {post.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Read article
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </article>
  );
}
