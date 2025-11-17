import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazonImg from "../../../assets/brands/amazon.png";
import amazon_vectorImg from "../../../assets/brands/amazon_vector.png";
import casioImg from "../../../assets/brands/casio.png";
import moonstarImg from "../../../assets/brands/moonstar.png";
import randstadImg from "../../../assets/brands/randstad.png";
import starImg from "../../../assets/brands/star.png";
import startPeopleImg from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const allBrands = [
  amazonImg,
  amazon_vectorImg,
  casioImg,
  moonstarImg,
  randstadImg,
  starImg,
  startPeopleImg,
];
const Brands = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-secondary mt-10 mb-6">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        //   slidesPerView={4}
        className="mb-10"
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        modules={[Autoplay]}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
          disableOnInteraction: false,
        }}
      >
        {allBrands.map((brand, idx) => (
          <SwiperSlide key={idx}>
            <img src={brand} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
