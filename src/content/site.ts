/**
 * Content sourced from K Sudarvel Product Designer resume (Mar 2025/2026).
 * Case studies are outcome-first drafts — deepen with your notes/assets next.
 */
export const siteConfig = {
  name: "K Sudarvel",
  brand: "SUDARVEL",
  role: "Product Designer",
  tagline:
    "The view that builds dreams — clear product stories for B2B SaaS, EdTech, and AI-first platforms.",
  email: "velsudar76@gmail.com",
  phone: "7338965096",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/", // update with your exact LinkedIn URL
  framerPortfolio: "https://sudarvelportfolio.framer.website/",
  project: "portfolio",
  relatedTo: "oncosmart",
  nav: [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/gallery", label: "Gallery" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ],
  social: [
    { href: "https://www.linkedin.com/", label: "LinkedIn" },
    { href: "https://github.com/SUDARVEL", label: "GitHub" },
  ],
} as const;

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  year: string;
  tags: string[];
  coverTone: string;
  summary: string;
  meta: {
    client?: string;
    duration?: string;
    team?: string;
    platforms?: string;
  };
  sections: { heading: string; body: string }[];
};

/** RRR order: Relevant to Product Designer roles → Remarkable impact → Recent work */
export const projects: Project[] = [
  {
    slug: "digiclass-roll-call",
    title: "Digiclass Roll Call",
    tagline: "Manual attendance → live digital roll call for 250+ sessions.",
    role: "Associate UI/UX Designer",
    year: "2025",
    tags: ["EdTech", "B2B SaaS", "Mobile UX"],
    coverTone: "linear-gradient(145deg, #121820 0%, #1e3a4a 48%, #0c0d10 100%)",
    summary:
      "Transformed Digiclass’s traditional manual roll call into a digital attendance workflow with Present, Late, and Absent status tracking — designed for faster live classroom management.",
    meta: {
      client: "Digival IT Solutions · Digiclass",
      duration: "Jan 2025 — Present (ongoing product work)",
      team: "Stakeholders, engineers, product (Agile)",
      platforms: "Mobile-first product UX",
    },
    sections: [
      {
        heading: "Challenge",
        body: "Teachers needed a faster way to take live attendance without paper friction. Manual roll call slowed class flow and made Present / Late / Absent tracking inconsistent.",
      },
      {
        heading: "Status quo",
        body: "Attendance lived in a traditional manual process — hard to update live, easy to lose clarity during busy classroom moments, and weak for operational follow-up.",
      },
      {
        heading: "Process",
        body: "Mapped the live attendance journey, redesigned status actions for speed, and partnered in Agile with stakeholders and engineering. Across Digival EdTech workflow redesigns, usability testing (10+ sessions) and a growing Figma system informed cleaner patterns — contributing to +15% task efficiency and −18% user errors on complex workflows.",
      },
      {
        heading: "Outcome",
        body: "A streamlined mobile UX for live attendance that successfully supported 250+ attendance sessions, improving operational efficiency and day-to-day usability for Digiclass.",
      },
      {
        heading: "Learnings",
        body: "In live education tools, speed and status clarity beat feature richness. Design systems and usability tests were essential to keep complex B2B EdTech workflows consistent as the product scaled.",
      },
    ],
  },
  {
    slug: "oncosmart",
    title: "OncoSmart",
    tagline: "Guided rehab fitness for cancer patients — calm, clear, continuous.",
    role: "Product / UX Designer",
    year: "2025",
    tags: ["Health", "Research app", "Guided fitness"],
    coverTone: "linear-gradient(145deg, #1a1510 0%, #3d2a18 45%, #0c0d10 100%)",
    summary:
      "Researched and designed a personalized fitness experience for cancer patients to support guided rehabilitation before and after chemotherapy — through physician-assisted exercises and home-based recovery programs.",
    meta: {
      client: "OncoSmart (research / product)",
      platforms: "Mobile fitness experience",
      team: "Research-led product design",
    },
    sections: [
      {
        heading: "Challenge",
        body: "How might we help cancer patients stay consistent with guided rehab before and after chemotherapy — at home and with physician support — without overwhelming them?",
      },
      {
        heading: "Status quo",
        body: "Recovery fitness journeys are often dense, clinical, or generic. Patients need clarity, trust, and a simple path to start and continue sessions.",
      },
      {
        heading: "Process",
        body: "Researched patient rehab needs, designed a personalized fitness experience, and simplified guided fitness tracking plus remote exercise support so recovery participation felt continuous and human.",
      },
      {
        heading: "Outcome",
        body: "A clearer guided experience aimed at improving treatment continuity and patient engagement — streamlining recovery participation and adherence through calmer product UX.",
      },
      {
        heading: "Learnings",
        body: "In healthcare-adjacent products, emotional load is part of the UX. Hierarchy, language, and session guidance matter as much as feature completeness.",
      },
    ],
  },
  {
    slug: "infinity-ai-fintech",
    title: "Infinity AI FinTech Assistant",
    tagline: "Conversational AI for investment and product support.",
    role: "Product Designer",
    year: "2025",
    tags: ["FinTech", "AI", "Chat UX"],
    coverTone: "linear-gradient(145deg, #10151a 0%, #1e3a3a 50%, #0c0d10 100%)",
    summary:
      "Designed an AI-powered fintech chatbot for Infinity Value Group to deliver investment, financial, and product-related assistance through a conversational user experience.",
    meta: {
      client: "Infinity Value Group",
      platforms: "Conversational AI assistant",
    },
    sections: [
      {
        heading: "Challenge",
        body: "Customers needed faster answers on investments, finance, and products without waiting on repetitive human support loops.",
      },
      {
        heading: "Status quo",
        body: "Support channels were overloaded with repeat questions, slowing issue resolution and weakening engagement.",
      },
      {
        heading: "Process",
        body: "Designed a conversational UX that organizes financial assistance flows, clarifies AI responses, and streamlines access to product information for Infinity Value Group.",
      },
      {
        heading: "Outcome",
        body: "Improved customer support efficiency and reduced repetitive query handling — contributing to faster issue resolution and stronger user engagement.",
      },
      {
        heading: "Learnings",
        body: "AI chat UX succeeds when trust, clarity, and escalation paths are designed — not when the bot tries to answer everything with no structure.",
      },
    ],
  },
];

