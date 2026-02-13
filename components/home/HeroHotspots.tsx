"use client";

import { useState, useRef, useEffect } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

// Couleurs disponibles pour le sélecteur dans les bulles
const HOTSPOT_COLORS = [
  { id: "orange", hex: "#F47E00" },
  { id: "teal", hex: "#00D9C9" },
  { id: "grey", hex: "#7C7C7C" },
] as const;

type ColorId = (typeof HOTSPOT_COLORS)[number]["id"];

// Styles de la bulle SVG : forme rectangle arrondi + pointeur vers le bas
const BUBBLE_FILL = "rgba(45, 45, 45, 0.55)";
const BUBBLE_STROKE = "rgba(255, 255, 255, 0.25)";
// Côté droit entièrement arrondi : top-right (112,24) puis bottom-right (112,24)→(88,48) sans segment plat
const BUBBLE_PATH =
  "M 24,0 L 88,0 Q 112,0 112,24 Q 112,48 88,48 L 66,48 A 10 10 0 0 1 46,48 L 24,48 Q 0,48 0,24 Q 0,0 24,0 Z";
const BUBBLE_HEIGHT = 60;

function TooltipBubble({
  selectedColor,
  onSelectColor,
}: {
  selectedColor: ColorId;
  onSelectColor: (id: ColorId) => void;
}) {
  // Bulle avec les 3 pastilles de couleur (orange, teal, gris)
  return (
    <div className="relative" style={{ width: "112px", height: BUBBLE_HEIGHT }}>
      <svg
        width="112"
        height={BUBBLE_HEIGHT}
        viewBox={`0 0 112 ${BUBBLE_HEIGHT}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
        style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))" }}
      >
        <path
          d={BUBBLE_PATH}
          fill={BUBBLE_FILL}
          stroke={BUBBLE_STROKE}
          strokeWidth="1"
        />
      </svg>
      <div
        className="absolute left-0 top-0 w-[112px]"
        style={{ paddingTop: "12px" }}
      >
        {HOTSPOT_COLORS.map((color, index) => (
          <button
            key={color.id}
            type="button"
            className="absolute box-border flex items-center justify-center rounded-full border-2 border-white shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50"
            style={{
              left: `${12 + index * 32}px`,
              top: "12px",
              width: "24px",
              height: "24px",
              background: color.hex,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transform: "rotate(180deg)",
            }}
            aria-label={`Couleur ${color.id}`}
            aria-pressed={selectedColor === color.id}
            onClick={(e) => {
              e.stopPropagation();
              onSelectColor(color.id);
            }}
          >
            {selectedColor === color.id && (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="drop-shadow-sm"
                style={{
                  filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
                  transform: "rotate(180deg)",
                }}
              >
                <path
                  d="M5 12l5 5 9-9"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// Point interactif générique (vases et table)
type HotspotPointProps = {
  left: string;
  top: string;
  width: number;
  height: number;
  dotSize: number;
  ariaLabel: string;
};

function HeroHotspotPoint({
  left,
  top,
  width,
  height,
  dotSize,
  ariaLabel,
}: HotspotPointProps) {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<ColorId>("orange");
  const containerRef = useRef<HTMLDivElement>(null);
  // Fermer la bulle si on clique ailleurs
  useClickOutside(containerRef, open, () => setOpen(false));

  return (
    <div ref={containerRef} className="contents">
      <button
        type="button"
        className="absolute z-20 flex cursor-pointer items-center justify-center rounded-full transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-panto-orange"
        style={{
          left,
          top,
          width: `${width}px`,
          height: `${height}px`,
          transform: "translate(-50%, -50%)",
          background: "rgba(255, 255, 255, 0.2)",
          border: "0.861538px solid rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(4px)",
          borderRadius: "42px",
          boxSizing: "border-box",
        }}
        aria-label={ariaLabel}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className="rounded-full bg-white"
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            transform: "rotate(180deg)",
          }}
        />
      </button>
      {open && (
        <div
          className="absolute z-30"
          style={{
            left,
            top: `calc(${top} - ${height / 2 + 12 + BUBBLE_HEIGHT}px)`,
            transform: "translate(-50%, 0)",
          }}
          role="tooltip"
        >
          <TooltipBubble
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
          />
        </div>
      )}
    </div>
  );
}

// Hotspot spécifique pour le canapé avec animation d'introduction
function HeroHotspotCanape() {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<ColorId>("orange");
  const [isPulsing, setIsPulsing] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, open, () => setOpen(false));

  // Animation d'introduction : ouvrir le tooltip pendant 3s puis arrêter le clignotement
  useEffect(() => {
    // Ouvrir immédiatement au chargement
    setOpen(true);
    
    const timer = setTimeout(() => {
      setOpen(false);
      setIsPulsing(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setOpen((v) => !v);
    // Arrêter le clignotement dès la première interaction manuelle
    if (isPulsing) {
      setIsPulsing(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute z-20"
      style={{
        left: "17.29%",
        top: "58.5%",
        width: "112px",
        height: "137.6px",
      }}
      role="group"
      aria-label="Canapé"
    >
      {/* Tooltip avec animation de fade-in/out */}
      {open && (
        <div
          className="absolute left-0 animate-fade-in"
          style={{
            top: `${81.6 - 12 - BUBBLE_HEIGHT}px`,
            width: "112px",
            height: BUBBLE_HEIGHT,
            animation: "fadeIn 0.3s ease-out forwards",
          }}
        >
          <TooltipBubble
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
          />
        </div>
      )}
      
      {/* Bouton avec clignotement pendant 3s au chargement */}
      <button
        type="button"
        className={`absolute flex cursor-pointer items-center justify-center rounded-full transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-panto-orange ${isPulsing ? "blink" : ""}`}
        style={{
          left: "28px",
          top: "81.6px",
          width: "56px",
          height: "56px",
          background: "rgba(255, 255, 255, 0.2)",
          border: "0.861538px solid rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(4px)",
          borderRadius: "42px",
          boxSizing: "border-box",
        }}
        aria-label="Voir le canapé"
        aria-expanded={open}
        onClick={handleClick}
      >
        {/* Point blanc central avec effet de scale */}
        <span
          className="rounded-full bg-white"
          style={{ 
            width: "18px", 
            height: "18px", 
            animation: isPulsing ? "scalePoint 1.5s ease-in-out infinite" : "none",
            transform: isPulsing ? undefined : "rotate(180deg)",
          }}
        />
      </button>
      
      <style jsx>{`
        .blink {
          animation: blink 1.4s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        @keyframes scalePoint {
          0%, 100% {
            transform: rotate(180deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.5);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// Rassemble tous les hotspots (vase gauche, canapé, table, vase droite) - masqués sur mobile
export default function HeroHotspots() {
  return (
    <div className="hidden sm:contents">
    <>
      <HeroHotspotPoint
        left="calc(7.15% + 24px)"
        top="calc(68.54% + 48px)"
        width={32}
        height={32}
        dotSize={10.29}
        ariaLabel="Voir le vase"
      />
      <HeroHotspotCanape />
      <HeroHotspotPoint
        left="55.56%"
        top="75%"
        width={32}
        height={32}
        dotSize={10.29}
        ariaLabel="Voir la table"
      />
      <HeroHotspotPoint
        left="calc(95.07% + 8px)"
        top="calc(80% + 8px)"
        width={37}
        height={37}
        dotSize={11.89}
        ariaLabel="Voir le vase"
      />
    </>
    </div>
  );
}