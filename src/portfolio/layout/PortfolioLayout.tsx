import { Navigation } from "lucide-react";
import { Outlet } from "react-router";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const PortfolioLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
