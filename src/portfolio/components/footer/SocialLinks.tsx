import { footerContent, socialLinks } from "@/portfolio/content/site";
import { SocialButton } from "./SocialButton";

export const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="mb-4 font-semibold">{footerContent.socialHeading}</h3>

      <div className="flex justify-center gap-4 md:justify-start">
        {socialLinks.map((social) => (
          <SocialButton key={social.name} social={social} />
        ))}
      </div>
    </div>
  );
};
