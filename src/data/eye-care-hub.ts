/**
 * Eye care hub (/optics) and Eye Care Northampton page copy — OPTICS.docx pages 1–2.
 * Inline links use the form [label](/path) and are rendered by <RichText />.
 */

import { eyeCareServices, type EyeCareFaq, type EyeCareService } from "./eye-care-services";

export const hubPath = "/optics";
export const eyeCareNorthamptonPath = "/eye-care-northampton";

/** "More from Wootton Opticians & Hearing Care" row shown at the foot of every eye care page */
export const moreFromLinks = [
  { href: "/services", label: "All services and prices" },
  { href: "/hearing", label: "Hearing care" },
  { href: "/free-hearing-test-northampton", label: "Free hearing test" },
  { href: "/about", label: "About us" },
  { href: "/blog", label: "Advice and blog" },
  { href: "/contact", label: "Contact us" },
  { href: "/appointments", label: "Book an appointment" },
];

/* ───────────────────────────── HUB (/optics) ───────────────────────────── */

export const hub = {
  metaTitle: "Opticians Northampton | Eye Tests & Glasses | Wootton",
  metaDescription:
    "Independent opticians in Wootton, Northampton since 2003. NHS & private eye tests, designer glasses, contact lenses and eye clinics. Book online today.",
  h1: "Opticians in Northampton: Eye Tests, Glasses & Eye Care at Wootton",
  intro:
    "[Wootton Opticians](/) is an independent, family-run optician at 9 Tudor Court, Wootton Hope Drive, Northampton NN4 6FF. Since 2003 we have given families in Wootton, Wootton Fields, Hardingstone, Collingtree and across south Northampton NHS and private eye tests, designer glasses, contact lenses and specialist eye clinics, with no sales pressure.",
  hours:
    "Open Monday, Tuesday, Thursday and Friday 9:00 to 5:30. Wednesday and Saturday 9:00 to 12:00. Closed Sunday. Closed for lunch 1:00 to 2:00.",
  whyPatientsChooseUs: [
    "Independent family practice since 2003",
    "NHS and private eye tests",
    "ABDO-registered dispensing opticians",
    "Digital retinal imaging",
    "Saturday morning appointments",
  ],
  localHeading: "Your local independent optician in Wootton, Northampton",
  localText:
    "At our Wootton Fields practice we combine a thorough clinical eye examination with personal frame styling and advanced lens options. You see the same clinicians each visit, so they know your history and your eyes. Whether you need a routine eye test, new glasses or contact lenses, or help with a specific eye problem, we take the time to explain everything clearly.",
  bookList: [
    "NHS and private eye tests",
    "Digital retinal imaging and glaucoma screening",
    "Children's eye tests",
    "Designer and everyday glasses frames",
    "Varifocal, occupational, blue light, photochromic, high-index and sports lenses",
    "Contact lens fitting and aftercare, including specialist lenses",
    "Dry eye assessment",
    "Myopia management for children",
  ],
  servicesHeading: "Our eye care services in Northampton",
  testsHeading: "Eye tests in Northampton: NHS and private",
  nhsTest: {
    label: "NHS eye test.",
    text: "If you qualify, your sight test is funded by the NHS. This usually includes children under 16, young people aged 16 to 18 in full-time education, adults aged 60 and over, people with diabetes, people diagnosed with glaucoma, adults aged 40 and over with a close family history of glaucoma, and people receiving certain benefits. You may also receive an NHS optical voucher towards glasses.",
    linkLabel: "Check if you qualify",
    href: "/nhs-eye-test-northampton",
  },
  privateTest: {
    label: "Private eye test, from £55.",
    text: "A longer appointment with extra clinical time, digital retinal photography and a detailed explanation of your results. It suits anyone who wants a more in-depth check, is not eligible for an NHS test, or prefers flexible booking.",
    linkLabel: "Learn more about private eye tests",
    href: "/private-eye-test-northampton",
  },
  howOften: {
    label: "How often should I have an eye test?",
    text: "Most adults should have an eye test every two years. Have one every year if you are over 40, have diabetes, or have a family history of glaucoma. Children are often tested every year.",
  },
  brandsHeading: "Designer glasses in Northampton: brands we stock",
  brandsText:
    "From NHS frames to designer labels, we source independently so your frames suit your face, your prescription and your budget.",
  brands: [
    "Gotti",
    "Coco Song",
    "FEB31ST",
    "Porsche Design",
    "Longchamp",
    "William Morris",
    "Wright & Bailey",
    "Calvin Klein",
    "Aspinall",
  ],
  brandsLink: { href: "/glasses-northampton", label: "Browse glasses and frames" },
  lensHeading: "Lens technology for every need",
  lenses: [
    {
      title: "Varifocal (progressive) lenses",
      text: "Seamless vision at all distances without visible lines. Ideal for presbyopia.",
    },
    { title: "Blue light filtering lenses", text: "Help reduce eye strain from screens." },
    {
      title: "Photochromic lenses",
      text: "Darken in sunlight and clear indoors. Two pairs in one.",
    },
    {
      title: "High-index thin lenses",
      text: "Thinner, lighter lenses for strong prescriptions.",
    },
    {
      title: "Sports lenses",
      text: "Impact-resistant materials and wraparound fit options for active lifestyles.",
    },
  ],
  clinicsHeading: "Specialist eye clinics at Wootton Opticians",
  clinics: [
    {
      title: "Dry eye assessment",
      text: "Find out why your eyes feel dry, gritty or watery.",
      href: "/dry-eye-assessment-northampton",
    },
    {
      title: "Myopia management",
      text: "Help slow short-sightedness in children.",
      href: "/myopia-management-northampton",
    },
    {
      title: "Glaucoma screening",
      text: "Pressure, optic nerve and visual field checks.",
      href: "/glaucoma-screening-northampton",
    },
    {
      title: "Specialist contact lenses",
      text: "Toric, multifocal, rigid gas permeable and more.",
      href: "/contact-lenses-northampton",
    },
  ],
  whyChooseHeading: "Why choose Wootton Opticians?",
  whyChoose: [
    {
      title: "Truly independent",
      text: "We are not tied to any supplier, so we recommend what is genuinely best for your eyes.",
    },
    {
      title: "NHS and private under one roof",
      text: "Eligible NHS sight tests and vouchers, alongside private appointments and premium options.",
    },
    {
      title: "Family-run since 2003",
      text: "An independent practice built on trust and long-term relationships with local families.",
    },
    {
      title: "The same clinicians every visit",
      text: "See the same qualified professionals who know your history and understand your needs.",
    },
    {
      title: "Unhurried appointments",
      text: "Clear explanations and tailored advice, never a one-size-fits-all approach.",
    },
    {
      title: "Open Saturday mornings",
      text: "Appointments on Wednesday and Saturday mornings, 9:00 to 12:00, as well as weekdays.",
    },
  ],
  areasHeading: "Opticians near you: areas we serve",
  areasText:
    "Wootton Opticians is on Wootton Hope Drive and serves Wootton, Wootton Fields, Hardingstone, Collingtree and the wider south Northampton area, as well as patients from across Northampton.",
  underOneRoofHeading: "Eye care and hearing care under one roof",
  underOneRoofText:
    "Wootton Opticians is part of Wootton Opticians & Hearing Care, so you can look after your eyes and your hearing in one place. Visit our [hearing care page](/hearing), read [about us](/about), see [all services and prices](/services) or [contact us](/contact).",
  findUsHeading: "Find us: opticians at Wootton Hope Drive, Northampton NN4",
  adviceHeading: "Advice from our team",
  advice: [
    {
      href: "/blog/eye-test-northampton-importance",
      label: "Why Regular Eye Tests Matter: A Northampton Optician's Guide",
    },
    {
      href: "/blog/nhs-eye-test-northampton-eligibility",
      label: "NHS Eye Test Eligibility in Northampton: Who Qualifies and How to Book",
    },
    { href: "/blog", label: "View all articles" },
  ],
  faqsHeading: "Eye care FAQs",
  faqs: [
    {
      question: "Do you offer NHS eye tests in Northampton?",
      answer:
        "Yes. Wootton Opticians provides NHS sight tests for eligible patients in Northampton. Eligibility includes children under 16, young people aged 16 to 18 in full-time education, adults aged 60 and over, people with diabetes, people diagnosed with glaucoma, adults aged 40 and over with a close family history of glaucoma, and people on certain benefits. We also accept NHS optical vouchers. Not sure if you qualify? Call us on 01604 875111.",
    },
    {
      question: "How much is a private eye test in Northampton?",
      answer:
        "A private sight test at Wootton Opticians starts from £55. It includes extra appointment time and digital retinal imaging, and your optometrist explains your results in full.",
    },
    {
      question: "How often should I have an eye test?",
      answer:
        "Most adults should have an eye test every two years. Have one every year if you are over 40, have diabetes, or have a family history of glaucoma. Children are often tested every year to support learning and catch problems early.",
    },
    {
      question: "Where is the nearest independent optician to Wootton Fields?",
      answer:
        "Wootton Opticians, at 9 Tudor Court, Wootton Hope Drive, Northampton NN4 6FF, is an independent family-run optician serving Wootton Fields, Wootton, Hardingstone, Collingtree and south Northampton.",
    },
    {
      question: "What lens options are available?",
      answer:
        "We offer single vision, bifocal, varifocal, occupational and sports lenses, with anti-reflective, blue light filtering and photochromic options. Our dispensing opticians match lenses to your prescription and daily routine.",
    },
    {
      question: "Do you accept NHS vouchers for glasses?",
      answer:
        "Yes. Bring your voucher and we will show you frames it covers, with optional upgrades if you prefer.",
    },
    {
      question: "Do you test children's eyes?",
      answer:
        "Yes. We offer gentle, age-appropriate eye tests for children, and NHS testing is available for eligible children. [Children's eye tests](/childrens-eye-test-northampton)",
    },
    {
      question: "Do you offer dry eye treatment or myopia management?",
      answer:
        "Yes. We offer a dry eye assessment and myopia management for children. See our [dry eye assessment](/dry-eye-assessment-northampton) and [myopia management](/myopia-management-northampton) pages.",
    },
    {
      question: "Are you open on Saturdays?",
      answer:
        "Yes. We are open on Saturday from 9:00 to 12:00. We are also open on Wednesday from 9:00 to 12:00, and Monday, Tuesday, Thursday and Friday from 9:00 to 5:30. We close for lunch from 1:00 to 2:00.",
    },
  ] satisfies EyeCareFaq[],
  bookHeading: "Ready to book your eye test in Northampton?",
  bookText:
    "Contact our Wootton clinic today. We are here to help with sight tests, glasses and personalised advice, with no obligation.",
};

