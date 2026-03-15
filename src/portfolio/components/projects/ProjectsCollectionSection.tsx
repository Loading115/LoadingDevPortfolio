import type {
  FeaturedCardData,
  StandardCardData,
} from "@/portfolio/components/card/card.types";
import { CardsGrid } from "@/portfolio/components/card/CardsGrid";
import { FeaturedCardSection } from "@/portfolio/components/card/FeaturedCardSection";
import { PageSection } from "@/portfolio/components/section/PageSection";
import { SectionHeader } from "@/portfolio/components/section/SectionHeader";
import {
  getFeaturedCardBySection,
  getGridCardsBySection,
} from "@/portfolio/content/cards.info";
import { projectsCollectionSectionContent } from "@/portfolio/content/projects.page";

type ProjectsCollectionSectionProps = {
  featuredCard?: FeaturedCardData;
  projectCards?: readonly StandardCardData[];
  sectionTitle?: string;
};

/**
 * Centralized portfolio listing block for the Projects page.
 * It resolves the featured card and grid content by default, but still allows
 * overrides so it can be reused in tests or future landing sections.
 */
export const ProjectsCollectionSection = ({
  featuredCard = getFeaturedCardBySection("projects"),
  projectCards = getGridCardsBySection("projects"),
  sectionTitle = projectsCollectionSectionContent.title,
}: ProjectsCollectionSectionProps) => {
  return (
    <PageSection withTopSeparator spacing="compact">
      <FeaturedCardSection card={featuredCard} className="mb-10" />

      <SectionHeader
        title={sectionTitle}
        align="left"
        className="mb-16"
      />

      <CardsGrid cards={projectCards} columns={3} variant="project" />
    </PageSection>
  );
};
