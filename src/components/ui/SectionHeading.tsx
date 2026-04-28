import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && (
        <p className={cn("font-sans text-sm font-semibold tracking-widest uppercase mb-2", light ? "text-gold-light" : "text-gold")}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn("font-serif text-3xl md:text-4xl font-bold leading-tight", light ? "text-cream" : "text-brown-dark")}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base md:text-lg max-w-2xl leading-relaxed", centered && "mx-auto", light ? "text-beige" : "text-brown/70")}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

