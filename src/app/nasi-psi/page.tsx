"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { dogs } from "@/lib/data/dogs";
import { formatDate } from "@/lib/utils/formatDate";
import { DogCategory } from "@/lib/types";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const categoryLabels: { key: DogCategory | "all"; label: string }[] = [
  { key: "all", label: "Svi psi" },
  { key: "stud", label: "Mužjaci" },
  { key: "female", label: "Ženke" },
  { key: "champion", label: "Šampioni" },
  { key: "retired", label: "U penziji" },
];

export default function OurDogsPage() {
  const [filter, setFilter] = useState<DogCategory | "all">("all");
  const filtered = filter === "all" ? dogs : dogs.filter(d => d.category.includes(filter));

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 bg-brown-dark text-cream overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=1600&q=80" alt="Naši psi" fill className="object-cover opacity-20" />
        </div>
        <div className="relative container-max max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-gold font-sans text-sm font-semibold tracking-widest uppercase mb-3">{SITE_NAME}</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">Naši psi</h1>
            <p className="mt-4 text-beige/80 text-lg max-w-xl mx-auto leading-relaxed">
              Upoznajte odrasle pse koji su temelj naše uzgajivačnice.
            </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dog, i) => (
              <AnimatedSection key={dog.id} delay={i * 0.07}>
                <Link href={`/nasi-psi/${dog.slug}`} className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={dog.coverImage}
                      alt={dog.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brown-dark/70 to-transparent p-4">
                      <h3 className="font-serif text-xl font-bold text-cream">{dog.name}</h3>
                      <p className="text-beige/80 text-sm">{dog.gender === "male" ? "Mužjak" : "Ženka"} · {dog.color}</p>
                    </div>
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {dog.category.map(c => (
                        <span key={c} className="text-xs bg-brown/80 backdrop-blur-sm text-cream px-2.5 py-1 rounded-full capitalize">
                          {c === "stud" ? "Mužjak" : c === "female" ? "Ženka" : c === "champion" ? "Šampion" : "Penzija"}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-brown/50 mb-2">Rođen: {formatDate(dog.dateOfBirth)}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {dog.healthTests.slice(0, 3).map(t => (
                        <span key={t} className="text-xs bg-forest/10 text-forest border border-forest/20 px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                    <p className="text-sm text-brown/65 line-clamp-2 italic">{dog.temperament}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


