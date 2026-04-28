import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Von Waldlicht | Uzgajivačnica rasnih pasa",
    template: "%s | Von Waldlicht",
  },
  description:
    "Odgovorna uzgajivačnica rasnih pasa. Dostupni štenci, zdravstveno testirani roditelji, rodovnik, dokumentacija i podrška nakon preuzimanja.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream text-brown font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
