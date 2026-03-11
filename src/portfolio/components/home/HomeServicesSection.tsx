import { CardsGrid } from "@/portfolio/components/card/CardsGrid";
import { SectionHeader } from "@/portfolio/components/section/SectionHeader";
import { PageSection } from "@/portfolio/components/section/PageSection";
import { getGridCardsBySection } from "@/portfolio/content/cards.info";
import { homeServicesSectionContent } from "@/portfolio/content/home.sections";

export const HomeServicesSection = () => {
  const cards = getGridCardsBySection("home");

  return (
    <PageSection withTopSeparator>
      <SectionHeader
        title={homeServicesSectionContent.title}
        subtitle={homeServicesSectionContent.subtitle}
        align="center"
        className="mb-16"
      />

      <CardsGrid cards={cards} columns={3} />
    </PageSection>
  );
};
