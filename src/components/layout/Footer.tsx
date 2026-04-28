import Link from "next/link";
import { PawPrint, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brown-dark text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-brown-dark" />
              </div>
              <span className="font-serif text-xl font-bold">Von Waldlicht</span>
            </div>
            <p className="text-beige/70 text-sm leading-relaxed max-w-xs">
              Odgovorna uzgajivačnica rasnih pasa. Svako štene napušta dom zdravo,
              vakcinisano i socijalizovano.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-gold hover:text-brown-dark transition flex items-center justify-center text-xs font-bold"
              >
                IG
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-gold hover:text-brown-dark transition flex items-center justify-center text-xs font-bold"
              >
                FB
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Navigacija</h4>
            <ul className="space-y-2 text-sm text-beige/70">
              {[
                ["Početna", "/"],
                ["O nama", "/o-nama"],
                ["Dostupni štenci", "/dostupni-stenci"],
                ["Naši psi", "/nasi-psi"],
                ["Galerija", "/galerija"],
                ["Kontakt", "/kontakt"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gold transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-beige/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+381601234567" className="hover:text-gold transition">
                  +381 60 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@vonwaldlicht.rs" className="hover:text-gold transition">
                  info@vonwaldlicht.rs
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 bg-cream/5 rounded-xl text-xs text-beige/50">
              <p>FCI registrovana uzgajivačnica</p>
              <p>Srbija</p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-10 pt-6 text-center text-xs text-beige/40">
          © {new Date().getFullYear()} Von Waldlicht. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}




