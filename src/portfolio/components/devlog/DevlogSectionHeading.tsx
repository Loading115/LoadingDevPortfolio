import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type DevlogSectionHeadingProps = {
  icon: LucideIcon;
  badgeLabel: string;
  title: string;
  className?: string;
};

export const DevlogSectionHeading = ({
  icon: Icon,
  badgeLabel,
  title,
  className,
}: DevlogSectionHeadingProps) => {
  return (
    <div className={cn("space-y-5", className)}>
      <Badge
        variant="outline"
        className="inline-flex rounded-full border-border/80 bg-muted/60 px-5 py-2.5 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur-sm"
      >
        <span className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-primary" />
          {badgeLabel}
        </span>
      </Badge>

      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
};
