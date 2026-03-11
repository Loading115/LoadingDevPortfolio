/**
 * Visual tones supported by the shadcn Badge component.
 */
export type BadgeTone = "default" | "secondary" | "destructive" | "outline";

/**
 * Available gallery layouts.
 */
export type GalleryLayout = "hero-mosaic" | "split" | "single";

/**
 * Overlay modes used to improve text readability on top of images.
 */
export type OverlayMode = "none" | "gradient-bottom";

/**
 * Configuration for a single image card inside the gallery.
 */
export type GalleryItemData = {
  /** Unique and stable id used as React key. */
  id: string;
  /** Image URL to render. */
  src: string;
  /** Alternate text for accessibility. */
  alt: string;
  /** Primary text shown in the overlay badge. */
  label?: string;
  /** Secondary text shown below the badge. */
  subtitle?: string;
  /** Badge visual variant (color style). */
  badgeVariant?: BadgeTone;
  /** Extra classes to customize the badge per item. */
  badgeClassName?: string;
  /** Overlay type rendered on top of the image. */
  overlay?: OverlayMode;
  /** Optional URL to make the item clickable. */
  href?: string;
  /** If true, opens link in a new tab with secure rel attributes. */
  external?: boolean;
  /** Extra classes for the item wrapper. */
  className?: string;
  /** Extra classes applied directly to the <img> element. */
  imageClassName?: string;
  /** If true, image uses eager loading (priority image). */
  priority?: boolean;
};

/**
 * Supported positions for the floating badge.
 */
export type FloatingBadgePosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

/**
 * Supported icon names for the floating badge.
 */
export type FloatingBadgeIcon = "sparkles" | "trophy" | "clock";

/**
 * Floating badge configuration (corner, icon, rotation, style).
 */
export type FloatingBadgeData = {
  /** Main text displayed in the badge. */
  text: string;
  /** Optional icon rendered before the text. */
  icon?: FloatingBadgeIcon;
  /** Absolute position inside the gallery relative wrapper. */
  position?: FloatingBadgePosition;
  /** Badge visual variant. */
  variant?: BadgeTone;
  /** Enables or disables badge tilt effect. */
  rotate?: boolean;
  /** Extra classes for one-off style overrides. */
  className?: string;
};

/**
 * Top-level props to render a full gallery.
 */
export type ImageGalleryProps = {
  /** Gallery composition type (hero, split, single). */
  layout: GalleryLayout;
  /** List of image items to render. */
  items: GalleryItemData[];
  /** Optional floating badge. */
  floatingBadge?: FloatingBadgeData;
  /** Extra classes for the root wrapper. */
  className?: string;
};
