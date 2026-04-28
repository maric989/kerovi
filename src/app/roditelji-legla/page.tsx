import Image from "next/image";
import { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { litters } from "@/lib/data/litters";
import { dogs } from "@/lib/data/dogs";
import { formatDate } from "@/lib/utils/formatDate";
import { waitlistLink } from "@/lib/utils/whatsapp";
import { Calendar, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Roditelji legla",
  description: "Prikaz aktivnih i planiranih legla uzgajivačnice Von Waldlicht. Prijavite se za listu čekanja.",
};

export default function LittersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 bg-brown-dark text-cream overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=1600&q=80" alt="Legla" fill className="object-cover opacity-15" />
        </div>
        <div className="relative container-max max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-gold font-sans text-sm font-semibold tracking-widest uppercase mb-3">Von Waldlicht</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">Roditelji legla</h1>
            <p className="mt-4 text-beige/80 text-lg max-w-xl mx-auto leading-relaxed">
              Upoznajte roditlje naših štenaca i saznajte više o planiranim i aktuelnim leglima.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Litters */}
      <section className="section-padding bg-cream">
        <div className="container-max max-w-7xl mx-auto space-y-12">
          {litters.map((litter, i) => {
            const mother = dogs.find(d => d.id === litter.motherId);
            const father = dogs.find(d => d.id === litter.fatherId);

            return (
              <AnimatedSection key={litter.id} delay={i * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className="p-6 md:p-8 border-b border-beige/50 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h2 className="font-serif text-2xl font-bold text-brown-dark">
                          {mother?.name} × {father?.name}
                        </h2>
                        <Badge variant={litter.status === "born" ? "available" : litter.status === "planned" ? "reserved" : "sold"}>
                          {litter.status === "born" ? "Trenutno leglo" : litter.status === "planned" ? "Planirano" : "Završeno"}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-brown/60">
                        {litter.birthDate && (
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-gold" />
                            Datum rođenja: {formatDate(litter.birthDate)}
                          </span>
                        )}
                        {litter.expectedPickupDate && (
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-gold" />
                            Preuzimanje od: {formatDate(litter.expectedPickupDate)}
                          </span>
                        )}
                      </div>
                    </div>
                    {litter.waitlistOpen && (
                      <a
                        href={waitlistLink(`${mother?.name} × ${father?.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-brown text-cream rounded-full px-5 py-2.5 text-sm font-medium hover:bg-brown-dark transition"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Lista čekanja
                      </a>
                    )}
                  </div>

                  {/* Parents */}
                  <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-beige/50">
                    {[mother, father].map((dog, idx) => dog && (
                      <div key={dog.id} className="p-6 md:p-8 flex gap-5">
                        <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                          <Image src={dog.coverImage} alt={dog.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-serif text-xl font-bold text-brown-dark">{dog.name}</h3>
                            <span className="text-xs bg-beige text-brown px-2 py-0.5 rounded-full">
                              {idx === 0 ? "Majka" : "Otac"}
                            </span>
                          </div>
                          <p className="text-sm text-brown/60 mb-2">{dog.color}</p>
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {dog.healthTests.map(t => (
                              <span key={t} className="text-xs bg-forest/10 text-forest border border-forest/20 px-2 py-0.5 rounded-full">{t}</span>
                            ))}
                          </div>
                          {dog.titles.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {dog.titles.map(t => (
                                <span key={t} className="text-xs bg-gold/10 text-gold-dark border border-gold/20 px-2 py-0.5 rounded-full">{t}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="p-6 md:p-8 bg-cream/40">
                    {litter.description && (
                      <p className="text-brown/70 leading-relaxed mb-4">{litter.description}</p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-medium text-brown/60 mr-2">Očekivane boje:</span>
                      {litter.expectedColors.map(c => (
                        <Badge key={c} variant="gold">{c}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Available puppies CTA */}
      <section className="section-padding bg-beige/30">
        <div className="container-max max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Aktuelno leglo"
              title="Pogledajte dostupne štence"
              description="Iz ovog legla su dostupni štenci koje možete odmah rezervisati."
              centered
            />
            <div className="mt-8">
              <Button href="/dostupni-stenci" size="lg">Dostupni štenci</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

