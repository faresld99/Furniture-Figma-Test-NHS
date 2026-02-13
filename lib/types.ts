import type { PRODUCTS, CATEGORIES, CHOOSE_US_FEATURES, REVIEWS } from "./constants";

// Types dérivés des constantes pour garder la cohérence
export type Product = (typeof PRODUCTS)[number];
export type Category = (typeof CATEGORIES)[number];

export type ChooseUsFeature = (typeof CHOOSE_US_FEATURES)[number];

export type Review = (typeof REVIEWS)[number];
