import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "./HowItWorks";
import OurService from "./OurService";
import Brands from "../Brands/Brands";
import Parcel from "../Percel/Parcel";

const Home = () => {
  return (
    <div>
      <h1>THis is Home</h1>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurService> </OurService>
      <Brands></Brands>
      <Parcel></Parcel>
    </div>
  );
};

export default Home;
