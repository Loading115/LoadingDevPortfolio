import { footerContent, siteConfig } from "@/portfolio/content/site";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background font-sans">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-0">
        <div className="mb-10 grid grid-cols-1 place-items-center gap-10 text-center md:grid-cols-[auto_auto] md:justify-center md:gap-x-16 md:place-items-start md:text-left">
          <div className="max-w-sm">
            <div className="mb-2 text-xl font-bold text-primary">
              {siteConfig.name}
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {footerContent.description}
            </p>
          </div>

          <SocialLinks />
        </div>

        <div className="border-t border-border/70" />

        <div className="flex flex-col items-center gap-2 pt-10 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} {siteConfig.name}. {footerContent.legalLine}
          </p>
          <p>{footerContent.closingLine}</p>
        </div>
      </div>
    </footer>
  );
};
