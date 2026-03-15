import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TagList } from "@/portfolio/components/tag/TagList";
import { cn } from "@/lib/utils";
import { getAccentHoverCardClass } from "./card.styles";
import type { ProjectCardData } from "./card.types";

export const ProjectCard = ({
  id,
  title,
  imageSrc,
  label,
  description,
  tags,
  link,
  buttonText = "Ver Proyecto",
}: ProjectCardData) => {
  return (
    <article
      data-card-id={id}
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card",
        getAccentHoverCardClass(),
      )}
    >
      <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-4 min-h-[96px]">
          <h3 className="text-3xl font-bold text-foreground">{title}</h3>
          <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white">
            {label}
          </span>
        </div>

        <p className="text-muted-foreground text-xl leading-relaxed mb-5 min-h-[96px]">
          {description}
        </p>

        <TagList tags={tags} keyPrefix={id} className="mb-6 min-h-[52px]" />

        <Button
          asChild
          variant="outline"
          className="w-full text-lg font-semibold h-11 border-border mt-auto"
        >
          <Link to={link}>
            {buttonText}
            <ExternalLink className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
};
