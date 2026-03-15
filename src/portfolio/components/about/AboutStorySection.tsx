import type { StandardCardData } from "@/portfolio/components/card/card.types";
import { CardsGrid } from "@/portfolio/components/card/CardsGrid";
import { PageSection } from "@/portfolio/components/section/PageSection";
import { getGridCardsBySection } from "@/portfolio/content/cards.info";
import {
  aboutHistoryContent,
  aboutHistoryMedia,
} from "@/portfolio/content/about.page";
import { AboutHistoryGalleryElement } from "./AboutHistoryGalleryElement";

type AboutStorySectionProps = {
  content?: typeof aboutHistoryContent;
  media?: typeof aboutHistoryMedia;
  cards?: readonly StandardCardData[];
};

/**
 * Storytelling block for the About page.
 * It keeps the page component focused on composition while this section owns
 * the layout and content wiring for the narrative area.
 */
export const AboutStorySection = ({
  content = aboutHistoryContent,
  media = aboutHistoryMedia,
  cards = getGridCardsBySection("about"),
}: AboutStorySectionProps) => {
  return (
    <PageSection withTopSeparator>
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
        <AboutHistoryGalleryElement
          src={media.src}
          alt={media.alt}
          badgeText={media.badgeText}
          className="lg:h-full"
        />

        <div>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
            {content.title}
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <CardsGrid cards={cards} columns={1} className="mt-8 gap-4" />
        </div>
      </div>
    </PageSection>
  );
};
