import { cn } from "@/lib/utils";
import { PageSection } from "@/portfolio/components/section/PageSection";
import { SectionHeader } from "@/portfolio/components/section/SectionHeader";
import { getAccentHoverCardClass } from "@/portfolio/components/card/card.styles";
import {
  technicalSkillsData,
  type TechnicalSkillData,
} from "@/portfolio/content/about.skills";
import { aboutTechnicalSkillsSectionContent } from "@/portfolio/content/about.page";

/**
 * Props for the technical skills section.
 * Allowing dependency injection makes testing and future customization easier.
 */
type AboutTechnicalSkillsSectionProps = {
  skills?: readonly TechnicalSkillData[];
  title?: string;
};

/**
 * Displays the technical capabilities grid on the About page.
 * Skills are data-driven so content updates do not require JSX changes.
 */
export const AboutTechnicalSkillsSection = ({
  skills = technicalSkillsData,
  title = aboutTechnicalSkillsSectionContent.title,
}: AboutTechnicalSkillsSectionProps) => {
  return (
    <PageSection withTopSeparator spacing="compact">
      <SectionHeader
        title={title}
        align="center"
        titleAs="h2"
        className="mb-12"
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <article
              key={skill.id}
              className={cn(
                "group rounded-2xl border border-border/80 bg-card px-6 py-5",
                getAccentHoverCardClass("primary"),
              )}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {skill.name}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {skill.category}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </PageSection>
  );
};
