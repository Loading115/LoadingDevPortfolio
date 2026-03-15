import { RouterProvider } from "react-router-dom";
import { appRouter } from "./app.router";
import { ThemeProvider } from "./portfolio/providers/ThemeProvider";

export const LoadingDevPortfolio = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
};