export const resume = {
  headline: "Product Designer",
  summary:
    "Results-oriented Product Designer with 1+ year crafting scalable B2B SaaS, EdTech, AI-first, and enterprise platforms. Led complex workflow redesigns that improved task efficiency by 15% and reduced user errors by 18%; ran 10+ usability tests and built scalable Figma design systems.",
  experience: [
    {
      role: "Associate UI/UX Designer",
      org: "Digival IT Solutions",
      period: "Jan 2025 — Present",
      location: "Chennai",
      points: [
        "Redesigned complex B2B EdTech workflows — +15% task efficiency, −18% user errors.",
        "Built scalable UI components and centralized design systems in Figma.",
        "Ran 10+ usability tests and synthesized insights for product improvements.",
        "Collaborated with stakeholders, engineers, and product in Agile; tracked deliverables, risks, and mitigation.",
      ],
    },
    {
      role: "UI/UX Design Intern",
      org: "Wyreflow Technologies",
      period: "Nov 2024 — Dec 2024",
      location: "Chennai",
      points: [
        "Created wireframes and prototypes for Hiremi 2.0 — +25% task success rates.",
        "Ran competitive analysis and synthesized findings from 50+ user surveys.",
      ],
    },
  ],
  skills: [
    "UI/UX Design",
    "User research",
    "Persona & journey mapping",
    "Wireframing & prototyping",
    "Usability testing",
    "Design systems",
    "Interaction design",
    "Design thinking / UCD",
    "Agile collaboration",
    "HTML / CSS / basic JS",
  ],
  tools: [
    "Figma",
    "Adobe XD",
    "Sketch",
    "Photoshop",
    "Illustrator",
    "MS Office",
  ],
  education: [
    {
      title: "B.E. Electronics & Communication Engineering",
      detail: "Rajalakshmi Engineering College, Chennai · CGPA 7.56",
    },
  ],
  extraProject: {
    title: "Hiremi 2.0 (internship)",
    note: "Wireframes/prototypes improving task success by 25%; 50+ survey synthesis. Keep as resume proof; optional 4th case study later.",
  },
};
