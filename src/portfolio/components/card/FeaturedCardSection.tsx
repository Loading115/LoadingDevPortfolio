import { cn } from "@/lib/utils";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import type { FeaturedCardData } from "./card.types";

type FeaturedCardSectionProps = {
  card?: FeaturedCardData;
  className?: string;
};

export const FeaturedCardSection = ({
  card,
  className,
}: FeaturedCardSectionProps) => {
  if (!card) return null;

  return (
    <div className={cn("grid grid-cols-1", className)}>
      <FeaturedProjectCard {...card} />
    </div>
  );
};
