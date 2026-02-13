import Hero from "@/components/home/Hero";
import ChooseUs from "@/components/home/ChooseUs";
import Products from "@/components/shop/Products";
import Experiences from "@/components/home/Experiences";
import Materials from "@/components/home/Materials";
import Testimonials from "@/components/home/Testimonials";

// Page d'accueil : assemblage des sections dans l'ordre
export default function Home() {
  return (
    <>
      {/* Bannière principale + recherche */}
      <Hero />
      <ChooseUs />
      <Products />
      <Experiences />
      <Materials />
      <Testimonials />
    </>
  );
}
