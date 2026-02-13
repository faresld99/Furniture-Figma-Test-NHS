"use client";

import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

// Barre de navigation : logo, liens, panier et menu hamburger (mobile)
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Contenu du menu réutilisé pour desktop et mobile
  const NavContent = () => (
    <>
      <div className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105">
        <span className="font-gilroy font-medium text-[18px] leading-[21px] text-[var(--color-white)] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-white)] after:transition-all after:duration-300 group-hover:after:w-full">
          {NAV_LINKS[0]}
        </span>
        <svg
          className="w-[18px] h-[18px]"
          viewBox="0 0 18 18"
          fill="none"
          style={{ transform: "matrix(0, -1, -1, 0, 0, 0)" }}
        >
          <path
            d="M10.5 14L5.5 9l5-5"
            stroke="var(--color-white)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {NAV_LINKS.slice(1).map((label) => (
        <span
          key={label}
          className="cursor-pointer font-gilroy font-medium text-[18px] leading-[21px] text-[var(--color-white)] relative transition-all duration-300 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-white)] after:transition-all after:duration-300 hover:after:w-full"
        >
          {label}
        </span>
      ))}
    </>
  );

  return (
    <header className="relative z-20 flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-4 md:py-10 gap-4 w-full">
      <h1 className="shrink-0 font-gilroy font-bold text-[clamp(22px,5vw,28px)] leading-[33px] tracking-[0.01em] capitalize text-[var(--color-white)] cursor-pointer transition-all duration-300 hover:scale-105 hover:tracking-[0.02em]">
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
        className="sm:hidden p-2 text-[var(--color-white)] transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu mobile déroulant quand on clique sur hamburger */}
      {menuOpen && (
        <nav
          className="sm:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-lg bg-black/80 backdrop-blur-sm flex flex-col items-center gap-4 py-6 animate-in fade-in slide-in-from-top-2 duration-300"
          onClick={() => setMenuOpen(false)}
        >
          <NavContent />
        </nav>
      )}

      <div className="relative shrink-0 group cursor-pointer">
        <ShoppingBag
          className="w-[34px] h-[34px] text-[var(--color-white)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
          strokeWidth={1.5}
          fill="none"
        />
        <div
          className="absolute -top-2 -right-2 flex items-center justify-center rounded-full bg-primary-alt transition-all duration-300 group-hover:scale-125"
          style={{ width: 20, height: 25.24 }}
        >
          <span className="typo-small text-[var(--color-white)]">0</span>
        </div>
      </div>
    </header>
  );
}
