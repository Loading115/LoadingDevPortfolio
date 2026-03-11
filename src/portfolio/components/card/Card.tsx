import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { ServiceCard } from "./ServiceCard";
import { isFeaturedCard, type CardData } from "./card.types";

export const Card = (card: CardData) => {
  if (isFeaturedCard(card)) {
    return <FeaturedProjectCard {...card} />;
  }

  return <ServiceCard {...card} />;
};
