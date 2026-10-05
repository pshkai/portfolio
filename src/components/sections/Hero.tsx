"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/data/contact";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[80svh] flex flex-col items-center justify-center overflow-hidden bg-stone-50 dark:bg-stone-950"
    >
      <div className="section-container relative z-10 flex flex-col items-center text-center pt-24 pb-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6 max-w-3xl"
        >
          {/* Availability badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-white/80 border border-stone-200 text-stone-600 shadow-sm backdrop-blur-sm dark:bg-stone-900/80 dark:border-stone-700 dark:text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Currently at AitsCCTV
            </span>
          </motion.div>

          {/* Name */}
          <motion.p
            variants={item}
            className="text-sm font-medium text-stone-400 tracking-widest uppercase font-sans dark:text-stone-500"
          >
            Software Engineer | Full Stack, AI &amp; Automation
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-900 leading-[1.12] tracking-tight dark:text-stone-50"
          >
            Pyae Sone Htoo <span className="italic text-stone-500 dark:text-stone-400">(Kai)</span>
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg text-stone-500 leading-relaxed font-light max-w-2xl dark:text-stone-400"
          >
            I build full-stack applications and AI automation that connect
            customer service, marketing and internal operations with reliable
            APIs and human review.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-3 mt-2"
          >
            <Button href="/projects" variant="primary" size="lg">
              View Projects
            </Button>
            <Button
              href={contactInfo.resume}
              variant="secondary"
              size="lg"
              download
            >
              Download Resume
            </Button>
            <Button href="#contact" variant="ghost" size="lg">
              Contact Me
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
