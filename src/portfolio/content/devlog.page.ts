import type {
  DevlogSubscriptionCta,
  DevlogUpdateItem,
  DevlogVideoItem,
} from "@/portfolio/components/devlog/devlog.types";

export const devlogPageHeaderContent = {
  title: "Devlog",
  subtitle:
    "Sigueme en mi viaje de desarrollo y descubre el proceso detras de mis juegos",
} as const;

export const devlogSectionContent = {
  updatesBadge: "Ultimas Actualizaciones",
  updatesTitle: "Actualizaciones del Desarrollo",
  videosBadge: "Contenido Reciente",
  videosTitle: "Ultimos Videos",
} as const;

// Add new entries at the top so the latest content stays first.
export const devlogUpdates: DevlogUpdateItem[] = [
  {
    id: "combat-system-devlog-15",
    title: "Nuevo Sistema de Combate - Devlog #15",
    publishedAt: "19 de febrero de 2026",
    categoryLabel: "Actualizacion",
    categoryTone: "primary",
    excerpt:
      "Esta semana implemente un nuevo sistema de combate dinamico que permite combos y ataques especiales. El feedback de la comunidad ha sido fundamental para mejorar las mecanicas.",
    href: "https://youtube.com/c/LoadingDev",
    ctaLabel: "Leer Mas",
  },
  {
    id: "performance-devlog-14",
    title: "Optimizacion de Rendimiento - Devlog #14",
    publishedAt: "12 de febrero de 2026",
    categoryLabel: "Tecnico",
    categoryTone: "secondary",
    excerpt:
      "Dedique esta semana a optimizar el rendimiento del juego. Reduje el tiempo de carga en un 40% y mejore los FPS en escenas complejas mediante object pooling y LOD.",
    href: "https://youtube.com/c/LoadingDev",
    ctaLabel: "Leer Mas",
  },
  {
    id: "enemy-ai-devlog-13",
    title: "Nueva IA para Enemigos - Devlog #13",
    publishedAt: "5 de febrero de 2026",
    categoryLabel: "Diseno",
    categoryTone: "primary",
    excerpt:
      "Trabaje en patrones de comportamiento mas claros para los enemigos elite, con mejores telegraphs y ventanas de reaccion para que el combate se sienta desafiante pero justo.",
    href: "https://youtube.com/c/LoadingDev",
    ctaLabel: "Leer Mas",
  },
];

export const devlogRecentVideos: DevlogVideoItem[] = [
  {
    id: "week-8-progress",
    title: "Making an Indie Game: Week 8 Progress",
    publishedAt: "22 de febrero de 2026",
    views: "1.2K",
    excerpt:
      "Join me as I show the latest progress on my current project. This week we focused on improving the combat feel and encounter pacing.",
    href: "https://youtube.com/c/LoadingDev",
  },
  {
    id: "boss-fight-mechanic",
    title: "How I Created This Boss Fight Mechanic",
    publishedAt: "20 de febrero de 2026",
    views: "856",
    excerpt:
      "A breakdown of the boss prototype, from attack cadence and phase logic to the visual feedback that makes the fight readable.",
    href: "https://youtube.com/c/LoadingDev",
  },
];

export const devlogSubscribeCta: DevlogSubscriptionCta = {
  title: "Suscribete!",
  description:
    "Recibe actualizaciones semanales sobre el desarrollo de mis juegos",
  buttonLabel: "Suscribirse",
  href: "https://youtube.com/c/LoadingDev?sub_confirmation=1",
};
