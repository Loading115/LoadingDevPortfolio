import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import type { GalleryItemData } from "./gallery.types";

/**
 * Props for a single gallery item component.
 */
type Props = {
  /** Item business/visual data. */
  item: GalleryItemData;
  /** Base classes injected by layout (height, spans, etc.). */
  className?: string;
};

/**
 * Maps overlay mode to concrete Tailwind classes.
 */
const overlayClassMap = {
  none: "",
  "gradient-bottom": "bg-gradient-to-t from-black/60 to-transparent",
} as const;

/**
 * Renders a reusable image card with:
 * - image
 * - optional overlay
 * - optional badge/title
 * - optional internal or external link
 */
export const GalleryItem = ({ item, className }: Props) => {
  // Apply default overlay mode when item.overlay is not provided.
  const overlayMode = item.overlay ?? "gradient-bottom";

  // Render overlay content only when there is text to show.
  const hasOverlayContent = Boolean(item.label || item.subtitle);

  // Core visual content (image + optional overlay).
  const content = (
    <>
      <img
        src={item.src}
        alt={item.alt}
        loading={item.priority ? "eager" : "lazy"}
        decoding="async"
        className={cn(
          "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
          item.imageClassName
        )}
      />

      {/* Bottom-positioned overlay used for label/subtitle */}
      {hasOverlayContent ? (
        <div
          className={cn(
            "absolute inset-0 flex items-end p-4",
            overlayClassMap[overlayMode]
          )}
        >
          <div>
            {item.label ? (
              <Badge
                variant={item.badgeVariant ?? "default"}
                className={cn("mb-2 border-0 text-white", item.badgeClassName)}
              >
                {item.label}
              </Badge>
            ) : null}

            {item.subtitle ? (
              <p className="text-sm text-white">{item.subtitle}</p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );

  // Shared wrapper classes for linked and non-linked variants.
  const wrapperClass = cn(
    "relative overflow-hidden rounded-xl group",
    className,
    item.className
  );

  // If item is clickable, render external or internal link wrapper.
  if (item.href) {
    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={wrapperClass}
        >
          {content}
        </a>
      );
    }

    return (
      <NavLink to={item.href} className={wrapperClass}>
        {content}
      </NavLink>
    );
  }

  // Fallback when item has no href.
  return <div className={wrapperClass}>{content}</div>;
};
