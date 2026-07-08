"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cards = [
  {
    label: "Projects",
    title: "Things I've built independently.",
    description:
      "Product-focused applications and technical projects built from idea to implementation.",
    cta: "View Projects",
    href: "/projects",
  },
  {
    label: "Experience",
    title: "Engineering and professional experience.",
    description:
      "Commercial backend contributions alongside experience in generative AI, technical education, MarTech, and coaching.",
    cta: "View Experience",
    href: "/experience",
  },
];

export function WorkGateway() {
  return (
    <section className="bg-white py-24 dark:bg-stone-950">
      <div className="section-container">
        <SectionHeading
          label="Explore My Work"
          title="A closer look at what I've built and where I've worked."
          subtitle="Explore independent products, commercial backend work, and the broader experiences that shaped how I approach technology and teams."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {cards.map((card, index) => (
            <motion.article
              key={card.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="glass-card flex h-full flex-col gap-6 p-7"
            >
              <div className="flex flex-col gap-3">
                <span className="text-xs font-medium uppercase tracking-widest text-stone-400 dark:text-stone-500">
                  {card.label}
                </span>
                <h3 className="font-serif text-2xl leading-snug text-stone-900 dark:text-stone-50">
                  {card.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-stone-500 dark:text-stone-400">
                  {card.description}
                </p>
              </div>

              <div className="mt-auto">
                <Button href={card.href} variant="outline" size="sm">
                  {card.cta}
                  <span aria-hidden>-&gt;</span>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
