import { siteConfig } from "@/portfolio/content/site";

export const homeHeroContent = {
  badgeText: siteConfig.tagline,
  title: siteConfig.description,
  highlightedText: "Experiencias Jugables",
  description:
    "Soy un desarrollador indie apasionado por crear juegos unicos y memorables. Combino creatividad, codigo y arte para dar vida a mundos interactivos que inspiran y entretienen.",
  primaryAction: {
    label: "Ver Proyectos",
    to: "/projects",
  },
  secondaryAction: {
    label: "Contacto",
    to: "/contact",
  },
} as const;

export const homeServicesSectionContent = {
  title: "Que Hago?",
  subtitle: "Tres pilares fundamentales de mi trabajo como desarrollador indie",
} as const;

export const homeFeaturedProjectSectionContent = {
  title: "Proyecto Actual",
  subtitle: "Mira en lo que estoy trabajando ahora mismo",
} as const;

export const homeCtaSectionContent = {
  title: "Listo para Colaborar?",
  subtitle:
    "Si tienes una idea de juego o quieres trabajar juntos en un proyecto, me encantaria escuchar de ti.",
  action: {
    label: "Comencemos a Crear",
    to: "/contact",
  },
} as const;
