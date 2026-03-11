import type { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type PageSectionProps = {
  children: ReactNode;
  tone?: "background" | "muted-gradient";
  spacing?: "default" | "hero" | "compact";
  container?: "7xl" | "5xl";
  withTopSeparator?: boolean;
  className?: string;
  contentClassName?: string;
};

const toneClassMap: Record<NonNullable<PageSectionProps["tone"]>, string> = {
  background: "bg-background",
  "muted-gradient": "bg-linear-to-b from-muted to-background",
};

const spacingClassMap: Record<NonNullable<PageSectionProps["spacing"]>, string> = {
  hero: "py-12 sm:py-20",
  default: "py-16 sm:py-24",
  compact: "py-16 sm:py-20",
};

const containerClassMap: Record<NonNullable<PageSectionProps["container"]>, string> = {
  "7xl": "max-w-7xl mx-auto",
  "5xl": "max-w-5xl mx-auto",
};

export const PageSection = ({
  children,
  tone = "background",
  spacing = "default",
  container = "7xl",
  withTopSeparator = false,
  className,
  contentClassName,
}: PageSectionProps) => {
  return (
    <>
      {withTopSeparator ? <Separator className="w-full bg-border/70" /> : null}

      <section className={cn("px-4", toneClassMap[tone], spacingClassMap[spacing], className)}>
        <div className={cn(containerClassMap[container], contentClassName)}>{children}</div>
      </section>
    </>
  );
};
