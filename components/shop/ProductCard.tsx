import Image from "next/image";
import type { Product } from "@/lib/types";

type Props = { product: Product };

// Carte produit avec image, nom, prix et bouton add to cart
export default function ProductCard({ product }: Props) {
  return (
    <article
      className="group flex shrink-0 flex-col bg-white rounded-[20px] opacity-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
      style={{
        width: "268.08673095703125px",
        height: "430px",
      }}
    >
      <div
        className="relative flex w-full items-end justify-center overflow-visible bg-bg-card rounded-t-[20px]"
        style={{ height: "239.15px" }}
      >
        <div
          className="absolute bottom-0 left-1/2 z-10 flex flex-col items-center overflow-visible transition-transform duration-400 ease-out group-hover:-translate-y-1"
          style={{ transform: "translateX(-50%) translateY(-32px)" }}
        >
          <div
            className="absolute bottom-2 left-1/2 z-0 -translate-x-1/2"
            style={{
              width: "151.56px",
              height: "43.41px",
              background: "rgba(0, 0, 0, 0.09)",
              filter: "blur(12.1858px)",
            }}
          />
          <div
            className="relative z-10 overflow-visible transition-transform duration-400 ease-out group-hover:scale-105"
            style={{
              width: "217.9px",
              height: "255.9px",
              transform: "scale(1.08)",
              transformOrigin: "bottom center",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={217.9}
              height={255.9}
              className="object-contain object-bottom"
              style={{ display: "block", width: "217.9px", height: "255.9px" }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-start bg-white px-5 pb-0 pt-3 rounded-b-[20px]">
        <span className="mb-1 font-gilroy font-normal text-[16.7554px] leading-[20px] text-token-muted">
          Chair
        </span>
        <h3 className="mb-2 font-gilroy font-semibold text-[21.3251px] leading-[26px] text-token-dark">
          {product.name}
        </h3>
        <div className="mb-2 flex items-center gap-[3px]">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className="inline-flex items-center justify-center text-[18.28px] leading-none"
              style={{
                width: "18.28px",
                height: "18.28px",
                color: "var(--color-star)",
              }}
            >
              ★
            </span>
          ))}
        </div>
        <div className="mt-3 flex flex-row items-center justify-between">
          <span
            className="inline-flex items-baseline gap-0.5"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              color: "#091B3C",
            }}
          >
            <span
              style={{
                fontSize: "15.2322px",
                lineHeight: "18px",
                transform: "translateY(-2px)",
              }}
            >
              ${" "}
            </span>
            <span style={{ fontSize: "21.3251px", lineHeight: "26px" }}>
              {product.price.replace(/^\$\s*/, "")}
            </span>
          </span>
          <button
            type="button"
            className="flex shrink-0 items-center justify-center rounded-full text-white transition-all duration-300 ease-out hover:scale-110 hover:shadow-md w-[48.74px] h-[48.74px] p-[12.1858px] rounded-[31px]"
            style={{ backgroundColor: "var(--color-text-dark)" }}
            aria-label="Ajouter au panier"
          >
            <svg 
              width="24.37" 
              height="24.37" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-white"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}