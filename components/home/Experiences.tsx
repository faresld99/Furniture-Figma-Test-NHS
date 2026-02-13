import MoreInfoLink from "../ui/MoreInfoLink";
import { ASSETS } from "@/lib/config/assets";

// Section Expériences : image + texte, layout différent mobile vs desktop
export default function Experiences() {
  return (
    <section className="relative my-16 md:my-24 lg:my-32 section-container font-gilroy overflow-visible">
      {/* Mobile/Tablet: stacked layout */}
      <div className="lg:hidden flex flex-col items-center gap-8">
        <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[20px] overflow-hidden bg-token">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${ASSETS.experiences}')` }}
          />
        </div>
        <div className="text-center md:text-left max-w-[556px]">
          <h3 className="typo-label tracking-[0.175em] uppercase text-primary-alt mb-4">Experiences</h3>
          <h2 className="typo-h2 text-token capitalize mb-6">We provide you the best experience</h2>
          <p className="typo-body text-token opacity-80 mb-8">
            You don&apos;t have to worry about the result because all of these interiors are made by
            people who are professionals in their fields with an elegant and luxurious style and with
            premium quality materials
          </p>
          <MoreInfoLink iconSize="sm" />
        </div>
      </div>

      {/* Desktop: original layout */}
      <div className="hidden lg:block relative w-full max-w-[1200px] mx-auto h-[600px]">
        <div
          className="absolute top-[50px] w-[650px] h-[500px]"
          style={{ left: "min(0px, calc(-50vw + 600px))" }}
        >
          <div
            className="absolute w-[555px] h-[423px] left-[20px] bottom-0 rounded-[49px] blur-[25px] bg-cover bg-center"
            style={{ backgroundImage: `url('${ASSETS.experiences}')` }}
          />
          <div className="absolute w-[495px] h-[422px] left-[-65px] top-0 bg-token rounded-[20px]" />
          <div className="absolute w-[495px] h-[301px] left-[168px] top-[138px] bg-token rounded-[20px]" />
          <div
            className="absolute w-[629px] h-[445px] left-[-27px] top-[66px] rounded-[20px] bg-cover bg-center"
            style={{ backgroundImage: `url('${ASSETS.experiences}')` }}
          />
        </div>

        <h3 className="absolute mt-24 left-[620px] top-[33px] typo-label tracking-[0.175em] uppercase text-primary-alt">
          Experiences
        </h3>

        <h2 className="mt-24 absolute left-[620px] top-[75px] w-[413px] typo-h2 text-token capitalize">
          We provide you the best experience
        </h2>

        <p className="mt-24 absolute left-[620px] top-[199px] w-[556px] typo-body text-token opacity-80">
          You don&apos;t have to worry about the result because all of these interiors are made by
          people who are professionals in their fields with an elegant and luxurious style and with
          premium quality materials
        </p>

        <div className="mt-24 absolute left-[620px] top-[355px]">
          <MoreInfoLink iconSize="sm" />
        </div>
      </div>
    </section>
  );
}
