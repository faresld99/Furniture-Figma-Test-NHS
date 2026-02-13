import { MoveRight } from "lucide-react";

// Style commun pour les flèches de carousel
const ARROW_STYLE = {
  width: "50px",
  height: "50px",
  padding: "11.9565px",
  background: "var(--color-white)",
  borderRadius: "26.087px",
  boxShadow: "0px 7.03125px 19.5312px rgba(0, 0, 0, 0.06)",
} as const;

type Props = {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel: string;
};

// Flèche gauche ou droite pour naviguer dans un carousel
export default function CarouselArrow({ direction, onClick, className = "", style = {}, ariaLabel }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`absolute z-10 flex shrink-0 items-center justify-center transition hover:opacity-90 ${className}`}
      style={{ ...ARROW_STYLE, ...style }}
    >
      <MoveRight
        width={26.09}
        height={26.09}
        stroke="var(--color-text)"
        strokeWidth={2.17391}
        style={direction === "left" ? { transform: "scaleX(-1)" } : undefined}
      />
    </button>
  );
}
