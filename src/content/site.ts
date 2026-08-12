export const siteConfig = {
  name: "Sudarvel",
  brand: "SUDARVEL",
  role: "UX & Product Designer",
  tagline: "I design calm, cinematic product experiences that feel intentional from the first scroll.",
  email: "hello@sudarvel.design",
  location: "India",
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
  sections: { heading: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "oncosmart",
    title: "Oncosmart",
    tagline: "Guided fitness for recovery — clarity over clutter.",
    role: "Product / UX Designer",
    year: "2025",
    tags: ["Health", "Mobile", "Tamil UX"],
    coverTone: "linear-gradient(145deg, #1a1510 0%, #3d2a18 45%, #0c0d10 100%)",
    summary:
      "A patient-centered fitness experience that makes daily sessions feel guided, calm, and trustworthy — with bilingual support and video-led workouts.",
    sections: [
      {
        heading: "Problem",
        body: "Recovery fitness apps often overwhelm users with dense dashboards. Patients needed a quieter path: start a session, follow along, and feel progress without noise.",
      },
      {
        heading: "Approach",
        body: "I mapped the first-session journey, simplified language switching, and designed portrait-first guided video patterns so motion and instruction stay readable on small screens.",
      },
      {
        heading: "Outcome",
        body: "A clearer home-to-session flow, stronger visual hierarchy for male/female tracks, and a foundation for cloud sync and notifications without losing the calm tone.",
      },
    ],
  },
  {
    slug: "pulse-clinic",
    title: "Pulse Clinic",
    tagline: "Appointment clarity for anxious first visits.",
    role: "UX Designer",
    year: "2024",
    tags: ["Healthcare", "Web", "Service design"],
    coverTone: "linear-gradient(145deg, #10151a 0%, #1e3a3a 50%, #0c0d10 100%)",
    summary:
      "A clinic booking flow redesigned around reassurance — fewer steps, honest wait expectations, and human copy.",
    sections: [
      {
        heading: "Problem",
        body: "First-time patients abandoned booking when forms felt clinical and opaque about timing.",
      },
      {
        heading: "Approach",
        body: "Reduced fields, added progressive disclosure, and introduced calm status messaging throughout the journey.",
      },
      {
        heading: "Outcome",
        body: "A shorter path to confirmation and a tone patients described as “less scary.”",
      },
    ],
  },
  {
    slug: "atelier-market",
    title: "Atelier Market",
    tagline: "Editorial commerce with room to breathe.",
    role: "Product Designer",
    year: "2024",
    tags: ["E‑commerce", "Brand", "Motion"],
    coverTone: "linear-gradient(145deg, #18120e 0%, #4a3020 40%, #0c0d10 100%)",
    summary:
      "A boutique marketplace concept pairing large imagery with quiet typography and intentional motion.",
    sections: [
      {
        heading: "Problem",
        body: "Craft brands looked generic inside template storefronts — product story disappeared behind cards and badges.",
      },
      {
        heading: "Approach",
        body: "Led with full-bleed photography, one CTA group, and scroll chapters instead of dense grids above the fold.",
      },
      {
        heading: "Outcome",
        body: "A cinematic browsing mood that still keeps cart and checkout obvious.",
      },
    ],
  },
];

export const resume = {
  headline: "UX & Product Designer",
  summary:
    "I craft product interfaces with cinematic clarity — strong hierarchy, purposeful motion, and stories that hire managers can follow in under a minute.",
  experience: [
    {
      role: "Product / UX Designer",
      org: "Oncosmart",
      period: "2025 — Present",
      points: [
        "Designed guided workout and Growth experiences for recovery fitness.",
        "Shaped bilingual (English / Tamil) flows and video-led session patterns.",
        "Partnered on cloud sync, notifications, and admin surfaces.",
      ],
    },
    {
      role: "UX Designer",
      org: "Independent / freelance",
      period: "2023 — 2025",
      points: [
        "Delivered product narratives, wire-to-hi-fi systems, and prototype reviews.",
        "Focused on healthcare and lifestyle products with calm visual systems.",
      ],
    },
  ],
  skills: [
    "Product thinking",
    "Interaction design",
    "Design systems",
    "Prototyping",
    "Framer / Figma",
    "Motion direction",
    "User interviews",
    "Accessibility basics",
  ],
  education: [
    {
      title: "Design studies",
      detail: "Focus on human-centered product design and visual storytelling.",
    },
  ],
};
