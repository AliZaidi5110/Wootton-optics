import type { TeamMember } from "@/types";

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Margaret Wootton",
    role: "Founder & Lead Audiologist",
    bio: "Margaret founded Wootton Hearing Care over two decades ago with a vision to bring compassionate, expert hearing care to the Northampton community. With extensive clinical experience and a genuine passion for improving lives, she leads our hearing services with warmth and professionalism.",
    qualifications: [
      "BSc (Hons) Audiology",
      "Registered Hearing Aid Dispenser (RHAD)",
      "Member, British Society of Hearing Aid Audiologists",
      "20+ years clinical experience",
    ],
    image: "/team/margaret-wootton.jpg",
  },
  {
    id: "2",
    name: "Daniel Wootton",
    role: "Director & Dispensing Optician",
    bio: "Daniel joined the family business to expand Wootton Optics, bringing fresh energy and modern optical expertise. He specialises in advanced lens technology and designer eyewear, ensuring every client receives personalised vision care.",
    qualifications: [
      "BSc (Hons) Ophthalmic Dispensing",
      "FBDO – Fellow of the Association of British Dispensing Opticians",
      "ABDO Registered Dispensing Optician",
      "Specialist in varifocal and occupational lenses",
    ],
    image: "/team/daniel-wootton.jpg",
  },
  {
    id: "3",
    name: "Sarah Mitchell",
    role: "Clinical Audiologist",
    bio: "Sarah supports our hearing care team with expert audiometric testing and hearing aid programming. Her patient-centred approach ensures every client feels heard and supported throughout their hearing journey.",
    qualifications: [
      "MSc Clinical Audiology",
      "HCPC Registered",
      "Specialist in paediatric and adult audiology",
    ],
    image: "/team/sarah-mitchell.jpg",
  },
  {
    id: "4",
    name: "Emma Richardson",
    role: "Optical Assistant & Frame Stylist",
    bio: "Emma helps clients find the perfect frames to match their face shape, lifestyle, and personal style. Her eye for detail and knowledge of the latest trends makes every optical visit a enjoyable experience.",
    qualifications: [
      "ABDO Level 3 Optical Assistant",
      "Certified Frame Styling Specialist",
      "5+ years in optical retail",
    ],
    image: "/team/emma-richardson.jpg",
  },
];
