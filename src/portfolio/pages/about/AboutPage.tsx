import { PageHeaderSection } from "@/portfolio/components/section/PageHeaderSection";
import { AboutStorySection } from "@/portfolio/components/about/AboutStorySection";
import { AboutTechnicalSkillsSection } from "@/portfolio/components/about/AboutTechnicalSkillsSection";
import { aboutPageHeaderContent } from "@/portfolio/content/about.page";

/**
 * Route-level composer for the About experience.
 * Each page block lives in its own section component to keep responsibilities
 * isolated and easier to maintain.
 */
export const AboutPage = () => {
  return (
    <>
      <PageHeaderSection
        title={aboutPageHeaderContent.title}
        subtitle={aboutPageHeaderContent.subtitle}
        align="center"
      />

      <AboutStorySection />
      <AboutTechnicalSkillsSection />
    </>
  );
};
