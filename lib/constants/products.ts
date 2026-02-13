import { ASSETS } from "@/lib/config/assets";

export const CATEGORIES = ["Chair", "Beds", "Sofa", "Lamp"] as const;

export const PRODUCTS = [
  { name: "Sakarias Armchair", price: "$ 392", image: ASSETS.products.chair_1 },
  { name: "Baltsar Chair", price: "$ 299", image: ASSETS.products.chair_2 },
  { name: "Anjay Chair", price: "$ 519", image: ASSETS.products.chair_3 },
  { name: "Nyantuy Chair", price: "$ 921", image: ASSETS.products.chair_4 },
] as const;
