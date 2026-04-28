"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { puppies } from "@/lib/data/puppies";
import { formatDate } from "@/lib/utils/formatDate";
import { puppyInquiryLink } from "@/lib/utils/whatsapp";
import { Button } from "@/components/ui/Button";
import { SITE_NAME } from "@/lib/site";
import { MessageCircle } from "lucide-react";

type StatusFilter = "all" | "available" | "reserved" | "sold";

const statusMap: Record<string, { label: string; variant: "available" | "reserved" | "sold" }> = {
  available: { label: "Dostupan", variant: "available" },
  reserved: { label: "Rezervisan", variant: "reserved" },
  sold: { label: "Prodat", variant: "sold" },
};

const filterLabels: { key: StatusFilter; label: string }[] = [
  { key: "all", label: "Svi" },
  { key: "available", label: "Dostupni" },
  { key: "reserved", label: "Rezervisani" },
  { key: "sold", label: "Prodati" },
];

export default function PuppiesPage() {
  const [filter, setFilter] = useState<StatusFilter>("all");
  const filtered = filter === "all" ? puppies : puppies.filter(p => p.status === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 bg-brown-dark text-cream overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1612914039066-9b9a5e6c5a72?w=1600&q=80" alt="Štenci" fill className="object-cover opacity-20" />
        </div>
        <div className="relative container-max max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-gold font-sans text-sm font-semibold tracking-widest uppercase mb-3">{SITE_NAME}</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">Dostupni štenci</h1>
            <p className="mt-4 text-beige/80 text-lg max-w-xl mx-auto leading-relaxed">
              Svako štene je posebno. Pronađite pravog prijatelja za svoju porodicu.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-beige px-4 py-4 sticky top-[64px] z-30">
        <div className="max-w-7xl mx-auto flex gap-2 flex-wrap">
          {filterLabels.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                filter === key ? "bg-brown text-cream" : "bg-beige text-brown hover:bg-beige-dark"
              }`}
            >
              {label}
              <span className="ml-2 text-xs opacity-60">
                ({key === "all" ? puppies.length : puppies.filter(p => p.status === key).length})
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-cream">
        <div className="container-max max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-brown/50 text-lg">Trenutno nema štenaca u ovoj kategoriji.</p>
              <Button href="/roditelji-legla" className="mt-6">Planirana legla</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((puppy, i) => {
                const status = statusMap[puppy.status];
                return (
                  <AnimatedSection key={puppy.id} delay={i * 0.07}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={puppy.coverImage}
                          alt={puppy.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge variant={status.variant}>{status.label}</Badge>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-serif text-xl font-bold text-brown-dark">{puppy.name}</h3>
                          <span className="text-xs font-medium bg-beige text-brown px-2 py-1 rounded-full">
                            {puppy.gender === "male" ? "♂ Mužjak" : "♀ Ženka"}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-brown/70 mb-4">
                          <p><span className="font-medium">Rođen:</span> {formatDate(puppy.dateOfBirth)}</p>
                          <p><span className="font-medium">Boja:</span> {puppy.color}</p>
                        </div>
                        <p className="text-sm text-brown/60 italic mb-5 line-clamp-2 leading-relaxed">
                          {puppy.temperament}
                        </p>
                        {puppy.status === "available" ? (
                          <a
                            href={puppyInquiryLink(puppy.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 bg-brown text-cream rounded-full px-4 py-2.5 text-sm font-medium hover:bg-brown-dark transition"
                          >
                            <MessageCircle className="w-4 h-4" />
                            Pošalji upit za ovo štene
                          </a>
                        ) : (
                          <div className="w-full text-center py-2.5 rounded-full bg-beige text-brown/50 text-sm cursor-default">
                            {puppy.status === "reserved" ? "Rezervisano" : "Prodato"}
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Planned litters CTA */}
      <section className="section-padding bg-beige/30">
        <div className="container-max max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Ne možete da nađete pravo štene?"
              title="Prijavite se za planirana legla"
              description="Imamo planirana legla za koje možete da se prijavite na listu čekanja."
              centered
            />
            <div className="mt-8">
              <Button href="/roditelji-legla" size="lg">Pogledaj planirana legla</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

