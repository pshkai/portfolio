"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle: string;
}

export function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-stone-50 pt-36 pb-16 dark:bg-stone-950">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="section-container relative z-10"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-stone-400 dark:text-stone-500">
            {label}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-stone-900 sm:text-5xl dark:text-stone-50">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-stone-500 sm:text-lg dark:text-stone-400">
            {subtitle}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
