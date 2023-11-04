import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import image1 from "../../../assets/offers-pic/image-1.png";
import image2 from "../../../assets/offers-pic/image-2.png";
import image3 from "../../../assets/offers-pic/image-3.png";
import image4 from "../../../assets/offers-pic/image-4.png";
import image5 from "../../../assets/offers-pic/image-5.png";
import image6 from "../../../assets/offers-pic/image-6.png";

const HomeCarouselSection2 = () => {
  return (
    <>
      <div className="relative h-full my-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 50000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          <SwiperSlide className="flex justify-center align-center">
            <img className="" src={image1} alt="img" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center align-center">
            <img className="block" src={image2} alt="img" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center align-center">
            <img className="block" src={image3} alt="img" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center align-center">
            <img className="block" src={image4} alt="img" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center align-center">
            <img className="block" src={image5} alt="img" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center align-center">
            <img className="block" src={image6} alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomeCarouselSection2;
