import { useEffect } from "react";

// Ferme le menu/tooltip quand on clique en dehors de l'élément référencé
export function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  isOpen: boolean,
  onClose: () => void
) {
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      // Si le clic est en dehors du ref, on ferme
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose, ref]);
}
