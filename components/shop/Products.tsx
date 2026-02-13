"use client";

import { useRef, useState } from "react";
import { MoveRight } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/constants";
import type { Category } from "@/lib/types";
import ProductCard from "./ProductCard";
import CarouselArrow from "../ui/CarouselArrow";

// Nombre de px à scroller à chaque clic sur les flèches
const SCROLL_AMOUNT = 280;

// Section produits : filtres par catégorie + carousel horizontal
export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>("Chair");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll horizontal fluide vers gauche ou droite
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[906px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-[80px] py-10 md:py-16 lg:py-[88px] font-gilroy bg-token">
      <div className="mx-auto w-full max-w-[1280px]">
        <h2 className="text-center font-gilroy font-bold text-[28px] sm:text-[36px] md:text-[42px] md:leading-[49px] text-token mb-6 md:mb-8">
          Best Selling Product
        </h2>

        {/* Filtres par catégorie (Chair, Beds, etc.) */}
        <div className="mb-8 md:mb-10 flex justify-center p-1.5 rounded-[44px] w-fit max-w-full mx-auto overflow-x-auto scrollbar-hide" style={{ background: "var(--color-filter-bg)" }}>
          <div className="flex flex-row items-center gap-2 sm:gap-2.5 flex-nowrap relative">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer flex flex-none flex-row items-center justify-center transition-all duration-300 ease-out px-1 w-[84px] h-[45px] rounded-[32px] typo-body text-token opacity-80 relative z-10 ${
                  activeCategory === cat ? "font-medium text-token" : "font-normal"
                }`}
              >
                {cat}
              </button>
            ))}
            {/* Background blanc qui suit la catégorie active */}
            <div
              className="absolute bg-white rounded-[32px] transition-all duration-300 ease-out"
              style={{
                width: "84px",
                height: "45px",
                transform: `translateX(${CATEGORIES.indexOf(activeCategory) * (84 + 10)}px)`,
              }}
            />
          </div>
        </div>

        {/* Zone scrollable avec flèches de navigation */}
        <div className="relative flex items-center gap-2 md:gap-4">
          <CarouselArrow
            direction="left"
            onClick={() => scroll("left")}
            ariaLabel="Précédent"
            className="hidden sm:flex left-2 lg:left-[31px] top-1/2 -translate-y-1/2 cursor-pointer"
            style={{}}
          />

          <div
            ref={scrollRef}
            className="best-selling-scroll flex gap-4 md:gap-6 overflow-x-auto px-4 sm:px-8 md:px-14 scroll-smooth pt-12 md:pt-16 pb-4 scrollbar-hide mt-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {PRODUCTS.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>

          <CarouselArrow
            direction="right"
            onClick={() => scroll("right")}
            ariaLabel="Suivant"
            className="hidden sm:flex right-2 lg:right-[56px] top-1/2 -translate-y-1/2 cursor-pointer"
            style={{}}
          />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 transition hover:opacity-90 font-gilroy font-medium text-[18px] leading-[33px] text-primary-token"
          >
            View All
            <MoveRight className="flex-shrink-0" size={24} stroke="var(--color-primary)" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}