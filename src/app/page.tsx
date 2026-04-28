import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { puppies } from "@/lib/data/puppies";
import { testimonials } from "@/lib/data/testimonials";
import { formatDate } from "@/lib/utils/formatDate";
import { puppyInquiryLink } from "@/lib/utils/whatsapp";
import { SITE_NAME } from "@/lib/site";
import {
  Award, Heart, FileCheck, Phone, Star, Shield, Syringe, MapPin, ChevronRight,
} from "lucide-react";

const trustBadges = [
  { icon: Award, label: "FCI registrovana uzgajivačnica" },
  { icon: Shield, label: "Zdravstveno testirani roditelji" },
  { icon: FileCheck, label: "Rodovnik i dokumentacija" },
  { icon: Heart, label: "Podrška nakon preuzimanja" },
];

const steps = [
  { step: 1, title: "Pošaljete upit", desc: "Kontaktirajte nas preko forme ili WhatsApp-a" },
  { step: 2, title: "Razgovaramo", desc: "Upoznajemo Vaše iskustvo i uslove" },
  { step: 3, title: "Biramo štene", desc: "Pronalazimo pravo štene za Vašu porodicu" },
  { step: 4, title: "Rezervacija", desc: "Potvrđujete rezervaciju šteneta" },
  { step: 5, title: "Pratite razvoj", desc: "Redovne slike i informacije" },
  { step: 6, title: "Preuzimanje", desc: "Preuzimate sa kompletnom dokumentacijom" },
  { step: 7, title: "Podrška", desc: "Uvek dostupni i nakon preuzimanja" },
];

const healthItems = [
  { icon: Syringe, label: "Veterinarski pregled" },
  { icon: Shield, label: "Vakcinacija" },
  { icon: Heart, label: "Čišćenje od parazita" },
  { icon: MapPin, label: "Čipovanje" },
  { icon: FileCheck, label: "Pasoš i rodovnik" },
  { icon: Award, label: "Ugovor o kupovini" },
  { icon: Phone, label: "Saveti i podrška uzgajivača" },
];

const statusMap: Record<string, { label: string; variant: "available" | "reserved" | "sold" }> = {
  available: { label: "Dostupan", variant: "available" },
  reserved: { label: "Rezervisan", variant: "reserved" },
  sold: { label: "Prodat", variant: "sold" },
};

