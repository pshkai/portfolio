"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  const alignStyles = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex flex-col gap-3 mb-12", alignStyles, className)}
    >
      {label && (
        <span className="text-xs font-medium tracking-widest uppercase text-stone-400 font-sans dark:text-stone-500">
          {label}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 leading-tight dark:text-stone-50">
        {title}
      </h2>
      {subtitle && (
        <p className="text-stone-500 text-base sm:text-lg max-w-xl leading-relaxed font-sans font-light dark:text-stone-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
