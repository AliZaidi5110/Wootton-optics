import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "accent" | "gold" | "outline" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg hover:-translate-y-0.5",
  accent: "bg-accent text-white hover:bg-accent-dark shadow-md hover:shadow-lg hover:-translate-y-0.5",
  gold: "bg-gold text-navy hover:brightness-95 shadow-md hover:shadow-lg hover:-translate-y-0.5",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  ghost: "text-primary hover:bg-sky",
  white: "bg-white text-navy hover:bg-sky shadow-md",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm min-h-[40px] rounded-lg",
  md: "px-6 py-3 text-base min-h-[48px] rounded-lg",
  lg: "px-8 py-4 text-lg min-h-[52px] rounded-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-heading font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