/* ──────────────────────── EYE CARE NORTHAMPTON PAGE ──────────────────────── */

export const eyeCarePage = {
  metaTitle: "Eye Care Northampton | Independent Eye Clinic | Wootton",
  metaDescription:
    "Complete eye care in Northampton at Wootton Opticians: eye tests, glaucoma screening, dry eye and myopia care for the whole family. Book online.",
  h1: "Eye Care in Northampton: Complete Family Eye Health at Wootton",
  intro:
    "Good eye care is more than a pair of glasses. At [Wootton Opticians](/), on Wootton Hope Drive in Northampton, we look after your vision and your eye health at every stage of life, from a child's first eye test to screening for conditions that can affect us as we get older. We are an independent, family-run practice and have cared for local families since 2003.",
  includesHeading: "What does an eye care appointment include?",
  includesIntro: "A full eye test at Wootton Opticians checks two things:",
  includes: [
    "Your vision: how clearly you see, and whether you need glasses or a change of prescription.",
    "Your eye health: the front and back of the eye, including checks that can spot early signs of conditions such as glaucoma.",
  ],
  includesOutro:
    "Your optometrist then explains your results in plain English and recommends what you need. Read more in our guide: [Why Regular Eye Tests Matter](/blog/eye-test-northampton-importance).",
  ageHeading: "Eye care for every age",
  ages: [
    {
      title: "Children and teenagers",
      text: "Regular eye tests help children learn, play and develop. We use gentle, age-appropriate methods and can spot lazy eye, squint and focusing problems early.",
      links: [
        { href: "/childrens-eye-test-northampton", label: "Children's eye tests" },
        { href: "/myopia-management-northampton", label: "Myopia management" },
      ],
    },
    {
      title: "Adults and screen users",
      text: "Long hours on screens can cause tired, dry or sore eyes. We can check your eyes, advise on lens options such as blue light filtering, and assess dry eye.",
      links: [{ href: "/dry-eye-assessment-northampton", label: "Dry eye assessment" }],
    },
    {
      title: "Over 40s and over 60s",
      text: "Changes such as presbyopia (difficulty reading up close) usually begin around 40, and the risk of some eye conditions rises with age. We offer glaucoma screening and varifocal lenses.",
      links: [
        { href: "/glaucoma-screening-northampton", label: "Glaucoma screening" },
        { href: "/glasses-northampton", label: "Varifocal lenses" },
      ],
    },
  ],
  servicesHeading: "Our eye care services",
  /** Labels as listed in the document (the private test carries its price) */
  serviceLabels: {
    "private-eye-test-northampton": "Private Eye Test Northampton, from £55",
  } as Record<string, string>,
  signsHeading: "Signs you should book an eye test",
  signsIntro: "Book an appointment if you notice any of these:",
  signs: [
    "Blurred vision, or trouble seeing in dim light",
    "Headaches or tired eyes after reading or screen work",
    "Dry, gritty, burning or watery eyes",
    "Holding things further away to read them",
    "A child who sits close to the TV, squints or struggles at school",
    "A family history of glaucoma or other eye conditions",
  ],
  urgent:
    "If you have a sudden loss of vision, sudden flashes of light or new floaters, or eye pain, seek urgent medical help the same day by calling NHS 111 or going to A&E.",
  whyHeading: "Why local families choose Wootton Opticians",
  why: [
    "Independent and family-run since 2003",
    "The same clinicians every visit",
    "NHS and private appointments",
    "Saturday morning appointments",
    "Clear explanations with no sales pressure",
  ],
  faqsHeading: "Eye care FAQs",
  faqs: [
    {
      question: "What is included in an eye test?",
      answer:
        "An eye test checks how well you see and the health of your eyes. Your optometrist will tell you whether you need glasses and whether anything needs a follow-up.",
    },
    {
      question: "How often should I have my eyes checked?",
      answer:
        "Every two years for most adults. Every year if you are over 40, have diabetes or have a family history of glaucoma. Children are often tested every year.",
    },
    {
      question: "Where can I get eye care near Wootton Fields?",
      answer:
        "At Wootton Opticians, 9 Tudor Court, Wootton Hope Drive, Northampton NN4 6FF. We are open Monday to Saturday.",
    },
    {
      question: "Can I book an eye test online?",
      answer: "Yes. Use the booking button on this page or call 01604 875111.",
    },
  ] satisfies EyeCareFaq[],
  bookHeading: "Book your eye care appointment in Northampton",
};

