import { PageHeaderSection } from "@/portfolio/components/section/PageHeaderSection";
import { contactPageHeaderContent } from "@/portfolio/content/contact.page";

type ContactHeroSectionProps = {
  content?: typeof contactPageHeaderContent;
};

/**
 * Thin adapter that binds Contact page copy to the shared page header section.
 * This keeps the route component declarative and ready for future expansion.
 */
export const ContactHeroSection = ({
  content = contactPageHeaderContent,
}: ContactHeroSectionProps) => {
  return (
    <PageHeaderSection
      title={content.title}
      subtitle={content.subtitle}
      align={content.align}
      sectionClassName="pb-8 sm:pb-10"
    />
  );
};
