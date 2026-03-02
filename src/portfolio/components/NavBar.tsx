import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { navItems } from "../config/NavItems";
import { useTheme } from "../hooks/useTheme";
import { BrandLogo } from "./BrandLogo";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //Manage if the mobile menu is open or closed
  const { pathname } = useLocation(); //Use to obtain the current location or path, this is used to check to close the menu on mobile view
  const { isDark, toggleTheme } = useTheme(); //Custom hook to obtain if its on dark mode and toggle it

  //Everytime the path changes and its on mobile mode, its going to close the menu
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-primary px-6 py-4 sticky top-0 z-50 shadow-lg font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <BrandLogo />
        {/* Desktop Mode: Calls the nav links and the theme toggle button on row */}
        <div className="hidden md:flex items-center gap-1">
          <NavLinks items={navItems} variant="desktop" />
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} className="ml-4" />
        </div>

        {/* Mobile Mode: If the screen is smaller, it shows the toggle menu button to open the nav links */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          {/* Button that changes icon when opening a menu or clossing it */}
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

      {/* If the mobile menu is open, will show the navlinks menu */}
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