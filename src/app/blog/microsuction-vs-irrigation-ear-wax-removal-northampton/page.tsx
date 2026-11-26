import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Check, Clock, Phone, TriangleAlert, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { PostCard } from "@/components/blog/PostCard";
import { ContentTable } from "@/components/eye-care/ContentBlocks";
import { FaqAccordion } from "@/components/eye-care/FaqAccordion";
import { RichText } from "@/components/eye-care/RichText";
import { earWaxArticle as article } from "@/data/ear-wax-article";
import { earWaxArticleSchema } from "@/data/ear-wax-article-schema";
import { getBlogPost, getRelatedPosts } from "@/data/blog-posts";
import { SITE } from "@/lib/constants";
import { generateSEO } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { IMAGES } from "@/lib/images";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: article.metaTitle,
  description: article.metaDescription,
  path: article.path,
  image: IMAGES.clinic,
  keywords: article.keywords,
});

const sections = [
  { id: "ear-wax", heading: article.wax.heading },
  { id: "microsuction-vs-irrigation", heading: article.compare.heading },
  { id: "cost", heading: article.cost.heading },
  { id: "appointment", heading: article.expect.heading },
  { id: "avoid", heading: article.avoid.heading },
  { id: "see-a-gp", heading: article.urgent.heading },
  { id: "hearing-aids", heading: article.hearingAids.heading },
  { id: "still-muffled", heading: article.stillMuffled.heading },
  { id: "why-wootton", heading: article.why.heading },
  { id: "faq", heading: article.faqsHeading },
];

const paragraph = "text-lg leading-relaxed text-navy/85";

function Heading({ children }: { children: React.ReactNode }) {
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-3 font-heading text-xl font-bold text-navy sm:text-2xl">{children}</h3>;
}

