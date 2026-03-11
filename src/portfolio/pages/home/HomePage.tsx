import { HomeCtaSection } from "@/portfolio/components/home/HomeCtaSection";
import { HomeFeaturedProjectSection } from "@/portfolio/components/home/HomeFeaturedProjectSection";
import { HomeHeroSection } from "@/portfolio/components/home/HomeHeroSection";
import { HomeServicesSection } from "@/portfolio/components/home/HomeServicesSection";

export const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeServicesSection />
      <HomeFeaturedProjectSection />
      <HomeCtaSection />
    </>
  );
};
