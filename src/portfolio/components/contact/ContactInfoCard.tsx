import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ContactInfoCardProps = {
  title: string;
  description?: string;
  icon?: LucideIcon;
  accent?: "warm" | "neutral";
  className?: string;
  children?: ReactNode;
};

/**
 * Shared wrapper for the secondary cards shown in the contact sidebar.
 * A single component keeps spacing, card chrome and accent behavior aligned.
 */
export const ContactInfoCard = ({
  title,
  description,
  icon: Icon,
  accent = "neutral",
  className,
  children,
}: ContactInfoCardProps) => {
  return (
    <Card
      className={cn(
        "border-border/70 bg-card/95 shadow-sm backdrop-blur-sm",
        accent === "warm"
          ? "bg-linear-to-br from-primary/8 via-card to-secondary/10 dark:from-primary/10 dark:via-card dark:to-secondary/12"
          : "",
        className,
      )}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-start gap-4">
          {Icon ? (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
              <Icon className="h-5 w-5" />
            </div>
          ) : null}

          <div className="space-y-1.5">
            <CardTitle className="text-2xl text-foreground">{title}</CardTitle>
            {description ? (
              <CardDescription className="text-base leading-relaxed">
                {description}
              </CardDescription>
            ) : null}
          </div>
        </div>
      </CardHeader>

      {children ? <CardContent>{children}</CardContent> : null}
    </Card>
  );
};
