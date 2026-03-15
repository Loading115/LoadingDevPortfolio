import { DevlogContentSection } from "@/portfolio/components/devlog/DevlogContentSection";
import { PageHeaderSection } from "@/portfolio/components/section/PageHeaderSection";
import { devlogPageHeaderContent } from "@/portfolio/content/devlog.page";

/**
 * Devlog route composed from high-level sections only.
 * Rendering details for updates and videos live in dedicated section components.
 */
export const DevlogPage = () => {
  return (
    <>
      <PageHeaderSection
        title={devlogPageHeaderContent.title}
        subtitle={devlogPageHeaderContent.subtitle}
      />

      <DevlogContentSection />
    </>
  );
};
