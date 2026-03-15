import { ContactContentSection } from "@/portfolio/components/contact/ContactContentSection";
import { ContactHeroSection } from "@/portfolio/components/contact/ContactHeroSection";

/**
 * Contact route kept intentionally small so future contact-specific sections
 * can be added without mixing content concerns into the route component.
 */
export const ContactPage = () => {
  return (
    <>
      <ContactHeroSection />
      <ContactContentSection />
    </>
  );
};
