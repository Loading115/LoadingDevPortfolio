import { Outlet } from "react-router";
import { NavBar } from "../components/navbar/NavBar";
import { Footer } from "../components/footer/Footer";

export const PortfolioLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
