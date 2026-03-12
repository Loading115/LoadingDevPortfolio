import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Props for the standalone About history visual block.
 */
type AboutHistoryGalleryElementProps = {
  src: string;
  alt: string;
  badgeText: string;
  className?: string;
};

/**
 * Renders a single hero image with a fixed-position achievement badge.
 * This component is intentionally isolated from the generic gallery system
 * to avoid side effects in other pages.
 */
export const AboutHistoryGalleryElement = ({
  src,
  alt,
  badgeText,
  className,
}: AboutHistoryGalleryElementProps) => {
  return (
    <div
      className={cn(
        "relative h-[360px] overflow-hidden rounded-2xl border border-secondary/90 sm:h-[460px]",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        className="h-full w-full object-cover"
      />

      <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-sm font-bold text-white shadow-lg sm:px-5 sm:py-2.5 sm:text-base">
        <Trophy className="h-4 w-4" />
        <span>{badgeText}</span>
      </div>
    </div>
  );
};
