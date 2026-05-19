"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { professionalProjects } from "@/data/professionalExperience";

function ExperienceCard({
  project,
  index,
}: {
  project: (typeof professionalProjects)[number];
  index: number;
}) {
  return (
    <motion.article
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
      className="glass-card p-7 flex flex-col gap-5"
    >
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <h3 className="font-serif text-xl text-stone-900">
              {project.company}
            </h3>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-500 border border-stone-200">
              {project.type}
            </span>
          </div>
          <p className="text-sm text-stone-500 font-medium mt-0.5">
            {project.role}
          </p>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-stone-600 text-sm leading-relaxed font-light border-l-2 border-stone-200 pl-4 italic">
        {project.tagline}
      </p>

      {/* Bullets */}
      <ul className="flex flex-col gap-3">
        {project.bullets.map((point, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span
              aria-hidden
              className="mt-[7px] shrink-0 w-1 h-1 rounded-full bg-stone-400"
            />
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              {point}
            </p>
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 pt-1 border-t border-stone-100">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="muted">
            {tech}
          </Badge>
        ))}
      </div>
    </motion.article>
  );
}

export function ProfessionalExperience() {
  return (
    <section id="experience" className="py-24 bg-stone-50">
      <div className="section-container">
        <SectionHeading
          label="Professional Experience"
          title="Real products. Real codebases."
          subtitle="Backend contributions to commercial platforms — working within existing systems, shipping features, and improving maintainability."
        />

        {/* Timeline-style layout: vertical stack with connector */}
        <div className="relative">
          {/* Vertical line — decorative */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-[18px] top-4 bottom-4 w-px bg-gradient-to-b from-stone-200 via-stone-300 to-transparent"
          />

          <div className="flex flex-col gap-6 lg:pl-12">
            {professionalProjects.map((project, i) => (
              <div key={project.company} className="relative">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                  aria-hidden
                  className="hidden lg:block absolute -left-[49px] top-7 w-3 h-3 rounded-full bg-white border-2 border-stone-400 shadow-sm"
                />
                <ExperienceCard project={project} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Confidentiality note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 text-xs text-stone-400 font-light"
        >
          * Project details are shared at a high level to respect client and
          employer confidentiality.
        </motion.p>
      </div>
    </section>
  );
}