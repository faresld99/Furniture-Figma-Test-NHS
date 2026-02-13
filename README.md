# Panto – Furniture Landing Page

Landing page pour une marque de mobilier, développée avec Next.js et alignée sur un design Figma.

## Stack technique

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **Swiper** (carousels)
- **Lucide React** + **react-icons** (icônes)

## Démarrage

```bash
npm install
npm run dev
```

## Structure du projet

```
my-panto-test-app/
├── app/                    # Routing Next.js (page, layout, globals.css)
├── components/             # Composants React
│   ├── home/               # Sections page d'accueil (Hero, Experiences, etc.)
│   ├── shop/               # Produits (Products, ProductCard)
│   └── ui/                 # Composants réutilisables (SectionHeading, MoreInfoLink, CarouselArrow)
├── context/                # Providers React (Thème, etc.)
├── hooks/                  # Hooks personnalisés (useClickOutside)
├── lib/                    # Logique partagée
│   ├── config/             # Configuration (assets, chemins)
│   ├── constants/          # Données par domaine (products, navigation, testimonials, footer)
│   └── types.ts            # Types dérivés des constantes
└── public/
    └── assets/             # Images et assets statiques
```

## Détails d’implémentation

### Organisation des composants

- **PascalCase** pour les fichiers de composants (`Hero.tsx`, `ProductCard.tsx`)
- `components/home/` : sections de la page d’accueil (Hero, ChooseUs, Experiences, Materials, Testimonials, HeroHotspots)
- `components/shop/` : catalogue produits et cartes
- `components/ui/` : composants génériques réutilisables

### Constantes et données

Les données sont centralisées dans `lib/constants/` par domaine :

| Fichier           | Contenu                                      |
|-------------------|-----------------------------------------------|
| `products.ts`     | `CATEGORIES`, `PRODUCTS`                      |
| `choose-us.ts`    | `CHOOSE_US_FEATURES`                          |
| `testimonials.ts` | `REVIEWS`                                     |
| `navigation.ts`   | `NAV_LINKS`                                   |
| `footer.ts`       | `FOOTER_SERVICES`, `FOOTER_ABOUT`             |

Imports via `@/lib/constants` (réexport via `index.ts`).

### Config des assets

Les chemins des images sont centralisés dans `lib/config/assets.ts` :

```ts
import { ASSETS } from "@/lib/config/assets";

// Exemple
<Image src={ASSETS.banner} />
style={{ backgroundImage: `url('${ASSETS.experiences}')` }}
```

### Types

Les types sont dérivés des constantes dans `lib/types.ts` pour garder la cohérence :

```ts
export type Product = (typeof PRODUCTS)[number];
export type Category = (typeof CATEGORIES)[number];
// etc.
```

### Design tokens

Les variables CSS (couleurs, typo, etc.) sont définies dans `app/globals.css` avec des classes utilitaires (`typo-h2`, `text-token`, `bg-token`, `font-gilroy`, etc.).

### Alias d’import

`@/*` pointe vers la racine du projet (`tsconfig.json`) pour les imports courts :

```ts
import { ASSETS } from "@/lib/config/assets";
import { CATEGORIES } from "@/lib/constants";
import { useClickOutside } from "@/hooks/useClickOutside";
```

## Scripts

| Commande     | Description              |
|--------------|--------------------------|
| `npm run dev`  | Démarre le serveur de dev |
| `npm run build`| Build de production       |
| `npm run start`| Lance le build en prod    |
