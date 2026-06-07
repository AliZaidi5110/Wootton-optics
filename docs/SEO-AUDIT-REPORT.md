# SEO Audit Report — Wootton Hearing & Optics

**Date:** June 2025  
**Site:** woottonhearing.co.uk  
**Status:** Implementation Complete

## Technical SEO ✅

| Requirement | Status | Implementation |
|-------------|--------|----------------|
| XML Sitemap | ✅ | Auto-generated via `src/app/sitemap.ts` (34+ URLs) |
| Robots.txt | ✅ | `src/app/robots.ts` with API/admin disallow |
| Schema Markup | ✅ | LocalBusiness, Article, BreadcrumbList JSON-LD |
| Open Graph | ✅ | Dynamic OG tags per page via `generateSEO()` |
| Twitter Cards | ✅ | summary_large_image on all pages |
| Canonical URLs | ✅ | Set via metadata alternates |
| Hreflang | ✅ | en-GB and en-US alternates |
| Meta Descriptions | ✅ | Max 160 chars, dynamically generated |

## On-Page SEO ✅

| Requirement | Status | Notes |
|-------------|--------|-------|
| H1/H2/H3 Hierarchy | ✅ | Single H1 per page, logical heading structure |
| Focus Keywords | ✅ | "hearing aids Ilford", "optical services Essex", "hearing care London" |
| Alt Text | ✅ | imageAlt on all blog posts; placeholder images annotated |
| Internal Linking | ✅ | Cross-links between hearing, optics, blog, services |
| LSI Keywords | ✅ | Integrated in blog content and page copy |
| Mobile-First | ✅ | Responsive 320px–2560px, touch targets 48px+ |

## Content SEO ✅

- **22 blog articles** across Hearing Health, Eye Care, and Wellness
- Category filtering and related posts
- Author bios and structured article schema
- Local SEO focus throughout all content

## Performance SEO ✅

| Optimization | Status |
|-------------|--------|
| Image WebP/AVIF | ✅ next.config.ts formats |
| Lazy Loading | ✅ iframe and images |
| Code Splitting | ✅ Next.js automatic |
| Compression | ✅ Enabled in next.config |
| CDN | ✅ Via Vercel Edge Network |
| Caching Headers | ✅ Static assets 1-year cache |

## Core Web Vitals Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | <2.5s | Font display:swap, minimal hero JS, edge CDN |
| FID/INP | <100ms | Minimal client JS on critical path |
| CLS | <0.1 | Explicit dimensions, font fallbacks |

## Recommended Next Steps

1. Add real photography (team, clinic, products) with optimized WebP
2. Submit sitemap to Google Search Console and Bing Webmaster Tools
3. Set up Google Business Profile with matching NAP data
4. Configure GA4 conversion tracking for form submissions
5. Expand blog to 200+ articles per content strategy guide
6. Add review schema once Google reviews are collected

## Monthly Monitoring Checklist

- [ ] Google Search Console — crawl errors, indexing
- [ ] Core Web Vitals report
- [ ] Keyword ranking tracking (hearing aids Ilford, etc.)
- [ ] Broken link audit
- [ ] Schema validation via Google Rich Results Test
