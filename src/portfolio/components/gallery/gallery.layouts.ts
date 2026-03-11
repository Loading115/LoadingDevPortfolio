import type { FloatingBadgePosition, GalleryLayout } from "./gallery.types";

/**
 * Tailwind class map per gallery layout.
 * Defines column count and base spacing.
 */
export const galleryLayoutClasses: Record<GalleryLayout, string> = {
  "hero-mosaic": "grid grid-cols-1 sm:grid-cols-2 gap-4",
  split: "grid grid-cols-1 md:grid-cols-2 gap-4",
  single: "grid grid-cols-1",
};

/**
 * Default height per item depending on selected layout.
 * Used when an item does not provide a custom height class.
 */
export const galleryDefaultItemClasses: Record<GalleryLayout, string> = {
  "hero-mosaic": "h-40",
  split: "h-56",
  single: "h-64",
};

/**
 * Absolute floating-badge corner positions.
 */
export const floatingBadgePositionClasses: Record<FloatingBadgePosition, string> = {
  "top-left": "-top-4 -left-4",
  "top-right": "-top-4 -right-4",
  "bottom-left": "-bottom-4 -left-4",
  "bottom-right": "-bottom-4 -right-4",
};
