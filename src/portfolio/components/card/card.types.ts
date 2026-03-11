import type { LucideIcon } from "lucide-react";

export type CardColor = "primary" | "secondary";
export type StandardCardLayout =
  | "description"
  | "simple-left"
  | "simple-center"
  | "info-image"
  | "project";
export type FeaturedCardLayout = "info-big-image" | "big-image";
export type CardLayout = StandardCardLayout | FeaturedCardLayout;

type BaseCardData = {
  id: string;
  title: string;
  color?: CardColor;
  description?: string;
  imageSrc?: string;
  label?: string;
  tags?: string[];
  link?: string;
  buttonText?: string;
};

export type StandardCardData = BaseCardData & {
  cardLayout?: StandardCardLayout;
  icon?: LucideIcon;
};

export type ProjectCardData = Omit<
  StandardCardData,
  "imageSrc" | "description" | "label" | "tags" | "link"
> & {
  cardLayout: "project";
  imageSrc: string;
  description: string;
  label: string;
  tags: string[];
  link: string;
};

export type FeaturedCardData = Omit<
  BaseCardData,
  "imageSrc" | "description" | "label" | "tags" | "link" | "buttonText"
> & {
  cardLayout: FeaturedCardLayout;
  imageSrc: string;
  description: string;
  label: string;
  tags: string[];
  link: string;
  buttonText: string;
  icon?: never;
};

export type CardData = StandardCardData | FeaturedCardData;

/**
 * Narrow card layouts that should render as a full-width featured card.
 */
export const isFeaturedCardLayout = (
  layout?: CardLayout,
): layout is FeaturedCardLayout =>
  layout === "big-image" || layout === "info-big-image";

/**
 * Type guard to select the featured card variant safely.
 */
export const isFeaturedCard = (card: CardData): card is FeaturedCardData =>
  isFeaturedCardLayout(card.cardLayout);

/**
 * Type guard for project list cards with image, status and CTA.
 */
export const isProjectCard = (
  card: StandardCardData,
): card is ProjectCardData => card.cardLayout === "project";
