import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import deliverImg from "../../../assets/Images/customer-top.png";
const Reviews = ({ reviewData }) => {
  const reviews = use(reviewData);
  return (
    <div>
      <div className="text-center flex flex-col justify-center items-center mt-5 md:mt-10 mb-10">
        <img className="md:w-64" src={deliverImg} alt="" />
        <h1 className="text-2xl md:text-3xl font-bold text-secondary mt-4 md:mt-10">
          What our customers are sayings
        </h1>
        <p className="max-w-150">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // Mobile devices (640px and up)
          300: {
            slidesPerView: 1,
            // spaceBetween: 20,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
            },
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
            },
          },
          // Tablets (768px and up)
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
            coverflowEffect: {
              rotate: 0,
              stretch: 50,
              depth: 200,
              modifier: 1,
            },
          },
          // Laptops (1024px and up)
          1024: {
            slidesPerView: 3,
            //   spaceBetween: 40,
            coverflowEffect: {
              rotate: 0,
              stretch: 90,
              depth: 300,
              modifier: 1,
            },
          },
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper w-full py-12"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
