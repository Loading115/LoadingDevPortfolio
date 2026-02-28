import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "./portfolio/pages/home/HomePage";
import { PortfolioLayout } from "./portfolio/layout/PortfolioLayout";
import { ProjectsPage } from "./portfolio/pages/projects/ProjectsPage";
import { AboutPage } from "./portfolio/pages/about/AboutPage";
import { DevlogPage } from "./portfolio/pages/devlog/DevlogPage";
import { ContactPage } from "./portfolio/pages/contact/ContactPage";

export const appRouter = createBrowserRouter([

    //Main Routes from Portfolio
    {
        path: '/',
        element: <PortfolioLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'projects',
                element: <ProjectsPage/>
            },
            {
                path: 'about',
                element: <AboutPage/>
            },
            {
                path: 'devlog',
                element: <DevlogPage/>
            },
            {
                path: 'contact',
                element: <ContactPage/>
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to ='/'/>
    }
])