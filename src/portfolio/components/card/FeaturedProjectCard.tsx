import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { FeaturedCardData } from "./card.types";

export const FeaturedProjectCard = ({
  id,
  title,
  description,
  imageSrc,
  label,
  tags,
  link,
  buttonText,
}: FeaturedCardData) => {
  return (
    <article
      data-card-id={id}
      className="relative overflow-hidden rounded-xl border border-secondary min-h-[520px] md:min-h-[620px] shadow-2xl"
    >
      {/* Background image is rendered as CSS to avoid layout shifts. */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/25" />

      <div className="absolute top-6 right-6 z-10 rounded-full bg-secondary px-5 py-2 text-sm font-bold text-white">
        {label}
      </div>

      <div className="relative z-10 h-full p-8 md:p-10 flex items-end">
        <div className="max-w-2xl">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h3>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {tags.map((tag) => (
              <span
                key={`${id}-${tag}`}
                className="text-sm font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          <Button
            asChild
            className="bg-primary text-white hover:bg-primary/90 gap-2 text-base px-6 py-6"
          >
            <Link to={link}>
              {buttonText}
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};
