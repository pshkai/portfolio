export type AdditionalExperience = {
  organization: string;
  role: string;
  category: "AI & Creative Technology" | "MarTech & Operations" | "Technical Education" | "Education & Coaching";
  date?: string;
  summary: string;
  bullets: string[];
  badges: string[];
};

export const additionalExperience: AdditionalExperience[] = [
  {
    organization: "MarketingBear",
    role: "Intern",
    category: "AI & Creative Technology",
    date: "Jun 2026 - Present",
    summary:
      "AI-assisted creative production for short-form advertising and SEO-focused product campaigns.",
    bullets: [
      "Researched competitors, advertising approaches, social content, and creative trends to shape campaign concepts.",
      "Developed selected ideas into storyboards, director scripts, visual narratives, and production-ready AI video workflows using ChatGPT and Claude.",
      "Iterated Seedance 2.0 generations through shot comparison, feedback, prompt revision, concept pivots, and CapCut assembly.",
    ],
    badges: ["Generative AI", "ChatGPT", "Claude", "Seedance 2.0", "Storyboarding", "CapCut"],
  },
  {
    organization: "Pantech Digital",
    role: "MarTech Operations & Business Growth Intern",
    category: "MarTech & Operations",
    date: "Oct 2025 - Jan 2026",
    summary:
      "Regional MarTech operations, e-commerce data analysis, affiliate infrastructure, and market research across Southeast Asian markets.",
    bullets: [
      "Supported performance marketing and operational work across Thailand, Vietnam, and Southeast Asian markets with APAC stakeholders.",
      "Worked on TikTok Shop affiliate operations, account setup, location compliance considerations, tracking validation, test purchases, and monitoring.",
      "Converted JSON data into structured Excel reports and researched market and content trends for management-facing insights.",
    ],
    badges: ["MarTech", "E-commerce", "Data Analysis", "Excel", "JSON", "Operations"],
  },
  {
    organization: "YOUTH IFO",
    role: "Computer Science & ICT Teacher",
    category: "Technical Education",
    date: "Jan 2024 - May 2024",
    summary:
      "Teaching programming, algorithms, computational thinking, and computer science concepts through structured lessons and assessments.",
    bullets: [
      "Delivered Computer Science and ICT instruction covering programming, algorithms, and computational thinking.",
      "Designed lesson plans, assessments, and learning resources aligned with curriculum expectations and student learning needs.",
      "Adapted explanations based on student progress to make technical concepts understandable across ability levels.",
    ],
    badges: ["Computer Science", "ICT", "Programming", "Algorithms", "Teaching"],
  },
  {
    organization: "Freelance",
    role: "Programming Teacher",
    category: "Technical Education",
    summary:
      "Programming instruction focused on helping students understand technical requirements and turn them into properly structured projects.",
    bullets: [
      "Taught Java, C#/.NET, Python, and web development with HTML, CSS, and JavaScript to one-to-one students and groups.",
      "Helped students interpret client requirements, approach technical questions systematically, and build project-based solutions.",
      "Included project documentation and business requirements documentation where it helped students understand the full delivery process.",
    ],
    badges: ["Java", "C# / .NET", "Python", "JavaScript", "Requirements", "Documentation"],
  },
  {
    organization: "Kings Yangon",
    role: "PE Teacher Intern",
    category: "Education & Coaching",
    date: "Nov 2024 - Jan 2025",
    summary:
      "Physical education instruction, sports activity planning, and basketball coaching across a wide student age range.",
    bullets: [
      "Worked with students from Year 3 through Year 13 in PE classes and sports activities.",
      "Assisted the Head Coordinator with class delivery, activity planning, and sports-related events.",
      "Coached basketball and supported student development through structured practice and feedback.",
    ],
    badges: ["Teaching", "Sports", "Basketball", "Event Planning", "Student Development"],
  },
  {
    organization: "Freelance",
    role: "Basketball Coach",
    category: "Education & Coaching",
    summary:
      "Basketball coaching for individual players, adults, groups, and teams, focused on fundamentals and player development.",
    bullets: [
      "Coached roughly 50 players across one-to-one sessions, adult training, group sessions, and team environments.",
      "Developed players through basketball fundamentals, shooting, fitness, conditioning, game IQ, teamwork, and communication.",
      "Coached multiple teams to championship results while supporting both individual growth and team development.",
    ],
    badges: ["Coaching", "Leadership", "Basketball", "Team Development", "Communication"],
  },
];
