"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactInfo } from "@/data/contact";

const traits = [
  {
    icon: "⚙️",
    title: "Engineering across the stack",
    body: "I connect usable interfaces with clear APIs, relational data models and maintainable service layers.",
  },
  {
    icon: "📦",
    title: "Product-minded approach",
    body: "I turn business needs into workflows, prototypes and acceptance criteria, paying attention to edge cases and human review.",
  },
  {
    icon: "🤝",
    title: "Team-oriented",
    body: "I value clear communication, readable code, and collaboration. Good engineering is as much about working well with others as it is about writing good code.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-stone-950">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading label="About" title="From business requirements to working software." />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 text-stone-600 leading-relaxed font-light text-[15px] dark:text-stone-300"
            >
              <p>
                I am Kai, a software engineer based in Bangkok. At AitsCCTV, I build full-stack software and AI automation for customer enquiries, marketing intelligence and internal planning.
              </p>
              <p>
                My work combines TypeScript, Node.js, Python, React and Next.js with n8n, LLM agents and business-platform integrations. Earlier backend work covered commerce and education APIs, order flows and PostgreSQL data models.
              </p>
              <p>
                Independently, I build FindYourCrib, a property marketplace, and led product strategy and prototype development for ExpireSense. I care about authentication, testing and clear boundaries between a prototype and a production system.
              </p>
              <p>
                I am pursuing a dual degree in Computer &amp; Data Science and Software Engineering at Global Academy @ Siam University, with graduation expected in November 2028.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href={"mailto:" + contactInfo.email} className="text-sm text-stone-700 hover:text-stone-900 font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-stone-700 transition-all dark:text-stone-300 dark:hover:text-stone-50 dark:decoration-stone-700 dark:hover:decoration-stone-300">
                {contactInfo.email}
              </a>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-700 hover:text-stone-900 font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-stone-700 transition-all dark:text-stone-300 dark:hover:text-stone-50 dark:decoration-stone-700 dark:hover:decoration-stone-300">
                LinkedIn
              </a>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-700 hover:text-stone-900 font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-stone-700 transition-all dark:text-stone-300 dark:hover:text-stone-50 dark:decoration-stone-700 dark:hover:decoration-stone-300">
                GitHub
              </a>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card p-5 flex gap-4 items-start"
              >
                <span className="text-2xl mt-0.5 shrink-0" aria-hidden="true">{trait.icon}</span>
                <div>
                  <p className="font-medium text-stone-900 text-sm mb-1 dark:text-stone-100">{trait.title}</p>
                  <p className="text-stone-500 text-sm leading-relaxed font-light dark:text-stone-400">{trait.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
