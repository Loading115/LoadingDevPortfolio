import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAccentHoverCardClass } from "@/portfolio/components/card/card.styles";
import type { DevlogUpdateItem } from "./devlog.types";

type DevlogUpdateCardProps = {
  update: DevlogUpdateItem;
};

const badgeToneClasses: Record<NonNullable<DevlogUpdateItem["categoryTone"]>, string> =
  {
    primary: "border-transparent bg-secondary text-white",
    secondary: "border-transparent bg-primary/90 text-white",
  };

export const DevlogUpdateCard = ({ update }: DevlogUpdateCardProps) => {
  const categoryTone = update.categoryTone ?? "primary";

  return (
    <Card
      className={`rounded-[2rem] border-border/80 bg-linear-to-r from-card via-card to-muted/20 shadow-none ${getAccentHoverCardClass("primary")}`}
    >
      <CardHeader className="space-y-6 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-base text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>{update.publishedAt}</span>
          </div>

          <Badge
            className={`w-fit rounded-full px-3.5 py-1 text-xs font-semibold ${badgeToneClasses[categoryTone]}`}
          >
            {update.categoryLabel}
          </Badge>
        </div>

        <CardTitle className="text-2xl leading-tight text-foreground sm:text-[2rem]">
          {update.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-6 pb-0 text-lg leading-relaxed text-muted-foreground sm:px-8">
        <p>{update.excerpt}</p>
      </CardContent>

      <CardFooter className="p-6 pt-8 sm:p-8 sm:pt-8">
        <Button
          asChild
          variant="link"
          className="h-auto p-0 text-lg font-semibold text-primary no-underline hover:text-primary/80 hover:no-underline"
        >
          <a href={update.href} target="_blank" rel="noreferrer">
            {update.ctaLabel ?? "Leer Mas"}
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
