"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { communityExperience } from "@/data/communityExperience";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CommunityExperience() {
  return (
    <section className="bg-stone-50 py-24 dark:bg-stone-900">
      <div className="section-container">
        <SectionHeading
          label="Community, Hackathons & Initiatives"
          title="Founder work, technical community, and leadership in motion."
          subtitle="Selected experiences from startup stages, developer communities, student leadership, and sustainability-focused challenges."
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
          {communityExperience.map((item, index) => (
            <motion.article
              key={`${item.organization}-${item.title}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -3,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
              className="glass-card flex h-full flex-col gap-4 p-5 sm:p-6 lg:col-span-3"
            >
              {item.image && (
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-stone-100 bg-stone-100 dark:border-stone-800 dark:bg-stone-800">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-widest text-stone-400 dark:text-stone-500">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-serif text-xl leading-snug text-stone-900 dark:text-stone-50">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
                    {item.organization}
                  </p>
                </div>
                {item.date && (
                  <p className="shrink-0 text-sm text-stone-400 dark:text-stone-500">
                    {item.date}
                  </p>
                )}
              </div>

              <p className="border-l-2 border-stone-200 pl-4 text-sm font-light italic leading-relaxed text-stone-600 dark:border-stone-700 dark:text-stone-300">
                {item.summary}
              </p>

              <ul className="flex flex-col gap-2.5">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-stone-400 dark:bg-stone-500"
                    />
                    <p className="text-sm font-light leading-relaxed text-stone-600 dark:text-stone-300">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-1.5 border-t border-stone-100 pt-3 dark:border-stone-800">
                {item.badges.map((badge) => (
                  <Badge key={badge} variant="muted">
                    {badge}
                  </Badge>
                ))}
              </div>

              {item.links && item.links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.links.map((link) => (
                    <Button
                      key={link.href}
                      href={link.href}
                      variant="outline"
                      size="sm"
                      external
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
