import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../../config/NavItems";
import { useTheme } from "../../hooks/useTheme";
import { BrandLogo } from "./BrandLogo";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Top navigation bar with desktop and mobile layouts.
 */
export const NavBar = () => {
  // Controls the mobile navigation drawer state.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Theme state and action from custom hook.
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-primary px-6 py-4 sticky top-0 z-50 shadow-lg font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <BrandLogo />
        {/* Desktop layout: links + theme toggle in a single row. */}
        <div className="hidden md:flex items-center gap-1">
          <NavLinks items={navItems} variant="desktop" />
          <ThemeToggle
            isDark={isDark}
            onToggle={toggleTheme}
            className="ml-4"
          />
        </div>

        {/* Mobile layout: theme toggle + hamburger trigger. */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          {/* Toggles the mobile navigation drawer visibility. */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="text-white p-2"
            aria-label="Toggle menu"
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

      {/* Render mobile links only while the drawer is open. */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-2">
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
