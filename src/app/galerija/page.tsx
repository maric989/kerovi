"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { galleryImages } from "@/lib/data/gallery";
import { GalleryCategory } from "@/lib/types";

const categoryLabels: { key: GalleryCategory | "all"; label: string }[] = [
  { key: "all", label: "Sve" },
  { key: "puppies", label: "Štenci" },
  { key: "adult-dogs", label: "Odrasli psi" },
  { key: "shows", label: "Izložbe" },
  { key: "new-homes", label: "Novi domovi" },
  { key: "everyday", label: "Svakodnevni život" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = filter === "all" ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 bg-brown-dark text-cream overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=1600&q=80" alt="Galerija" fill className="object-cover opacity-15" />
        </div>
        <div className="relative container-max max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-gold font-sans text-sm font-semibold tracking-widest uppercase mb-3">Von Waldlicht</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">Galerija</h1>
            <p className="mt-4 text-beige/80 text-lg max-w-xl mx-auto">Pogledajte naše pse, štence, izložbe i srećne porodice.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-beige px-4 py-4 sticky top-[64px] z-30">
        <div className="max-w-7xl mx-auto flex gap-2 flex-wrap">
          {categoryLabels.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                filter === key ? "bg-brown text-cream" : "bg-beige text-brown hover:bg-beige-dark"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-cream">
        <div className="container-max max-w-7xl mx-auto">
          <div className="columns-2 sm:columns-3 md:columns-4 gap-3 space-y-3">
            {filtered.map((img, i) => (
              <AnimatedSection key={img.id} delay={i * 0.03}>
                <div
                  className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group relative"
                  onClick={() => setLightboxIndex(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/20 transition-colors duration-300 rounded-2xl" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={filtered.map(img => ({ src: img.src, alt: img.alt }))}
      />
    </>
  );
}


