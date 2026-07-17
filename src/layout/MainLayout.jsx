import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[140px] bg-[#F8F6F2] min-h-screen">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default MainLayout;