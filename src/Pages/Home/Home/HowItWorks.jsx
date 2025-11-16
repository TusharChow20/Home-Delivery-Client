import React from "react";
import van from "../../../assets/Images/bookingIcon.png";
const HowItWorks = () => {
  return (
    <div className="mt-10 md:px-10">
      <h1 className="font-bold text-2xl text-secondary ">How it Works</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 mt-10">
        <div className="bg-white p-10 rounded-xl ">
          <img className="w-10 h-10 grayscale-75" src={van} alt="" />
          <h1 className="font-bold">Booking Pick & Drop</h1>
          <h4 className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </h4>
        </div>
        <div className="bg-white p-10 rounded-xl">
          <img className="w-10 h-10 grayscale-75" src={van} alt="" />
          <h1 className="font-bold">Cash On Delivery</h1>
          <h4 className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </h4>
        </div>
        <div className="bg-white p-10 rounded-xl grayscale-75">
          <img className="w-10 h-10" src={van} alt="" />
          <h1 className="font-bold">Delivery Hub</h1>
          <h4 className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </h4>
        </div>
        <div className="bg-white p-10 rounded-xl grayscale-75">
          <img className="w-10 h-10" src={van} alt="" />
          <h1 className="font-bold">Booking SME & Corporate</h1>
          <h4 className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
