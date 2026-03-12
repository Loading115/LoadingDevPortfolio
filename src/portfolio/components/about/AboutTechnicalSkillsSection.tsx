import { PageSection } from "@/portfolio/components/section/PageSection";
import { SectionHeader } from "@/portfolio/components/section/SectionHeader";
import {
  technicalSkillsData,
  type TechnicalSkillData,
} from "@/portfolio/content/about.skills";

/**
 * Props for the technical skills section.
 * Allowing dependency injection makes testing and future customization easier.
 */
type AboutTechnicalSkillsSectionProps = {
  skills?: readonly TechnicalSkillData[];
};

/**
 * Displays the technical capabilities grid on the About page.
 * Skills are data-driven so content updates do not require JSX changes.
 */
export const AboutTechnicalSkillsSection = ({
  skills = technicalSkillsData,
}: AboutTechnicalSkillsSectionProps) => {
  return (
    <PageSection withTopSeparator spacing="compact">
      <SectionHeader
        title="Habilidades Tecnicas"
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
              className="rounded-2xl border border-border bg-card px-6 py-5"
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
