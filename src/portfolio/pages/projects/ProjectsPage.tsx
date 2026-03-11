import { CardsGrid } from "@/portfolio/components/card/CardsGrid";
import { FeaturedCardSection } from "@/portfolio/components/card/FeaturedCardSection";
import { PageSection } from "@/portfolio/components/section/PageSection";
import { SectionHeader } from "@/portfolio/components/section/SectionHeader";
import {
  getFeaturedCardBySection,
  getGridCardsBySection,
} from "@/portfolio/content/cards.info";
import { projectsSectionContent } from "@/portfolio/components/projects/projects.sections";

export const ProjectsPage = () => {
  const featuredCard = getFeaturedCardBySection("projects");
  const projectCards = getGridCardsBySection("projects");

  return (
    <PageSection>
      <SectionHeader
        title="Mis Proyectos"
        subtitle="Explora los juegos en los que he estado trabajando"
        align="left"
        titleAs="h1"
        className="mb-16"
      />

      <FeaturedCardSection card={featuredCard} className="mb-10" />
      <SectionHeader
        title={projectsSectionContent.titleText}
        align="left"
        className="mb-16"
      />
      <CardsGrid cards={projectCards} columns={3} variant="project" />
    </PageSection>
  );
};
