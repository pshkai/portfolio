"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-stone-50">
      <div className="section-container">
        <SectionHeading
          label="Tech Stack"
          title="Tools I build with."
          subtitle="A focused set of backend technologies, frameworks, and practices I've applied in real projects."
          align="left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -3,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="glass-card p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl" aria-hidden>
                  {cat.icon}
                </span>
                <h3 className="font-medium text-stone-900 text-sm tracking-tight">
                  {cat.category}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip: availability note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-sm text-stone-400 font-light"
        >
          Always learning — currently deepening knowledge in system design and
          scalable backend patterns.
        </motion.p>
      </div>
    </section>
  );
}