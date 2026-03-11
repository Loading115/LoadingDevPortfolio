import { SITE_NAME, FOOTER_DESCRIPTION } from "@/lib/constants";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 mb-10 text-center place-items-center md:grid-cols-[auto_auto] md:justify-center md:gap-x-16 md:text-left md:place-items-start">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="font-bold text-xl text-primary mb-2">
              {SITE_NAME}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {FOOTER_DESCRIPTION}
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks />
        </div>

        {/* Divider */}
        <div className="border-t border-border/70" />

        {/* Bottom Section */}
        <div className="pt-10 flex flex-col items-center text-center gap-2 text-sm text-muted-foreground">
          <p>© 2026 {SITE_NAME}. All rights reserved.</p>
          <p>Crafted with passion for game development</p>
        </div>
      </div>
    </footer>
  );
};
