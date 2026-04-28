# Von Waldlicht — sajt za uzgajivačnicu pasa

Moderan MVP sajt za uzgajivačnicu pasa napravljen u `Next.js 14`, `TypeScript` i `Tailwind CSS`.

## Šta je urađeno

- Početna stranica sa hero sekcijom, badge-ovima poverenja i CTA blokovima
- Stranica `O nama`
- Stranica `Dostupni štenci` sa filterom po statusu
- Stranica `Roditelji legla` / planirana legla
- Stranica `Naši psi` sa filterom po kategorijama
- Profil stranice za svakog odraslog psa
- Stranica `Galerija` sa filterom i lightbox pregledom
- Stranica `Kontakt` sa validacijom forme i API endpoint-om

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

Kontakt forma šalje podatke na:

- `POST /api/contact`

Za MVP, podaci se validiraju i beleže na serveru kroz `console.log`. Sledeći korak može biti:

- slanje email-a
- čuvanje upita u bazi
- povezivanje sa CMS/admin panelom

## Sledeći predlozi

- zamena placeholder Unsplash slika pravim fotografijama pasa
- dodavanje pravog WhatsApp broja u `src/lib/utils/whatsapp.ts`
- povezivanje kontakt forme sa email servisom
- SEO metadata po svakoj stranici i Open Graph slike
- višejezičnost (`sr` / `en`)
- admin panel za upravljanje psima, leglima i upitima
