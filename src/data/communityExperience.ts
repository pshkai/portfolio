export type CommunityExperience = {
  title: string;
  organization: string;
  category:
    | "Technical Volunteering"
    | "Founder / Product Initiative"
    | "Hackathons & Leadership"
    | "Leadership & Community"
    | "Product Discovery";
  date?: string;
  summary: string;
  bullets: string[];
  badges: string[];
};

export const communityExperience: CommunityExperience[] = [
  {
    title: ".NET Developer Day Thailand Volunteer",
    organization: ".NET Thailand / Seven Peaks",
    category: "Technical Volunteering",
    date: "2026",
    summary:
      "Volunteering support for a developer community event focused on .NET architecture, AI, software design, and technical debt.",
    bullets: [
      "Supported the organizing side of a developer event backed by Microsoft, Seven Peaks, .NET Thailand, and Agoda.",
      "Engaged with sessions on open-source .NET architecture, native SSE, AI in Unity, MCP abstractions, and code entropy in monoliths.",
      "Built community connections while learning from senior engineers, speakers, and other volunteers.",
    ],
    badges: [".NET", "Developer Community", "Event Volunteering", "Software Architecture"],
  },
  {
    title: "Founder & CEO",
    organization: "ExpireSense",
    category: "Founder / Product Initiative",
    date: "Apr 2025 - Present",
    summary:
      "Founder journey behind a food waste reduction product built around expiry tracking, receipt scanning, and recipe suggestions.",
    bullets: [
      "Led ExpireSense through startup showcases and pitch events, including Startup Grind Bangkok and Pizza Pitch.",
      "Earned recognition including Community Choice and Most Innovative Idea for the product's food waste prevention concept.",
      "Connected user research, hospitality/F&B observations, and product strategy into a clearer sustainability-focused roadmap.",
    ],
    badges: ["Startup", "Pitching", "Food Waste", "Sustainability", "Product Strategy"],
  },
  {
    title: "ACIYLS / Sustainability Startathon",
    organization: "ASEAN-China-India Youth Leadership Summit",
    category: "Hackathons & Leadership",
    summary:
      "Youth leadership and sustainability-focused hackathon/startathon experience around practical climate-positive ideas.",
    bullets: [
      "Worked in a fast-paced challenge environment shaped around sustainability, youth leadership, and practical problem solving.",
      "Practiced pitching, collaboration, and idea development under time and feedback constraints.",
      "Strengthened the entrepreneurial and sustainability lens that later fed into ExpireSense.",
    ],
    badges: ["Hackathon", "Startathon", "Sustainability", "Youth Leadership", "Pitching"],
  },
  {
    title: "Student Council President",
    organization: "Global Academy at Siam University",
    category: "Leadership & Community",
    date: "Feb 2025 - Present",
    summary:
      "Student representation, event planning, council operations, and campus engagement work across Global Academy.",
    bullets: [
      "Led student council coordination across event proposals, timelines, volunteer recruitment, registration workflows, and logistics.",
      "Collaborated with school leadership, university administration, and student representatives to improve student experience.",
      "Supported GA Sports Day planning and execution across approvals, scheduling, volunteer coordination, and prize-giving.",
    ],
    badges: ["Leadership", "Event Planning", "Stakeholder Management", "Student Council"],
  },
  {
    title: "Hospitality Internship Bootcamp",
    organization: "Pullman Pattaya Hotel G / Global Academy",
    category: "Product Discovery",
    date: "2026",
    summary:
      "Hands-on hospitality exposure that connected F&B operations, service workflows, and food waste observations to ExpireSense.",
    bullets: [
      "Observed hotel operations across barista and bartending training, front desk, breakfast service, F&B, supplier deliveries, and housekeeping.",
      "Studied how food flow, waste points, service timing, and operational decisions appear in a real hospitality environment.",
      "Used the experience to sharpen ExpireSense's product context beyond a classroom or pitch-stage understanding.",
    ],
    badges: ["Hospitality", "F&B Operations", "Product Discovery", "ExpireSense"],
  },
];
