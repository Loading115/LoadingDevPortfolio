export type NavItem = { path: string; label: string };

export const navItems: readonly NavItem[] = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About Me" },
  { path: "/devlog", label: "Devlog" },
  { path: "/contact", label: "Contact" },
];
