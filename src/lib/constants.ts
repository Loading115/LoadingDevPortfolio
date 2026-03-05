import { Youtube, Twitter, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const SITE_NAME = "Loading Dev";
export const SITE_TAGLINE = "Indie Game Developer";
export const SITE_DESCRIPTION = "Transformando Ideas en Experiencias Jugables";
export const FOOTER_DESCRIPTION =
  "Indie game developer creating unique gaming experiences";

export const SOCIALS = {
  youtube: {
    name: "YouTube",
    url: "https://youtube.com/c/LoadingDev",
    handle: "@LoadingDev",
    icon: Youtube as LucideIcon,
  },
  twitter: {
    name: "Twitter / X",
    url: "https://twitter.com/LoadingDev",
    handle: "@LoadingDev",
    icon: Twitter as LucideIcon,
  },
  discord: {
    name: "Discord",
    url: "https://discord.gg/loadingdev",
    handle: "LoadingDev Community",
    icon: MessageCircle as LucideIcon,
  },
} as const;

export const PROJECTS = [
  {
    id: "neon-racer",
    title: "Neon Racer",
    description:
      "Juego de carreras futurista con estética cyberpunk y música synthwave.",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=400&fit=crop",
    status: "En Desarrollo",
    statusColor: "bg-secondary",
    tags: ["Racing", "3D", "Unreal Engine"],
    link: "/projects/neon-racer",
    isCurrent: true,
  },
  {
    id: "pixel-quest",
    title: "Pixel Quest Adventures",
    description:
      "Un RPG pixel art con combate por turnos y una historia épica de fantasía.",
    image:
      "https://images.unsplash.com/photo-1538481143081-0f0ca3fdc282?w=600&h=400&fit=crop",
    status: "Completado",
    statusColor: "bg-green-500",
    tags: ["RPG", "Pixel Art", "Unity"],
    link: "/projects/pixel-quest",
    isCurrent: false,
  },
  {
    id: "mystic-tower",
    title: "Mystic Tower Defense",
    description:
      "Torre defense con elementos de magia y estrategia en tiempo real.",
    image:
      "https://images.unsplash.com/photo-1545821457-6de0c9c0c9eb?w=600&h=400&fit=crop",
    status: "Planeado",
    statusColor: "bg-gray-400",
    tags: ["Strategy", "2D", "Godot"],
    link: "/projects/mystic-tower",
    isCurrent: false,
  },
];

export const SKILLS = {
  technical: [
    { name: "Unity", category: "Engine", icon: "🎮" },
    { name: "Unreal Engine", category: "Engine", icon: "🎮" },
    { name: "C#", category: "Language", icon: "</>" },
    { name: "C++", category: "Language", icon: "</>" },
    { name: "Game Design", category: "Design", icon: "🎨" },
    { name: "3D Modeling", category: "Art", icon: "✏️" },
  ],
  tools: [
    {
      category: "Game Engines",
      items: ["Unity", "Unreal Engine", "Godot"],
      icon: "🎮",
    },
    {
      category: "Art & Design",
      items: ["Photoshop", "Blender", "Aseprite"],
      icon: "🎨",
    },
    {
      category: "Programming",
      items: ["C#", "C++", "JavaScript", "Python"],
      icon: "</>",
    },
  ],
};

export const VALUES = [
  {
    title: "Pasión",
    description: "Amo lo que hago y pongo mi corazón en cada proyecto",
    icon: "❤️",
  },
  {
    title: "Innovación",
    description: "Siempre busco nuevas formas de sorprender a los jugadores",
    icon: "⚡",
  },
  {
    title: "Comunidad",
    description: "Valoro el feedback y la conexión con mi audiencia",
    icon: "👥",
  },
];

export const STATS = [
  { label: "Proyectos", value: "5+" },
  { label: "Publicados", value: "3" },
  { label: "Jugadores", value: "1K+" },
];

export const DEVLOG_POSTS = [
  {
    id: 1,
    title: "Nuevo Sistema de Combate - Devlog #15",
    date: "19 de febrero de 2026",
    category: "Actualización",
    excerpt:
      "Esta semana implementé un nuevo sistema de combate dinámico que permite combos y ataques especiales. El feedback de la comunidad ha sido fundamental para mejorar las mecánicas.",
    link: "/devlog/new-combat-system",
  },
  {
    id: 2,
    title: "Optimización de Rendimiento - Devlog #14",
    date: "12 de febrero de 2026",
    category: "Técnico",
    excerpt:
      "Dediqué esta semana a optimizar el rendimiento del juego. Reduje el tiempo de carga en un 40% y mejoré los FPS en escenas complejas mediante object pooling y LOD.",
    link: "/devlog/performance-optimization",
  },
];

export const CONTACT_INFO = {
  email: "contact@loadingdev.com",
  responseTime:
    "Normalmente respondo dentro de 24-48 horas durante días laborables.",
};

export const BRAND_COLORS = {
  primary: "#EF4136",
  secondary: "#F7941D",
  dark: "#1D1D1D",
  light: "#FFFFFF",
};

export const YOUTUBE_CHANNEL_ID = "UCLoadingDev";
