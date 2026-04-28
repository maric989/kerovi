"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, PawPrint } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/dostupni-stenci", label: "Štenci" },
  { href: "/roditelji-legla", label: "Legla" },
  { href: "/nasi-psi", label: "Naši psi" },
  { href: "/galerija", label: "Galerija" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-brown flex items-center justify-center group-hover:bg-gold transition-colors">
              <PawPrint className="w-5 h-5 text-cream" />
            </div>
            <span className="font-serif text-xl font-bold text-brown-dark">
              Von Waldlicht
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full font-sans text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-brown text-cream"
                    : "text-brown hover:bg-beige"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl text-brown hover:bg-beige transition"
            onClick={() => setOpen(true)}
            aria-label="Otvori meni"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] flex">
          <div
            className="flex-1 bg-brown-dark/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="w-72 bg-cream h-full flex flex-col p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif text-xl font-bold text-brown-dark">
                Von Waldlicht
              </span>
              <button
                className="p-2 rounded-xl text-brown hover:bg-beige"
                onClick={() => setOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl font-sans font-medium transition-colors",
                    pathname === link.href
                      ? "bg-brown text-cream"
                      : "text-brown hover:bg-beige"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

