import Image from "next/image";
import MoreInfoLink from "../ui/MoreInfoLink";
import { ASSETS } from "@/lib/config/assets";

// Section matériaux : texte à gauche, galerie d'images à droite
export default function Materials() {
  return (
    <section className="my-16 md:my-24 section-container font-gilroy flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8">
      <div className="md:w-1/2 mx-auto pl-0 md:pl-[80px] w-full max-w-full">
        <h3 className="typo-label tracking-[0.175em] uppercase text-primary-alt mb-6">
          Materials
        </h3>

        <h2 className="w-full max-w-[413px] font-gilroy font-bold text-[32px] md:text-[42px] leading-tight md:leading-[49px] text-token capitalize mb-4 md:mb-6">
          Very serious materials for making furniture
        </h2>

        <p className="w-full max-w-[556px] typo-body text-token opacity-80 mb-6 md:mb-8">
          Because panto was very serious about designing furniture for our environment, using a very
          expensive and famous capital but at a relatively low price
        </p>

        <MoreInfoLink iconSize="md" />
      </div>

      <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center">
        <div>
          <Image
            src={ASSETS.materials.material1}
            alt=""
            width={200}
            height={200}
            className="w-full h-auto"
          />
          <Image
            src={ASSETS.materials.material2}
            alt=""
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>
        <div className="md:col-span-2 col-span-1">
          <Image
            src={ASSETS.materials.material3}
            alt=""
            width={547}
            height={547}
            className="w-full md:h-[547px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
