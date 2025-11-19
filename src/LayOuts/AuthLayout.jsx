import React from "react";
import Logo from "../Components/Logo";
import { Outlet } from "react-router";
import deliverImage from "../assets/Images/authImage.png";
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <Logo></Logo>
      </div>
      <div className="md:flex justify-center items-center gap-5 min-h-screen">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1">
          <img src={deliverImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
