import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { isSmallCard, type StandardCardData } from "./card.types";

/**
 * Shared container styles for default service-card layouts.
 */
const serviceCardVariants = cva(
  "bg-card rounded-lg border border-border transition-colors transition-shadow",
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
      size: {
        default: "p-8 hover:shadow-lg",
        small: "p-4 hover:shadow-sm",
      },
    },
    defaultVariants: {
      tone: "primary",
      align: "left",
      size: "default",
    },
  }
);

/**
 * Renders all standard non-project cards.
 * A compact branch is used for "small-card" layout in the About page.
 */
export const ServiceCard = (card: StandardCardData) => {
  const { id, icon: Icon, title, description, imageSrc, label, tags, color, cardLayout } =
    card;
  const tone = color === "secondary" ? "secondary" : "primary";
  const align = cardLayout === "simple-center" ? "center" : "left";
  const compactCard = isSmallCard(card);
  const showDescription = cardLayout !== "simple-left" && Boolean(description);
  const iconToneClass = tone === "secondary" ? "text-secondary" : "text-primary";

  // Compact style used by About value cards (icon + title + short line).
  if (compactCard) {
    return (
      <article
        data-card-id={id}
        className="border-0 bg-transparent p-0 shadow-none"
      >
        <div className="flex items-start gap-3">
          {Icon ? (
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Icon className={iconToneClass} size={18} />
            </div>
          ) : null}

          <div>
            <h3 className="mb-0.5 text-xl font-bold text-foreground">{title}</h3>
            {description ? (
              <p className="text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  // Default service-card style used in other sections.
  return (
    <article
      data-card-id={id}
      className={serviceCardVariants({ tone, align, size: "default" })}
    >
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
          <Icon className={iconToneClass} size={32} />
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
