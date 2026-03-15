import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SocialLink } from "@/portfolio/content/site";

type ContactSocialLinksCardProps = {
  title: string;
  links: readonly SocialLink[];
};

/**
 * Social contact alternatives shown in the sidebar.
 * It reuses the central social data source so footer and contact stay aligned.
 */
export const ContactSocialLinksCard = ({
  title,
  links,
}: ContactSocialLinksCardProps) => {
  return (
    <Card className="border-border/70 bg-linear-to-br from-secondary/6 via-card to-primary/6 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-colors hover:border-border/80 hover:bg-muted/45"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition-transform group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xl font-semibold text-foreground">
                  {link.name}
                </p>
                <p className="truncate text-sm text-muted-foreground">
                  {link.handle}
                </p>
              </div>

              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>
          );
        })}
      </CardContent>
    </Card>
  );
};
