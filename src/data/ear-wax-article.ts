/**
 * Blog article copy — "Ear Wax Removal Northampton: Microsuction vs Syringing.docx".
 * Inline links use the form [label](/path) and are rendered by <RichText />.
 * Kept separate from the page so the blog list can reuse the title, slug and description.
 */

const bookingHref = "/appointments?service=hearing-test";

export const earWaxArticle = {
  slug: "microsuction-vs-irrigation-ear-wax-removal-northampton",
  path: "/blog/microsuction-vs-irrigation-ear-wax-removal-northampton",
  metaTitle: "Ear Wax Removal Northampton: Microsuction vs Syringing",
  metaDescription:
    "Microsuction or syringing? Compare ear wax removal methods, safety and cost in Northampton. £35 per ear, £70 both. No GP referral. Book at Wootton.",
  title: "Ear Wax Removal in Northampton: Microsuction vs Irrigation, Cost and What to Expect",
  breadcrumb: "Ear Wax Removal in Northampton: Microsuction vs Irrigation",
  author: "Wootton Opticians & Hearing Care",
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  keywords: [
    "ear wax removal northampton",
    "microsuction ear wax removal",
    "ear wax removal cost",
    "ear syringing alternative",
  ],
  heroImage: {
    src: "/hearing-1.webp",
    alt: "A clinician checking a patient's ear during a hearing appointment",
  },
  bookingHref,

  intro: [
    "Blocked, muffled or itchy ears are one of the most common reasons people book a hearing appointment. If you are searching for ear wax removal in Northampton, you will quickly see two names: microsuction and irrigation (often called ear syringing). This guide explains how each one works, which is usually the better choice, what it costs at Wootton, and what happens at your appointment.",
    `If you already know you want your ears checked, you can [book ear wax removal online](${bookingHref}) or call us on 01604 875111. Our full service details are on our [ear wax removal Northampton page](/ear-wax-removal-northampton).`,
  ],

  wax: {
    heading: "What is ear wax and why does it block your ears?",
    text: "Ear wax is a natural substance your ears make to trap dust and protect the ear canal. In most people it moves out of the ear on its own. Problems start when wax builds up, gets pushed deeper, or the ear canal is narrow or hairy. Hearing aid and earphone users are more likely to notice a build-up because the device can stop wax from escaping.",
    signsIntro: "Common signs of an ear wax blockage include:",
    signs: [
      "Muffled or reduced hearing",
      "A feeling of fullness or pressure in the ear",
      "Ringing or buzzing (tinnitus)",
      "Earache, itching or a mild cough",
      "Hearing aids whistling or cutting out",
    ],
    image: {
      src: "/about-1.avif",
      alt: "A clinician holding an anatomical model of the ear",
      position: "object-[center_78%]",
    },
  },

  compare: {
    heading: "Microsuction vs irrigation: what is the difference?",
    microsuction: {
      heading: "What is microsuction ear wax removal?",
      text: "Microsuction is a dry method. A trained clinician looks into your ear and uses a fine, gentle suction instrument to lift the wax out. No water is used. Because the clinician can see what they are doing the whole time, it is a controlled and precise way to clear the ear.",
      whyIntro: "Why many people prefer it:",
      why: [
        "No water goes into the ear canal",
        "The clinician can see the wax and the ear canal throughout",
        "Often a good option when other methods are not suitable",
        "Usually quick, and many people notice better hearing straight away",
      ],
      note: "You may hear a short, loud suction noise during the procedure. This is normal, and your clinician will explain what to expect before they start.",
    },
    irrigation: {
      heading: "What is ear irrigation (ear syringing)?",
      paragraphs: [
        "Irrigation flushes warm water into the ear canal to wash the wax out. It used to be very common at GP surgeries. Today many surgeries no longer offer it, which is why people look for an ear syringing alternative.",
        "Irrigation is carried out without a clear view of the wax, and it is not suitable for everyone. It is generally avoided if you have had a perforated eardrum, ear surgery, an ear infection or certain other ear conditions. If you are unsure, ask your GP or clinician before having any water in your ear.",
      ],
    },
    table: {
      heading: "Microsuction vs irrigation at a glance",
      columns: ["", "Microsuction", "Irrigation (syringing)"],
      rows: [
        ["Uses water?", "No, it is dry", "Yes"],
        ["Clinician can see the wax?", "Yes", "Limited view"],
        [
          "Suitable if you have had ear problems?",
          "Often a good option, clinician decides",
          "Not suitable for some ear conditions",
        ],
        ["Speed", "Usually quick", "Can take several rounds"],
        ["Common alternative to", "Ear syringing", "n/a"],
      ],
    },
    outro:
      "The right method depends on your ears. Your clinician will look in your ear first and recommend what is safest for you. Our ear wax removal service is built around microsuction.",
  },

  cost: {
    heading: "Ear wax removal cost in Northampton",
    intro: "At Wootton Opticians & Hearing Care, ear wax removal costs:",
    prices: [
      { amount: "£35", label: "per ear" },
      { amount: "£70", label: "for both ears" },
    ],
    outro:
      "There are no hidden fees. You do not need a GP referral, and you can book online or by phone. If you are comparing prices, check what is included, whether the clinician looks in both ears first, and whether any follow-up is charged.",
  },

  expect: {
    heading: "What to expect at your appointment",
    steps: [
      {
        title: "Booking.",
        text: `[Book online](${bookingHref}) or call 01604 875111. An appointment is needed.`,
      },
      {
        title: "A quick chat.",
        text: "Your clinician asks about your symptoms, hearing aids and any past ear problems.",
      },
      {
        title: "Looking in your ear.",
        text: "They check the ear canal and the wax before choosing the method.",
      },
      {
        title: "Wax removal.",
        text: "The wax is removed by a trained clinician at our Northampton clinic.",
      },
      {
        title: "A final check.",
        text: "They look again to confirm the ear is clear and talk through any advice.",
      },
    ],
    outro: "Many people notice an improvement straight away.",
  },

  avoid: {
    heading: "What not to do at home",
    items: [
      { title: "Avoid cotton buds.", text: "They often push wax deeper and can pack it down." },
      {
        title: "Avoid hairpins, keys and other objects.",
        text: "These can injure the ear canal or eardrum.",
      },
      { title: "Do not use ear candles.", text: "They are not a safe or proven way to remove wax." },
      {
        title: "Ask first about drops.",
        text: "Some people soften wax with olive oil or over-the-counter drops, but ask a clinician or pharmacist first if you have any ear problems.",
      },
    ],
  },

  urgent: {
    heading: "When to see a GP or call NHS 111 first",
    intro: "Please speak to your GP or NHS 111 before booking if you have:",
    items: ["Ear pain", "Discharge from the ear", "Dizziness", "Sudden hearing loss"],
    outro: "These are not usually caused by wax alone, and they need medical advice.",
  },

  hearingAids: {
    heading: "Wearing hearing aids? Wax can be the problem",
    text: "Wax is a very common reason hearing aids sound weak, whistle or stop working. After your ears are cleared, many people find their hearing aids work better. If your device is still not working properly, our team can help with [hearing aid cleaning, servicing and repairs](/hearing-aid-repairs-northampton). You can also read our [complete hearing aids guide for Northampton](/hearing-aids-northampton).",
    image: {
      src: "/hearing-3.avif",
      alt: "A man wearing a hearing aid talking with a hearing care professional",
    },
  },

  stillMuffled: {
    heading: "Still not hearing clearly after wax removal?",
    text: "If your ears are clear but sounds are still muffled, or you struggle in background noise, wax may not be the whole story. A [free hearing test in Northampton](/free-hearing-test-northampton) can show whether a hearing assessment is recommended. Hearing tests at Wootton are for adults aged 19 and over. You can read more about all our services on our [hearing care page](/hearing).",
  },

  why: {
    heading: "Why choose Wootton for ear wax removal in Northampton?",
    text: "We are an independent, family-run practice at 9 Tudor Court, Wootton Hope Drive, Northampton, NN4 6FF, serving Wootton, Wootton Fields, Hardingstone, Collingtree and the wider area. You will see trained clinical staff, with clear pricing and no sales pressure. Learn more [about us](/about) or [contact the clinic](/contact).",
    image: {
      src: "/wootton-clinic.jpg",
      alt: "The Wootton Opticians & Hearing Care shopfront in Northampton",
    },
  },

  ready: {
    heading: "Ready to clear your ears?",
    text: `[Book ear wax removal now](${bookingHref}) or call 01604 875111.`,
  },

  faqsHeading: "FAQs",
  faqs: [
    {
      question: "How much does ear wax removal cost in Northampton?",
      answer:
        "At Wootton Opticians & Hearing Care, ear wax removal costs £35 per ear or £70 for both ears.",
    },
    {
      question: "Is microsuction better than ear syringing?",
      answer:
        "Microsuction is a dry method where the clinician can see the wax while removing it. Irrigation uses water and is not suitable for everyone. Your clinician will recommend what is safest for your ears.",
    },
    {
      question: "Do I need a GP referral for ear wax removal?",
      answer: "No. You can book directly with us online or by calling 01604 875111.",
    },
    {
      question: "Do I need an appointment?",
      answer: "Yes. Please book online or call us so we can reserve time for you.",
    },
    {
      question: "Can I have ear wax removed if I wear hearing aids?",
      answer:
        "Yes. Wax is a common cause of hearing aid problems, and clearing it often helps them work better.",
    },
    {
      question: "When should I see a GP instead?",
      answer:
        "See your GP or call NHS 111 if you have ear pain, discharge, dizziness or sudden hearing loss.",
    },
  ],
};
