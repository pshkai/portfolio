"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Theme = "light" | "dark";

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d="M12 4V2M12 22v-2M4 12H2M22 12h-2M5.64 5.64 4.22 4.22M19.78 19.78l-1.42-1.42M18.36 5.64l1.42-1.42M4.22 19.78l1.42-1.42"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d="M20.2 14.2A7.6 7.6 0 0 1 9.8 3.8 8.4 8.4 0 1 0 20.2 14.2Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [isDark, theme]);

  return (
    <motion.button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileTap={{ scale: 0.96 }}
      className="relative inline-flex h-10 w-[72px] items-center rounded-full border border-stone-200 bg-white p-1 text-stone-600 shadow-sm transition-colors duration-300 hover:text-stone-900 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300 dark:hover:text-stone-50"
    >
      <span className="grid h-8 w-8 place-items-center">
        <SunIcon />
      </span>
      <span className="grid h-8 w-8 place-items-center">
        <MoonIcon />
      </span>
      <motion.span
        aria-hidden="true"
        animate={{ x: isDark ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
        className="absolute left-1 top-1 grid h-8 w-8 place-items-center rounded-full bg-stone-900 text-stone-50 shadow-sm dark:bg-stone-50 dark:text-stone-900"
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </motion.span>
    </motion.button>
  );
}
