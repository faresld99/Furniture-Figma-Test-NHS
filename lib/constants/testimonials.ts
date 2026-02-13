import { ASSETS } from "@/lib/config/assets";

export const REVIEWS = [
  {
    name: "Bang Upin",
    role: "Pedagang Asongan",
    review: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    image: ASSETS.reviewers.reviewer1,
    coverImg: ASSETS.testimonials.testimonial3,
    rating: 4,
  },
  {
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    review:
      "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
    image: ASSETS.reviewers.reviewer2,
    coverImg: ASSETS.testimonials.testimonial1,
    rating: 4,
  },
  {
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    image: ASSETS.reviewers.reviewer3,
    coverImg: ASSETS.testimonials.testimonial2,
    rating: 4,
  },
] as const;
