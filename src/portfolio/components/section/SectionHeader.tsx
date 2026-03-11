import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleAs?: "h1" | "h2";
  className?: string;
};

const headerVariants = cva("", {
  variants: {
    align: {
      left: "text-left",
      center: "text-center",
    },
  },
  defaultVariants: {
    align: "left",
  },
});

const subtitleVariants = cva("text-lg text-muted-foreground", {
  variants: {
    align: {
      left: "",
      center: "max-w-3xl mx-auto",
    },
  },
  defaultVariants: {
    align: "left",
  },
});

export const SectionHeader = ({
  title,
  subtitle,
  align = "left",
  titleAs = "h2",
  className,
}: SectionHeaderProps) => {
  const HeadingTag = titleAs;

  return (
    <div className={cn(headerVariants({ align }), className)}>
      <HeadingTag className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </HeadingTag>

      {subtitle ? <p className={subtitleVariants({ align })}>{subtitle}</p> : null}
    </div>
  );
};