/** The Eye Care Northampton page expressed as a service page so it shares the same template. */
export const eyeCareNorthamptonService: EyeCareService = {
  slug: "eye-care-northampton",
  path: eyeCareNorthamptonPath,
  name: "Eye Care Northampton",
  overview: "Complete family eye health at Wootton Opticians.",
  icon: "eye",
  breadcrumb: "Eye Care Northampton",
  metaTitle: eyeCarePage.metaTitle,
  metaDescription: eyeCarePage.metaDescription,
  h1: eyeCarePage.h1,
  intro: eyeCarePage.intro,
  ctaLabel: "Book an Eye Test",
  highlights: ["Vision and eye health checks", "Care for every age", "Open Saturday mornings"],
  schemaDescription:
    "Independent eye care in Northampton including NHS and private eye tests, glasses and specialist clinics at Wootton Opticians.",
  blocks: [
    {
      type: "list",
      heading: eyeCarePage.includesHeading,
      intro: eyeCarePage.includesIntro,
      style: "check",
      items: eyeCarePage.includes,
      outro: eyeCarePage.includesOutro,
    },
    {
      type: "cards",
      heading: eyeCarePage.ageHeading,
      cards: eyeCarePage.ages.map((age) => ({
        title: age.title,
        text: `${age.text} ${age.links.map((l) => `[${l.label}](${l.href})`).join(" · ")}`,
      })),
    },
    {
      type: "list",
      heading: eyeCarePage.servicesHeading,
      items: eyeCareServices.map(
        (s) => `[${eyeCarePage.serviceLabels[s.slug] ?? s.name}](${s.path})`
      ),
    },
    {
      type: "list",
      heading: eyeCarePage.signsHeading,
      intro: eyeCarePage.signsIntro,
      style: "alert",
      items: eyeCarePage.signs,
      outro: eyeCarePage.urgent,
    },
    {
      type: "list",
      heading: eyeCarePage.whyHeading,
      style: "check",
      items: eyeCarePage.why,
    },
  ],
  faqsHeading: eyeCarePage.faqsHeading,
  faqs: eyeCarePage.faqs,
  bookHeading: eyeCarePage.bookHeading,
  bookCtaLabel: "Book Sight Test Online",
};
