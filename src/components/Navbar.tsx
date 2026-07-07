"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/data/contact";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3 bg-white/80 backdrop-blur-xl border-b border-stone-200/60 shadow-sm dark:bg-stone-950/80 dark:border-stone-800/80"
            : "py-5 bg-transparent"
        )}
      >
        <div className="section-container flex items-center justify-between">
          <a
            href="#"
            className="font-serif text-xl text-stone-900 tracking-tight hover:text-stone-600 transition-colors dark:text-stone-50 dark:hover:text-stone-300"
          >
            Kai<span className="text-stone-400 dark:text-stone-500">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-all duration-150 font-medium dark:text-stone-300 dark:hover:text-stone-50 dark:hover:bg-stone-800"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={contactInfo.resume}
              download
              className="px-4 py-2 text-sm font-medium text-stone-900 border border-stone-200 rounded-full hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900 transition-all duration-200 dark:text-stone-100 dark:border-stone-700 dark:hover:bg-stone-100 dark:hover:text-stone-950 dark:hover:border-stone-100"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-stone-100 transition-colors dark:hover:bg-stone-800"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-0.5 bg-stone-900 rounded-full origin-center dark:bg-stone-100"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-5 h-0.5 bg-stone-900 rounded-full dark:bg-stone-100"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-0.5 bg-stone-900 rounded-full origin-center dark:bg-stone-100"
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed top-[64px] left-4 right-4 z-40 glass-card p-4 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-all duration-150 dark:text-stone-300 dark:hover:text-stone-50 dark:hover:bg-stone-800"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-stone-100 mt-2 pt-3 dark:border-stone-800">
                <div className="mb-3 flex justify-center">
                  <ThemeToggle />
                </div>
                <a
                  href={contactInfo.resume}
                  download
                  className="block w-full text-center px-4 py-2.5 text-sm font-medium bg-stone-900 text-stone-50 rounded-full hover:bg-stone-800 transition-colors dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-200"
                >
                  Download Resume
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
