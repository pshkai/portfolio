export type ProfessionalProject = {
  company: string;
  role: string;
  type: string;
  date?: string;
  tagline: string;
  stack: string[];
  bullets: string[];
  image?: string;
  imageAlt?: string;
};

export const professionalProjects: ProfessionalProject[] = [
  {
    company: "LINE Customer-Service Automation / AitsCCTV",
    role: "AI & Automation Development",
    type: "Customer Service",
    tagline: "Bilingual customer enquiry workflows for installation intake, quotations and team handoffs.",
    stack: ["n8n", "LINE Messaging API", "GPT", "Gemini"],
    bullets: [
      "Built Thai and English enquiry routing with persistent conversation state and approved-knowledge retrieval.",
      "Structured installation requirements, quotation tracking and summaries for human handoffs.",
      "Implemented webhook signature verification and duplicate-event handling.",
    ],
  },
  {
    company: "Marketing Intelligence & Content Review / AitsCCTV",
    role: "AI & Automation Development",
    type: "Marketing Automation",
    tagline: "Research and content workflows that support evidence-backed Thai marketing drafts and team review.",
    stack: ["n8n", "AI agents", "SMTP", "ClickUp API"],
    bullets: [
      "Built four workflows for research and content, daily email briefings, ClickUp review and operational alerts.",
      "Connected research, source verification and content agents to produce Thai drafts for human approval.",
      "Integrated SMTP briefings and ClickUp tasks into the team's review workflow.",
    ],
  },
  {
    company: "Website Rebuild / AitsCCTV",
    image: "/portfolio/projects/aits-website-preview.png",
    imageAlt: "Article cards in the AitsCCTV website rebuild",
    role: "Full Stack Development",
    type: "Web Platform",
    tagline: "A responsive Next.js rebuild preserving service content and familiar navigation.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    bullets: [
      "Built 36 captured routes with responsive layouts, metadata and an article archive.",
      "Added Thai and English navigation and click-to-load video embeds.",
      "Audited the existing WordPress website and defined a phased performance and technical SEO roadmap.",
    ],
  },
  {
    company: "CCTV & Wi-Fi Floorplan Studio / AitsCCTV",
    role: "Full Stack & AI Development",
    type: "Engineering Tool",
    tagline: "A floor-plan planning prototype with editable device layouts for engineering review.",
    stack: ["FastAPI", "Python", "PDF/DXF", "Structured AI outputs"],
    bullets: [
      "Prototyped PDF rendering, DXF import and schema-constrained AI floor-plan analysis.",
      "Built editable CCTV and Wi-Fi placement with approximate coverage views and a 3D presentation view.",
      "Added SVG and print-to-PDF export for sharing proposed layouts.",
    ],
  },
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
    company: "Acuppa Academy / Happy Three Creation",
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
