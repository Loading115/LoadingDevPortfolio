import type { SocialLink } from "@/portfolio/content/site";

type Props = {
  social: SocialLink;
};

export const SocialButton = ({ social }: Props) => {
  const Icon = social.icon;

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white transition duration-200 hover:scale-105 hover:bg-secondary/90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/40"
      aria-label={`Visit ${social.name}`}
      title={`Visit ${social.name}`}
    >
      <Icon size={20} aria-hidden="true" focusable="false" />
    </a>
  );
};
