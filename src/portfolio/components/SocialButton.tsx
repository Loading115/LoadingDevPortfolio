import type { LucideIcon } from "lucide-react";

type Props = {
  social: {
    name: string;
    url: string;
    icon: LucideIcon;
  };
};

//Individual social button component, receives the social data and icon as props
export const SocialButton = ({ social }: Props) => {
  const Icon = social.icon;
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
                  w-10 h-10 rounded-lg bg-primary text-white
                  flex items-center justify-center
                  hover:bg-secondary/90 hover:scale-105 active:scale-95
                  transition duration-200
                  focus:outline-none focus:ring-2 focus:ring-primary/40
                "
      aria-label={`Visit ${social.name}`}
      title={`Visit ${social.name}`}
    >
      <Icon size={20} aria-hidden="true" focusable="false" />
    </a>
  );
};
