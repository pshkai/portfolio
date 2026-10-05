export const aitsCaseStudies = [
  {
    name: "LINE Customer-Service Automation",
    stack: ["n8n", "LINE Messaging API", "GPT", "Gemini"],
    problem: "Turn Thai and English customer enquiries into useful installation requirements and clear team handoffs.",
    implementation: "Built intent routing, persistent conversation state, approved-knowledge retrieval and structured summaries for installation, quotation and human escalation. Added webhook signature verification and duplicate-event checks.",
  },
  {
    name: "Marketing Intelligence & Content Review",
    stack: ["n8n", "AI agents", "SMTP", "ClickUp API"],
    problem: "Help the team find relevant opportunities and review evidence-backed Thai marketing drafts.",
    implementation: "Built four workflows for research and content, daily email, ClickUp review and operational alerts. Research, verification and content agents produce drafts that remain subject to human and technical approval.",
  },
  {
    name: "AitsCCTV Website Rebuild",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    problem: "Prepare a maintainable website rebuild while preserving captured service content and familiar navigation.",
    implementation: "Built 36 captured routes with responsive layouts, metadata, an article archive, Thai/English navigation and click-to-load video embeds. Audited the existing WordPress website to define a phased performance and SEO roadmap.",
    image: "/portfolio/projects/aits-website-preview.png",
    imageAlt: "Article cards visible in the local AitsCCTV website rebuild preview",
  },
  {
    name: "CCTV & Wi-Fi Floorplan Studio",
    stack: ["FastAPI", "Python", "PDF/DXF", "Structured AI outputs"],
    problem: "Prepare a first-pass device layout that an engineer can inspect and adjust.",
    implementation: "Prototyped PDF rendering and DXF import, schema-constrained AI analysis, editable CCTV and Wi-Fi device placement, approximate coverage views, a 3D presentation view and SVG/print-to-PDF export.",
  },
];
