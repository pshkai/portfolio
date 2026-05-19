export type ProfessionalProject = {
  company: string;
  role: string;
  type: string;
  tagline: string;
  stack: string[];
  bullets: string[];
};

export const professionalProjects: ProfessionalProject[] = [
  {
    company: "Juth Studio",
    role: "Backend Developer",
    type: "Commerce Platform",
    tagline: "Backend API development for a multi-brand commerce and product management platform.",
    stack: ["Node.js", "Express", "PostgreSQL", "Sequelize", "REST APIs"],
    bullets: [
      "Developed and maintained REST APIs supporting product listing, brand management, and catalogue operations.",
      "Implemented shipping and delivery cost calculation logic, integrating it cleanly into the order flow.",
      "Structured backend services using PostgreSQL and Sequelize, maintaining clear model relationships and data integrity.",
    ],
  },
  {
    company: "Acuppa Academy",
    role: "Backend Developer",
    type: "Education Platform",
    tagline: "Service-layer backend work on a course and education management platform.",
    stack: ["Node.js", "Express", "PostgreSQL", "Sequelize", "REST APIs"],
    bullets: [
      "Built and refined APIs for course management, ticket/bundle pricing logic, and enrollment flows across role-based portals.",
      "Supported payment and order flow integration, ensuring accurate transaction handling and enrollment state transitions.",
      "Refactored backend service layers to improve maintainability while preserving existing API contracts and behaviour.",
    ],
  },
  {
    company: "Thym / Happy Three Creation",
    role: "Backend Developer",
    type: "Backend API Work",
    tagline: "Backend API contributions across customer-facing and configuration-driven platform features.",
    stack: ["Node.js", "Express", "Sequelize", "PostgreSQL", "REST APIs"],
    bullets: [
      "Developed customer complaint and contact APIs, structuring clean request handling and response flows.",
      "Built ranking configuration APIs and coupon-related backend logic with Sequelize models and migrations.",
      "Maintained a consistent and well-structured API design across all assigned features.",
    ],
  },
];