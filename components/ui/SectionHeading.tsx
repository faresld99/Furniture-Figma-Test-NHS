type Props = {
  label: string;
  title: string;
};

// En-tête de section : label en petit + titre principal (ex: "Testimonials" / "Our Client Reviews")
export default function SectionHeading({ label, title }: Props) {
  return (
    <div className="text-center mb-8 md:mb-12">
      <p className="typo-label tracking-[0.175em] uppercase text-primary-alt mb-2">
        {label}
      </p>
      <h2 className="font-gilroy font-bold text-[28px] sm:text-[36px] md:text-[42px] md:leading-[49px] text-token capitalize">
        {title}
      </h2>
    </div>
  );
}
