import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { DevlogSubscriptionCta } from "./devlog.types";

type DevlogSubscribeCardProps = {
  cta: DevlogSubscriptionCta;
};

export const DevlogSubscribeCard = ({ cta }: DevlogSubscribeCardProps) => {
  return (
    <Card className="rounded-[1.75rem] border-primary/15 bg-linear-to-r from-primary/10 via-card to-secondary/10 shadow-none">
      <CardContent className="space-y-5 p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <Bell className="h-5 w-5" />
          </div>

          <h3 className="text-3xl font-bold tracking-tight text-foreground">
            {cta.title}
          </h3>
        </div>

        <p className="text-lg leading-relaxed text-muted-foreground">
          {cta.description}
        </p>

        <Button asChild className="h-12 w-full rounded-xl text-base font-semibold text-white">
          <a href={cta.href} target="_blank" rel="noreferrer">
            {cta.buttonLabel}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
