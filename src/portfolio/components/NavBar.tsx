import { Flame, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About Me" },
  { path: "/devlog", label: "Devlog" },
  { path: "/contact", label: "Contact" },
];

export const NavBar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <nav className="bg-primary top-0 px-6 py-4 sticky top-0 z-50 shadow-lg font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-2">
              {/* IMAGE PLACEHOLDER */}
              <Flame className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">Loading Dev</h1>
              <p className="text-white/80 text-sm">Indie Game Developer</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-white text-primary"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="ml-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-white/10 text-white"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-white text-primary"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};
