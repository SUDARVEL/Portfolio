/**
 * Sudarvel portfolio content
 * Blend: Sanjay Menon hiring structure + cinematic storyboard theme + Fedor RRR/BLUF case studies
 * Source facts: K Sudarvel Product Designer resume
 */
export const siteConfig = {
  name: "K Sudarvel",
  brand: "SUDARVEL",
  role: "Product Designer",
  greeting: "Hey, I'm Sudarvel",
  tagline:
    "I turn messy B2B, EdTech, and AI-first workflows into products people actually understand — calm interfaces, scalable systems, measurable impact.",
  proofLine: "Based in Chennai · Building at Digival",
  email: "velsudar76@gmail.com",
  phone: "7338965096",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/",
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

export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  index: string;
  title: string;
  /** Outcome-first headline like Sanjay's cards */
  impactTitle: string;
  tagline: string;
  role: string;
  year: string;
  tags: string[];
  coverTone: string;
  summary: string;
  metrics: Metric[];
  meta: {
    client?: string;
    duration?: string;
    team?: string;
    platforms?: string;
  };
  /** Fedor canvas order with Sanjay depth */
  sections: { heading: string; body: string }[];
  decisions?: { title: string; body: string }[];
};

/** RRR: Relevant · Remarkable · Recent */
export const projects: Project[] = [
  {
    slug: "digiclass-roll-call",
    index: "01",
    title: "Digiclass Roll Call",
    impactTitle: "Live attendance, rebuilt for Digiclass classrooms",
    tagline: "Manual roll call → Present / Late / Absent in a digital flow that supported 250+ sessions.",
    role: "Associate UI/UX Designer",
    year: "2025",
    tags: ["EdTech", "B2B SaaS", "Mobile UX"],
    coverTone:
      "linear-gradient(160deg, #20191e 0%, #392b33 42%, #060709 100%)",
    summary:
      "Transformed Digiclass’s traditional manual roll call into a digital attendance workflow with Present, Late, and Absent status tracking — designed for faster live classroom management.",
    metrics: [
      { value: "250+", label: "attendance sessions supported" },
      { value: "+15%", label: "task efficiency (EdTech workflows)" },
      { value: "−18%", label: "user errors (workflow redesign)" },
      { value: "10+", label: "usability tests run" },
    ],
    meta: {
      client: "Digival IT Solutions · Digiclass",
      duration: "Jan 2025 — Present",
      team: "Stakeholders, engineers, product (Agile)",
      platforms: "Mobile-first product UX",
    },
    sections: [
      {
        heading: "Why it mattered",
        body: "Teachers needed a faster way to take live attendance without paper friction. Manual roll call slowed class flow and made Present / Late / Absent tracking inconsistent — hurting operational clarity for Digiclass.",
      },
      {
        heading: "Challenge",
        body: "How might we digitize live roll call so teachers can mark status quickly, keep class rhythm, and trust the record afterward?",
      },
      {
        heading: "Status quo",
        body: "Attendance lived in a traditional manual process — hard to update live, easy to lose clarity during busy classroom moments, and weak for operational follow-up.",
      },
      {
        heading: "Process",
        body: "Mapped the live attendance journey, redesigned status actions for speed, and partnered in Agile with stakeholders and engineering. Digival EdTech workflow redesigns were informed by 10+ usability tests and a growing Figma design system — patterns that also drove +15% task efficiency and −18% user errors across complex workflows.",
      },
      {
        heading: "Outcome",
        body: "A streamlined mobile UX for live attendance that successfully supported 250+ attendance sessions, improving operational efficiency and day-to-day usability for Digiclass.",
      },
      {
        heading: "Learnings",
        body: "In live education tools, speed and status clarity beat feature richness. Design systems and usability tests keep complex B2B EdTech workflows consistent as the product scales.",
      },
    ],
    decisions: [
      {
        title: "Three clear statuses",
        body: "Present / Late / Absent as primary actions — no buried menus during live class.",
      },
      {
        title: "Mobile-first speed",
        body: "Optimized for one-handed marking so teachers never lose classroom flow.",
      },
      {
        title: "System patterns",
        body: "Components fed a shared Digival Figma system for consistency across EdTech workflows.",
      },
    ],
  },
  {
    slug: "oncosmart",
    index: "02",
    title: "OncoSmart",
    impactTitle: "Guided rehab fitness for cancer recovery journeys",
    tagline: "Calm, clear sessions for patients before and after chemotherapy — physician-assisted and home-based.",
    role: "Product / UX Designer",
    year: "2025",
    tags: ["Health", "Research app", "Guided fitness"],
    coverTone:
      "linear-gradient(160deg, #20191e 0%, #3d2a18 45%, #060709 100%)",
    summary:
      "Researched and designed a personalized fitness experience for cancer patients to support guided rehabilitation before and after chemotherapy — through physician-assisted exercises and home-based recovery programs.",
    metrics: [
      { value: "0→1", label: "rehab fitness experience designed" },
      { value: "2 modes", label: "physician-assisted + home recovery" },
      { value: "Calm UX", label: "continuity over clutter" },
    ],
    meta: {
      client: "OncoSmart (research / product)",
      platforms: "Mobile fitness experience",
      team: "Research-led product design",
    },
    sections: [
      {
        heading: "Why it mattered",
        body: "Cancer patients need recovery fitness that feels trustworthy and continuous — not a noisy gym app. Continuity before and after chemotherapy depends on clarity, guidance, and emotional load-aware UX.",
      },
      {
        heading: "Challenge",
        body: "How might we help patients stay consistent with guided rehab — at home and with physician support — without overwhelming them?",
      },
      {
        heading: "Status quo",
        body: "Recovery fitness journeys are often dense, clinical, or generic. Patients need a simple path to start and continue sessions.",
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
    decisions: [
      {
        title: "Guidance over dashboards",
        body: "Lead with the next session, not a wall of stats.",
      },
      {
        title: "Two recovery contexts",
        body: "Support physician-assisted and home-based paths in one calm system.",
      },
    ],
  },
  {
    slug: "infinity-ai-fintech",
    index: "03",
    title: "Infinity AI FinTech Assistant",
    impactTitle: "Conversational AI for investment & product support",
    tagline: "An AI chatbot UX that reduces repetitive queries and speeds financial answers for Infinity Value Group.",
    role: "Product Designer",
    year: "2025",
    tags: ["FinTech", "AI", "Chat UX"],
    coverTone:
      "linear-gradient(160deg, #20191e 0%, #2a3538 48%, #060709 100%)",
    summary:
      "Designed an AI-powered fintech chatbot for Infinity Value Group to deliver investment, financial, and product-related assistance through a conversational user experience.",
    metrics: [
      { value: "AI chat", label: "fintech assistance UX" },
      { value: "Fewer repeats", label: "support query load reduced" },
      { value: "Faster", label: "issue resolution path" },
    ],
    meta: {
      client: "Infinity Value Group",
      platforms: "Conversational AI assistant",
    },
    sections: [
      {
        heading: "Why it mattered",
        body: "Customers needed faster answers on investments, finance, and products without waiting on repetitive human support loops.",
      },
      {
        heading: "Challenge",
        body: "How might we design a conversational assistant that feels trustworthy, clear, and useful for financial questions?",
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
    decisions: [
      {
        title: "Structured conversation",
        body: "Guide topics (investment, product, support) instead of an empty prompt void.",
      },
      {
        title: "Escalation path",
        body: "Make it obvious when a human should take over.",
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
