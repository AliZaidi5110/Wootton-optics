/**
 * Eye care service pages — copy taken from OPTICS.docx (pages 3–10).
 * Inline links use the form [label](/path) and are rendered by <RichText />.
 */

export type EyeCareBlock =
  | { type: "text"; heading: string; paragraphs: string[] }
  | {
      type: "list";
      heading: string;
      intro?: string;
      items: string[];
      outro?: string;
      /** "check" = benefits, "steps" = numbered, "alert" = warning signs */
      style?: "check" | "steps" | "alert";
    }
  | {
      type: "cards";
      heading: string;
      intro?: string;
      cards: { title: string; text: string }[];
    };

export type EyeCareFaq = { question: string; answer: string };

export type EyeCareIcon =
  | "shield-check"
  | "scan-eye"
  | "baby"
  | "contact"
  | "droplets"
  | "focus"
  | "gauge"
  | "glasses"
  | "eye";

export type EyeCareService = {
  slug: string;
  path: string;
  /** Name shown on the hub grid and in "Explore more" lists (matches the document) */
  name: string;
  /** One-line overview shown on the hub grid */
  overview: string;
  icon: EyeCareIcon;
  /** Short label for breadcrumbs */
  breadcrumb: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  ctaLabel: string;
  /** Short highlight chips under the hero copy */
  highlights?: string[];
  blocks: EyeCareBlock[];
  faqsHeading: string;
  faqs: EyeCareFaq[];
  bookHeading: string;
  bookText?: string;
  /** Label for the booking button (defaults to "Book Online") */
  bookCtaLabel?: string;
  /** Anchors the service in schema.org */
  schemaDescription: string;
  priceFrom?: string;
};

