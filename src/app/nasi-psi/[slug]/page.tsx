import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { dogs } from "@/lib/data/dogs";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils/formatDate";
import { Award, Calendar, Heart } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return dogs.map(d => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dog = dogs.find(d => d.slug === params.slug);
  if (!dog) return {};
  return { title: dog.name, description: dog.temperament };
}

export default function DogProfilePage({ params }: Props) {
  const dog = dogs.find(d => d.slug === params.slug);
  if (!dog) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-0">
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image src={dog.coverImage} alt={dog.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/70 via-transparent to-brown-dark/20" />
          <div className="absolute bottom-0 left-0 px-6 pb-8 max-w-7xl mx-auto w-full">
            <p className="text-gold font-sans text-sm font-semibold tracking-widest uppercase mb-2">Von Waldlicht</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-cream">{dog.name}</h1>
            <p className="text-beige/80 text-lg mt-1">{dog.gender === "male" ? "Mužjak" : "Ženka"} · {dog.color}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="container-max max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Info sidebar */}
          <AnimatedSection>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-brown-dark mb-4">Osnovne informacije</h3>
                <ul className="space-y-2.5 text-sm text-brown/70">
                  <li className="flex items-center gap-2"><Calendar className="w-4 h-4 text-gold" />Datum rođenja: {formatDate(dog.dateOfBirth)}</li>
                  <li className="flex items-center gap-2"><Heart className="w-4 h-4 text-gold" />Boja: {dog.color}</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-brown-dark mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-gold" /> Zdravstveni testovi
                </h3>
                <ul className="space-y-2">
                  {dog.healthTests.map(t => (
                    <li key={t} className="text-sm text-forest font-medium bg-forest/8 px-3 py-1.5 rounded-lg border border-forest/15">{t}</li>
                  ))}
                </ul>
              </div>

              {dog.titles.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-serif text-lg font-bold text-brown-dark mb-4">Titule i nagrade</h3>
                  <ul className="space-y-2">
                    {dog.titles.map(t => (
                      <li key={t} className="text-sm text-gold-dark font-medium bg-gold/10 px-3 py-1.5 rounded-lg border border-gold/20">{t}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Main content */}
          <div className="md:col-span-2">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
                <h2 className="font-serif text-2xl font-bold text-brown-dark mb-4">O {dog.name}</h2>
                <p className="text-brown/70 leading-relaxed mb-4">{dog.description}</p>
                <div className="border-t border-beige pt-4 mt-4">
                  <h3 className="font-serif text-lg font-bold text-brown-dark mb-2">Temperament</h3>
                  <p className="text-brown/70 italic leading-relaxed">{dog.temperament}</p>
                </div>
              </div>

              {/* Image gallery */}
              {dog.images.length > 1 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {dog.images.map((img, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden relative aspect-square">
                      <Image src={img} alt={`${dog.name} ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8 flex gap-4">
                <Button href="/nasi-psi">← Svi psi</Button>
                <Button href="/kontakt" variant="outline">Kontaktiraj nas</Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

