import { PageSection } from "@/portfolio/components/section/PageSection";
import { SectionHeader } from "@/portfolio/components/section/SectionHeader";
import { AboutHistoryGalleryElement } from "@/portfolio/components/about/AboutHistoryGalleryElement";
import { AboutTechnicalSkillsSection } from "@/portfolio/components/about/AboutTechnicalSkillsSection";
import { CardsGrid } from "@/portfolio/components/card/CardsGrid";
import { getGridCardsBySection } from "@/portfolio/content/cards.info";
import {
  aboutHistoryContent,
  aboutHistoryMedia,
  aboutPageHeaderContent,
} from "@/portfolio/content/about.page";

/**
 * About page composition:
 * - global page heading
 * - history story block with media + values cards
 * - technical skills grid section
 */
export const AboutPage = () => {
  const cards = getGridCardsBySection("about");

  return (
    <>
      <PageSection>
        <SectionHeader
          title={aboutPageHeaderContent.title}
          subtitle={aboutPageHeaderContent.subtitle}
          align="center"
          titleAs="h1"
        />
      </PageSection>

      <PageSection withTopSeparator>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <AboutHistoryGalleryElement
            src={aboutHistoryMedia.src}
            alt={aboutHistoryMedia.alt}
            badgeText={aboutHistoryMedia.badgeText}
            className="lg:h-full"
          />

          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              {aboutHistoryContent.title}
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              {aboutHistoryContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <CardsGrid cards={cards} columns={1} className="mt-8 gap-4" />
          </div>
        </div>
      </PageSection>

      <AboutTechnicalSkillsSection />
    </>
  );
};
