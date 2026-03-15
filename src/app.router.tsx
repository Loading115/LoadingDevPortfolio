import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./portfolio/pages/home/HomePage";
import { PortfolioLayout } from "./portfolio/layout/PortfolioLayout";
import { ProjectsPage } from "./portfolio/pages/projects/ProjectsPage";
import { ProjectDetailPage } from "./portfolio/pages/projects/ProjectDetailPage";
import { AboutPage } from "./portfolio/pages/about/AboutPage";
import { DevlogPage } from "./portfolio/pages/devlog/DevlogPage";
import { ContactPage } from "./portfolio/pages/contact/ContactPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "projects/:projectSlug",
        element: <ProjectDetailPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "devlog",
        element: <DevlogPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
