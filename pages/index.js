import FeaturedProducts from "@/components/HomePage/FeaturedProducts";
import Hero from "@/components/HomePage/Hero";
import SolutionsSection from "@/components/HomePage/SolutionsSection";
import Stats from "@/components/HomePage/Stats";
import TheyTrustedUs from "@/components/HomePage/TheyTrustedUs";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import InfoSection from "@/components/main/InfoSection";

export default function Home() {
  return (
    <main className="bg-gray-100 pt-18">
      <Hero />
      <Stats />
      <FeaturedProducts />
      <InfoSection title={'Notre ADN'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus.'}
        img={'https://placehold.co/500x400.png'}
        alt={'DNA'}
        imgOrder={'order-2'}
        bg={'bg-white'}
        href={'/about'}
      />
      <SolutionsSection />
      <TheyTrustedUs />
    </main>
  );
}
