import type { NextConfig } from "next";

/** Retired blog articles -> closest live page, so old links and search results don't 404. */
const retiredBlogPosts: Record<string, string> = {
  "hearing-aids-northampton-complete-guide": "/hearing-aids-northampton",
  "signs-you-need-hearing-test": "/free-hearing-test-northampton",
  "hearing-aid-technology-2025": "/hearing-aids-northampton",
  "tinnitus-management-guide": "/hearing",
  "protecting-hearing-at-work": "/hearing",
  "children-hearing-health": "/hearing",
  "hearing-aids-vs-amplifiers": "/hearing-aids-northampton",
  "eye-test-northampton-importance": "/eye-care-northampton",
  "choosing-right-eyewear": "/glasses-northampton",
  "blue-light-glasses-truth": "/glasses-northampton",
  "uv-protection-eyes": "/glasses-northampton",
  "varifocal-lenses-guide": "/glasses-northampton",
  "contact-lenses-beginners": "/contact-lenses-northampton",
  "dry-eye-syndrome-relief": "/dry-eye-assessment-northampton",
  "screen-time-children-eyes": "/childrens-eye-test-northampton",
  "hearing-optical-wellness-connection": "/services",
  "senior-eye-care-guide": "/eye-care-northampton",
  "nutrition-eyes-ears": "/blog",
  "managing-diabetes-eyes": "/eye-care-northampton",
  "sleep-hearing-health": "/hearing",
  "nhs-vs-private-hearing-aids": "/hearing-aids-northampton",
  "spring-allergies-eyes-ears": "/blog",
  "nhs-eye-test-northampton-eligibility": "/nhs-eye-test-northampton",
  "free-hearing-test-northampton-guide": "/free-hearing-test-northampton",
  "myopia-short-sightedness-northampton": "/myopia-management-northampton",
};

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "libphonenumber-js"],
  },
  async redirects() {
    return Object.entries(retiredBlogPosts).map(([slug, destination]) => ({
      source: `/blog/${slug}`,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/(.*)\\.(jpg|jpeg|png|webp|avif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
