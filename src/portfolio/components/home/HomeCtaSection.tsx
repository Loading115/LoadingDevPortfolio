import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageSection } from "@/portfolio/components/section/PageSection";
import { homeCtaSectionContent } from "@/portfolio/content/home.sections";

export const HomeCtaSection = () => {
  return (
    <PageSection spacing="compact">
      <div className="rounded-2xl bg-linear-to-r from-primary to-secondary px-6 sm:px-10 py-14 sm:py-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          {homeCtaSectionContent.title}
        </h2>
        <p className="text-xl text-white/95 mb-10 leading-relaxed max-w-4xl mx-auto">
          {homeCtaSectionContent.subtitle}
        </p>

        <Button
          asChild
          size="lg"
          className="bg-secondary text-white hover:bg-secondary/90 gap-2 px-8 h-12 text-base"
        >
          <NavLink to={homeCtaSectionContent.action.to}>
            {homeCtaSectionContent.action.label}
            <ArrowRight className="w-5 h-5" />
          </NavLink>
        </Button>
      </div>
    </PageSection>
  );
};
