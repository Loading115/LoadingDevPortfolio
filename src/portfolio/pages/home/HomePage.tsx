import { HomeCtaSection } from "@/portfolio/components/home/HomeCtaSection";
import { HomeFeaturedProjectSection } from "@/portfolio/components/home/HomeFeaturedProjectSection";
import { HomeHeroSection } from "@/portfolio/components/home/HomeHeroSection";
import { HomeServicesSection } from "@/portfolio/components/home/HomeServicesSection";

/**
 * Home stays intentionally thin and only composes page-level sections.
 * The rest of the app now follows this same route composition pattern.
 */
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
