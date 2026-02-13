"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { Star, MoveRight } from "lucide-react";
import { REVIEWS } from "@/lib/constants";
import SectionHeading from "../ui/SectionHeading";
import "swiper/css";

// Style partagé pour les flèches prev/next du carousel
const ARROW_STYLE = {
  width: 50,
  height: 50,
  borderRadius: "26.087px",
  boxShadow: "0px 7.03125px 19.5312px rgba(0, 0, 0, 0.06)",
  padding: "11.9565px",
};

// Affichage des 5 étoiles (pleines ou vides selon le rating)
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center justify-center gap-[5px] w-[90px] mx-auto">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="w-[14px] h-[14px] flex-shrink-0"
          fill={i <= rating ? "#FF911C" : "#FF911D"}
          stroke={i <= rating ? "#FF911C" : "#FF911D"}
          style={i > rating ? { opacity: 0.3 } : {}}
        />
      ))}
    </div>
  );
}

// Carousel Swiper des avis clients avec navigation
export default function Testimonials() {
  return (
    <section className="section-container font-gilroy my-16 md:my-24 mb-16 md:mb-32">
      <SectionHeading label="Testimonials" title="Our Client Reviews" />

      {/* Swiper responsive : 1 slide mobile, 2 tablette, 3 desktop */}
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[70px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          navigation={{
            prevEl: ".testimonials-prev",
            nextEl: ".testimonials-next",
          }}
          modules={[Autoplay, Navigation]}
          className="!overflow-visible"
        >
          {REVIEWS.map((review, index) => (
            <SwiperSlide key={index} className="!h-auto flex justify-center">
              <div className="relative w-full max-w-[370px] min-h-[530px] group">
                <div
                  className="absolute bg-cover bg-center"
                  style={{
                    width: 300,
                    height: 380,
                    left: 33.87,
                    top: 126,
                    backgroundImage: `url(${review.coverImg})`,
                    opacity: 0.4,
                    filter: "blur(25px)",
                    borderRadius: "44.3895px",
                    transform: "matrix(-1, 0, 0, 1, 0, 0)",
                  }}
                />

                <div 
                  className="absolute inset-0 rounded-[18.1182px] transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-2" 
                  style={{ height: 506 }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-[476px] bg-cover bg-center rounded-[18.1182px] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${review.coverImg})`,
                      transform: "matrix(-1, 0, 0, 1, 0, 0)",
                      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.04)",
                    }}
                  />
                </div>

                <div
                  className="absolute z-10 w-[334px] max-w-[calc(100%-36px)] left-1/2 -translate-x-1/2 top-[250px] transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-[1.02]"
                  style={{
                    background: "#FFFFFF",
                    backdropFilter: "blur(5.5px)",
                    borderRadius: "10px",
                  }}
                >
                  <div className="absolute left-1/2 -translate-x-1/2 -top-[33px] w-[66px] h-[66px] rounded-full bg-white overflow-hidden flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-lg">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="w-[50px] h-[50px] rounded-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="relative w-[327px] max-w-[calc(100%-14px)] min-h-[209px] mx-auto pt-[38px] px-[3.5px] pb-[34px] text-center">
                    <h3
                      className="font-bold text-[18px] leading-[21px] text-[#1E1E1E] capitalize mb-1 transition-colors duration-300 group-hover:text-[#FF911C]"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      {review.name}
                    </h3>
                    <p
                      className="font-normal text-[12px] leading-[14px] text-[#1E1E1E] opacity-60 mb-4"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      {review.role}
                    </p>
                    <p
                      className="font-normal text-[14px] leading-[16px] text-[#1E1E1E] opacity-80 mb-5 max-w-[252px] mx-auto transition-opacity duration-300 group-hover:opacity-100"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      &quot;{review.review}&quot;
                    </p>
                    <div className="transition-transform duration-300 ease-out group-hover:scale-110">
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Boutons de navigation du carousel (visibles uniquement sur desktop) */}
        <button
          type="button"
          aria-label="Previous"
          className="testimonials-prev hidden md:!flex absolute z-20 items-center justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer"
          style={{
            ...ARROW_STYLE,
            left: 45,
            top: 160,
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
          }}
        >
          <MoveRight className="w-[26px] h-[26px] text-[#1E1E1E] flex-shrink-0" strokeWidth={2.17} />
        </button>
        <button
          type="button"
          aria-label="Next"
          className="testimonials-next hidden md:!flex absolute z-20 items-center justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer"
          style={{
            ...ARROW_STYLE,
            right: 45,
            top: 160,
          }}
        >
          <MoveRight className="w-[26px] h-[26px] text-[#1E1E1E] flex-shrink-0" strokeWidth={2.17} />
        </button>
      </div>
    </section>
  );
}