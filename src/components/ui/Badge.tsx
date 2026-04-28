import { cn } from "@/lib/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "available" | "reserved" | "sold" | "gold";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-beige text-brown",
    available: "bg-forest/10 text-forest border border-forest/30",
    reserved: "bg-gold/10 text-gold-dark border border-gold/30",
    sold: "bg-gray-100 text-gray-500 border border-gray-200",
    gold: "bg-gold text-brown-dark",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

