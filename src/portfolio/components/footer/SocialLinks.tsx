import { SOCIALS } from "@/lib/constants";
import { SocialButton } from "./SocialButton";

//List of links to social media, maps through the SOCIALS constant and renders a SocialButton for each one
export const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="font-semibold mb-4">Follow Me</h3>

      <div className="flex gap-4 justify-center md:justify-start">
        {Object.values(SOCIALS).map((social) => (
          <SocialButton key={social.name} social={social} />
        ))}
      </div>
    </div>
  );
};
