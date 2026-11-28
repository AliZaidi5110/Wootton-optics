/** Layout pieces shared by the blog article pages. */

import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Check, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RichText } from "@/components/eye-care/RichText";
import { PostCard } from "@/components/blog/PostCard";
import { getRelatedPosts } from "@/data/blog-posts";
import { SITE } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export const paragraph = "text-lg leading-relaxed text-navy/85";

type ArticleHeroProps = {
  title: string;
  breadcrumb: string;
  author: string;
  datePublished: string;
  dateModified: string;
  readTime?: number;
  image: { src: string; alt: string };
};

export function ArticleHero({
  title,
  breadcrumb,
  author,
  datePublished,
  dateModified,
  readTime,
  image,
}: ArticleHeroProps) {
  return (
    <header className="relative overflow-hidden bg-navy-deep text-white">
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl"
      />
      <div className="container relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm">
            <Link href="/" className="!text-white/80 hover:underline">
              Home
            </Link>
            <span className="mx-2 text-white/50">/</span>
            <Link href="/blog" className="!text-white/80 hover:underline">
              Advice &amp; Blog
            </Link>
            <span className="mx-2 text-white/50">/</span>
            <span className="font-semibold !text-white">{breadcrumb}</span>
          </nav>
          <p className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Hearing Health
          </p>
          <h1 className="font-heading text-3xl font-bold leading-tight !text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm !text-white/80">
            <span>{author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={datePublished}>{formatDate(datePublished)}</time>
            {dateModified !== datePublished && (
              <>
                <span aria-hidden="true">·</span>
                <span>
                  Updated <time dateTime={dateModified}>{formatDate(dateModified)}</time>
                </span>
              </>
            )}
            {readTime && (
              <>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {readTime} min read
                </span>
              </>
            )}
          </p>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-white/15 shadow-2xl lg:col-span-5">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            preload
            sizes="(min-width: 1024px) 500px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}

/** "On this page" menu and booking card shown beside the article. */
export function ArticleSidebar({
  sections,
  bookingHref,
}: {
  sections: { id: string; heading: string }[];
  bookingHref: string;
}) {
  const telHref = `tel:${SITE.phone.replace(/\s/g, "")}`;

  return (
    <aside className="lg:col-span-4">
      <div className="space-y-6 lg:sticky lg:top-28">
        <nav
          aria-label="On this page"
          className="hidden rounded-2xl border border-cream-dark bg-cream p-6 lg:block"
        >
          <div className="mb-3 font-heading text-xl font-bold text-navy">On this page</div>
          <ul className="space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="leading-snug text-navy/80 hover:text-primary">
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="rounded-2xl border border-primary/30 bg-white p-6 shadow-lg">
          <div className="font-heading text-2xl font-bold text-navy">Ear wax removal</div>
          <p className="mt-1 text-navy/85">£35 per ear · £70 for both ears</p>
          <div className="mt-4 flex flex-col gap-3">
            <Button href={bookingHref} className="w-full">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Book ear wax removal
            </Button>
            <Button href={telHref} variant="outline" className="w-full">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {SITE.phoneDisplay}
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h2 className="font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl">
        {children}
      </h2>
      <span
        aria-hidden="true"
        className="mt-3 block h-1 w-14 rounded-full bg-gradient-to-r from-primary to-fresh"
      />
    </div>
  );
}

export function Photo({ src, alt, position = "" }: { src: string; alt: string; position?: string }) {
  return (
    <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-2xl bg-sky shadow-md">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 800px, 100vw"
        className={`object-cover ${position}`}
      />
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl border border-cream-dark bg-cream p-4"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fresh/15 text-fresh">
            <Check className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="leading-relaxed text-navy/90">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="flex items-start gap-4 rounded-xl border border-cream-dark bg-white p-5 shadow-sm"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-xl font-bold text-white">
            {i + 1}
          </span>
          <p className="pt-1.5 leading-relaxed text-navy/90">
            <strong className="font-semibold text-navy">{step.title}</strong>{" "}
            <RichText text={step.text} />
          </p>
        </li>
      ))}
    </ol>
  );
}

/** Dark call-to-action box; `text` may contain inline links. */
export function BookingBox({ heading, text }: { heading?: string; text: string }) {
  return (
    <div className="rounded-2xl bg-navy-deep p-6 text-center sm:p-8">
      {heading && (
        <div className="mb-2 font-heading text-2xl font-bold !text-white sm:text-3xl">{heading}</div>
      )}
      <p className="text-lg !text-white/90">
        <RichText text={text} linkClassName="font-semibold !text-white underline underline-offset-2" />
      </p>
    </div>
  );
}

export function RelatedArticles({ slug }: { slug: string }) {
  const related = getRelatedPosts(slug, 3);
  if (related.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="container">
        <h2 className="mb-10 text-center font-heading text-2xl font-bold text-navy sm:text-3xl">
          Related articles
        </h2>
        <ul className="flex flex-wrap justify-center gap-8">
          {related.map((post) => (
            <li key={post.slug} className="flex w-full max-w-md">
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
