import { NavLink } from "react-router-dom";
import type { NavItem } from "../../config/NavItems";

type Props = {
  items: NavItem[];
  variant: "desktop" | "mobile";
  onItemClick?: () => void;
};

// Component that obtains all the navigation links from config files
// and applies active styling automatically using NavLink.
// onItemClick is used on mobile view to close the menu.
export const NavLinks = ({ items, variant, onItemClick }: Props) => {
  const base =
    variant === "desktop"
      ? "px-4 py-2 rounded-lg transition-colors"
      : "block px-6 py-3 rounded-xl transition-colors text-lg text-center";

  return (
    <>
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={onItemClick}
          className={({ isActive }) =>
            `${base} ${
              isActive
                ? "bg-white text-primary"
                : "text-white hover:bg-white/10"
            }`
          }
          end={item.path === "/"}
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );
};
