import { Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/portfolio/content/site";

export const BrandLogo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-3"
      aria-label={`${siteConfig.name} inicio`}
    >
      <div className="rounded-lg bg-white p-2">
        <Flame className="h-8 w-8 text-primary" />
      </div>

      <div>
        <span className="block text-2xl font-bold text-white">
          {siteConfig.name}
        </span>
        <p className="text-sm text-white/80">{siteConfig.tagline}</p>
      </div>
    </Link>
  );
};
