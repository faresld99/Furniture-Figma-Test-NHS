"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import HeroHotspots from "./HeroHotspots";
import { NAV_LINKS } from "@/lib/constants";
import { ASSETS } from "@/lib/config/assets";

// Header avec nav + panier + menu hamburger (mobile)
function HeroHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Contenu du menu réutilisé pour desktop et mobile
  const NavContent = () => (
    <>
      <div className="flex items-center gap-2 cursor-pointer">
        <span className="font-gilroy font-medium text-[18px] leading-[21px] text-[var(--color-white)]">{NAV_LINKS[0]}</span>
        <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none" style={{ transform: "matrix(0, -1, -1, 0, 0, 0)" }}>
          <path d="M10.5 14L5.5 9l5-5" stroke="var(--color-white)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {NAV_LINKS.slice(1).map((label) => (
        <span key={label} className="cursor-pointer font-gilroy font-medium text-[18px] leading-[21px] text-[var(--color-white)]">
          {label}
        </span>
      ))}
    </>
  );

  return (
    <header className="relative z-20 flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-4 md:py-10 gap-4 w-full">
      <h1 className="shrink-0 font-gilroy font-bold text-[clamp(22px,5vw,28px)] leading-[33px] tracking-[0.01em] capitalize text-[var(--color-white)]">
        Panto
      </h1>

      {/* Nav desktop : cachée sur mobile */}
      <nav className="hidden sm:flex items-center gap-4 md:gap-8 lg:gap-12 flex-wrap justify-center">
        <NavContent />
      </nav>

      {/* Bouton hamburger pour ouvrir/fermer le menu sur mobile */}
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden p-2 text-[var(--color-white)]"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu mobile déroulant quand on clique sur hamburger */}
      {menuOpen && (
        <nav className="sm:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-lg bg-black/80 backdrop-blur-sm flex flex-col items-center gap-4 py-6" onClick={() => setMenuOpen(false)}>
          <NavContent />
        </nav>
      )}

      <div className="relative shrink-0">
        <ShoppingBag className="w-[34px] h-[34px] text-[var(--color-white)]" strokeWidth={1.5} fill="none" />
        <div className="absolute -top-2 -right-2 flex items-center justify-center rounded-full bg-primary-alt" style={{ width: 20, height: 25.24 }}>
          <span className="typo-small text-[var(--color-white)]">0</span>
        </div>
      </div>
    </header>
  );
}

// Barre de recherche avec effet glassmorphism
function HeroSearch() {
  return (
    <div
      className="mt-8 md:mt-12 w-[90%] max-w-[344px] flex flex-row justify-between items-center box-border h-14 px-5 py-2 gap-2.5 rounded-[42px]"
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
        className="flex items-center justify-center flex-none w-10 h-10 p-2.5 rounded-[24px] bg-primary-token"
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
      <HeroHeader />

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
