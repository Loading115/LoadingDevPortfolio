/**
 * Top-level header content for the About page.
 */
export const aboutPageHeaderContent = {
  title: "Sobre Mi",
  subtitle:
    "Conoce mas sobre mi trayectoria, habilidades y lo que me motiva como desarrollador indie",
} as const;

/**
 * Main story block content shown on the right side of the history section.
 */
export const aboutHistoryContent = {
  title: "Mi Historia",
  paragraphs: [
    "Hola! Soy un desarrollador indie apasionado por crear experiencias de juego unicas y memorables. Mi viaje en el desarrollo de videojuegos comenzo hace mas de 5 anos, cuando decidi combinar mi amor por los videojuegos con mis habilidades de programacion.",
    "Desde entonces, he trabajado en multiples proyectos, desde pequenos prototipos hasta juegos completos publicados. Me especializo en crear mecanicas innovadoras y experiencias que conectan emocionalmente con los jugadores.",
  ],
} as const;

/**
 * Visual media configuration used by the About history gallery element.
 */
export const aboutHistoryMedia = {
  src: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjBkZXNrfGVufDF8fHx8MTc4MzE5MDE4MXww&ixlib=rb-4.1.0&q=80&w=1400",
  alt: "Laptop con codigo en una mesa de trabajo",
  badgeText: "5+ Anos",
} as const;

/**
 * Heading used by the technical skills section on the About page.
 */
export const aboutTechnicalSkillsSectionContent = {
  title: "Habilidades Tecnicas",
} as const;
