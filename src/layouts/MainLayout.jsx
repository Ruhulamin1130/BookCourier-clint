import React from "react";
import Navbar from "../components/shared/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/shared/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
