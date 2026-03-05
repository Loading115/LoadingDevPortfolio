import { Flame } from "lucide-react";
import { Link } from "react-router";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

//Personal logo that is used on the application
export const BrandLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="bg-white rounded-lg p-2">
        <Flame className="w-8 h-8 text-primary" />
      </div>
      <div>
        <h1 className="text-white text-2xl font-bold">{SITE_NAME}</h1>
        <p className="text-white/80 text-sm">{SITE_TAGLINE}</p>
      </div>
    </Link>
  );
};
