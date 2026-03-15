import { MessageCircle, Twitter, Youtube } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SocialLink = {
  name: string;
  url: string;
  handle: string;
  icon: LucideIcon;
};

export const siteConfig = {
  name: "Loading Dev",
  tagline: "Indie Game Developer",
  description: "Transformando Ideas en Experiencias Jugables",
} as const;

export const footerContent = {
  description:
    "Desarrollador indie creando experiencias jugables con personalidad propia.",
  socialHeading: "Sigueme",
  legalLine: "Todos los derechos reservados.",
  closingLine: "Creado con pasion por el desarrollo de videojuegos",
} as const;

export const socialLinks: readonly SocialLink[] = [
  {
    name: "YouTube",
    url: "https://youtube.com/c/LoadingDev",
    handle: "@LoadingDev",
    icon: Youtube,
  },
  {
    name: "Twitter / X",
    url: "https://twitter.com/LoadingDev",
    handle: "@LoadingDev",
    icon: Twitter,
  },
  {
    name: "Discord",
    url: "https://discord.gg/loadingdev",
    handle: "LoadingDev Community",
    icon: MessageCircle,
  },
] as const;
