import MoreInfoLink from "../ui/MoreInfoLink";
import { CHOOSE_US_FEATURES } from "@/lib/constants";

// Section "Pourquoi nous choisir" : 3 avantages en grille
export default function ChooseUs() {
  return (
    <section className="section-container font-gilroy my-16 md:my-24">
      {/* Titre à gauche, 3 blocs d'avantages à droite */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-8 md:gap-12 text-left">
        <div className="lg:max-w-[248px] ml-0 md:ml-4 lg:ml-8 mt-0 md:mt-10 pl-0 lg:pl-1">
          <h2 className="font-gilroy font-bold text-[32px] sm:text-[38px] md:text-[42px] leading-[1.2] md:leading-[49px] text-token">
            Why <br /> Choosing Us
          </h2>
        </div>

        {CHOOSE_US_FEATURES.map((feature, index) => (
          <div key={index} className="max-w-[284px] w-full">
            <h3 className="font-gilroy font-bold text-xl md:text-[24px] md:leading-[28px] text-token opacity-90 mb-4 md:mb-5">
              {feature.title}
            </h3>

            <p className="typo-body-sm text-token opacity-80 min-h-0 md:min-h-[90px] mb-5 md:mb-6">
              {feature.description}
            </p>

            <MoreInfoLink iconSize="lg" />
          </div>
        ))}
      </div>
    </section>
  );
}
