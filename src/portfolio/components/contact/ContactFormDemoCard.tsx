import { AlertCircle, MessageSquareText, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ContactFormContent } from "@/portfolio/content/contact.page";
import { ContactFormField } from "./ContactFormField";

type ContactFormDemoCardProps = {
  content: ContactFormContent;
};

/**
 * Visual-only contact form.
 * The button intentionally does not submit anywhere until the email backend
 * is connected, but the component already matches the final UI structure.
 */
export const ContactFormDemoCard = ({
  content,
}: ContactFormDemoCardProps) => {
  return (
    <Card className="border-border/70 bg-card/95 shadow-sm backdrop-blur-sm">
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary">
              <MessageSquareText className="h-6 w-6" />
            </div>

            <div>
              <CardTitle className="text-3xl text-foreground">
                {content.title}
              </CardTitle>
              <CardDescription className="mt-2 max-w-2xl text-base leading-relaxed">
                {content.description}
              </CardDescription>
            </div>
          </div>

          <Badge
            variant="outline"
            className="rounded-full border-primary/20 bg-primary/8 px-4 py-1.5 text-xs font-semibold text-primary"
          >
            {content.badge}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <form className="space-y-6">
          {content.fields.map((field) => (
            <ContactFormField
              key={field.name}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              type={field.type}
              multiline={field.multiline}
            />
          ))}

          <div className="rounded-2xl border border-border/70 bg-muted/40 p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                {content.helperText}
              </p>
            </div>
          </div>

          <Button
            type="button"
            size="lg"
            className="h-12 w-full bg-primary text-white hover:bg-primary/90 hover:text-white"
          >
            <Send className="h-4 w-4" />
            {content.buttonLabel}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
