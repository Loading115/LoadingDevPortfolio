import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { NavItem } from "../../config/NavItems";

type Props = {
  items: readonly NavItem[];
  variant: "desktop" | "mobile";
  onItemClick?: () => void;
};

const listClassMap: Record<Props["variant"], string> = {
  desktop: "flex items-center gap-1",
  mobile: "space-y-2",
};

const linkClassMap: Record<Props["variant"], string> = {
  desktop: "rounded-lg px-4 py-2 transition-colors",
  mobile: "block rounded-xl px-6 py-3 text-center text-lg transition-colors",
};

export const NavLinks = ({ items, variant, onItemClick }: Props) => {
  return (
    <ul className={listClassMap[variant]}>
      {items.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            onClick={onItemClick}
            className={({ isActive }) =>
              cn(
                linkClassMap[variant],
                isActive ? "bg-white text-primary" : "text-white hover:bg-white/10",
              )
            }
            end={item.path === "/"}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
