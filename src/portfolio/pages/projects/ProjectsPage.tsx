import { ProjectsCollectionSection } from "@/portfolio/components/projects/ProjectsCollectionSection";
import { PageHeaderSection } from "@/portfolio/components/section/PageHeaderSection";
import { projectsPageHeaderContent } from "@/portfolio/content/projects.page";

/**
 * Projects route composed from reusable sections.
 * Data selection now lives inside the section layer instead of the page entry.
 */
export const ProjectsPage = () => {
  return (
    <>
      <PageHeaderSection
        title={projectsPageHeaderContent.title}
        subtitle={projectsPageHeaderContent.subtitle}
      />

      <ProjectsCollectionSection />
    </>
  );
};
