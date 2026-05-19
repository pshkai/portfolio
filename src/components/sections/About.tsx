"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactInfo } from "@/data/contact";

const traits = [
  {
    icon: "⚙️",
    title: "Backend-first thinking",
    body: "I care about what happens under the hood — clean service layers, well-structured APIs, and data models that scale without becoming a maintenance burden.",
  },
  {
    icon: "📦",
    title: "Product-minded approach",
    body: "I build with the end user in mind. Backend work only matters if it enables a good product — I think about flows, edge cases, and the full picture.",
  },
  {
    icon: "🤝",
    title: "Team-oriented",
    body: "I value clear communication, readable code, and collaboration. Good engineering is as much about working well with others as it is about writing good code.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading label="About" title="Building backends that actually hold up." />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 text-stone-600 leading-relaxed font-light text-[15px]"
            >
              <p>
                Hi, I am Kai — a backend-focused software engineer with hands-on experience building REST APIs, service-layer architectures, and product-driven backend systems across real commercial projects.
              </p>
              <p>
                I have worked on commerce platforms, education systems, and consumer apps — handling everything from product and order flows to authentication, pricing logic, and database modelling with PostgreSQL and Sequelize.
              </p>
              <p>
                Outside of professional work, I build independently — from a property platform and a sports court booking system to a Flutter and FastAPI expiry tracking app. I ship things end to end and care deeply about code that is maintainable, not just functional.
              </p>
              <p>
                I am currently open to software engineering internships and junior backend engineer roles where I can contribute meaningfully and keep growing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href={"mailto:" + contactInfo.email} className="text-sm text-stone-700 hover:text-stone-900 font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-stone-700 transition-all">
                {contactInfo.email}
              </a>
              <span className="text-stone-300">·</span>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-700 hover:text-stone-900 font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-stone-700 transition-all">
                LinkedIn
              </a>
              <span className="text-stone-300">·</span>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-700 hover:text-stone-900 font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-stone-700 transition-all">
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
                  <p className="font-medium text-stone-900 text-sm mb-1">{trait.title}</p>
                  <p className="text-stone-500 text-sm leading-relaxed font-light">{trait.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}