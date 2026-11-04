/**
 * Hearing care service pages — copy taken from HEARING CARE HUB.docx (pages 2–5).
 * Uses the same shape as the eye care pages so they share one template.
 * Inline links use the form [label](/path) and are rendered by <RichText />.
 */

import type { EyeCareService } from "./eye-care-services";

export const HEARING_AGE_NOTICE =
  "Please note: hearing tests and consultations are for adults aged 19 and over. We do not test children under 19. For a child's hearing, please speak to your GP or an NHS paediatric audiology service.";

export const hearingCareServices: EyeCareService[] = [
  /* ─────────────────────── 1. FREE HEARING TEST ─────────────────────── */
  {
    family: "hearing",
    slug: "free-hearing-test-northampton",
    path: "/free-hearing-test-northampton",
    name: "Free Hearing Test Northampton (Adults 19+)",
    overview: "A free hearing screening or a free hearing consultation, with clear results on the day.",
    icon: "ear",
    breadcrumb: "Free Hearing Test",
    metaTitle: "Free Hearing Test Northampton (Adults 19+) | Wootton",
    metaDescription:
      "Free hearing screening and consultation for adults 19+ in Wootton, Northampton. Clear results, honest advice, no sales pressure. Book online today.",
    h1: "Free Hearing Test in Northampton (Adults 19+): Screening and Consultation",
    intro:
      "Worried about your hearing? At Wootton Hearing Care in Northampton you can book a free hearing test with our audiologists: a quick free hearing screening, or a free hearing consultation with full audiometry. You get clear results on the day, honest independent advice and no obligation to buy anything.",
    ctaLabel: "Book a Free Hearing Test",
    notice: HEARING_AGE_NOTICE,
    highlights: ["Free for adults 19 and over", "Clear results on the day", "No obligation to buy"],
    priceFrom: "0",
    offerDescription: "Free for adults aged 19 and over",
    schemaDescription:
      "Free hearing screening and free hearing consultation for adults aged 19 and over at Wootton Hearing Care, Northampton.",
    blocks: [
      {
        type: "table",
        heading: "Free hearing screening or free hearing consultation?",
        columns: ["", "Free hearing screening", "Free hearing consultation"],
        rows: [
          [
            "What it is",
            "A quick, no-obligation check to see whether a full assessment is recommended",
            "A full hearing assessment with audiometry, a lifestyle discussion and detailed recommendations",
          ],
          ["How long", "About 15 to 20 minutes", "Around 60 minutes"],
          ["Price", "Free", "Free initial consultation"],
          [
            "Best if",
            "You want a quick check or peace of mind",
            "You suspect hearing loss and want expert advice",
          ],
          ["Ages", "Adults 19 and over", "Adults 19 and over"],
        ],
        outro: "Not sure which to choose? Call us on 01604 875111 and we will help you decide.",
      },
      {
        type: "cards",
        heading: "What happens at your hearing test?",
        cards: [
          {
            title: "1. A conversation about your hearing",
            text: "We ask about the situations you find difficult, your lifestyle and any concerns you or your family have.",
          },
          {
            title: "2. An ear examination",
            text: "We look at your ears to check that nothing, such as wax, is getting in the way.",
          },
          {
            title: "3. Audiometry in a soundproof booth",
            text: "You listen for a series of tones so we can measure the quietest sounds you can hear at different pitches.",
          },
          {
            title: "4. Your results, explained clearly",
            text: "We explain what we found in plain English and give honest recommendations. You decide what happens next.",
          },
        ],
      },
      {
        type: "list",
        heading: "Signs you may need a hearing test",
        style: "alert",
        items: [
          "You often ask people to repeat themselves",
          "You find it hard to follow conversations in noisy places or in groups",
          "You turn the TV up louder than other people do",
          "You struggle to hear on the phone",
          "People seem to mumble",
          "Family or friends have noticed a change in your hearing",
        ],
        outro:
          "If you notice a sudden loss of hearing in one or both ears, ear pain, discharge or dizziness, contact your GP or NHS 111 for urgent advice.",
      },
      {
        type: "list",
        heading: "Who is a free hearing test for?",
        items: [
          "Adults 19 and over who have noticed changes in their hearing",
          "Anyone who struggles in group conversations, with the TV or on the phone",
          "Adults over 50 who want peace of mind",
          "Families who are concerned about an adult's hearing",
        ],
      },
      {
        type: "list",
        heading: "What happens after your free hearing test?",
        items: [
          "Your hearing is fine: you have peace of mind, and we will tell you when to come back.",
          "Wax is blocking your ears: we can help with [ear wax removal](/ear-wax-removal-northampton).",
          "Hearing aids could help: we explain your options and you decide. [Hearing aids in Northampton](/hearing-aids-northampton)",
          "You already wear hearing aids: we can check, clean and reprogram them. [Hearing aid repairs](/hearing-aid-repairs-northampton)",
        ],
      },
    ],
    faqsHeading: "Free hearing test FAQs",
    faqs: [
      {
        question: "How much does a hearing test cost in Northampton?",
        answer:
          "Our initial hearing consultation is free, and there is no obligation to buy hearing aids.",
      },
      {
        question: "Is a hearing screening the same as a full hearing test?",
        answer:
          "No. A screening is a quick check to see whether a full assessment is recommended. A full consultation includes complete audiometry, a lifestyle discussion and detailed recommendations.",
      },
      {
        question: "How long does a hearing test take?",
        answer:
          "A free hearing screening takes about 15 to 20 minutes. A full hearing consultation takes around 60 minutes.",
      },
      {
        question: "Do I have to buy hearing aids after a free hearing test?",
        answer:
          "No. We give you honest advice and explain your options, and the decision is always yours.",
      },
      {
        question: "Do you offer hearing tests or screening for children under 19?",
        answer:
          "No. Our hearing services are for adults aged 19 and over. If you are concerned about a child's hearing, please speak to your GP or an NHS paediatric audiology service.",
      },
      {
        question: "How do I book a hearing test?",
        answer: "Book online using the button on this page, or call 01604 875111.",
      },
    ],
    bookHeading: "Book your free hearing test in Northampton",
  },

  /* ─────────────────────── 2. EAR WAX REMOVAL ─────────────────────── */
  {
    family: "hearing",
    slug: "ear-wax-removal-northampton",
    path: "/ear-wax-removal-northampton",
    name: "Ear Wax Removal Northampton",
    overview: "Safe microsuction by trained clinicians. £35 per ear or £70 for both ears.",
    icon: "sparkles",
    breadcrumb: "Ear Wax Removal",
    metaTitle: "Ear Wax Removal Northampton | Microsuction £35 | Wootton",
    metaDescription:
      "Safe microsuction ear wax removal in Wootton, Northampton. £35 per ear, £70 for both. No GP referral needed. Book online or call 01604 875111.",
    h1: "Ear Wax Removal in Northampton: Safe Microsuction from £35 per Ear",
    intro:
      "Blocked, muffled or uncomfortable ears? Our trained clinicians at Wootton Hearing Care in Northampton remove ear wax safely using microsuction, for £35 per ear or £70 for both ears. No GP referral is needed, and many patients notice a difference straight away.",
    ctaLabel: "Book Ear Wax Removal",
    highlights: ["£35 per ear · £70 for both", "No GP referral needed", "Microsuction by trained clinicians"],
    priceFrom: "35",
    offerDescription: "£35 per ear, £70 for both ears",
    schemaDescription:
      "Safe microsuction ear wax removal by trained clinicians at Wootton Hearing Care, Northampton.",
    blocks: [
      {
        type: "table",
        heading: "Ear wax removal prices in Northampton",
        columns: ["Treatment", "Price"],
        rows: [
          ["Ear wax removal, one ear", "£35"],
          ["Ear wax removal, both ears", "£70"],
        ],
        outro: "Clear pricing and no hidden fees.",
      },
      {
        type: "text",
        heading: "What is microsuction ear wax removal?",
        paragraphs: [
          "Microsuction is a method of removing ear wax in which a trained clinician uses a fine suction instrument to lift wax out of the ear canal. It is a dry method, so it does not use water. At Wootton Hearing Care, microsuction is carried out in our Northampton clinic by trained clinical staff.",
        ],
      },
      {
        type: "list",
        heading: "Signs of ear wax build-up",
        style: "alert",
        items: [
          "Muffled or blocked hearing",
          "A feeling of fullness in the ear",
          "Itching or discomfort",
          "Hearing aids that sound weak or do not work as well as usual",
        ],
      },
      {
        type: "list",
        heading: "Who is ear wax removal for?",
        items: [
          "Anyone with blocked or muffled hearing caused by wax",
          "Hearing aid users whose aids are affected by wax build-up",
          "People with ear discomfort, itching or a feeling of fullness",
          "Anyone who has been advised that their wax needs clinical removal",
        ],
      },
      {
        type: "list",
        heading: "What to expect at your appointment",
        style: "steps",
        items: [
          "Book directly: online or by phone. You do not need a referral from your GP.",
          "Meet your clinician, who explains what they are going to do.",
          "Microsuction to remove the wax from one or both ears.",
          "Feel the difference. Many patients notice an immediate improvement in hearing and comfort.",
        ],
      },
      {
        type: "text",
        heading: "Why choose a clinician instead of home remedies?",
        paragraphs: [
          "Professional ear wax removal is safer than home remedies and cotton buds. Please do not put cotton buds, hairpins or other objects into your ears, as they can push wax deeper.",
          "If you have ear pain, discharge, dizziness or a sudden loss of hearing, contact your GP or NHS 111 for advice before booking.",
        ],
      },
      {
        type: "text",
        heading: "Ear wax and hearing aids",
        paragraphs: [
          "Wax can stop hearing aids from working as well as they should. If you wear hearing aids, ear wax removal can help restore their performance. We can also [clean, service and repair your hearing aids](/hearing-aid-repairs-northampton) in the same clinic. If you are not sure whether wax or hearing loss is the problem, a [free hearing test](/free-hearing-test-northampton) can help you find out.",
        ],
      },
    ],
    faqsHeading: "Ear wax removal FAQs",
    faqs: [
      {
        question: "How much does ear wax removal cost in Northampton?",
        answer: "Ear wax removal costs £35 per ear or £70 for both ears at Wootton Hearing Care.",
      },
      {
        question: "Do I need a referral for ear wax removal?",
        answer:
          "No. You do not need a GP referral. You can book directly online or by phone on 01604 875111.",
      },
      {
        question: "Do I need an appointment for ear wax removal?",
        answer:
          "Yes. Please book online or call us so we can find a time that suits you.",
      },
      {
        question: "Can I have ear wax removed if I wear hearing aids?",
        answer:
          "Yes. Hearing aid users are welcome, and removing wax can help your hearing aids perform better.",
      },
      {
        question: "What causes ear wax build-up?",
        answer:
          "Ear wax is natural and usually works its way out of the ear on its own. It can build up and become blocked, sometimes because it is pushed deeper by cotton buds, or because hearing aids or earphones sit in the ear.",
      },
      {
        question: "Is it safe to clean my ears with cotton buds?",
        answer:
          "We advise against it. Cotton buds can push wax deeper into the ear canal. If your ears feel blocked, book a professional appointment instead.",
      },
    ],
    bookHeading: "Book your ear wax removal in Northampton",
  },

  /* ───────────────────────── 3. HEARING AIDS ───────────────────────── */
  {
    family: "hearing",
    slug: "hearing-aids-northampton",
    path: "/hearing-aids-northampton",
    name: "Hearing Aids Northampton",
    overview:
      "Digital hearing aids from leading manufacturers, with custom programming, fitting and aftercare.",
    icon: "volume",
    breadcrumb: "Hearing Aids",
    metaTitle: "Hearing Aids Northampton | Fitting & Aftercare | Wootton",
    metaDescription:
      "Digital hearing aids in Northampton: rechargeable and Bluetooth options, custom programming and fitting by independent audiologists. Book a consultation.",
    h1: "Hearing Aids in Northampton: Fitting, Programming and Aftercare at Wootton",
    intro:
      "Choosing hearing aids is a big decision, and you should never feel rushed. At Wootton Hearing Care in Northampton, our independent audiologists supply and fit modern digital hearing aids from leading manufacturers, programme them to your hearing and support you afterwards, with honest advice and no sales pressure.",
    ctaLabel: "Book a Hearing Aid Consultation",
    notice: "Please note: hearing aid consultations are for adults aged 19 and over.",
    highlights: [
      "Free initial consultation",
      "Rechargeable and Bluetooth options",
      "Custom programming and aftercare",
    ],
    schemaDescription:
      "Supply, fitting, custom programming and aftercare of digital hearing aids at Wootton Hearing Care, Northampton.",
    blocks: [
      {
        type: "list",
        heading: "Hearing aid services at Wootton Hearing Care",
        style: "check",
        items: [
          "A free initial hearing consultation with full audiometry",
          "Independent advice on hearing aids from leading manufacturers",
          "Digital hearing aids with custom programming",
          "Fitting in our Northampton clinic",
          "Rechargeable and Bluetooth options",
          "Ongoing aftercare and support (terms may apply)",
        ],
      },
      {
        type: "cards",
        heading: "Types of hearing aids",
        intro:
          "Your audiologist will talk you through which styles suit your hearing, your ears and your lifestyle. Not every style suits everyone.",
        cards: [
          {
            title: "Behind-the-ear (BTE) hearing aids",
            text: "Sit behind the ear and are connected to the ear by a tube or earmould.",
          },
          {
            title: "Receiver-in-canal (RIC) hearing aids",
            text: "A small unit sits behind the ear and a thin wire connects it to a tiny speaker in the ear canal.",
          },
          {
            title: "In-the-ear (ITE) hearing aids",
            text: "Made to fit and fill part of the outer ear.",
          },
          {
            title: "Completely-in-canal (CIC) hearing aids",
            text: "Small, custom-made aids that sit mostly inside the ear canal.",
          },
          {
            title: "Invisible-in-canal (IIC) hearing aids",
            text: "Very small aids that sit deep in the ear canal, so they are barely visible.",
          },
        ],
      },
      {
        type: "text",
        heading: "Rechargeable and Bluetooth hearing aids",
        paragraphs: [
          "We offer rechargeable and Bluetooth options. Rechargeable hearing aids mean you do not have to keep changing small batteries. Bluetooth hearing aids can connect to compatible phones and devices. Ask your audiologist which features would suit your daily life.",
        ],
      },
      {
        type: "text",
        heading: "Are hearing aids right for you?",
        paragraphs: [
          "If you have noticed changes in your hearing, the first step is a [free hearing test](/free-hearing-test-northampton). Your audiologist explains your results clearly and recommends hearing aids only if they would help. The decision is always yours.",
        ],
      },
      {
        type: "list",
        heading: "How getting hearing aids works",
        style: "steps",
        items: [
          "Free consultation. A full hearing assessment, including audiometry, and a conversation about your lifestyle.",
          "Your options explained. We talk through the styles and features that suit you, honestly and without pressure.",
          "Fitting and custom programming. Your hearing aids are fitted in clinic and programmed to your hearing.",
          "Aftercare. We support you as you get used to your hearing aids, and look after them over time.",
        ],
      },
      {
        type: "text",
        heading: "Hearing aid aftercare and maintenance",
        paragraphs: [
          "Hearing aids need looking after. We offer cleaning, servicing, reprogramming and repairs in clinic, plus batteries and accessories. Aftercare is provided with your hearing aids (terms may apply, so please ask us for details). [Hearing aid repairs and servicing](/hearing-aid-repairs-northampton)",
        ],
      },
      {
        type: "text",
        heading: "Look after your ears as well as your hearing aids",
        paragraphs: [
          "Wax build-up can affect how well hearing aids work. If your ears feel blocked, our [ear wax removal](/ear-wax-removal-northampton) service costs £35 per ear or £70 for both ears.",
        ],
      },
      {
        type: "text",
        heading: "Read our hearing aid guide",
        paragraphs: [
          "[Hearing Aids in Northampton: The Complete 2025 Guide](/blog/hearing-aids-northampton-complete-guide)",
        ],
      },
    ],
    faqsHeading: "Hearing aid FAQs",
    faqs: [
      {
        question: "What types of hearing aids do you offer?",
        answer:
          "We offer digital hearing aids in behind-the-ear, receiver-in-canal, in-the-ear, completely-in-canal and invisible-in-canal styles, including rechargeable and Bluetooth options.",
      },
      {
        question: "Which hearing aid brands do you supply?",
        answer:
          "We supply hearing aids from leading manufacturers. Your audiologist explains which options suit your hearing and lifestyle.",
      },
      {
        question: "How do I know if I need hearing aids?",
        answer:
          "Start with a [free hearing test](/free-hearing-test-northampton). Your audiologist will explain your results and tell you honestly whether hearing aids would help.",
      },
      {
        question: "How much do hearing aids cost in Northampton?",
        answer:
          "The price depends on the style and features that suit your hearing and lifestyle. At your free consultation we explain your options and costs clearly, and there is no obligation to buy.",
      },
      {
        question: "Is the hearing aid consultation free?",
        answer:
          "Yes. Our initial hearing consultation is free for adults aged 19 and over, with no obligation to buy hearing aids.",
      },
      {
        question: "Can you look after hearing aids bought somewhere else?",
        answer:
          "Yes. We clean, service, reprogram and repair hearing aids fitted by us or elsewhere. [Hearing aid repairs](/hearing-aid-repairs-northampton)",
      },
    ],
    bookHeading: "Book your hearing aid consultation in Northampton",
  },

  /* ────────────────────── 4. HEARING AID REPAIRS ────────────────────── */
  {
    family: "hearing",
    slug: "hearing-aid-repairs-northampton",
    path: "/hearing-aid-repairs-northampton",
    name: "Hearing Aid Repairs Northampton",
    overview: "Cleaning, servicing, reprogramming, repairs, batteries and accessories.",
    icon: "wrench",
    breadcrumb: "Hearing Aid Repairs",
    metaTitle: "Hearing Aid Repairs & Batteries Northampton | Wootton",
    metaDescription:
      "Hearing aid repairs, cleaning, servicing, reprogramming, batteries and accessories in Northampton. Aids fitted here or elsewhere. Call 01604 875111.",
    h1: "Hearing Aid Repairs in Northampton: Servicing, Batteries and Accessories",
    intro:
      "Is your hearing aid whistling, cutting out or sounding weak? Wootton Hearing Care repairs, cleans, services and reprograms hearing aids in clinic in Northampton, and offers batteries and accessories. We look after hearing aids we have fitted and hearing aids fitted elsewhere.",
    ctaLabel: "Book a Hearing Aid Check",
    highlights: ["Aids fitted here or elsewhere", "Repairs carried out in clinic", "Batteries and accessories"],
    schemaDescription:
      "Hearing aid cleaning, servicing, reprogramming, repairs, batteries and accessories at Wootton Hearing Care, Northampton.",
    blocks: [
      {
        type: "list",
        heading: "Hearing aid repair and maintenance services",
        style: "check",
        items: [
          "Cleaning and servicing",
          "Reprogramming",
          "Repairs, carried out in clinic",
          "Batteries and accessories, including domes",
          "Checks for hearing aids that whistle, cut out or sound weak",
        ],
      },
      {
        type: "cards",
        heading: "Common hearing aid problems we can help with",
        cards: [
          {
            title: "Whistling hearing aids",
            text: "A hearing aid that whistles may need checking. Bring it in and we will find out why.",
          },
          {
            title: "Hearing aids that cut out",
            text: "If your hearing aid cuts in and out, we can check it and carry out repairs where needed.",
          },
          {
            title: "Hearing aids that sound weak",
            text: "If your hearing aid sounds quieter than it used to, it may need cleaning, servicing or reprogramming.",
          },
          {
            title: "Hearing aids that no longer suit your hearing",
            text: "Reprogramming can help if your hearing aids no longer feel right for you.",
          },
        ],
      },
      {
        type: "list",
        heading: "Who is hearing aid repair for?",
        items: [
          "Hearing aid users with feedback, weak sound or faults",
          "Patients who need batteries, domes or accessories",
          "Anyone who needs their hearing aids cleaned or reprogrammed",
          "People looking for a local hearing aid repair service in Northampton",
        ],
      },
      {
        type: "text",
        heading: "Hearing aid batteries: how long do they last?",
        paragraphs: [
          "Standard hearing aid batteries typically last between 5 and 14 days, depending on your hearing aids and how you use them. Rechargeable hearing aids often last a full day on one charge. We offer batteries and accessories in clinic, so you can pick up what you need when you visit.",
        ],
      },
      {
        type: "list",
        heading: "What to expect at your appointment",
        style: "steps",
        items: [
          "Book online or call 01604 875111.",
          "Bring your hearing aids to our Northampton clinic.",
          "We check them. Your hearing aids are cleaned, repaired in clinic or reprogrammed as needed.",
          "Get advice on looking after your hearing aids so they keep working well.",
        ],
      },
      {
        type: "list",
        heading: "Looking after your hearing aids",
        items: [
          "Keep your hearing aids clean and dry",
          "Replace batteries and domes as advised by your audiologist",
          "Book regular servicing, even if they seem to be working",
          "Remember that wax in your ears can affect how your hearing aids work. [Ear wax removal](/ear-wax-removal-northampton) costs £35 per ear or £70 for both ears.",
        ],
      },
      {
        type: "text",
        heading: "Thinking about new hearing aids?",
        paragraphs: [
          "If your hearing aids are old, or you do not wear any yet but think you could benefit, start with a [free hearing test](/free-hearing-test-northampton) and see our page on [hearing aids in Northampton](/hearing-aids-northampton).",
        ],
      },
    ],
    faqsHeading: "Hearing aid repair FAQs",
    faqs: [
      {
        question: "Do you repair hearing aids in Northampton?",
        answer:
          "Yes. Wootton Hearing Care offers cleaning, servicing, reprogramming, repairs, batteries and accessories. Call 01604 875111 or book online.",
      },
      {
        question: "Can you repair hearing aids bought somewhere else?",
        answer: "Yes. We look after hearing aids fitted by us or elsewhere.",
      },
      {
        question: "Why is my hearing aid whistling?",
        answer:
          "Whistling can have several causes. Bring your hearing aid in and we will check it and advise you.",
      },
      {
        question: "How long do hearing aid batteries last?",
        answer:
          "Standard batteries typically last 5 to 14 days. Rechargeable hearing aids often last a full day per charge.",
      },
      {
        question: "Do you sell hearing aid batteries and accessories?",
        answer: "Yes. We offer batteries and accessories, including domes, in clinic.",
      },
    ],
    bookHeading: "Book your hearing aid check in Northampton",
  },
];

export const hearingCareServiceByPath = Object.fromEntries(
  hearingCareServices.map((s) => [s.path, s])
) as Record<string, EyeCareService>;
