# Bella Mia — sajt za uzgajivačnicu pasa

Moderan MVP sajt za uzgajivačnicu pasa napravljen u `Next.js 14`, `TypeScript` i `Tailwind CSS`.

## Šta je urađeno

- Početna stranica sa hero sekcijom, badge-ovima poverenja i CTA blokovima
- Stranica `O nama`
- Stranica `Dostupni štenci` sa filterom po statusu
- Stranica `Roditelji legla` / planirana legla
- Stranica `Naši psi` sa filterom po kategorijama
- Profil stranice za svakog odraslog psa
- Stranica `Galerija` sa filterom i lightbox pregledom
- Stranica `Kontakt` sa validacijom forme i static-host friendly slanjem preko email klijenta

## Tehnologije

- `Next.js 14` (App Router)
- `TypeScript`
- `Tailwind CSS`
- `react-hook-form` + `zod`
- `framer-motion`
- `lucide-react`
- `yet-another-react-lightbox`

## Pokretanje projekta

Instalacija zavisnosti:

```bash
npm install
```

Pokretanje development servera:

```bash
npm run dev
```

Otvori u browseru:

```text
http://localhost:3000
```

## Provera projekta

TypeScript provera:

```bash
npx tsc --noEmit
```

Production build:

```bash
npm run build
```

Pokretanje production servera lokalno:

```bash
npm run start
```

## Struktura sadržaja

Sadržaj sajta se trenutno čuva lokalno u TypeScript fajlovima:

- `src/lib/data/dogs.ts`
- `src/lib/data/puppies.ts`
- `src/lib/data/litters.ts`
- `src/lib/data/gallery.ts`
- `src/lib/data/testimonials.ts`

To znači da lako možeš da menjaš tekstove, slike i statuse bez menjanja same UI logike.

## Kontakt forma

Pošto je projekat podešen za `GitHub Pages`, nema serverski backend.

Kontakt forma:

- validira podatke u browseru
- otvara korisnikov email klijent sa unapred popunjenim sadržajem upita
- ostavlja i WhatsApp kao brzu alternativu

Ako kasnije poželiš, moguće je dodati:

- Formspree / Getform integraciju
- slanje email-a preko zasebnog backend-a
- čuvanje upita u bazi
- admin panel

## GitHub Pages deploy

Projekat je pripremljen za GitHub Pages kao statički eksport.

Urađeno je sledeće:

- `Next.js` je podešen na `output: "export"`
- automatski se koristi repo putanja na GitHub Pages
- dodat je workflow u `.github/workflows/deploy.yml`

### Kako da objaviš sajt

1. Pushuj projekat na GitHub repozitorijum
2. Otvori `Settings > Pages`
3. Kao source ostavi `GitHub Actions`
4. Push na `main` branch će automatski pokrenuti deploy

Za ovaj repo (`https://github.com/maric989/kerovi`), sajt će biti dostupan na adresi:

```text
https://maric989.github.io/kerovi/
```

## Sledeći predlozi

- zamena placeholder Unsplash slika pravim fotografijama pasa
- dodavanje pravog WhatsApp broja u `src/lib/utils/whatsapp.ts`
- povezivanje kontakt forme sa email servisom
- SEO metadata po svakoj stranici i Open Graph slike
- višejezičnost (`sr` / `en`)
- admin panel za upravljanje psima, leglima i upitima
