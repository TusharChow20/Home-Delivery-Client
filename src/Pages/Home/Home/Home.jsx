import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "./HowItWorks";
import OurService from "./OurService";
import Brands from "../Brands/Brands";
import Parcel from "../Percel/Parcel";
import Reviews from "./Reviews";
import BecomeMerchant from "./BecomeMerchant";

const reviewData = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <h1>THis is Home</h1>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurService> </OurService>
      <Brands></Brands>
      <Parcel></Parcel>
      <BecomeMerchant></BecomeMerchant>
      <Reviews reviewData={reviewData}></Reviews>
    </div>
  );
};

export default Home;
