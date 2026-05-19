"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/data/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-stone-200 bg-stone-50"
    >
      <div className="section-container py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-serif text-lg text-stone-900">
              Kai<span className="text-stone-400">.</span>
            </p>
            <p className="text-xs text-stone-400 mt-0.5 font-light">
              Backend developer · Open to opportunities
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a href={"mailto:" + contactInfo.email} className="text-xs text-stone-500 hover:text-stone-900 transition-colors">
              Email
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-stone-500 hover:text-stone-900 transition-colors">
              LinkedIn
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-xs text-stone-500 hover:text-stone-900 transition-colors">
              GitHub
            </a>
          </div>
          <p className="text-xs text-stone-400">
            Copyright {year} Pyae Sone Htoo
          </p>
        </div>
      </div>
    </motion.footer>
  );
}