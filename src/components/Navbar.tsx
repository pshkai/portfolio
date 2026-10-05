"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/data/contact";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavigationLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navLinks: NavigationLink[] = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/projects", children: [
    { label: "Personal Projects", href: "/projects/#projects" },
    { label: "Work Projects", href: "/experience/#experience" },
  ] },
  { label: "Experience", href: "/experience", children: [
    { label: "Professional Experience", href: "/experience/#broader-experience" },
    { label: "Volunteering & Community", href: "/experience/#community-experience" },
    { label: "Education", href: "/experience/#education" },
  ] },
  { label: "Contact", href: "/#contact" },
];

function NavigationItem({ link, active, mobile = false, onNavigate }: {
  link: NavigationLink;
  active: boolean;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const submenuId = useId();

  useEffect(() => {
    if (!open) return;
    const dismissOutside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const dismissEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("pointerdown", dismissOutside);
    document.addEventListener("keydown", dismissEscape);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      document.removeEventListener("keydown", dismissEscape);
    };
  }, [open]);

  const navigate = () => {
    setOpen(false);
    onNavigate?.();
  };

  return (
    <div ref={root} className="relative" onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
    }}>
      <div className={cn("flex items-center rounded-lg", active && "bg-stone-100 dark:bg-stone-800")}>
        <Link href={link.href} onClick={navigate} className={cn(
          "text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors dark:text-stone-300 dark:hover:text-stone-50 dark:hover:bg-stone-800",
          mobile ? "flex-1 px-4 py-3" : "px-3 py-2",
          active && "text-stone-900 dark:text-stone-50"
        )}>{link.label}</Link>
        {link.children && (
          <button ref={toggle} type="button" aria-label={`Toggle ${link.label} submenu`} title={`${link.label} sections`} aria-expanded={open} aria-controls={submenuId}
            onClick={() => setOpen(value => !value)}
            className={cn("flex shrink-0 items-center justify-center rounded-lg text-stone-500 hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-stone-500 dark:text-stone-300 dark:hover:bg-stone-800", mobile ? "h-11 w-11" : "h-9 w-7")}>
            <span aria-hidden className={cn("h-1.5 w-1.5 border-b border-r border-current transition-transform", open ? "rotate-[225deg]" : "rotate-45")} />
          </button>
        )}
      </div>
      {link.children && open && (
        <div id={submenuId} className={cn(
          "flex flex-col gap-1 rounded-lg border border-stone-200 bg-white p-2 dark:border-stone-700 dark:bg-stone-950",
          mobile ? "ml-4 mt-1" : "absolute left-0 top-full mt-2 w-64 shadow-lg"
        )}>
          {link.children.map(child => (
            <Link key={child.href} href={child.href} onClick={navigate}
              className="rounded-md px-3 py-2.5 text-sm text-stone-600 hover:bg-stone-100 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-stone-500 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-50">
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => href !== "/" && pathname === href;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
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
        <div className="section-container relative flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl text-stone-900 tracking-tight hover:text-stone-600 transition-colors dark:text-stone-50 dark:hover:text-stone-300"
          >
            Kai<span className="text-stone-400 dark:text-stone-500">.</span>
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavigationItem key={link.href} link={link} active={isActive(link.href)} />
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
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
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-stone-100 transition-colors dark:hover:bg-stone-800"
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
            className="fixed top-[72px] left-4 right-4 z-40 glass-card max-h-[calc(100dvh-88px)] overflow-y-auto p-4 lg:hidden"
          >
            <nav id="mobile-navigation" className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavigationItem key={link.href} link={link} active={isActive(link.href)} mobile onNavigate={() => setMobileOpen(false)} />
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
