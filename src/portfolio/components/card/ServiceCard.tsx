import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { StandardCardData } from "./card.types";

const serviceCardVariants = cva(
  "bg-card rounded-lg border border-border p-8 transition-colors transition-shadow hover:shadow-lg",
  {
    variants: {
      tone: {
        primary: "hover:border-primary",
        secondary: "hover:border-secondary",
      },
      align: {
        left: "text-left",
        center: "text-center",
      },
    },
    defaultVariants: {
      tone: "primary",
      align: "left",
    },
  }
);

export const ServiceCard = ({
  id,
  icon: Icon,
  title,
  description,
  imageSrc,
  label,
  tags,
  color,
  cardLayout,
}: StandardCardData) => {
  const tone = color === "secondary" ? "secondary" : "primary";
  const align = cardLayout === "simple-center" ? "center" : "left";
  const showDescription = cardLayout !== "simple-left" && Boolean(description);

  return (
    <article data-card-id={id} className={serviceCardVariants({ tone, align })}>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      ) : null}

      {Icon ? (
        <div
          className={cn(
            "w-16 h-16 rounded-lg flex items-center justify-center mb-4",
            tone === "secondary" ? "bg-secondary/15" : "bg-muted",
            align === "center" ? "mx-auto" : ""
          )}
        >
          <Icon
            className={tone === "secondary" ? "text-secondary" : "text-primary"}
            size={32}
          />
        </div>
      ) : null}

      {label ? (
        <p className="text-sm font-medium text-muted-foreground mb-2">{label}</p>
      ) : null}

      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>

      {showDescription ? (
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      ) : null}

      {tags && tags.length > 0 ? (
        <div
          className={cn(
            "flex flex-wrap gap-2 mt-4",
            align === "center" ? "justify-center" : ""
          )}
        >
          {tags.map((tag) => (
            <span
              key={`${id}-${tag}`}
              className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
};
