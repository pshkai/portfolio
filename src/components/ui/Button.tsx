"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  download?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-stone-900 text-stone-50 hover:bg-stone-800 border border-stone-900 hover:border-stone-800 shadow-sm",
  secondary:
    "bg-white text-stone-900 hover:bg-stone-50 border border-stone-200 hover:border-stone-300 shadow-sm",
  ghost:
    "bg-transparent text-stone-700 hover:bg-stone-100 hover:text-stone-900 border border-transparent",
  outline:
    "bg-transparent text-stone-900 border border-stone-300 hover:border-stone-900 hover:bg-stone-50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-sm gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-7 py-3 text-base gap-2.5",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  onClick,
  className,
  disabled,
  type = "button",
  download,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 ease-out cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const allStyles = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.97 },
    transition: { duration: 0.15, ease: "easeOut" },
  };

  if (href) {
    if (external || download) {
      return (
        <motion.a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download}
          className={allStyles}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link href={href} className={allStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={allStyles}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}