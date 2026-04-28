import Image from "next/image";
import { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Heart, Star, Users, Home, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "O nama",
  description: "Saznajte više o uzgajivačnici Von Waldlicht — naša priča, naše vrednosti i ljubav prema rasi.",
};

const values = [
  { icon: Heart, title: "Ljubav prema rasi", desc: "Svaki pas u našoj uzgajivačnici je član naše porodice, negovani sa pažnjom i ljubavlju." },
  { icon: Star, title: "Odgovornost", desc: "Biramo roditelje pažljivo — zdravstveni testovi, temperament i poreklo su na prvom mestu." },
  { icon: Users, title: "Socijalizacija", desc: "Štenci odrastaju uz decu, različite zvuke i okruženja — pripremate za pravi život." },
  { icon: Home, title: "Podrška", desc: "Naš odnos sa budućim vlasnicima ne završava se preuzimanjem šteneta — tu smo uvek." },
  { icon: Award, title: "Iskustvo", desc: "Više od 15 godina iskustva u odgovornom uzgoju rasnih pasa sa vrhunskm rodovnicima." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 bg-brown-dark text-cream overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&q=80" alt="O nama" fill className="object-cover opacity-20" />
        </div>
        <div className="relative container-max max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-gold font-sans text-sm font-semibold tracking-widest uppercase mb-3">Naša priča</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
              O uzgajivačnici Von Waldlicht
            </h1>
            <p className="mt-5 text-beige/80 text-lg max-w-xl leading-relaxed">
              Uzgajivačnica nastala iz ljubavi prema rasi. Naš cilj je svako štene koje ode u odgovoran dom.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-cream">
        <div className="container-max max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <AnimatedSection>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden relative aspect-[3/4]">
                <Image src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&q=80" alt="Naši psi" fill className="object-cover" />
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden relative aspect-square">
                  <Image src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&q=80" alt="Naši psi" fill className="object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden relative aspect-square">
                  <Image src="https://images.unsplash.com/photo-1601758177266-bc599de87707?w=600&q=80" alt="Naši psi" fill className="object-cover" />
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <SectionHeading eyebrow="Ko smo mi" title="Priča koja počinje ljubavlju" />
            <div className="mt-6 space-y-4 text-brown/75 leading-relaxed">
              <p>
                Uzgajivačnica Von Waldlicht nastala je pre više od 15 godina iz čiste ljubavi prema rasi.
                Ono što je počelo kao porodična strast, izraslo je u jednu od najcenjenijih uzgajivačnica u regionu.
              </p>
              <p>
                Naš fokus uvek bio na zdravlju, karakteru i socijalizaciji — ne samo na izložbenim uspesima.
                Verujemo da svaki pas treba da bude zdrav, srećan i spreman za život uz svoju porodicu.
              </p>
              <p>
                Svako leglo pažljivo planiramo, birajući roditelje sa dokazanim zdravstvenim profilom i
                stabilnim temperamentom. Štenci odrastaju u porodičnom okruženju, uz nas, deca i drugi psi.
              </p>
              <p>
                Naš cilj nije samo da prodamo štene — već da nađemo pravi dom za svakog malog člana naše porodice.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Button href="/dostupni-stenci">Dostupni štenci</Button>
              <Button href="/kontakt" variant="outline">Kontaktiraj nas</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-beige/30">
        <div className="container-max max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading eyebrow="Naše vrednosti" title="Šta nas čini posebnim" centered />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-beige flex items-center justify-center mb-4">
                    <v.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brown-dark mb-2">{v.title}</h3>
                  <p className="text-brown/65 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Socialization */}
      <section className="section-padding bg-forest text-cream">
        <div className="container-max max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <SectionHeading eyebrow="Socijalizacija" title="Kako odrastaju naši štenci" light />
            <div className="mt-6 space-y-4 text-beige/80 leading-relaxed">
              <p>Rad sa štencima počinje od samog rođenja. Primenjujemo Early Neurological Stimulation (ENS) metodu koja jača nervni sistem i priprema štene za sve izazove.</p>
              <p>Tokom odrastanja štenci su izloženi raznim zvucima, mirisima, površinama i situacijama. Uče da se igraju sa decom, odraslima i drugim psima.</p>
              <p>Posebna pažnja posvećujemo individualizovanom radu sa svakim štencem — prepoznajemo karakterne razlike i usmeravamo razvoj.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden relative aspect-square">
                <Image src="https://images.unsplash.com/photo-1612914039066-9b9a5e6c5a72?w=600&q=80" alt="Socijalizacija" fill className="object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden relative aspect-square mt-8">
                <Image src="https://images.unsplash.com/photo-1596452951503-4db40c436b5b?w=600&q=80" alt="Štenci" fill className="object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden relative aspect-square">
                <Image src="https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?w=600&q=80" alt="Štenci" fill className="object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden relative aspect-square mt-8">
                <Image src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&q=80" alt="Štenci u igri" fill className="object-cover" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gold/10 border-y border-gold/20">
        <div className="container-max max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <SectionHeading eyebrow="Hajde da se upoznamo" title="Spremi za novi član porodice?" centered />
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

