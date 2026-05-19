export type SkillCategory = {
  category: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend & APIs",
    icon: "⚙️",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs", "Authentication", "Payment & Order Flows"],
  },
  {
    category: "Databases & ORM",
    icon: "🗄️",
    skills: ["PostgreSQL", "Sequelize", "Supabase"],
  },
  {
    category: "Frontend & Mobile",
    icon: "📱",
    skills: ["Flutter", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Tools & Workflow",
    icon: "🛠️",
    skills: ["Git", "Postman", "GitHub", "VS Code"],
  },
  {
    category: "Architecture & Practices",
    icon: "🏗️",
    skills: ["Service-Layer Architecture", "Backend Refactoring", "API Design", "Clean Code"],
  },
];