export default function HomePage() {
  const featuredPuppies = puppies.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600&q=80" alt="Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-dark/80 via-brown-dark/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
          <AnimatedSection>
            <p className="text-gold-light font-sans text-sm font-semibold tracking-widest uppercase mb-4">FCI registrovana uzgajivačnica</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream leading-tight max-w-2xl">{SITE_NAME}</h1>
            <p className="mt-5 text-beige text-lg md:text-xl max-w-xl leading-relaxed">
              Uzgoj Srednjeazijskog ovčara sa pažnjom na zdravlje, moć i stabilni temperament. Psi za prave domove.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/dostupni-stenci" size="lg">Dostupni štenci</Button>
              <Button href="/kontakt" variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-brown">Kontaktiraj nas</Button>
              <Button href="/o-nama" variant="ghost" size="lg" className="text-beige hover:bg-cream/10">Saznaj više <ChevronRight className="w-4 h-4" /></Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-white py-10 px-4 shadow-sm">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-beige group-hover:bg-gold/20 transition-colors flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <span className="font-sans text-sm font-medium text-brown leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PUPPIES */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <AnimatedSection>
            <SectionHeading eyebrow="Dostupni štenci" title="Pronađite svog novog prijatelja" description="Svako štene je pažljivo odgajano uz ljubav, socijalizaciju i zdravstvene testove." centered />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPuppies.map((puppy, i) => {
              const status = statusMap[puppy.status];
              return (
                <AnimatedSection key={puppy.id} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={puppy.coverImage} alt={puppy.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3"><Badge variant={status.variant}>{status.label}</Badge></div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-serif text-lg font-bold text-brown-dark">{puppy.name}</h3>
                        <span className="text-xs text-brown/60 font-sans">{puppy.gender === "male" ? "Mužjak" : "Ženka"}</span>
                      </div>
                      <div className="space-y-1 text-sm text-brown/70 mb-4">
                        <p>Rođen: {formatDate(puppy.dateOfBirth)}</p>
                        <p>Boja: {puppy.color}</p>
                      </div>
                      <p className="text-sm text-brown/60 italic mb-4 line-clamp-2">{puppy.temperament}</p>
                      {puppy.status === "available" ? (
                        <a href={puppyInquiryLink(puppy.name)} target="_blank" rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-brown text-cream rounded-full px-4 py-2.5 text-sm font-medium hover:bg-brown-dark transition">
                          Pošalji upit
                        </a>
                      ) : (
                        <Link href="/dostupni-stenci" className="w-full inline-flex items-center justify-center gap-2 bg-beige text-brown rounded-full px-4 py-2.5 text-sm font-medium hover:bg-beige-dark transition">
                          Pogledaj sve štence
                        </Link>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button href="/dostupni-stenci" variant="outline" size="lg">Pogledaj sve štence</Button>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-padding bg-beige/30">
        <div className="container-max grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden relative aspect-[4/5]">
                <Image src="https://images.unsplash.com/photo-1601758177266-bc599de87707?w=800&q=80" alt="O nama" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brown text-cream rounded-2xl p-5 shadow-xl max-w-[180px]">
                <div className="text-3xl font-serif font-bold text-gold">15+</div>
                <div className="text-sm text-beige/80 mt-1">godina iskustva u uzgoju</div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <SectionHeading eyebrow="O nama" title="Ljubav prema rasi je naša osnova" description="Naša uzgajivačnica nastala je iz duboke ljubavi prema rasi. Svako leglo pažljivo planiramo, uz poseban fokus na zdravlje, karakter i socijalizaciju štenaca." />
            <ul className="mt-6 space-y-3">
              {["Svaki roditelj prolazi rigorozne zdravstvene testove","Štenci rastu uz decu, zvuke i različite podsticaje","Podrška novim vlasnicima 24/7","Transparentni proces — slike i video tokom odrastanja"].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-brown/80">
                  <Star className="w-4 h-4 text-gold shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
            <div className="mt-8"><Button href="/o-nama">Saznaj više o nama</Button></div>
          </AnimatedSection>
        </div>
      </section>

      {/* RESERVATION TIMELINE */}
      <section className="section-padding bg-forest text-cream">
        <div className="container-max">
          <AnimatedSection>
            <SectionHeading eyebrow="Proces rezervacije" title="Kako doći do svog šteneta?" centered light />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.07}>
                <div>
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-serif font-bold text-brown-dark mb-4">{s.step}</div>
                  <h3 className="font-serif font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-beige/70 text-sm">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH & DOCS */}
      <section className="section-padding bg-cream">
        <div className="container-max grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.1}>
            <SectionHeading eyebrow="Zdravlje i dokumentacija" title="Svako štene ide kući potpuno opremljeno" />
            <p className="mt-4 text-brown/70 leading-relaxed">Svako štene napušta našu uzgajivačnicu veterinarski pregledano, vakcinisano, očišćeno od parazita i spremno za novi dom.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {healthItems.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm text-brown/80">
                  <div className="w-7 h-7 rounded-full bg-beige flex items-center justify-center shrink-0"><Icon className="w-3.5 h-3.5 text-gold" /></div>
                  {label}
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden relative aspect-square">
              <Image src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=800&q=80" alt="Zdravo štene" fill className="object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-brown-dark text-cream">
        <div className="container-max">
          <AnimatedSection>
            <SectionHeading eyebrow="Utisci vlasnika" title="Šta kažu naši kupci" centered light />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.08}>
                <div className="bg-cream/5 hover:bg-cream/10 transition rounded-2xl p-6 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">{Array.from({length:5}).map((_,j)=><Star key={j} className="w-4 h-4 fill-gold text-gold" />)}</div>
                  <p className="text-beige/80 text-sm leading-relaxed flex-1 italic">&ldquo;{t.comment}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3">
                    {t.image && <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0"><Image src={t.image} alt={t.dogName} fill className="object-cover" /></div>}
                    <div>
                      <p className="font-semibold text-sm">{t.ownerName}</p>
                      <p className="text-xs text-beige/50">{t.dogName} · {t.city}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gold/10 border-y border-gold/20">
        <div className="container-max text-center">
          <AnimatedSection>
            <SectionHeading eyebrow="Zainteresovani?" title="Pronađite svog novog prijatelja danas" description="Slobodno nas kontaktirajte sa svim pitanjima. Tu smo za vas." centered />
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button href="/dostupni-stenci" size="lg">Pogledaj štence</Button>
              <Button href="/kontakt" variant="outline" size="lg">Kontaktiraj nas</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
