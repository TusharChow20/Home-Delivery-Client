import React from "react";

import logoImg from "../assets/Images/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={logoImg} alt="" />
      <h1 className="text-2xl font-bold -ml-5">ShiftingHobe</h1>
    </div>
  );
};

export default Logo;
