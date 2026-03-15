import { Clock3, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageSection } from "@/portfolio/components/section/PageSection";
import {
  contactDirectEmailContent,
  contactResponseTimeContent,
  contactSocialLinksContent,
} from "@/portfolio/content/contact.page";
import { socialLinks } from "@/portfolio/content/site";
import { ContactInfoCard } from "./ContactInfoCard";
import { ContactSocialLinksCard } from "./ContactSocialLinksCard";

/**
 * Main content section for the Contact page.
 * The layout combines the strongest parts of both design proposals while
 * keeping the page itself free of presentational details.
 */
export const ContactContentSection = () => {
  return (
    <PageSection container="5xl" spacing="compact" className="pt-0">
      <div className="relative mx-auto max-w-2xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 right-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-8 h-40 w-40 rounded-full bg-secondary/12 blur-3xl"
        />

        <div className="relative space-y-6">
          {/* Form and form-status blocks stay disabled until email delivery is ready. */}

          <ContactInfoCard
            title={contactDirectEmailContent.title}
            description={contactDirectEmailContent.description}
            icon={Mail}
            accent="warm"
          >
            <Button
              asChild
              variant="link"
              className="h-auto p-0 text-base font-semibold text-primary"
            >
              <a href={contactDirectEmailContent.href}>
                {contactDirectEmailContent.email}
              </a>
            </Button>
          </ContactInfoCard>

          <ContactInfoCard
            title={contactResponseTimeContent.title}
            description={contactResponseTimeContent.description}
            icon={Clock3}
            className="bg-muted/35"
          />

          <ContactSocialLinksCard
            title={contactSocialLinksContent.title}
            links={socialLinks}
          />
        </div>
      </div>
    </PageSection>
  );
};
