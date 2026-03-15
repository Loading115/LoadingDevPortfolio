import { cn } from "@/lib/utils";
import { PageSection } from "./PageSection";
import { SectionHeader } from "./SectionHeader";

type PageHeaderSectionProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  headerClassName?: string;
  sectionClassName?: string;
};

export const PageHeaderSection = ({
  title,
  subtitle,
  align = "left",
  headerClassName,
  sectionClassName,
}: PageHeaderSectionProps) => {
  return (
    <PageSection className={sectionClassName}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        align={align}
        titleAs="h1"
        className={cn(align === "left" ? "max-w-3xl" : undefined, headerClassName)}
      />
    </PageSection>
  );
};
