export type NavItem = { path: string; label: string };

//Current nav items listed from the router and the title
export const navItems: NavItem[] = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About Me" },
    { path: "/devlog", label: "Devlog" },
    { path: "/contact", label: "Contact" },
];