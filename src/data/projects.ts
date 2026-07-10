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
    stack: ["Node.js", "Express", "PostgreSQL", "REST APIs", "Sequelize"],
    bullets: [
      "Built end-to-end property listing flows with search, filtering, and structured backend API design.",
      "Designed a clean integration between frontend UI and backend services for a smooth rental browsing experience.",
      "Focused on product thinking — prioritising clarity of information and intuitive user flows throughout.",
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
      demo: "#",
      github: "https://github.com/pshkai/sports-court-booking-system",
    },
    featured: true,
  },
  {
    name: "ExpireSense",
    tagline: "A food expiry tracking app with OCR scanning and smart inventory management.",
    stack: ["Flutter", "FastAPI", "Supabase", "Python", "OCR"],
    bullets: [
      "Built a Flutter mobile frontend backed by a FastAPI service layer, with Supabase handling auth and storage.",
      "Integrated OCR-based receipt scanning to automatically extract and log food items and expiry dates.",
      "Developed expiry reminders, inventory management, and recipe recommendation features — prepared for production release.",
    ],
    links: {
      demo: "https://www.linkedin.com/company/expiresense/",
      github: "https://www.expiresense.com/",
    },
    linkLabels: {
      demo: "LinkedIn",
      github: "Website",
    },
    featured: true,
  },
  {
    name: "Adult Site Blocking Extension",
    tagline: "A lightweight browser extension for automatic adult content filtering.",
    stack: ["JavaScript", "Browser Extension APIs", "Chrome APIs"],
    bullets: [
      "Built a browser extension that automatically detects and blocks adult websites using content filtering logic.",
      "Prioritised lightweight performance — the extension runs efficiently without impacting browsing speed.",
      "Designed with user protection in mind, delivering a clean and unobtrusive experience.",
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
