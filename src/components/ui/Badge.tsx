import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "accent";
}

const variantStyles = {
  default: "bg-stone-100 text-stone-700 border border-stone-200",
  muted: "bg-stone-50 text-stone-500 border border-stone-100",
  accent: "bg-stone-900 text-stone-50 border border-stone-900",
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}