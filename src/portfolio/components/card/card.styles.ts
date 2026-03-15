import type { CardColor } from "./card.types";

const hoverToneClassMap: Record<CardColor, string> = {
  primary:
    "hover:border-primary/35 hover:shadow-[0_24px_80px_-40px_rgba(var(--primary-rgb),0.45)] focus-within:border-primary/35 focus-within:shadow-[0_24px_80px_-40px_rgba(var(--primary-rgb),0.45)]",
  secondary:
    "hover:border-secondary/45 hover:shadow-[0_24px_80px_-40px_rgba(var(--secondary-rgb),0.45)] focus-within:border-secondary/45 focus-within:shadow-[0_24px_80px_-40px_rgba(var(--secondary-rgb),0.45)]",
};

export const getAccentHoverCardClass = (tone: CardColor = "primary") =>
  `transition duration-300 hover:-translate-y-1 focus-within:-translate-y-1 ${hoverToneClassMap[tone]}`;
