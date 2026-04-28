"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas/contact";
import { whatsappLink } from "@/lib/utils/whatsapp";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      interest: "",
      hasPreviousDog: "yes",
      livingArrangement: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      setSubmitError(result.error ?? "Došlo je do greške prilikom slanja poruke.");
      return;
    }

    reset();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 bg-brown-dark text-cream overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=1600&q=80" alt="Kontakt" fill className="object-cover opacity-15" />
        </div>
        <div className="relative container-max max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-gold font-sans text-sm font-semibold tracking-widest uppercase mb-3">Von Waldlicht</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">Kontaktirajte nas</h1>
            <p className="mt-4 text-beige/80 text-lg max-w-xl mx-auto leading-relaxed">
              Spremi za novi član porodice? Pišite nam i mi ćemo Vam pomoći da pronađete pravo štene.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="container-max max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Form */}
          <div className="md:col-span-2">
            <AnimatedSection>
              {submitted ? (
                <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
                  <CheckCircle className="w-16 h-16 text-forest mx-auto mb-4" />
                  <h2 className="font-serif text-2xl font-bold text-brown-dark mb-2">Hvala Vam!</h2>
                  <p className="text-brown/70">Primili smo Vašu poruku i javićemo Vam se u najkraćem mogućem roku.</p>
                  <Button href="/" className="mt-6">Nazad na početnu</Button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                  <SectionHeading eyebrow="Upit" title="Pošaljite nam poruku" />
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                    {submitError && (
                      <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {submitError}
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brown mb-1.5">Ime i prezime *</label>
                        <input {...register("fullName")} className="w-full px-4 py-3 rounded-xl border border-beige-dark focus:border-brown focus:outline-none text-sm bg-cream/50" placeholder="Marija Petrović" />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brown mb-1.5">Email *</label>
                        <input {...register("email")} type="email" className="w-full px-4 py-3 rounded-xl border border-beige-dark focus:border-brown focus:outline-none text-sm bg-cream/50" placeholder="marija@example.com" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brown mb-1.5">Telefon *</label>
                        <input {...register("phone")} className="w-full px-4 py-3 rounded-xl border border-beige-dark focus:border-brown focus:outline-none text-sm bg-cream/50" placeholder="+381 60 123 4567" />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brown mb-1.5">Zainteresovani za</label>
                        <input {...register("interest")} className="w-full px-4 py-3 rounded-xl border border-beige-dark focus:border-brown focus:outline-none text-sm bg-cream/50" placeholder="Mužjak 1, Planirana legla..." />
                        {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest.message}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brown mb-1.5">Da li ste ranije imali psa?</label>
                        <select {...register("hasPreviousDog")} className="w-full px-4 py-3 rounded-xl border border-beige-dark focus:border-brown focus:outline-none text-sm bg-cream/50">
                          <option value="yes">Da</option>
                          <option value="no">Ne</option>
                          <option value="currently">Trenutno imam psa</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brown mb-1.5">Gde bi pas živeo? *</label>
                        <input {...register("livingArrangement")} className="w-full px-4 py-3 rounded-xl border border-beige-dark focus:border-brown focus:outline-none text-sm bg-cream/50" placeholder="Kuća sa dvorištem, stan..." />
                        {errors.livingArrangement && <p className="text-red-500 text-xs mt-1">{errors.livingArrangement.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brown mb-1.5">Poruka *</label>
                      <textarea {...register("message")} rows={5} className="w-full px-4 py-3 rounded-xl border border-beige-dark focus:border-brown focus:outline-none text-sm bg-cream/50 resize-none" placeholder="Napišite nam nešto o sebi, Vašoj porodici i zašto želite ovaj pas..." />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brown text-cream rounded-full py-3.5 font-medium hover:bg-brown-dark transition disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Slanje..." : "Pošalji poruku"}
                    </button>
                  </form>
                </div>
              )}
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div>
            <AnimatedSection delay={0.15}>
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={whatsappLink("Zdravo! Zainteresovan/a sam za Vaše štence.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl p-5 hover:bg-[#22c55e] transition shadow-sm"
                >
                  <MessageCircle className="w-8 h-8 shrink-0" />
                  <div>
                    <div className="font-bold text-sm">WhatsApp</div>
                    <div className="text-sm opacity-90">Pišite nam odmah</div>
                  </div>
                </a>

                {/* Contact info */}
                <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                  <h3 className="font-serif text-lg font-bold text-brown-dark">Kontakt podaci</h3>
                  <div className="flex items-center gap-3 text-sm text-brown/70">
                    <Phone className="w-4 h-4 text-gold shrink-0" />
                    <a href="tel:+381601234567" className="hover:text-brown transition">+381 60 123 4567</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-brown/70">
                    <Mail className="w-4 h-4 text-gold shrink-0" />
                    <a href="mailto:info@vonwaldlicht.rs" className="hover:text-brown transition">info@vonwaldlicht.rs</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-brown/70">
                    <MapPin className="w-4 h-4 text-gold shrink-0" />
                    <span>Srbija</span>
                  </div>
                </div>

                {/* Social */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-serif text-lg font-bold text-brown-dark mb-4">Pratite nas</h3>
                  <div className="flex gap-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl py-3 text-sm font-medium hover:opacity-90 transition">
                    Instagram
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-xl py-3 text-sm font-medium hover:bg-blue-700 transition">
                    Facebook
                  </a>
                  </div>
                </div>

                {/* Response time */}
                <div className="bg-beige/50 rounded-2xl p-5 text-sm text-brown/70">
                  <p className="font-medium text-brown mb-1">Vreme odgovora</p>
                  <p>Odgovaramo na sve upite u roku od 24 sata, najčešće mnogo brže.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}




