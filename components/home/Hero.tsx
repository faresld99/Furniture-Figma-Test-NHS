"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import HeroHotspots from "./HeroHotspots";
import Navbar from "@/components/Navbar";
import { ASSETS } from "@/lib/config/assets";

// Barre de recherche avec effet glassmorphism
function HeroSearch() {
  return (
    <div
      className="mt-8 md:mt-12 w-[90%] max-w-[344px] flex flex-row justify-between items-center box-border h-14 px-5 py-2 gap-2.5 rounded-[42px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
      style={{
        background: "rgba(255, 255, 255, 0.15)",
        border: "0.861538px solid rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(4px)",
      }}
    >
      <input
        type="text"
        placeholder="Search furniture"
        className="flex-1 min-w-0 bg-transparent outline-none placeholder:text-white placeholder:opacity-80 text-white text-base sm:text-lg font-gilroy font-normal leading-[150%] text-left"
      />
      <button
        type="button"
        className="flex items-center justify-center flex-none w-10 h-10 p-2.5 rounded-[24px] bg-primary-token transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-95"
        aria-label="Rechercher"
      >
        <Search className="flex-none w-[18px] h-[18px] text-[var(--color-white)]" strokeWidth={2} stroke="var(--color-white)" />
      </button>
    </div>
  );
}

// Section Hero : bannière pleine page, titre, recherche, hotspots interactifs
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden font-gilroy min-h-[500px] sm:min-h-[600px] md:min-h-[800px] lg:min-h-[1084px]">
      {/* Image de fond + gradient pour transition vers le blanc */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ASSETS.banner}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 86.13%, var(--color-white) 100%)",
          }}
        />
      </div>
      <Navbar />

      {/* Contenu central : titre, texte, recherche */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6">
        <h2 className="max-w-[861px] w-full mt-6 sm:mt-8 md:mt-10 font-gilroy font-bold text-[clamp(32px,8vw,80px)] leading-[130%] tracking-[-0.01em] capitalize text-[var(--color-white)]">
          Make your interior more minimalistic & modern
        </h2>

        <p className="max-w-[606px] w-full mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-gilroy font-normal leading-[160%] text-[var(--color-white)] opacity-80">
          Turn your room with panto into a lot more minimalist and modern with ease and speed
        </p>

        <HeroSearch />
      </div>

      {/* Points cliquables sur les meubles (vase, canapé, table...) - cachés sur mobile */}
      <HeroHotspots />
    </section>
  );
}