import React from "react";
import { Outlet } from "react-router";
import Footer from "../Pages/Utility/Footer/Footer";
import NavBar from "../Pages/Utility/NavBar/NavBar";

const RootLayout = () => {
  return (
    <div className="bg-gray-200 pt-3">
      <div className="max-w-7xl mx-auto">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
