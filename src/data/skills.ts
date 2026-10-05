export type SkillCategory = {
  category: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend & APIs",
    icon: "⚙️",
    skills: ["Node.js", "NestJS", "Express.js", "FastAPI", "REST APIs", "JWT", "Role-based access control"],
  },
  {
    category: "Databases & ORM",
    icon: "🗄️",
    skills: ["PostgreSQL", "MySQL", "Prisma", "Sequelize", "Supabase", "Database migrations"],
  },
  {
    category: "Frontend & Mobile",
    icon: "📱",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Flutter", "Tailwind CSS"],
  },
  {
    category: "AI & Automation",
    icon: "🛠️",
    skills: ["n8n", "Python", "OpenAI GPT", "Gemini", "LLM agents", "Prompt engineering", "Structured outputs"],
  },
  {
    category: "Business Integrations",
    icon: "🏗️",
    skills: ["LINE Messaging API", "ClickUp API", "SMTP", "Webhooks", "Knowledge retrieval", "Human review"],
  },
  {
    category: "Testing & Delivery",
    icon: "",
    skills: ["Jest", "Playwright", "Postman", "Git/GitHub", "GitHub Actions", "CI/CD", "Vercel", "Render"],
  },
];
