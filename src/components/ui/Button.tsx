import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-sans font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2";

  const variants = {
    primary: "bg-brown text-cream hover:bg-brown-dark active:scale-95 shadow-md hover:shadow-lg",
    secondary: "bg-gold text-brown-dark hover:bg-gold-dark active:scale-95 shadow-md hover:shadow-lg",
    outline: "border-2 border-brown text-brown hover:bg-brown hover:text-cream active:scale-95",
    ghost: "text-brown hover:bg-beige active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const classes = cn(base, variants[variant], sizes[size], className);
  const isInternalLink = Boolean(href?.startsWith("/"));

  if (href) {
    if (isInternalLink) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

