import { Menu, X } from "lucide-react";
import { useId, useState } from "react";
import { navItems } from "../../config/NavItems";
import { useTheme } from "../../hooks/useTheme";
import { BrandLogo } from "./BrandLogo";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Top navigation bar with desktop and mobile layouts.
 */
export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const mobileMenuId = useId();

  return (
    <nav
      className="sticky top-0 z-50 bg-primary px-6 py-4 font-sans shadow-lg"
      aria-label="Principal"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <BrandLogo />

        <div className="hidden items-center gap-4 md:flex">
          <NavLinks items={navItems} variant="desktop" />
          <ThemeToggle
            isDark={isDark}
            onToggle={toggleTheme}
            className="ml-1"
          />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="p-2 text-white"
            aria-controls={mobileMenuId}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id={mobileMenuId} className="mt-4 pb-4 md:hidden">
          <NavLinks
            items={navItems}
            variant="mobile"
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}
    </nav>
  );
};
