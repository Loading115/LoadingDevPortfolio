import type {
  FloatingBadgeData,
  GalleryItemData,
} from "@/portfolio/components/gallery/gallery.types";

/**
 * Home gallery data.
 * Consumed by <ImageGallery /> to avoid repeated hardcoded JSX.
 */
export const homeGalleryItems: GalleryItemData[] = [
  // Main hero item in the gallery.
  {
    // Stable React key.
    id: "workspace",
    // Image URL.
    src: "https://images.unsplash.com/photo-1723032321111-7ea8b009f7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcGVyJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NzE4MDExOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    // Accessibility alt text.
    alt: "Game development workspace",
    // Badge label text.
    label: "Mi Espacio de Trabajo",
    // Subtitle shown below the badge.
    subtitle: "Donde la magia sucede",
    // Badge visual variant.
    badgeVariant: "default",
    // Specific visual adjustment for this hero card.
    className: "rounded-2xl",
    // Prioritize loading for this main image.
    priority: true,
  },
  // Secondary item 1.
  {
    // Stable React key.
    id: "retro",
    // Image URL.
    src: "https://images.unsplash.com/photo-1583634852966-130c15654305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGFyY2FkZSUyMGdhbWVzJTIwbmVvbnxlbnwxfHx8fDE3NzE4MDExOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    // Accessibility alt text.
    alt: "Retro gaming corner",
    // Badge label text.
    label: "Inspiracion Retro",
    // Orange-style variant.
    badgeVariant: "secondary",
  },
  // Secondary item 2.
  {
    // Stable React key.
    id: "art-design",
    // Image URL.
    src: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGdhbWUlMjBjaGFyYWN0ZXIlMjBkZXNpZ258ZW58MXx8fHwxNzcxODAxMTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    // Accessibility alt text.
    alt: "Character design render",
    // Badge label text.
    label: "Diseno de Arte",
    // Red-style variant.
    badgeVariant: "default",
  },
];

/**
 * Home floating badge configuration.
 */
export const homeFloatingBadge: FloatingBadgeData = {
  // Main text.
  text: "En Desarrollo",
  // Leading icon.
  icon: "sparkles",
  // Visual variant.
  variant: "secondary",
  // Render corner.
  position: "top-right",
  // Tilt effect with hover animation.
  rotate: true,
};
