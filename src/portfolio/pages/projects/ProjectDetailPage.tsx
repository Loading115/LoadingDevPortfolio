import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHeaderSection } from "@/portfolio/components/section/PageHeaderSection";
import { PageSection } from "@/portfolio/components/section/PageSection";
import { TagList } from "@/portfolio/components/tag/TagList";
import { getProjectDetailsBySlug } from "@/portfolio/content/cards.info";

export const ProjectDetailPage = () => {
  const { projectSlug } = useParams();
  const project = projectSlug
    ? getProjectDetailsBySlug(projectSlug)
    : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <PageHeaderSection
        title={project.title}
        subtitle={project.description}
      />

      <PageSection withTopSeparator spacing="compact">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] lg:items-start">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
              <span className="inline-flex rounded-full bg-secondary px-3.5 py-1 text-xs font-semibold text-white">
                {project.label}
              </span>

              <div className="mt-6">
                <h2 className="text-2xl font-bold text-foreground">Stack</h2>
                <TagList
                  tags={project.tags}
                  keyPrefix={project.id}
                  className="mt-4"
                />
              </div>

              <div className="mt-8">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/projects">
                    <ArrowLeft className="h-4 w-4" />
                    Volver a Proyectos
                  </Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </PageSection>
    </>
  );
};
