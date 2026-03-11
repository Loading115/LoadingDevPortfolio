import { FeaturedCardSection } from "@/portfolio/components/card/FeaturedCardSection";
import { PageSection } from "@/portfolio/components/section/PageSection";
import { SectionHeader } from "@/portfolio/components/section/SectionHeader";
import { getFeaturedCardBySection } from "@/portfolio/content/cards.info";
import { homeFeaturedProjectSectionContent } from "@/portfolio/content/home.sections";

export const HomeFeaturedProjectSection = () => {
  const featuredCard = getFeaturedCardBySection("projects");

  return (
    <PageSection withTopSeparator>
      <SectionHeader
        title={homeFeaturedProjectSectionContent.title}
        subtitle={homeFeaturedProjectSectionContent.subtitle}
        align="left"
        className="mb-16"
      />

      <FeaturedCardSection card={featuredCard} />
    </PageSection>
  );
};
