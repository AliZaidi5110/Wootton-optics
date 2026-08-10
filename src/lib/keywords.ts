/**
 * Sitewide SEO keyword map for Wootton Optician & Hearing Care (Northampton).
 * Sourced from service pages, local search intent, and blog tags.
 */

export const CORE_KEYWORDS = [
  "eye care Northampton",
  "eye care in Northampton",
  "optician Northampton",
  "opticians Northampton",
  "eye test Northampton",
  "NHS eye test Northampton",
  "sight test Northampton",
  "hearing care Northampton",
  "hearing test Northampton",
  "free hearing test Northampton",
  "hearing aids Northampton",
  "ear wax removal Northampton",
  "microsuction Northampton",
  "audiologist Northampton",
  "designer glasses Northampton",
  "contact lenses Northampton",
  "Wootton Optician",
  "Wootton Hearing Care",
  "optician Wootton Fields",
  "hearing care Wootton Fields",
  "optician Northamptonshire",
] as const;

export const PAGE_KEYWORDS: Record<string, string[]> = {
  home: [
    ...CORE_KEYWORDS,
    "independent optician Northampton",
    "family optician Northampton",
    "hearing aid repairs Northampton",
    "dry eye assessment Northampton",
    "myopia management Northampton",
  ],
  optics: [
    "optician Northampton",
    "opticians Northampton",
    "glasses Northampton",
    "eye test Northampton",
    "designer glasses Northampton",
    "contact lenses Northampton",
    "varifocal lenses Northampton",
    "blue light glasses Northampton",
    "prescription sunglasses Northampton",
    "optician Wootton Fields",
  ],
  hearing: [
    "hearing care Northampton",
    "hearing test Northampton",
    "hearing aids Northampton",
    "ear wax removal Northampton",
    "free hearing test Northampton",
    "hearing aid repairs Northampton",
    "tinnitus Northampton",
    "audiologist Northampton",
    "hearing care Wootton Fields",
    "Bluetooth hearing aids Northampton",
  ],
  services: [
    "ear wax removal cost Northampton",
    "eye test price Northampton",
    "hearing test Northampton",
    "NHS eye test Northampton",
    "hearing aid prices Northampton",
    "private eye test Northampton",
    "contact lens fitting Northampton",
  ],
  about: [
    "family optician Northampton",
    "independent optician Northampton",
    "Wootton Optician",
    "Wootton Hearing Care",
    "optician Wootton Fields",
    "hearing care Northampton",
  ],
  contact: [
    "contact optician Northampton",
    "Wootton Optician phone",
    "hearing clinic Northampton",
    "book eye test Northampton",
    "optician Wootton Hope Drive",
  ],
  appointments: [
    "book eye test Northampton",
    "book hearing test Northampton",
    "NHS eye test appointment Northampton",
    "free hearing consultation Northampton",
    "book ear wax removal Northampton",
  ],
  "eye-care-northampton": [
    "eye care Northampton",
    "eye care in Northampton",
    "optician Northampton",
    "eye test Northampton",
    "NHS eye test Northampton",
    "independent optician Northampton",
    "optician Wootton Fields",
  ],
  "nhs-eye-test-northampton": [
    "NHS eye test Northampton",
    "NHS sight test Northampton",
    "free eye test Northampton",
    "optician Northampton NHS",
    "NHS optical voucher Northampton",
  ],
  "ear-wax-removal-northampton": [
    "ear wax removal Northampton",
    "microsuction Northampton",
    "ear wax removal cost Northampton",
    "ear syringing Northampton",
    "blocked ear Northampton",
  ],
  "free-hearing-test-northampton": [
    "free hearing test Northampton",
    "hearing test Northampton",
    "free hearing consultation Northampton",
    "audiologist Northampton",
    "hearing assessment Northampton",
  ],
  "myopia-management-northampton": [
    "myopia management Northampton",
    "myopia control Northampton",
    "children eye test Northampton",
    "short sighted children Northampton",
    "myopia management Wootton Fields",
  ],
  "dry-eye-assessment-northampton": [
    "dry eye assessment Northampton",
    "dry eyes Northampton",
    "dry eye treatment Northampton",
    "gritty eyes Northampton",
    "dry eye clinic Northamptonshire",
  ],
  "hearing-aid-repairs-northampton": [
    "hearing aid repairs Northampton",
    "hearing aid servicing Northampton",
    "hearing aid cleaning Northampton",
    "hearing aid maintenance Northamptonshire",
    "broken hearing aid Northampton",
  ],
  blog: [
    "eye care advice Northampton",
    "hearing health Northampton",
    "optician blog Northampton",
    "hearing aids guide Northampton",
    "eye test tips Northamptonshire",
  ],
};

/** Collect unique tags from blog posts for page metadata. */
export function keywordsFromTags(tags: string[], extras: string[] = []): string[] {
  return Array.from(new Set([...extras, ...tags]));
}

export function pageKeywords(key: keyof typeof PAGE_KEYWORDS | string): string[] {
  return PAGE_KEYWORDS[key] ?? [...CORE_KEYWORDS];
}
