"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function Card({ children, className, hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow:
                "0 12px 48px -6px rgba(0,0,0,0.12), 0 4px 12px -2px rgba(0,0,0,0.06)",
              transition: { duration: 0.25, ease: "easeOut" },
            }
          : undefined
      }
      className={cn("glass-card p-6 transition-shadow duration-200", className)}
    >
      {children}
    </motion.div>
  );
}