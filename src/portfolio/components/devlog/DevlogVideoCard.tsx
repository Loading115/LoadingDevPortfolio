import { CalendarDays, Eye, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getAccentHoverCardClass } from "@/portfolio/components/card/card.styles";
import type { DevlogVideoItem } from "./devlog.types";

type DevlogVideoCardProps = {
  video: DevlogVideoItem;
};

export const DevlogVideoCard = ({ video }: DevlogVideoCardProps) => {
  return (
    <a
      href={video.href}
      target="_blank"
      rel="noreferrer"
      aria-label={video.title}
      className="block rounded-[1.75rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <Card
        className={`group overflow-hidden rounded-[1.75rem] border-border/80 bg-card/95 shadow-none ${getAccentHoverCardClass("primary")}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border/70 bg-linear-to-br from-background via-muted to-background">
          {video.thumbnailSrc ? (
            <img
              src={video.thumbnailSrc}
              alt={video.thumbnailAlt ?? video.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--primary-rgb),0.2),transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(0,0,0,0.32))]" />
          )}

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute left-4 top-4 max-w-[72%] text-base font-semibold text-white/85">
            {video.thumbnailAlt ?? video.title}
          </div>

          <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white">
            <Eye className="h-3.5 w-3.5" />
            {video.views}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-[0_24px_60px_-24px_rgba(var(--primary-rgb),0.9)] transition duration-300 group-hover:scale-110">
              <Play className="ml-1 h-7 w-7" fill="currentColor" />
            </span>
          </div>
        </div>

        <CardContent className="space-y-4 p-5 sm:p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4 text-secondary" />
            <span>{video.publishedAt}</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
              {video.title}
            </h3>

            <p className="text-base leading-relaxed text-muted-foreground">
              {video.excerpt}
            </p>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};
