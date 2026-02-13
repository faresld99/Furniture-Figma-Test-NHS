import Link from "next/link";
import { MoveRight } from "lucide-react";

type Props = {
  className?: string;
  iconSize?: "sm" | "md" | "lg";
};

// Tailles possibles pour l'icône flèche
const iconSizes = {
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-[48px] h-[24px]",
};

// Lien "More Info" avec flèche, utilisé dans plusieurs sections
export default function MoreInfoLink({ className = "", iconSize = "lg" }: Props) {
  return (
    <Link
      href="#"
      className={`inline-flex items-center gap-2 hover:opacity-90 transition-opacity typo-caption text-primary-token ${className}`}
    >
      <span>More Info</span>
      <MoveRight
        className={`flex-shrink-0 ${iconSizes[iconSize]}`}
        stroke="var(--color-primary)"
        strokeWidth={iconSize === "lg" ? 1 : 2}
      />
    </Link>
  );
}
