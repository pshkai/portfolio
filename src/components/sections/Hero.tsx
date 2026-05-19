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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-mesh-gradient"
    >
      {/* Subtle background orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-stone-200/40 blur-3xl" />
        <div className="absolute -bottom-48 -right-24 w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-amber-50/30 blur-3xl" />
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center pt-28 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6 max-w-3xl"
        >
          {/* Availability badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-white/80 border border-stone-200 text-stone-600 shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to Internships &amp; Junior Roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.p
            variants={item}
            className="text-sm font-medium text-stone-400 tracking-widest uppercase font-sans"
          >
            Pyae Sone Htoo — Kai
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-900 leading-[1.12] tracking-tight"
          >
            Backend developer focused on{" "}
            <span className="italic text-stone-500">scalable APIs,</span>{" "}
            clean service architecture,{" "}
            <span className="italic text-stone-500">
              and product&#8209;minded engineering.
            </span>
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg text-stone-500 leading-relaxed font-light max-w-2xl"
          >
            I build practical backend systems — REST APIs, authentication flows,
            payment and order logic, and product-focused applications that work
            cleanly end to end.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-3 mt-2"
          >
            <Button href="#projects" variant="primary" size="lg">
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

          {/* Soft divider / scroll cue */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-col items-center gap-2 text-stone-400"
          >
            <span className="text-xs tracking-widest uppercase font-medium">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-stone-300 to-transparent rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}