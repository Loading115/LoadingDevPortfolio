import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";
import { ServiceCard } from "./ServiceCard";
import { isProjectCard, type StandardCardData } from "./card.types";

/**
 * Generic grid renderer for standard and project card collections.
 */
type CardsGridProps = {
  cards: StandardCardData[];
  columns?: 1 | 2 | 3;
  variant?: "service" | "project";
  className?: string;
};

const columnsClassMap: Record<
  NonNullable<CardsGridProps["columns"]>,
  string
> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
};

export const CardsGrid = ({
  cards,
  columns = 3,
  variant = "service",
  className,
}: CardsGridProps) => {
  return (
    <div
      className={cn(
        "grid gap-8",
        columnsClassMap[columns],
        variant === "project" ? "auto-rows-fr" : "",
        className,
      )}
    >
      {cards.map((card) =>
        variant === "project" && isProjectCard(card) ? (
          <ProjectCard key={card.id} {...card} />
        ) : (
          <ServiceCard key={card.id} {...card} />
        ),
      )}
    </div>
  );
};
