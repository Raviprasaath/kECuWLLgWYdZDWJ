import home1 from "../../../assets/homepage-1.jpg";
import home2 from "../../../assets/homepage-2.jpg";
import home3 from "../../../assets/homepage-3.jpg";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const HomeCarouselSection1 = () => {

  return (
    <>
      <div className="relative h-fit	">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-[100px] 
          sm1:h-[150px]
          sm2:h-[250px]
          sm3:h-[250px]
          sm4:h-[350px]
          lg:h-[450px]
          xl:h-[510px]
          "
        >
          <SwiperSlide className="flex justify-center content-center">
            <div>
              <img className="block w-full h-full object-cover	" src={home1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center content-center">
            <div>
              <img className="block w-full h-full object-cover	" src={home2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center content-center">
            <div>
              <img className="block w-full h-full object-cover	" src={home3} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomeCarouselSection1;
