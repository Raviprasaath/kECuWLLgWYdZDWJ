import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { useScreenSize } from "../../CommonFunctions/CommonFunctions";

import img1 from "../../../assets/homepage-section7/img1.jpg";

import "./HomeCarouselSection6.css";

const HomeCarouselSection6 = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;

  return (
    <>
      {!isMobile && (
        <div className="flex justify-center items-center my-2.5">
          <div className="w-[76.2%] flex flex-col justify-center ">
            <h2 className="text-[20px] font-bold py-3.5">BEYOUNGSTER'S REVIEW</h2>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1160: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1560: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination, Navigation]}
              className="w-full h-full"
            >
              <SwiperSlide className="flex  justify-center align-center">
                <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                <img className=" w-[200px] py-2"  src={img1} alt="" />

                <div className="flex w-[200px] flex-col justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[200px] text-center whitespace-pre-wrap">
                    Wearing my favorite T-shirt and collections was too good,
                    Customer
                    </div>
                  </div>                  
                </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex  justify-center align-center">
                <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                <img className=" w-[200px] py-2"  src={img1} alt="" />

                <div className="flex w-[200px] flex-col justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[200px] text-center whitespace-pre-wrap">
                    Wearing my favorite T-shirt and collections was too good,
                    Customer
                    </div>
                  </div>                  
                </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex  justify-center align-center">
                <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                <img className=" w-[200px] py-2"  src={img1} alt="" />

                <div className="flex w-[200px] flex-col justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[200px] text-center whitespace-pre-wrap">
                    Wearing my favorite T-shirt and collections was too good,
                    Customer
                    </div>
                  </div>                  
                </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex  justify-center align-center">
                <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                <img className=" w-[200px] py-2"  src={img1} alt="" />

                <div className="flex w-[200px] flex-col justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[200px] text-center whitespace-pre-wrap">
                    Wearing my favorite T-shirt and collections was too good,
                    Customer
                    </div>
                  </div>                  
                </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex  justify-center align-center">
                <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                <img className=" w-[200px] py-2"  src={img1} alt="" />

                <div className="flex w-[200px] flex-col justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[200px] text-center whitespace-pre-wrap">
                    Wearing my favorite T-shirt and collections was too good,
                    Customer
                    </div>
                  </div>                  
                </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex  justify-center align-center">
                <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                <img className=" w-[200px] py-2"  src={img1} alt="" />

                <div className="flex w-[200px] flex-col justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[200px] text-center whitespace-pre-wrap">
                    Wearing my favorite T-shirt and collections was too good,
                    Customer
                    </div>
                  </div>                  
                </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex  justify-center align-center">
                <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                <img className=" w-[200px] py-2"  src={img1} alt="" />

                <div className="flex w-[200px] flex-col justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[200px] text-center whitespace-pre-wrap">
                    Wearing my favorite T-shirt and collections was too good,
                    Customer
                    </div>
                  </div>                  
                </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex  justify-center align-center">
                <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                <img className=" w-[200px] py-2"  src={img1} alt="" />

                <div className="flex w-[200px] flex-col justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[200px] text-center whitespace-pre-wrap">
                    Wearing my favorite T-shirt and collections was too good,
                    Customer
                    </div>
                  </div>                  
                </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex  justify-center align-center">
                <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                <img className=" w-[200px] py-2"  src={img1} alt="" />

                <div className="flex w-[200px] flex-col justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[200px] text-center whitespace-pre-wrap">
                    Wearing my favorite T-shirt and collections was too good,
                    Customer
                    </div>
                  </div>                  
                </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex  justify-center align-center">
                <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                <img className=" w-[200px] py-2"  src={img1} alt="" />

                <div className="flex w-[200px] flex-col justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[200px] text-center whitespace-pre-wrap">
                    Wearing my favorite T-shirt and collections was too good,
                    Customer
                    </div>
                  </div>                  
                </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex  justify-center align-center">
                <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                <img className=" w-[200px] py-2"  src={img1} alt="" />

                <div className="flex w-[200px] flex-col justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[200px] text-center whitespace-pre-wrap">
                    Wearing my favorite T-shirt and collections was too good,
                    Customer
                    </div>
                  </div>                  
                </div>
                </div>
                </div>
              </SwiperSlide>


            </Swiper>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="flex justify-center items-center my-2.5">
          <div className="w-[76.2%] flex flex-col justify-center ">
            <h2 className="font-bold py-3.5">BEYOUNGSTER'S REVIEW</h2>
            <div className="flex flex-nowrap gap-3 overflow-x-scroll overflow-y-hidden whitespace-nowrap">
              <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                  <img className="py-2 w-[200px]" src={img1} alt="" />

                  <div className="flex w-[200px] flex-col justify-center">
                    <div className="flex flex-col justify-center items-center">
                      <div className="w-[200px] text-center whitespace-pre-wrap">
                      Wearing my favorite T-shirt and collections was too good,
                      Customer
                      </div>                    
                    </div>                  
                  </div>
                </div>

              </div>
              <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                  <img className="py-2 w-[200px]" src={img1} alt="" />

                  <div className="flex w-[200px] flex-col justify-center">
                    <div className="flex flex-col justify-center items-center">
                      <div className="w-[200px] text-center whitespace-pre-wrap">
                      Wearing my favorite T-shirt and collections was too good,
                      Customer
                      </div>                    
                    </div>                  
                  </div>
                </div>

              </div>
              <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                  <img className="py-2 w-[200px]" src={img1} alt="" />

                  <div className="flex w-[200px] flex-col justify-center">
                    <div className="flex flex-col justify-center items-center">
                      <div className="w-[200px] text-center whitespace-pre-wrap">
                      Wearing my favorite T-shirt and collections was too good,
                      Customer
                      </div>                    
                    </div>                  
                  </div>
                </div>

              </div>
              <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                  <img className="py-2 w-[200px]" src={img1} alt="" />

                  <div className="flex w-[200px] flex-col justify-center">
                    <div className="flex flex-col justify-center items-center">
                      <div className="w-[200px] text-center whitespace-pre-wrap">
                      Wearing my favorite T-shirt and collections was too good,
                      Customer
                      </div>                    
                    </div>                  
                  </div>
                </div>

              </div>
              <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                  <img className="py-2 w-[200px]" src={img1} alt="" />

                  <div className="flex w-[200px] flex-col justify-center">
                    <div className="flex flex-col justify-center items-center">
                      <div className="w-[200px] text-center whitespace-pre-wrap">
                      Wearing my favorite T-shirt and collections was too good,
                      Customer
                      </div>                    
                    </div>                  
                  </div>
                </div>

              </div>
              <div className="border bg-gray-200 border-slate-300 relative w-[220px] inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <div className="flex flex-col justify-center items-center">

                  <img className="py-2 w-[200px]" src={img1} alt="" />

                  <div className="flex w-[200px] flex-col justify-center">
                    <div className="flex flex-col justify-center items-center">
                      <div className="w-[200px] text-center whitespace-pre-wrap">
                      Wearing my favorite T-shirt and collections was too good,
                      Customer
                      </div>                    
                    </div>                  
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeCarouselSection6;
