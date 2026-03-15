import { Code, Flame, Gamepad2, Heart, Users, Zap } from "lucide-react";
import {
  isFeaturedCard,
  type CardData,
  type FeaturedCardData,
  type ProjectCardData,
  type StandardCardData,
} from "@/portfolio/components/card/card.types";

/**
 * Home section service cards.
 */
export const homeCardsData: StandardCardData[] = [
  {
    id: "design",
    icon: Gamepad2,
    title: "Diseno de Juegos",
    description:
      "Creo mecanicas innovadoras y experiencias de juego equilibradas que mantienen a los jugadores comprometidos.",
    color: "primary",
  },
  {
    id: "development",
    icon: Code,
    title: "Desarrollo",
    description:
      "Programo sistemas robustos y optimizados utilizando las mejores practicas de desarrollo de videojuegos.",
    color: "secondary",
  },
  {
    id: "passion",
    icon: Flame,
    title: "Pasion Indie",
    description:
      "Trabajo de forma independiente con total libertad creativa para desarrollar proyectos unicos y personales.",
    color: "primary",
  },
];

/**
 * About section value cards (compact style).
 */
export const aboutCardsData: CardData[] = [
  {
    id: "passion",
    icon: Heart,
    title: "Pasion",
    description: "Amo lo que hago y pongo mi corazon en cada proyecto",
    cardLayout: "small-card",
    color: "primary",
  },
  {
    id: "innovacion",
    icon: Zap,
    title: "Innovacion",
    description: "Siempre busco nuevas formas de sorprender a los jugadores",
    cardLayout: "small-card",
    color: "primary",
  },
  {
    id: "comunidad",
    icon: Users,
    title: "Comunidad",
    description: "Valoro el feedback y la conexion con mi audiencia",
    cardLayout: "small-card",
    color: "primary",
  },
];

/**
 * Projects section cards:
 * - one featured card
 * - multiple regular project cards
 */
export const projectsCardsData: CardData[] = [
  {
    id: "neon-racer-featured",
    title: "Neon Racer",
    description:
      "Juego de carreras futurista con estetica cyberpunk y musica synthwave.",
    imageSrc:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&w=1600&q=80",
    label: "En Desarrollo",
    tags: ["Racing", "3D", "Unreal Engine"],
    color: "secondary",
    cardLayout: "info-big-image",
    link: "/projects/neon-racer",
    buttonText: "Ver Detalles",
  },
  {
    id: "arcade-racer",
    title: "Pixel Quest Adventures",
    description:
      "Un RPG pixel art con combate por turnos y una historia epica de fantasia.",
    imageSrc:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&w=1200&q=80",
    label: "Completado",
    tags: ["RPG", "Pixel Art", "Unity"],
    cardLayout: "project",
    link: "/projects/pixel-quest",
    buttonText: "Ver Proyecto",
  },
  {
    id: "puzzle-chronicles",
    title: "Neon Racer",
    description:
      "Juego de carreras futurista con estetica cyberpunk y musica synthwave.",
    imageSrc:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
    label: "En Desarrollo",
    tags: ["Racing", "3D", "Unreal Engine"],
    cardLayout: "project",
    link: "/projects/neon-racer",
    buttonText: "Ver Proyecto",
  },
  {
    id: "battle-loop",
    title: "Mystic Tower Defense",
    description:
      "Torre defense con elementos de magia y estrategia en tiempo real.",
    imageSrc:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80",
    label: "Planeado",
    tags: ["Strategy", "2D", "Godot"],
    cardLayout: "project",
    link: "/projects/mystic-tower-defense",
    buttonText: "Ver Proyecto",
  },
  {
    id: "tools-suite",
    title: "Tools Suite",
    description: "Herramientas internas para acelerar iteraciones de diseno.",
    imageSrc:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    label: "Interno",
    tags: ["Tools", "Pipeline"],
    cardLayout: "project",
    link: "/projects/tools-suite",
    buttonText: "Ver Proyecto",
  },
  {
    id: "core-refactor",
    title: "Core Refactor",
    description:
      "Refactor de arquitectura base para mejorar mantenibilidad y rendimiento.",
    imageSrc:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&w=1200&q=80",
    label: "Activo",
    tags: ["Architecture", "Performance"],
    cardLayout: "project",
    link: "/projects/core-refactor",
    buttonText: "Ver Proyecto",
  },
];

/**
 * Source of truth for cards grouped by page section.
 */
export const cardsBySection = {
  home: homeCardsData,
  projects: projectsCardsData,
  about: aboutCardsData,
} as const;

export type CardsSection = keyof typeof cardsBySection;

export type ProjectDetailsData = Pick<
  FeaturedCardData,
  "id" | "title" | "description" | "imageSrc" | "label" | "tags" | "link"
>;

/**
 * Returns all cards configured for a specific section.
 */
export const getCardsBySection = (section: CardsSection): readonly CardData[] =>
  cardsBySection[section];

/**
 * Filters out featured cards for grid-only renderers.
 */
export const getGridCardsBySection = (
  section: CardsSection,
): StandardCardData[] =>
  getCardsBySection(section).filter(
    (card): card is StandardCardData => !isFeaturedCard(card),
  );

/**
 * Returns an explicit featured card by id, or the first available one.
 */
export const getFeaturedCardBySection = (
  section: CardsSection,
  featuredCardId?: string,
): FeaturedCardData | undefined => {
  const cards = getCardsBySection(section);

  // Prefer an explicit id, otherwise pick the first featured card.
  if (featuredCardId) {
    const explicitCard = cards.find((card) => card.id === featuredCardId);
    if (explicitCard && isFeaturedCard(explicitCard)) {
      return explicitCard;
    }
  }

  return cards.find(isFeaturedCard);
};

const hasProjectDetails = (
  card: CardData,
): card is FeaturedCardData | ProjectCardData =>
  Boolean(
    card.link &&
      card.imageSrc &&
      card.description &&
      card.label &&
      card.tags?.length,
  );

export const getProjectDetailsBySlug = (
  projectSlug: string,
): ProjectDetailsData | undefined => {
  const targetPath = `/projects/${projectSlug}`;
  const projectCard = projectsCardsData.find(
    (card): card is FeaturedCardData | ProjectCardData =>
      hasProjectDetails(card) && card.link === targetPath,
  );

  if (!projectCard) {
    return undefined;
  }

  return {
    id: projectCard.id,
    title: projectCard.title,
    description: projectCard.description,
    imageSrc: projectCard.imageSrc,
    label: projectCard.label,
    tags: projectCard.tags,
    link: projectCard.link,
  };
};