function Photo({ src, alt, position = "" }: { src: string; alt: string; position?: string }) {
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

function CheckList({ items }: { items: string[] }) {
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

export default function EarWaxArticlePage() {
  const telHref = `tel:${SITE.phone.replace(/\s/g, "")}`;
  const readTime = getBlogPost(article.slug)?.readTime;
  const related = getRelatedPosts(article.slug, 3);

  return (
    <>
      {/* Hero */}
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
              <span className="font-semibold !text-white">{article.breadcrumb}</span>
            </nav>
            <p className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Hearing Health
            </p>
            <h1 className="font-heading text-3xl font-bold leading-tight !text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm !text-white/80">
              <span>{article.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.datePublished}>{formatDate(article.datePublished)}</time>
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
              src={article.heroImage.src}
              alt={article.heroImage.alt}
              fill
              preload
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </header>

      <div className="bg-white py-12 sm:py-16">
        <div className="container grid gap-12 lg:grid-cols-12">
          <article className="min-w-0 space-y-14 lg:col-span-8 [&_section]:scroll-mt-28">
            <div className="space-y-5 border-l-4 border-primary pl-5">
              {article.intro.map((text) => (
                <p key={text.slice(0, 40)} className={paragraph}>
                  <RichText text={text} />
                </p>
              ))}
            </div>

            <section id="ear-wax">
              <Heading>{article.wax.heading}</Heading>
              <p className={paragraph}>{article.wax.text}</p>
              <Photo {...article.wax.image} />
              <p className="font-semibold text-navy">{article.wax.signsIntro}</p>
              <CheckList items={article.wax.signs} />
            </section>

            <section id="microsuction-vs-irrigation" className="space-y-8">
              <Heading>{article.compare.heading}</Heading>

              <div className="rounded-2xl border border-primary/30 bg-teal-light/40 p-6 sm:p-8">
                <SubHeading>{article.compare.microsuction.heading}</SubHeading>
                <p className={paragraph}>{article.compare.microsuction.text}</p>
                <p className="mt-5 font-semibold text-navy">
                  {article.compare.microsuction.whyIntro}
                </p>
                <ul className="mt-3 space-y-2">
                  {article.compare.microsuction.why.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-navy/90">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-fresh" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-xl bg-white p-4 leading-relaxed text-navy/85">
                  {article.compare.microsuction.note}
                </p>
              </div>

              <div className="rounded-2xl border border-cream-dark bg-cream p-6 sm:p-8">
                <SubHeading>{article.compare.irrigation.heading}</SubHeading>
                <div className="space-y-4">
                  {article.compare.irrigation.paragraphs.map((text) => (
                    <p key={text.slice(0, 40)} className={paragraph}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <SubHeading>{article.compare.table.heading}</SubHeading>
                <div className="[&>div]:mt-4">
                  <ContentTable
                    columns={article.compare.table.columns}
                    rows={article.compare.table.rows}
                  />
                </div>
              </div>
              <p className={paragraph}>{article.compare.outro}</p>
            </section>

            <section id="cost">
              <Heading>{article.cost.heading}</Heading>
              <p className={paragraph}>{article.cost.intro}</p>
              <ul className="my-6 grid gap-4 sm:grid-cols-2">
                {article.cost.prices.map((price) => (
                  <li
                    key={price.label}
                    className="rounded-2xl bg-navy-deep p-6 text-center shadow-md"
                  >
                    <span className="block font-heading text-5xl font-bold text-white">
                      {price.amount}
                    </span>
                    <span className="mt-1 block text-white/85">{price.label}</span>
                  </li>
                ))}
              </ul>
              <p className={paragraph}>{article.cost.outro}</p>
            </section>

            <section id="appointment">
              <Heading>{article.expect.heading}</Heading>
              <ol className="space-y-4">
                {article.expect.steps.map((step, i) => (
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
              <p className={`mt-6 ${paragraph}`}>{article.expect.outro}</p>
            </section>

            <section id="avoid">
              <Heading>{article.avoid.heading}</Heading>
              <ul className="grid gap-4 sm:grid-cols-2">
                {article.avoid.items.map((item) => (
                  <li key={item.title} className="rounded-xl border border-cream-dark bg-cream p-5">
                    <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <X className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="leading-relaxed text-navy/90">
                      <strong className="font-semibold text-navy">{item.title}</strong> {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="see-a-gp" className="rounded-2xl border-2 border-gold/60 bg-gold/10 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/30 text-accent">
                  <TriangleAlert className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-navy">
                    {article.urgent.heading}
                  </h2>
                  <p className="mt-3 leading-relaxed text-navy/90">{article.urgent.intro}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 font-semibold text-navy">
                    {article.urgent.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-3 leading-relaxed text-navy/90">{article.urgent.outro}</p>
                </div>
              </div>
            </section>

            <section id="hearing-aids">
              <Heading>{article.hearingAids.heading}</Heading>
              <p className={paragraph}>
                <RichText text={article.hearingAids.text} />
              </p>
              <Photo {...article.hearingAids.image} />
            </section>

            <section id="still-muffled">
              <Heading>{article.stillMuffled.heading}</Heading>
              <p className={paragraph}>
                <RichText text={article.stillMuffled.text} />
              </p>
            </section>

            <section id="why-wootton">
              <Heading>{article.why.heading}</Heading>
              <p className={paragraph}>
                <RichText text={article.why.text} />
              </p>
              <Photo {...article.why.image} />
              <div className="rounded-2xl bg-navy-deep p-6 text-center sm:p-8">
                <div className="font-heading text-2xl font-bold !text-white sm:text-3xl">
                  {article.ready.heading}
                </div>
                <p className="mt-2 text-lg !text-white/90">
                  <RichText
                    text={article.ready.text}
                    linkClassName="font-semibold !text-white underline underline-offset-2"
                  />
                </p>
              </div>
            </section>
          </article>

          {/* Sidebar */}
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
                  <Button href={article.bookingHref} className="w-full">
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
        </div>
      </div>

      <FaqAccordion heading={article.faqsHeading} faqs={article.faqs} />

      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="container">
            <h2 className="mb-10 text-center font-heading text-2xl font-bold text-navy sm:text-3xl">
              Related articles
            </h2>
            <ul className="grid gap-8 md:grid-cols-3">
              {related.map((post) => (
                <li key={post.slug} className="flex">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <JsonLd data={earWaxArticleSchema()} />
    </>
  );
}
