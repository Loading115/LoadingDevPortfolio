import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type TagListProps = {
  tags: readonly string[];
  tone?: "muted" | "inverse";
  className?: string;
  keyPrefix?: string;
};

const toneClassMap: Record<NonNullable<TagListProps["tone"]>, string> = {
  muted:
    "border-border/80 bg-muted/40 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
  inverse:
    "border-white/15 bg-black/30 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm",
};

export const TagList = ({
  tags,
  tone = "muted",
  className,
  keyPrefix = "tag",
}: TagListProps) => {
  return (
    <div className={cn("flex flex-wrap content-start gap-2.5", className)}>
      {tags.map((tag, index) => (
        <Badge
          key={`${keyPrefix}-${tag}-${index}`}
          variant="outline"
          className={cn(
            "rounded-xl px-3.5 py-1.5 text-xs font-semibold leading-none",
            toneClassMap[tone],
          )}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
};
