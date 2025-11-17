import React from "react";
import locationMerchant from "../../../assets/Images/location-merchant.png";
import bgImg from "../../../assets/Images/be-a-merchant-bg.png";
const BecomeMerchant = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col-reverse md:flex-row justify-center items-center bg-secondary text-white mt-10 rounded-2xl"
    >
      <div className="md:w-3/5 p-10">
        <h1 className="text-4xl font-bold">
          Merchant and Customer Satisfaction is Our First Priority
        </h1>
        <p>
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="md:flex mt-10 gap-4">
          <button className="bg-primary p-3 rounded-2xl text-black">
            Become a Merchant
          </button>
          <button className="text-primary border border-primary p-3 rounded-2xl">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
      <div>
        <img className="p-10" src={locationMerchant} alt="" />
      </div>
    </div>
  );
};

export default BecomeMerchant;