export const eyeCareServices: EyeCareService[] = [
  /* ───────────────────────── 1. NHS EYE TEST ───────────────────────── */
  {
    slug: "nhs-eye-test-northampton",
    path: "/nhs-eye-test-northampton",
    name: "NHS Eye Test Northampton",
    overview: "A free sight test and eye health check if you are eligible.",
    icon: "shield-check",
    breadcrumb: "NHS Eye Test",
    metaTitle: "NHS Eye Test Northampton | Free if Eligible | Wootton",
    metaDescription:
      "NHS eye test in Northampton at Wootton Opticians. Find out who gets a free sight test, what to bring and how to book. Open Saturdays. Call 01604 875111.",
    h1: "NHS Eye Test in Northampton: Who Qualifies and How to Book",
    intro:
      "[Wootton Opticians](/) offers NHS-funded sight tests to eligible patients at our practice on Wootton Hope Drive, Northampton. If you qualify, the test costs you nothing. It includes a vision check, an eye health examination, and a prescription if you need one.",
    ctaLabel: "Book an NHS Eye Test",
    highlights: ["Free if eligible", "NHS vouchers accepted", "Open Saturday mornings"],
    schemaDescription:
      "NHS-funded sight tests for eligible patients at Wootton Opticians, Northampton.",
    blocks: [
      {
        type: "text",
        heading: "What is an NHS eye test?",
        paragraphs: [
          "An NHS eye test, also called an NHS sight test, checks how well you see and the health of your eyes. For eligible patients, the NHS pays for it. We do not rush you and we explain your results clearly. If we find something that needs more attention, we will refer you to the right specialist.",
        ],
      },
      {
        type: "list",
        heading: "Who can get a free NHS eye test?",
        intro: "You can usually get a free NHS sight test in England if you:",
        items: [
          "are under 16",
          "are 16, 17 or 18 and in full-time education",
          "are aged 60 or over",
          "have diabetes",
          "have been diagnosed with glaucoma, or are 40 or over and have a parent, brother, sister or child with glaucoma",
          "are registered blind or partially sight impaired",
          "have been advised that you have a complex prescription",
          "receive certain benefits or qualify for help under the NHS Low Income Scheme",
        ],
        outro:
          "Not sure if you qualify? Call us on 01604 875111 and we will check for you. You can also read our guide: [NHS Eye Test Eligibility in Northampton](/blog/nhs-eye-test-northampton-eligibility).",
      },
      {
        type: "list",
        heading: "What to bring to your NHS eye test",
        items: [
          "Your current glasses and contact lenses, if you wear them",
          "A list of any medicines you take",
          "Your NHS optical voucher or proof of eligibility, if you have one",
          "Details of any eye problems in your family",
        ],
      },
      {
        type: "list",
        heading: "What happens at your appointment",
        style: "steps",
        items: [
          "A chat about your eyes, your health and your daily routine.",
          "Vision tests to check how clearly you see, near and far.",
          "Eye health checks: an examination of the front and back of your eyes.",
          "Your results explained: whether you need glasses and when to come back.",
          "Glasses advice: our dispensing opticians can help you choose frames.",
        ],
      },
      {
        type: "text",
        heading: "NHS optical vouchers: help with the cost of glasses",
        paragraphs: [
          "If you qualify for a voucher, it goes towards the cost of your glasses or contact lenses. We accept NHS optical vouchers and will show you frames that your voucher covers. You can upgrade to designer frames or advanced lenses if you wish. [Glasses and frames](/glasses-northampton)",
        ],
      },
      {
        type: "text",
        heading: "How often can I have a free NHS eye test?",
        paragraphs: [
          "Most people are advised to have an eye test every two years. Your optometrist may recommend a shorter gap if you are over 40, have diabetes, have a family history of glaucoma, or have a health condition that affects your eyes.",
        ],
      },
      {
        type: "text",
        heading: "Want a longer appointment? Try a private eye test",
        paragraphs: [
          "If you do not qualify for an NHS test, or you want more time and digital retinal photography, our [private eye test](/private-eye-test-northampton) starts from £55.",
        ],
      },
    ],
    faqsHeading: "NHS eye test FAQs",
    faqs: [
      {
        question: "Is an NHS eye test really free?",
        answer:
          "Yes, if you are eligible. The NHS covers the cost of your sight test. You only pay if you choose to buy glasses or extras beyond any voucher you receive.",
      },
      {
        question: "Can children have a free NHS eye test?",
        answer:
          "Yes. Children under 16, and young people aged 16 to 18 in full-time education, are eligible. See our [children's eye tests](/childrens-eye-test-northampton).",
      },
      {
        question: "Can I book an NHS eye test on a Saturday?",
        answer:
          "We are open on Saturday from 9:00 to 12:00. Call 01604 875111 or [book online](/appointments?service=eye-test).",
      },
      {
        question: "Do you accept NHS vouchers for glasses?",
        answer:
          "Yes. We accept NHS optical vouchers and will help you choose frames they cover.",
      },
      {
        question: "What if I do not qualify for a free test?",
        answer:
          "You can book a [private eye test](/private-eye-test-northampton) from £55.",
      },
    ],
    bookHeading: "Book your NHS eye test in Northampton",
  },

  /* ──────────────────────── 2. PRIVATE EYE TEST ─────────────────────── */
  {
    slug: "private-eye-test-northampton",
    path: "/private-eye-test-northampton",
    name: "Private Eye Test Northampton",
    overview: "A longer appointment with digital retinal photography. From £55.",
    icon: "scan-eye",
    breadcrumb: "Private Eye Test",
    metaTitle: "Private Eye Test Northampton | From £55 | Wootton Opticians",
    metaDescription:
      "Private eye test in Northampton from £55: longer appointment, digital retinal photography and clear results on the day. Book at Wootton Opticians.",
    h1: "Private Eye Test in Northampton: A Longer, More Detailed Eye Exam",
    intro:
      "Our private eye test gives you extra time with your optometrist, digital retinal photography and a clear explanation of your results, all from £55. It suits anyone who wants a more in-depth look at their eye health, is not eligible for an NHS test, or prefers a flexible private appointment.",
    ctaLabel: "Book a Private Eye Test",
    highlights: ["From £55", "Digital retinal photography", "Same-day results"],
    priceFrom: "55",
    schemaDescription:
      "Private sight tests with extended appointment time and digital retinal photography at Wootton Opticians, Northampton.",
    blocks: [
      {
        type: "list",
        heading: "What is included in a private eye test?",
        style: "check",
        items: [
          "More appointment time with your optometrist, so nothing is rushed",
          "Digital retinal photography: a detailed picture of the back of your eye",
          "A full vision check and a prescription if you need one",
          "An eye health examination",
          "Glaucoma screening: eye pressure, optic nerve and visual field checks where clinically indicated. [Glaucoma screening](/glaucoma-screening-northampton)",
          "Same-day results and clear recommendations in plain English",
        ],
      },
      {
        type: "text",
        heading: "How much does a private eye test cost in Northampton?",
        paragraphs: [
          "A private sight test at Wootton Opticians starts from £55. NHS sight tests are free if you are eligible. [See who qualifies](/nhs-eye-test-northampton)",
        ],
      },
      {
        type: "list",
        heading: "Who is a private eye test for?",
        items: [
          "Adults who are not eligible for a free NHS test",
          "Anyone who wants a longer, more in-depth examination",
          "Busy professionals who want flexible booking",
          "Contact lens wearers and people thinking of trying lenses",
          "People with a family history of eye conditions who want detailed imaging",
        ],
      },
      {
        type: "text",
        heading: "Private eye test or NHS eye test?",
        paragraphs: [
          "Both are carried out by qualified clinicians and both check your eyes. The difference is in the time and the extras. An NHS test is free if you are eligible. A private test gives you more clinical time, digital retinal photography and flexible booking. If you are unsure which to choose, call us on 01604 875111 and we will explain.",
        ],
      },
      {
        type: "text",
        heading: "What to bring",
        paragraphs: [
          "Your current glasses and contact lenses, a list of any medicines you take, and details of any eye conditions in your family.",
        ],
      },
    ],
    faqsHeading: "Private eye test FAQs",
    faqs: [
      {
        question: "How much is an eye test in Northampton?",
        answer:
          "A private eye test at Wootton Opticians starts from £55. NHS eye tests are free for eligible patients.",
      },
      {
        question: "Will I get a prescription?",
        answer:
          "Yes. If you need glasses or contact lenses, you will receive your prescription.",
      },
      {
        question: "Can I book on a Saturday?",
        answer:
          "Yes. We are open on Saturday from 9:00 to 12:00. Call 01604 875111 or [book online](/appointments?service=eye-test).",
      },
      {
        question: "What is digital retinal photography?",
        answer:
          "It is a digital photograph of the back of your eye. It gives your optometrist a detailed view of your eye health and a record to compare at future visits.",
      },
      {
        question: "Does the private test include glaucoma screening?",
        answer:
          "Yes. Glaucoma screening is available as part of a private sight test. [Learn more](/glaucoma-screening-northampton)",
      },
    ],
    bookHeading: "Book your private eye test in Northampton",
  },

  /* ─────────────────────── 3. CHILDREN'S EYE TEST ────────────────────── */
  {
    slug: "childrens-eye-test-northampton",
    path: "/childrens-eye-test-northampton",
    name: "Children's Eye Test Northampton",
    overview: "Gentle, child-friendly eye tests. Free on the NHS for eligible children.",
    icon: "baby",
    breadcrumb: "Children's Eye Tests",
    metaTitle: "Children's Eye Test Northampton | Free NHS if Eligible",
    metaDescription:
      "Gentle children's eye tests in Northampton at Wootton Opticians. Free NHS tests for eligible children. Spot lazy eye and squint early. Book online.",
    h1: "Children's Eye Tests in Northampton: Gentle, Friendly and Free if Eligible",
    intro:
      "Healthy eyes help children learn, read, play and grow. At [Wootton Opticians](/) we carry out gentle, age-appropriate eye tests for children, and the test is free on the NHS for eligible children.",
    ctaLabel: "Book a Children's Eye Test",
    highlights: ["Free on the NHS if eligible", "No referral needed", "Open Saturday mornings"],
    schemaDescription:
      "Gentle, age-appropriate children's sight tests at Wootton Opticians, Northampton, free on the NHS for eligible children.",
    blocks: [
      {
        type: "text",
        heading: "Is my child's eye test free?",
        paragraphs: [
          "For most children, yes. NHS-funded sight tests are available for children under 16 and for young people aged 16 to 18 in full-time education. You may also receive an NHS optical voucher towards glasses. [Full NHS eligibility](/nhs-eye-test-northampton)",
        ],
      },
      {
        type: "list",
        heading: "Signs your child may need an eye test",
        style: "alert",
        items: [
          "Sitting very close to the TV or holding books close to their face",
          "Squinting or closing one eye",
          "Frequent headaches or rubbing their eyes",
          "Struggling at school, or losing their place when reading",
          "Clumsiness or poor hand-eye coordination",
          "An eye that turns in or out",
          "A family history of eye problems or strong prescriptions",
        ],
        outro:
          "Many vision problems in children have no obvious signs, so regular tests matter even when your child says they can see fine.",
      },
      {
        type: "list",
        heading: "What happens at a children's eye test?",
        style: "steps",
        items: [
          "A friendly chat with you and your child.",
          "Age-appropriate tests, using pictures, shapes or letters depending on age.",
          "Eye health and focusing checks.",
          "Eye muscle and alignment checks to look for a squint.",
          "A clear explanation for you, and for your child in simple words.",
          "Glasses advice, including comfortable, child-friendly frames if needed. [Glasses](/glasses-northampton)",
        ],
      },
      {
        type: "list",
        heading: "What can an eye test find early?",
        items: [
          "Short-sightedness (myopia): blurred distance vision. We also offer [myopia management](/myopia-management-northampton) for children whose prescription keeps increasing.",
          "Long-sightedness and astigmatism",
          "Lazy eye (amblyopia): best treated early",
          "Squint (strabismus)",
          "Focusing problems",
        ],
        outro:
          "If we find something that needs more care, we will explain it clearly and refer you to the right specialist.",
      },
      {
        type: "text",
        heading: "How often should children have an eye test?",
        paragraphs: [
          "Every two years is the general guide, but many children benefit from a test every year, especially if they wear glasses, are short-sighted or have a family history of eye problems. We will tell you when to come back.",
        ],
      },
      {
        type: "text",
        heading: "Book around school",
        paragraphs: [
          "We are open Monday, Tuesday, Thursday and Friday 9:00 to 5:30, and Wednesday and Saturday 9:00 to 12:00, so you can find a time that works around school.",
        ],
      },
    ],
    faqsHeading: "Children's eye test FAQs",
    faqs: [
      {
        question: "Do I need a referral for a children's eye test?",
        answer: "No. You can book directly with us online or by phone.",
      },
      {
        question: "Will my child need glasses?",
        answer:
          "Not always. If they do, our dispensing opticians will help you choose comfortable, durable frames, and you may be able to use an NHS voucher.",
      },
      {
        question: "Is an eye test the same as a school vision screening?",
        answer:
          "No. School screening looks for obvious problems only. A full eye test examines vision and eye health in detail.",
      },
      {
        question: "Can you help if my child is short-sighted?",
        answer: "Yes. See our [myopia management page](/myopia-management-northampton).",
      },
    ],
    bookHeading: "Book your child's eye test in Northampton",
  },

  /* ───────────────────────── 4. CONTACT LENSES ───────────────────────── */
  {
    slug: "contact-lenses-northampton",
    path: "/contact-lenses-northampton",
    name: "Contact Lenses Northampton",
    overview: "Expert fitting and aftercare, including specialist contact lenses.",
    icon: "contact",
    breadcrumb: "Contact Lenses",
    metaTitle: "Contact Lenses Northampton | Specialist Fitting | Wootton",
    metaDescription:
      "Contact lens fitting and aftercare in Northampton. Toric, multifocal and specialist lenses for hard-to-fit eyes at Wootton Opticians. Book a fitting.",
    h1: "Contact Lenses in Northampton: Expert Fitting and Specialist Lenses",
    intro:
      "Whether you are trying contact lenses for the first time or have struggled with lenses before, our team will find the right fit for your eyes and lifestyle. At [Wootton Opticians](/) we fit everyday lenses and specialist contact lenses for more complex prescriptions, with trial lenses, follow-up appointments and ongoing aftercare.",
    ctaLabel: "Book a Contact Lens Appointment",
    highlights: ["Toric & multifocal", "Trial lenses", "Ongoing aftercare"],
    schemaDescription:
      "Contact lens fitting, specialist lenses and aftercare at Wootton Opticians, Northampton.",
    blocks: [
      {
        type: "list",
        heading: "Contact lens services at Wootton Opticians",
        style: "check",
        items: [
          "Contact lens fitting and teaching",
          "Contact lens check-ups and aftercare",
          "Specialist contact lenses for complex prescriptions",
          "Trial lenses and follow-up appointments",
          "Ongoing supply management and access to leading contact lens brands",
        ],
      },
      {
        type: "cards",
        heading: "Specialist contact lenses in Northampton",
        intro: "Standard lenses do not suit everyone. We can help with:",
        cards: [
          {
            title: "Toric lenses for astigmatism",
            text: "Astigmatism means the front of the eye is shaped more like a rugby ball than a football, which can blur vision. Toric lenses are designed to correct it.",
          },
          {
            title: "Multifocal lenses for presbyopia",
            text: "If you struggle to read up close but want to avoid reading glasses, multifocal contact lenses give you vision at several distances.",
          },
          {
            title: "Rigid gas permeable (RGP) lenses",
            text: "Firm lenses that can give very sharp vision, often used for higher or more complex prescriptions.",
          },
          {
            title: "Lenses for keratoconus and high prescriptions",
            text: "If you have keratoconus or a high prescription, specialist lenses may give you better vision and comfort than standard lenses.",
          },
        ],
      },
      {
        type: "list",
        heading: "Who are specialist contact lenses for?",
        items: [
          "People with astigmatism",
          "People with presbyopia, usually over 40",
          "People with keratoconus",
          "People with high prescriptions",
          "Anyone who has struggled with standard contact lenses",
        ],
      },
      {
        type: "list",
        heading: "What to expect at your fitting",
        style: "steps",
        items: [
          "A consultation about your eyes, your lifestyle and what you want from contact lenses.",
          "Measurements of your eyes.",
          "Trial lenses to try.",
          "Teaching on putting your lenses in, taking them out and caring for them.",
          "A follow-up appointment to check comfort, vision and eye health.",
        ],
      },
      {
        type: "list",
        heading: "Contact lens care tips",
        items: [
          "Always wash and dry your hands before touching your lenses.",
          "Do not sleep in your lenses unless your optician has said it is safe.",
          "Replace lenses and cases as advised.",
          "Do not swim or shower in your lenses unless advised.",
          "Book your regular aftercare check, even if your lenses feel fine.",
        ],
      },
    ],
    faqsHeading: "Contact lens FAQs",
    faqs: [
      {
        question: "Can anyone wear contact lenses?",
        answer:
          "Most people can, but not everyone. A contact lens consultation checks whether lenses suit your eyes and your lifestyle.",
      },
      {
        question: "Can I wear contact lenses if I have astigmatism?",
        answer: "Often yes. Toric contact lenses are made for astigmatism.",
      },
      {
        question: "Can I wear multifocal contact lenses?",
        answer: "Many people with presbyopia can. We will advise you on your options.",
      },
      {
        question: "I was told I could not wear contact lenses. Can you help?",
        answer:
          "Possibly. Specialist lenses suit many people who have struggled before. Book an appointment and we will assess your eyes.",
      },
      {
        question: "How often do I need a contact lens check?",
        answer: "Usually once a year, or as often as your optometrist advises.",
      },
    ],
    bookHeading: "Book your contact lens appointment in Northampton",
  },

  /* ─────────────────────── 5. DRY EYE ASSESSMENT ─────────────────────── */
  {
    slug: "dry-eye-assessment-northampton",
    path: "/dry-eye-assessment-northampton",
    name: "Dry Eye Assessment Northampton",
    overview: "Find the cause of dry, gritty or tired eyes and get a personalised plan.",
    icon: "droplets",
    breadcrumb: "Dry Eye Assessment",
    metaTitle: "Dry Eye Treatment Northampton | Assessment | Wootton",
    metaDescription:
      "Dry, gritty or tired eyes? Book a dry eye assessment in Northampton at Wootton Opticians. Find the cause and get a personalised treatment plan.",
    h1: "Dry Eye Assessment and Treatment in Northampton",
    intro:
      "Dry, gritty, burning or watery eyes can make everyday life uncomfortable. Our dry eye assessment at [Wootton Opticians](/) looks for the cause of your symptoms, not just the discomfort, and gives you a personalised treatment plan with follow-up care.",
    ctaLabel: "Book a Dry Eye Assessment",
    highlights: ["Find the cause", "Personalised plan", "Follow-up care"],
    schemaDescription:
      "Dry eye assessment and personalised treatment plans at Wootton Opticians, Northampton.",
    blocks: [
      {
        type: "list",
        heading: "Symptoms of dry eye",
        style: "alert",
        intro: "You may have dry eye if your eyes often feel:",
        items: [
          "Dry, gritty or sandy",
          "Burning or stinging",
          "Red or irritated",
          "Tired, especially late in the day",
          "Watery",
          "Uncomfortable in wind, air conditioning or when using screens",
          "Uncomfortable with contact lenses",
        ],
      },
      {
        type: "list",
        heading: "What causes dry eyes?",
        intro: "Dry eye has several possible causes, including:",
        items: [
          "Long hours on screens, because we blink less when we concentrate",
          "Contact lens wear",
          "Blocked oil glands in the eyelids",
          "Age and hormonal changes",
          "Some medicines",
          "Dry or windy environments, central heating and air conditioning",
          "Allergies and eyelid inflammation",
        ],
        outro:
          "Because the causes differ, the right treatment differs too. That is why an assessment matters.",
      },
      {
        type: "list",
        heading: "What happens in a dry eye assessment?",
        style: "steps",
        items: [
          "We talk through your symptoms, your daily routine and your health.",
          "We examine your eyes and eyelids for signs of dryness or inflammation.",
          "We explain what is causing your symptoms, in plain language.",
          "We agree a personalised plan and arrange a follow-up.",
        ],
      },
      {
        type: "list",
        heading: "Personalised treatment and advice",
        style: "check",
        intro: "Your plan may include:",
        items: [
          "Eye drops or lubricants suited to your type of dry eye",
          "Heat therapy and eyelid care",
          "Lifestyle and screen advice",
          "Contact lens advice. [Contact lenses](/contact-lenses-northampton)",
          "Ongoing monitoring and changes to your plan if your symptoms change",
        ],
      },
      {
        type: "list",
        heading: "Who should book a dry eye assessment?",
        items: [
          "Screen users and office workers",
          "Contact lens wearers",
          "Anyone with persistent dry, irritated or tired eyes",
          "People who have tried drops without lasting relief",
        ],
      },
    ],
    faqsHeading: "Dry eye FAQs",
    faqs: [
      {
        question: "Can dry eyes cause watery eyes?",
        answer:
          "Yes. When the surface of the eye is irritated, it can produce extra tears. These tears do not protect the eye as well as normal tears.",
      },
      {
        question: "Can screen time cause dry eyes?",
        answer:
          "Yes, because we tend to blink less when using screens. Our advice covers screen breaks, blinking and lens options such as blue light filtering lenses.",
      },
      {
        question: "Can dry eye be cured?",
        answer:
          "Dry eye is often a long-term condition, but many people get good relief with the right plan. Your optometrist will explain what to expect.",
      },
      {
        question: "Are dry eyes serious?",
        answer:
          "Usually they cause discomfort rather than damage, but severe or persistent symptoms should be checked. See us promptly if you have eye pain, redness with reduced vision, or sensitivity to light.",
      },
    ],
    bookHeading: "Book your dry eye assessment in Northampton",
  },

  /* ───────────────────── 6. MYOPIA MANAGEMENT ───────────────────── */
  {
    slug: "myopia-management-northampton",
    path: "/myopia-management-northampton",
    name: "Myopia Management Northampton",
    overview: "Help to slow the progression of short-sightedness in children.",
    icon: "focus",
    breadcrumb: "Myopia Management",
    metaTitle: "Myopia Management Northampton | Children's Eyes | Wootton",
    metaDescription:
      "Myopia control for children in Northampton. Slow worsening short-sightedness with specialist lenses and monitoring at Wootton Opticians. Book a consultation.",
    h1: "Myopia Management for Children in Northampton",
    intro:
      "Is your child's prescription getting stronger every year? Myopia, or short-sightedness, often increases through childhood and the teenage years. At Wootton Opticians we offer myopia management: specialist options and regular monitoring designed to help slow the progression of short-sightedness in children.",
    ctaLabel: "Book a Myopia Consultation",
    highlights: ["Specialist lenses", "Regular monitoring", "Start early"],
    schemaDescription:
      "Myopia management for children, with specialist lenses and monitoring, at Wootton Opticians, Northampton.",
    blocks: [
      {
        type: "text",
        heading: "What is myopia?",
        paragraphs: [
          "Myopia, or short-sightedness, means distant objects look blurry while close objects look clear. It usually starts in childhood and tends to get worse as a child grows, because the eye grows longer. A stronger prescription is linked with a higher risk of some eye conditions later in life, which is why slowing progression matters.",
        ],
      },
      {
        type: "list",
        heading: "What is myopia management?",
        style: "check",
        intro:
          "Myopia management goes beyond updating glasses each year. Its aim is to slow how fast your child's prescription increases. A care plan may include:",
        items: [
          "Specialist myopia control contact lenses",
          "Specialist myopia control spectacle lenses",
          "Regular monitoring of your child's prescription and eye health",
          "Advice on outdoor time, close work and screens",
        ],
      },
      {
        type: "text",
        heading: "Why start early?",
        paragraphs: [
          "Short-sightedness often worsens fastest in younger children, so starting sooner may give the most benefit. Slowing progression may help keep the final prescription lower and may reduce the lifetime risk of myopia-related eye disease. No treatment can promise the same result for every child, and your optometrist will explain what is realistic for yours.",
        ],
      },
      {
        type: "list",
        heading: "Is my child suitable for myopia management?",
        intro:
          "Myopia management is usually considered for children and teenagers who:",
        items: [
          "Have short-sightedness that is getting worse year on year",
          "Have a family history of high prescriptions",
          "Spend long periods on close work and screens",
          "Have started to need glasses at a young age",
        ],
      },
      {
        type: "list",
        heading: "What happens at the consultation?",
        style: "steps",
        items: [
          "A full eye examination, including prescription and eye health.",
          "A discussion of family history, lifestyle and your goals.",
          "Treatment options explained, with the pros and cons of each.",
          "A monitoring plan with regular follow-up appointments.",
          "Support with fitting, lens care and any questions you have.",
        ],
      },
      {
        type: "list",
        heading: "Healthy habits that support your child's eyes",
        items: [
          "Time outdoors every day",
          "Regular breaks from screens and close work",
          "Good lighting for reading and homework",
          "Regular eye tests to track changes. [Children's eye tests](/childrens-eye-test-northampton)",
        ],
      },
    ],
    faqsHeading: "Myopia management FAQs",
    faqs: [
      {
        question: "Does myopia management cure short-sightedness?",
        answer:
          "No. It aims to slow progression. Your child will still need a prescription for clear distance vision.",
      },
      {
        question: "Do children wear glasses or contact lenses for myopia control?",
        answer:
          "It depends on the child. We discuss specialist contact lenses and spectacle lenses and recommend what suits your child best.",
      },
      {
        question: "Why is early action important?",
        answer:
          "Short-sightedness tends to increase as children grow. Early checks and a monitoring plan help families act sooner.",
      },
      {
        question: "How do I find out if my child is short-sighted?",
        answer:
          "Book an eye test. Signs include squinting, sitting close to screens, and difficulty seeing the board at school. [Children's eye tests](/childrens-eye-test-northampton)",
      },
    ],
    bookHeading: "Book a myopia management consultation in Northampton",
  },

  /* ───────────────────── 7. GLAUCOMA SCREENING ───────────────────── */
  {
    slug: "glaucoma-screening-northampton",
    path: "/glaucoma-screening-northampton",
    name: "Glaucoma Screening Northampton",
    overview: "Pressure, optic nerve and visual field checks to catch glaucoma early.",
    icon: "gauge",
    breadcrumb: "Glaucoma Screening",
    metaTitle: "Glaucoma Screening Northampton | Early Detection | Wootton",
    metaDescription:
      "Glaucoma screening in Northampton at Wootton Opticians. Eye pressure, optic nerve and visual field checks to catch glaucoma early. Book your eye test.",
    h1: "Glaucoma Screening in Northampton: Catch It Early",
    intro:
      "Glaucoma can damage your sight without any warning signs, and lost vision cannot be restored. Regular checks can find it early so that treatment can protect the sight you have. At Wootton Opticians, glaucoma screening is available as part of a private sight test, with prompt referral if anything needs further care.",
    ctaLabel: "Book a Glaucoma Screening",
    highlights: ["Pressure & optic nerve checks", "Visual field testing", "Prompt referral"],
    schemaDescription:
      "Glaucoma screening including eye pressure, optic nerve and visual field checks at Wootton Opticians, Northampton.",
    blocks: [
      {
        type: "text",
        heading: "What is glaucoma?",
        paragraphs: [
          "Glaucoma is a group of eye conditions in which the optic nerve, which carries images from your eye to your brain, becomes damaged. It is often linked to raised pressure inside the eye, but not always. In the early stages most people notice nothing, which is why screening matters.",
        ],
      },
      {
        type: "list",
        heading: "What does glaucoma screening involve?",
        style: "check",
        intro: "Your assessment may include:",
        items: [
          "Eye pressure measurement (intraocular pressure)",
          "Optic nerve assessment: a close look at the back of your eye",
          "Visual field testing where clinically indicated, which checks your side vision",
          "A review of your family and health history",
        ],
        outro:
          "If we see anything of concern, we will explain it and refer you promptly to an ophthalmology service, and work alongside them where appropriate.",
      },
      {
        type: "list",
        heading: "Who should be screened for glaucoma?",
        items: [
          "Adults over 40",
          "Anyone with a close family history of glaucoma, such as a parent, brother, sister or child",
          "Anyone with raised eye pressure or optic nerve changes",
        ],
      },
      {
        type: "text",
        heading: "Is glaucoma screening free?",
        paragraphs: [
          "Some people are eligible for a free NHS sight test, including adults aged 40 or over with a close family history of glaucoma, and people who have already been diagnosed with glaucoma. [Check NHS eligibility](/nhs-eye-test-northampton)",
          "At Wootton Opticians, glaucoma screening is available as part of our private eye test, from £55.",
        ],
      },
      {
        type: "text",
        heading: "Can I tell if I have glaucoma?",
        paragraphs: [
          "Usually not in the early stages. Glaucoma tends to affect side vision first, and the brain fills in the gaps, so many people do not notice a change until the condition is advanced. Regular eye tests are the best protection.",
        ],
      },
    ],
    faqsHeading: "Glaucoma screening FAQs",
    faqs: [
      {
        question: "How often should I be screened for glaucoma?",
        answer:
          "Most adults should have an eye test every two years. If you are at higher risk, your optometrist may suggest a test every year or sooner.",
      },
      {
        question: "What happens if you find a problem?",
        answer: "We will explain what we found and arrange a referral to a specialist.",
      },
      {
        question: "Does high eye pressure mean I have glaucoma?",
        answer:
          "Not always. Your optometrist looks at pressure alongside your optic nerve and visual field to decide whether you need further tests.",
      },
      {
        question: "Is glaucoma hereditary?",
        answer:
          "Having a close relative with glaucoma raises your risk, so please tell us about your family history when you book.",
      },
    ],
    bookHeading: "Book your glaucoma screening in Northampton",
  },

  /* ───────────────────────────── 8. GLASSES ───────────────────────────── */
  {
    slug: "glasses-northampton",
    path: "/glasses-northampton",
    name: "Glasses and Designer Frames Northampton",
    overview: "Designer frames and advanced lenses chosen by our dispensing opticians.",
    icon: "glasses",
    breadcrumb: "Glasses",
    metaTitle: "Glasses Northampton | Designer Frames & Lenses | Wootton",
    metaDescription:
      "Designer glasses and everyday frames in Northampton. Varifocal, blue light and photochromic lenses from independent Wootton Opticians. Visit us today.",
    h1: "Glasses in Northampton: Designer Frames and Advanced Lenses",
    intro:
      "Your glasses should look good, feel comfortable and help you see clearly. At Wootton Opticians our ABDO-registered dispensing opticians help you choose frames and lenses that suit your face, your prescription and your lifestyle, from NHS-voucher frames to designer brands.",
    ctaLabel: "Book an Eye Test",
    highlights: ["Independent brands", "NHS vouchers accepted", "ABDO-registered opticians"],
    schemaDescription:
      "Designer and everyday glasses frames and advanced lenses from ABDO-registered dispensing opticians at Wootton Opticians, Northampton.",
    blocks: [
      {
        type: "list",
        heading: "Designer glasses in Northampton: brands we stock",
        intro: "We source independently, so you get a choice beyond the high street:",
        items: [
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
        style: "check",
      },
      {
        type: "list",
        heading: "Frames for every budget",
        items: [
          "NHS voucher frames: we accept NHS optical vouchers and will show you the frames they cover.",
          "Everyday frames for work, home and school.",
          "Designer frames for a standout look.",
          "Children's frames that are comfortable and built for daily wear. [Children's eye tests](/childrens-eye-test-northampton)",
        ],
      },
      {
        type: "cards",
        heading: "Lens options at Wootton Opticians",
        cards: [
          {
            title: "Varifocal (progressive) lenses",
            text: "Seamless vision at all distances without visible lines. Ideal if you have presbyopia and struggle to read up close. Benefits include no line distortion, a natural transition between distances and a wide field of view.",
          },
          {
            title: "Blue light filtering lenses",
            text: "Designed to help reduce eye strain from screens. Benefits include less eye fatigue and clear, comfortable screen vision.",
          },
          {
            title: "Photochromic lenses",
            text: "Lenses that darken in sunlight and clear indoors, like two pairs in one. Benefits include glare reduction, convenience and all-day comfort.",
          },
          {
            title: "High-index thin lenses",
            text: "Thinner, lighter lenses for strong prescriptions. Benefits include lighter weight, a slimmer profile and a better look.",
          },
          {
            title: "Sports lenses",
            text: "Lens options for active lifestyles, with durable, impact-resistant materials and wraparound fit options for clear vision during activity.",
          },
          {
            title: "Occupational lenses",
            text: "Lenses designed for computer and close-range work. Ask us whether they suit your job.",
          },
          {
            title: "Single vision and bifocal lenses",
            text: "Single vision lenses for one distance, and bifocal lenses for two. Our team will explain which suits you.",
          },
        ],
      },
      {
        type: "text",
        heading: "Glasses for short sight, long sight and astigmatism",
        paragraphs: [
          "Whatever your prescription, we can recommend lenses that give you clear, comfortable vision. If you have a strong prescription, ask about thin and light lens options.",
        ],
      },
      {
        type: "list",
        heading: "Frame styling and fitting",
        style: "check",
        items: [
          "Personal frame styling to suit your face shape and colouring",
          "Careful measuring so your lenses sit correctly",
          "Fitting and adjustment so your glasses are comfortable",
        ],
      },
      {
        type: "text",
        heading: "Using an NHS voucher",
        paragraphs: [
          "If you are eligible, an NHS optical voucher goes towards the cost of your glasses. [See who qualifies](/nhs-eye-test-northampton)",
        ],
      },
    ],
    faqsHeading: "Glasses FAQs",
    faqs: [
      {
        question: "Do you stock designer glasses in Northampton?",
        answer:
          "Yes. Our brands include Gotti, Coco Song, FEB31ST, Porsche Design, Longchamp, William Morris, Wright & Bailey, Calvin Klein and Aspinall.",
      },
      {
        question: "What are varifocal lenses?",
        answer:
          "Varifocal lenses let you see clearly at near, middle and far distances in one pair of glasses, with no visible line.",
      },
      {
        question: "Do blue light lenses work?",
        answer:
          "They are designed to help reduce eye strain from screens. If your eyes often feel tired or dry, ask about a [dry eye assessment](/dry-eye-assessment-northampton), as there may be another cause.",
      },
      {
        question: "Do you accept NHS vouchers?",
        answer:
          "Yes. We will help you choose frames your voucher covers, with optional upgrades if you prefer.",
      },
    ],
    bookHeading: "Visit us for your next pair of glasses",
    bookText:
      "Wootton Opticians, 9 Tudor Court, Wootton Hope Drive, Northampton NN4 6FF.",
  },
];

export const eyeCareServiceByPath = Object.fromEntries(
  eyeCareServices.map((s) => [s.path, s])
) as Record<string, EyeCareService>;
