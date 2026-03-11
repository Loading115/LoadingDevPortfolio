import { cn } from "@/lib/utils";
import { GalleryItem } from "./GalleryItem";
import { FloatingBadge } from "./FloatingBadge";
import { galleryDefaultItemClasses, galleryLayoutClasses } from "./gallery.layouts";
import type { ImageGalleryProps } from "./gallery.types";

/**
 * Gallery orchestrator component:
 * - builds grid by layout
 * - renders each item
 * - injects optional floating badge
 */
export const ImageGallery = ({
  layout,
  items,
  floatingBadge,
  className,
}: ImageGalleryProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Main item grid */}
      <div className={galleryLayoutClasses[layout]}>
        {items.map((item, index) => {
          // hero-mosaic rule:
          // first item becomes hero (full width on >= sm and taller height).
          const defaultItemClass =
            layout === "hero-mosaic" && index === 0
              ? "sm:col-span-2 h-64"
              : galleryDefaultItemClasses[layout];

          return (
            <GalleryItem
              key={item.id}
              item={item}
              className={defaultItemClass}
            />
          );
        })}
      </div>

      {/* Decorative overlay badge */}
      {floatingBadge ? <FloatingBadge badge={floatingBadge} /> : null}
    </div>
  );
};
