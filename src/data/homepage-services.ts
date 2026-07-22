import type { DetailedService } from "@/types";

export const opticsIntro = {
  name: "Wootton Optician",
  established: 2003,
  headline: "Wootton Optician",
  description:
    "Established in 2003, Wootton Optician provides NHS and private sight tests, specialist contact lenses, dry eye assessment, myopia management, glaucoma screening, and children's eye examinations — with the personalised care of an independent practice.",
};

export const hearingIntro = {
  name: "Wootton Hearing Care",
  headline: "Wootton Hearing Care",
  description:
    "Wootton Hearing Care Ltd offers free hearing screenings and consultations, professional ear wax removal, and expert supply, fitting, and maintenance of hearing aids — with honest, independent advice and no sales pressure.",
};

export const trustStats = [
  { value: "20+", label: "Years of experience" },
  { value: "5,000+", label: "Patients cared for" },
  { value: "NHS", label: "& private services" },
  { value: "100%", label: "Independent practice" },
];

export const trustStripItems = [
  "Independent family practice since 2003",
  "NHS & private sight tests available",
  "Free hearing screenings & consultations",
  "ABDO-registered dispensing opticians",
  "HCPC-registered clinicians",
  "Personalised care, no sales pressure",
];

export const opticsServices: DetailedService[] = [
  {
    id: "nhs-sight-test",
    title: "NHS Sight Test",
    summary:
      "A full sight test funded by the NHS for eligible patients, including vision assessment, eye health checks, and a prescription when needed.",
    whoNeedsIt:
      "Adults and children who qualify under NHS rules — typically every two years, or annually if you are under 16, over 70, diabetic, or have a family history of glaucoma.",
    benefits: [
      "Funded for eligible patients",
      "Comprehensive vision and eye health examination",
      "NHS optical voucher toward glasses if required",
      "Referral to specialists when clinically necessary",
    ],
    pricing: "Funded for eligible patients",
  },
  {
    id: "private-sight-test",
    title: "Private Sight Test",
    summary:
      "An extended private sight test with additional clinical time, digital retinal imaging, and a detailed explanation of your results.",
    whoNeedsIt:
      "Anyone who wants a more in-depth examination, is not NHS-eligible, or prefers a private appointment with flexible booking and advanced screening.",
    benefits: [
      "Longer appointment time with your optometrist",
      "Digital retinal photography included",
      "Same-day results and clear recommendations",
      "Ideal for busy professionals and contact lens wearers",
    ],
    pricing: "From £55",
  },
  {
    id: "specialist-contact-lenses",
    title: "Specialist Contact Lenses",
    summary:
      "Expert fitting and aftercare for complex prescriptions including toric, multifocal, rigid gas permeable, and specialty lenses.",
    whoNeedsIt:
      "Patients with astigmatism, presbyopia, keratoconus, high prescriptions, or those who have struggled with standard contact lenses.",
    benefits: [
      "Tailored lens selection for your eyes and lifestyle",
      "Trial lenses and follow-up appointments included",
      "Ongoing aftercare and supply management",
      "Access to leading contact lens brands",
    ],
  },
  {
    id: "dry-eye-assessment",
    title: "Dry Eye Assessment",
    summary:
      "A dedicated clinical assessment to identify the cause of dry, gritty, or watery eyes and create a personalised treatment plan.",
    whoNeedsIt:
      "Anyone experiencing dry, irritated, burning, or tired eyes — especially screen users and contact lens wearers.",
    benefits: [
      "Identifies underlying causes, not just symptoms",
      "Personalised treatment including drops, heat therapy, and lifestyle advice",
      "Improved comfort for daily life and contact lens wear",
      "Ongoing monitoring and plan adjustments",
    ],
  },
  {
    id: "myopia-management",
    title: "Myopia Management",
    summary:
      "Specialist programmes to slow the progression of short-sightedness in children using evidence-based contact lenses and spectacle options.",
    whoNeedsIt:
      "Children and teenagers whose myopia is worsening year on year, particularly those with a family history of high prescriptions.",
    benefits: [
      "May reduce long-term prescription strength",
      "Lowers lifetime risk of myopia-related eye disease",
      "Regular monitoring with a dedicated care plan",
      "Options include specialist contact lenses and spectacle lenses",
    ],
  },
  {
    id: "glaucoma-screening",
    title: "Glaucoma Screening",
    summary:
      "Advanced screening to detect early signs of glaucoma including intraocular pressure measurement, optic nerve assessment, and visual field testing. Available as part of a private sight test.",
    whoNeedsIt:
      "Adults over 40, those with a family history of glaucoma, and anyone with elevated eye pressure or optic nerve changes.",
    benefits: [
      "Early detection before noticeable vision loss",
      "Comprehensive pressure and nerve head assessment",
      "Visual field testing where clinically indicated",
      "Prompt referral and co-management with ophthalmology",
    ],
  },
  {
    id: "childrens-sight-tests",
    title: "Children's Sight Tests",
    summary:
      "Child-friendly eye examinations designed to detect vision problems early, supporting learning, development, and long-term eye health.",
    whoNeedsIt:
      "All children — especially if they sit close to screens, squint, complain of headaches, struggle at school, or have a family history of eye problems.",
    benefits: [
      "Gentle, age-appropriate testing methods",
      "Detects lazy eye, squint, and focusing problems early",
      "NHS testing available for eligible children",
      "Clear guidance for parents and schools",
    ],
    pricing: "Funded for eligible patients",
  },
];

