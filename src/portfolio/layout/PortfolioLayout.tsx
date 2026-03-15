import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { Footer } from "../components/footer/Footer";

export const PortfolioLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
