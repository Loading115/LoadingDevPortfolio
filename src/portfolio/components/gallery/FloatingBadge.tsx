import type { ComponentType } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Clock3, Sparkles, Trophy } from "lucide-react";
import { floatingBadgePositionClasses } from "./gallery.layouts";
import type { FloatingBadgeData, FloatingBadgeIcon } from "./gallery.types";

/**
 * Props for the floating badge component.
 */
type Props = {
  /** Full badge configuration object. */
  badge: FloatingBadgeData;
};

/**
 * Icon component map by supported icon key.
 */
const iconMap: Record<FloatingBadgeIcon, ComponentType<{ className?: string }>> = {
  sparkles: Sparkles,
  trophy: Trophy,
  clock: Clock3,
};

/**
 * Renders a reusable floating badge in a gallery corner.
 */
export const FloatingBadge = ({ badge }: Props) => {
  // Default position to reduce required setup per data object.
  const position = badge.position ?? "top-right";

  // Rotation is enabled by default for a dynamic visual effect.
  const shouldRotate = badge.rotate ?? true;

  // Resolve icon component from configured icon key.
  const Icon = badge.icon ? iconMap[badge.icon] : null;

  // Apply tilt direction based on corner so badge points toward center.
  const tiltClass = shouldRotate
    ? position.startsWith("top")
      ? "rotate-12 hover:rotate-0"
      : "-rotate-12 hover:rotate-0"
    : "";

  return (
    <Badge
      variant={badge.variant ?? "secondary"}
      className={cn(
        "absolute z-10 border-0 px-6 py-3 text-base font-bold shadow-lg text-white transition-transform",
        floatingBadgePositionClasses[position],
        tiltClass,
        badge.className
      )}
    >
      {Icon ? <Icon className="w-5 h-5" /> : null}
      {badge.text}
    </Badge>
  );
};
