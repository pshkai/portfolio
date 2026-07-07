"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    number: "01",
    title: "Clarity over cleverness",
    body: "I write code that the next developer — or future me — can read without needing a guide. Readable, consistent, and well-structured.",
  },
  {
    number: "02",
    title: "Systems thinking",
    body: "I think beyond individual endpoints. How does this service fit into the larger architecture? What breaks when this changes? I ask those questions early.",
  },
  {
    number: "03",
    title: "Ownership over handoffs",
    body: "I take responsibility for what I build. That means thinking about edge cases, testing my own work, and communicating clearly when something is blocked.",
  },
  {
    number: "04",
    title: "Honest collaboration",
    body: "I work best in environments where feedback is direct and respectful. I give the same in return — and I genuinely enjoy learning from engineers more experienced than me.",
  },
  {
    number: "05",
    title: "Ship, then improve",
    body: "Perfectionism is a trap. I aim to ship working, well-reasoned solutions and iterate with real feedback — rather than optimising in isolation indefinitely.",
  },
  {
    number: "06",
    title: "Product curiosity",
    body: "I care about why we're building something, not just what. Understanding the product goal makes every technical decision sharper and more intentional.",
  },
];

export function WorkStyle() {
  return (
    <section id="workstyle" className="py-24 bg-white dark:bg-stone-950">
      <div className="section-container">
        <SectionHeading
          label="Work Style"
          title="How I think and work."
          subtitle="The principles I bring to every project — independent or collaborative."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-100 rounded-2xl overflow-hidden border border-stone-100 dark:bg-stone-800 dark:border-stone-800">
          {values.map((value, i) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                backgroundColor: "var(--card)",
                transition: { duration: 0.15 },
              }}
              className="bg-white p-7 flex flex-col gap-3 group dark:bg-stone-950"
            >
              <span className="font-serif text-3xl text-stone-200 group-hover:text-stone-300 transition-colors leading-none select-none dark:text-stone-800 dark:group-hover:text-stone-700">
                {value.number}
              </span>
              <h3 className="font-medium text-stone-900 text-sm tracking-tight leading-snug dark:text-stone-100">
                {value.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed font-light dark:text-stone-400">
                {value.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
