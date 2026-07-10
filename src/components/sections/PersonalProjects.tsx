"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { personalProjects } from "@/data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof personalProjects)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.22, ease: "easeOut" },
      }}
      className="glass-card p-6 flex flex-col gap-5 h-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-xl text-stone-900 leading-snug dark:text-stone-50">
            {project.name}
          </h3>
          <p className="text-stone-500 text-sm mt-1 font-light leading-snug dark:text-stone-400">
            {project.tagline}
          </p>
        </div>
        {project.featured && (
          <span className="shrink-0 mt-0.5 inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-900">
            Featured
          </span>
        )}
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="default">
            {tech}
          </Badge>
        ))}
      </div>

      {/* Bullet points */}
      <ul className="flex flex-col gap-2.5 flex-1">
        {project.bullets.map((point, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span
              aria-hidden
              className="mt-[6px] shrink-0 w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-500"
            />
            <p className="text-stone-600 text-sm leading-relaxed font-light dark:text-stone-300">
              {point}
            </p>
          </li>
        ))}
      </ul>

      {/* Links */}
      <div className="flex flex-wrap gap-2 pt-1 border-t border-stone-100 dark:border-stone-800">
        {project.links.demo && (
          <Button href={project.links.demo} variant="primary" size="sm" external>
            {project.linkLabels?.demo ?? "View Project"}
          </Button>
        )}
        {project.links.github && (
          <Button
            href={project.links.github}
            variant="outline"
            size="sm"
            external
          >
            {project.linkLabels?.github ?? "GitHub"}
          </Button>
        )}
        {project.links.details && (
          <Button
            href={project.links.details}
            variant="ghost"
            size="sm"
            external
          >
            {project.linkLabels?.details ?? "Details"}
          </Button>
        )}
      </div>
    </motion.article>
  );
}

export function PersonalProjects() {
  // Split: first 3 featured large, rest smaller
  const featured = personalProjects.slice(0, 3);
  const rest = personalProjects.slice(3);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-stone-950">
      <div className="section-container">
        <SectionHeading
          label="Personal Projects"
          title="Things I've built independently."
          subtitle="Side projects and personal builds that demonstrate how I think about product, architecture, and shipping end-to-end."
        />

        {/* Featured 3 — larger grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {featured.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* Remaining — 2-col grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rest.map((project, i) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={featured.length + i}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
