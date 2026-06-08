import type { DetailedService } from "@/types";

export const opticsIntro = {
  name: "Wootton Optics",
  established: 2003,
  headline: "Expert Optical Care Since 2003",
  description:
    "Wootton Optics has been serving Northampton and Northamptonshire since 2003. Our dispensing opticians provide thorough eye examinations, specialist contact lens care, and advanced clinical screening — whether you are NHS-funded or choosing a private appointment for extra time and technology.",
};

export const hearingIntro = {
  name: "Wootton Hearing Care",
  headline: "Trusted Hearing Care for Northampton & Northamptonshire",
  description:
    "Wootton Hearing Care Ltd offers free hearing screenings and consultations, professional ear wax removal, and expert fitting, supply, and maintenance of hearing aids from leading manufacturers — with the personal attention of a family-run practice.",
};

export const opticsServices: DetailedService[] = [
  {
    id: "nhs-eye-test",
    title: "NHS Eye Tests",
    summary:
      "A full sight test funded by the NHS for eligible patients, including vision assessment, eye health checks, and a prescription when needed.",
    whoNeedsIt:
      "Adults and children who qualify under NHS rules — typically every two years, or annually if you are under 16, over 60, diabetic, or have a family history of glaucoma.",
    benefits: [
      "No charge for eligible patients",
      "Comprehensive vision and eye health examination",
      "NHS optical voucher toward glasses if required",
      "Referral to specialists when clinically necessary",
    ],
    pricing: "Free for eligible NHS patients",
  },
  {
    id: "private-eye-test",
    title: "Private Eye Tests",
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
    pricing: "From £45",
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
    pricing: "Fitting from £55 · Lenses from £15/month",
  },
  {
    id: "dry-eye-assessment",
    title: "Dry Eye Assessment",
    summary:
      "A dedicated clinical assessment to identify the cause of dry, gritty, or watery eyes and create a personalised treatment plan.",
    whoNeedsIt:
      "Anyone experiencing dry, irritated, burning, or tired eyes — especially screen users, contact lens wearers, and people over 40.",
    benefits: [
      "Identifies underlying causes, not just symptoms",
      "Personalised treatment including drops, heat therapy, and lifestyle advice",
      "Improved comfort for daily life and contact lens wear",
      "Ongoing monitoring and plan adjustments",
    ],
    pricing: "From £55",
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
    pricing: "Programmes from £220/year",
  },
  {
    id: "glaucoma-screening",
    title: "Glaucoma Screening",
    summary:
      "Advanced screening to detect early signs of glaucoma including intraocular pressure measurement, optic nerve assessment, and visual field testing.",
    whoNeedsIt:
      "Adults over 40, those with a family history of glaucoma, people of African-Caribbean descent, and anyone with elevated eye pressure or optic nerve changes.",
    benefits: [
      "Early detection before noticeable vision loss",
      "Comprehensive pressure and nerve head assessment",
      "Visual field testing where clinically indicated",
      "Prompt referral and co-management with ophthalmology",
    ],
    pricing: "Included in private eye test · Standalone from £35",
  },
  {
    id: "child-eye-tests",
    title: "Children's Eye Tests",
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
    pricing: "NHS free for eligible children · Private from £35",
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
    pricing: "From £60 per ear",
  },
  {
    id: "hearing-aid-supply",
    title: "Hearing Aid Supply & Fitting",
    summary:
      "Supply, custom programming, and fitting of digital hearing aids from leading manufacturers to match your hearing loss and lifestyle.",
    whoNeedsIt:
      "People with diagnosed hearing loss who want clearer speech, better social confidence, and modern features like Bluetooth and rechargeability.",
    benefits: [
      "All major brands including Phonak, Oticon, Widex, and more",
      "Custom programming for your unique hearing profile",
      "Trial periods available on selected models",
      "Rechargeable and Bluetooth-enabled options",
    ],
    pricing: "From £495 per aid",
  },
  {
    id: "hearing-aid-maintenance",
    title: "Hearing Aid Maintenance & Repairs",
    summary:
      "Ongoing cleaning, servicing, reprogramming, and repairs to keep your hearing aids performing at their best for years to come.",
    whoNeedsIt:
      "All hearing aid users — regular maintenance prevents faults, extends device life, and ensures consistent sound quality.",
    benefits: [
      "Professional cleaning and performance checks",
      "Reprogramming as your hearing changes",
      "Fast repair turnaround for most faults",
      "Batteries, domes, and accessories available in clinic",
    ],
    pricing: "Aftercare included with purchase · Repairs from £45",
  },
];
