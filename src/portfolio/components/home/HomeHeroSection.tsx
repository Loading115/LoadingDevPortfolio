import { ArrowRight, Flame } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/portfolio/components/gallery/ImageGallery";
import { PageSection } from "@/portfolio/components/section/PageSection";
import {
  homeFloatingBadge,
  homeGalleryItems,
} from "@/portfolio/content/home.gallery";
import { homeHeroContent } from "@/portfolio/content/home.sections";

export const HomeHeroSection = () => {
  const { highlightedText, title } = homeHeroContent;
  const [titleStart, titleEnd] = title.split(highlightedText);

  return (
    <PageSection tone="muted-gradient" spacing="hero">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
            <Flame className="w-4 h-4" />
            <span className="text-sm">{homeHeroContent.badgeText}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            {titleStart}
            <span className="text-primary ">{highlightedText}</span>
            {titleEnd}
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {homeHeroContent.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-2 text-white hover:text-white">
              <NavLink to={homeHeroContent.primaryAction.to}>
                {homeHeroContent.primaryAction.label}
                <ArrowRight className="w-4 h-4" />
              </NavLink>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-secondary hover:bg-secondary hover:text-white"
            >
              <NavLink to={homeHeroContent.secondaryAction.to}>
                {homeHeroContent.secondaryAction.label}
              </NavLink>
            </Button>
          </div>
        </div>

        <ImageGallery
          layout="hero-mosaic"
          items={homeGalleryItems}
          floatingBadge={homeFloatingBadge}
        />
      </div>
    </PageSection>
  );
};