export const hearingServices: DetailedService[] = [
  {
    id: "free-hearing-screening",
    title: "Free Hearing Screenings",
    summary:
      "A quick, no-obligation check of your hearing to identify whether a full assessment is recommended.",
    whoNeedsIt:
      "Anyone who suspects their hearing has changed, struggles in background noise, or wants peace of mind — especially adults over 50.",
    benefits: [
      "Completely free with no obligation",
      "Results explained clearly on the day",
      "Takes approximately 15–20 minutes",
      "Referral to full consultation if needed",
    ],
    pricing: "Free",
  },
  {
    id: "free-hearing-consultation",
    title: "Free Hearing Consultations",
    summary:
      "A comprehensive consultation including full audiometry, lifestyle discussion, and honest advice on the best hearing solutions for you.",
    whoNeedsIt:
      "Anyone with confirmed or suspected hearing loss who wants expert, independent advice before choosing hearing aids or other treatment.",
    benefits: [
      "Full hearing assessment at no initial charge",
      "Unhurried time with a qualified audiologist",
      "Transparent advice with no sales pressure",
      "Personalised recommendations based on your lifestyle",
    ],
    pricing: "Free initial consultation",
  },
  {
    id: "ear-wax-removal",
    title: "Ear Wax Removal",
    summary:
      "Safe, professional removal of excess ear wax using microsuction or irrigation by trained clinicians in our Northampton clinic.",
    whoNeedsIt:
      "Anyone with blocked ears, muffled hearing, ear discomfort, or wax build-up affecting hearing aid performance.",
    benefits: [
      "Immediate improvement in hearing and comfort",
      "Safer than home remedies and cotton buds",
      "Restores hearing aid performance when wax-blocked",
      "Performed by trained clinical staff",
    ],
    pricing: "£35 per ear · £70 for both ears",
  },
  {
    id: "hearing-aids",
    title: "Hearing Aids — Supply & Maintenance",
    summary:
      "Supply, custom programming, fitting, and ongoing maintenance of digital hearing aids from leading manufacturers.",
    whoNeedsIt:
      "People with diagnosed hearing loss who want clearer speech, better confidence, and modern features — plus existing aid users needing servicing or repairs.",
    benefits: [
      "All major brands with custom programming",
      "Professional cleaning, servicing, and reprogramming",
      "Repairs, batteries, and accessories in clinic",
      "Ongoing aftercare and support",
    ],
  },
];
