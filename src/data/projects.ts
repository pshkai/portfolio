export type Project = {
  name: string;
  tagline: string;
  stack: string[];
  bullets: string[];
  links: {
    demo?: string;
    github?: string;
    details?: string;
  };
  linkLabels?: {
    demo?: string;
    github?: string;
    details?: string;
  };
  featured?: boolean;
};

export const personalProjects: Project[] = [
  {
    name: "FindYourCrib",
    tagline: "A full-stack property and rental discovery platform.",
    stack: ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Prisma", "Jest", "Playwright"],
    bullets: [
      "Built a property marketplace with a NestJS API and Next.js frontend for renter, agent and administrator workflows.",
      "Implemented httpOnly JWT authentication, password recovery, listing management, enquiries, favourites and admin moderation, with signed Supabase media uploads.",
      "Added 64 passing Jest backend tests, Playwright public smoke tests and GitHub Actions CI, with deployment runbooks for Vercel and Render.",
    ],
    links: {
      demo: "https://findyourcrib.vercel.app",
      github: "https://github.com/pshkai/findyourcrib",
    },
    featured: true,
  },
  {
    name: "Sports Court Booking System",
    tagline: "A reservation platform for managing sports court availability and bookings.",
    stack: ["Node.js", "Express", "PostgreSQL", "Sequelize", "REST APIs"],
    bullets: [
      "Developed reservation and scheduling APIs supporting real-time court availability and conflict prevention.",
      "Implemented user booking flows with clear state management — pending, confirmed, and cancelled bookings.",
      "Designed backend logic to handle schedule management cleanly across multiple courts and time slots.",
    ],
    links: {
      github: "https://github.com/pshkai/sports-court-booking-system",
    },
    featured: true,
  },
  {
    name: "ExpireSense Prototype",
    tagline: "A food management prototype for inventory, expiry tracking and OCR-assisted receipt capture.",
    stack: ["Flutter", "FastAPI", "Supabase", "Python", "OCR"],
    bullets: [
      "Led product strategy and prototype development for a Flutter-based application covering inventory, expiry tracking, receipt capture and reminders.",
      "Conducted market research and translated user needs into workflows and system architecture using Flutter, FastAPI, Supabase and Python.",
      "Coordinated cross-functional development, software testing and prototype delivery.",
    ],
    links: {
      demo: "https://www.expiresense.com/",
      details: "https://www.linkedin.com/company/expiresense/",
    },
    linkLabels: {
      demo: "Website",
      details: "LinkedIn",
    },
    featured: true,
  },
  {
    name: "Never Give Up Site Blocker",
    tagline: "A lightweight browser extension for automatic adult content filtering.",
    stack: ["JavaScript", "Chrome Manifest V3", "declarativeNetRequest", "webNavigation"],
    bullets: [
      "Built a Chrome extension that parses a public adult-domain hosts list and stores domains locally.",
      "Blocks navigation with declarativeNetRequest rules, a fallback list and a webNavigation guard.",
    ],
    links: {
      github: "https://github.com/pshkai/adult-site-blocking-extension",
    },
  },
  {
    name: "School Website Redesign",
    tagline: "A modern UI/UX overhaul of a school's public-facing website.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    bullets: [
      "Redesigned the information architecture for clarity — making key content easier to find and navigate.",
      "Improved visual presentation with a clean, modern layout that works responsively across all devices.",
      "Focused on accessibility and legibility to better serve students, parents, and staff.",
    ],
    links: {
      demo: "https://gpis-kai.netlify.app/",
      github: "https://github.com/pshkai/GlobalPathwaysInternationalSchool-Website",
    },
  },
];
