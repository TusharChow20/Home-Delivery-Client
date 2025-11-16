import React from "react";
import ServiceImg from "./../../../assets/Images/service.png";
const OurService = () => {
  return (
    <div className="bg-secondary rounded-2xl">
      <div className="text-center mt-20 max-w-200 mx-auto text-white py-10 ">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:mt-10 px-10 pb-10">
        <div className="text-center space-y-2 md:p-10 p-4 bg-white rounded-2xl">
          <div className="flex justify-center items-center">
            <img src={ServiceImg} alt="" />
          </div>
          <h1 className="text-xl font-bold text-secondary">
            Express & Standard Delivery
          </h1>
          <p>
            We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi.Express delivery available in Dhaka within 4-6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="text-center space-y-2 md:p-10 p-4 bg-white rounded-2xl">
          <div className="flex justify-center items-center">
            <img src={ServiceImg} alt="" />
          </div>
          <h1 className="text-xl font-bold text-secondary">
            Nationwide Delivery
          </h1>
          <p>
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48-72 hours.
          </p>
        </div>
        <div className="text-center space-y-2 md:p-10 p-4 bg-white rounded-2xl">
          <div className="flex justify-center items-center">
            <img src={ServiceImg} alt="" />
          </div>
          <h1 className="text-xl font-bold text-secondary">
            Fulfillment Solution
          </h1>
          <p>
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>
        <div className="text-center space-y-2 md:p-10 p-4 bg-white rounded-2xl">
          <div className="flex justify-center items-center">
            <img src={ServiceImg} alt="" />
          </div>
          <h1 className="text-xl font-bold text-secondary">
            Cash on Home Delivery
          </h1>
          <p>
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="text-center space-y-2 md:p-10 p-4 bg-white rounded-2xl">
          <div className="flex justify-center items-center">
            <img src={ServiceImg} alt="" />
          </div>
          <h1 className="text-xl font-bold text-secondary">
            Corporate Service / Contract In Logistics
          </h1>
          <p>
            Customized corporate services which includes warehouse and inventory
            management support.
          </p>
        </div>
        <div className="text-center space-y-2 md:p-10 p-4 bg-white rounded-2xl">
          <div className="flex justify-center items-center">
            <img src={ServiceImg} alt="" />
          </div>
          <h1 className="text-xl font-bold text-secondary">Parcel Return</h1>
          <p>
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
