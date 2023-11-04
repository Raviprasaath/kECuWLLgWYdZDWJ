import React, { useEffect, useRef, useState } from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

import { useScreenSize } from "../../CommonFunctions/CommonFunctions";

import "./HomeCarouselSection4.css";

import img1 from "../../../assets/home-carousel-1/image-1.jpg";
import img2 from "../../../assets/home-carousel-1/image-2.jpg";
import img3 from "../../../assets/home-carousel-1/image-3.jpg";
import img4 from "../../../assets/home-carousel-1/image-4.jpg";
import img5 from "../../../assets/home-carousel-1/image-5.jpg";
import img6 from "../../../assets/home-carousel-1/image-6.jpg";
import img7 from "../../../assets/home-carousel-1/image-7.jpg";

import { Link } from "react-router-dom";
import { useDataContext } from "../../Fetching/DataContext";

import { GridLoader } from 'react-spinners';


const HomeCarouselSection4 = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;
  const { data, loading } = useDataContext();


  const [travelData, setTravelData] = useState([]);
  const [plainTShirt, setPlainTShirt] = useState([]);
  const [poloTShirt, setPoloTShirt] = useState([]);
  const [printedTShirt, setPrintedTShirt] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [pyjamas, setPyjamas] = useState([]);
  const [overSizedTShirt, setOverSizedTShirt] = useState([]);


  function fetchDataAndFilter(
    title, searchTerm, filterFunction, setDataFunction) {
    const filteredData = data?.data?.filter((item) => {
      return item[title].includes(searchTerm) && filterFunction(item);
    });
    setDataFunction(filteredData);
  }
  
  useEffect(() => {
    if (data) {
      setTimeout(() => {
        fetchDataAndFilter("description", "travel", (item) => item.gender === "Men", setTravelData);
        fetchDataAndFilter("description", "plain", (item) => item.subCategory === "tshirt", setPlainTShirt);
        fetchDataAndFilter("description", "polo", (item) => item.subCategory === "tshirt", setPoloTShirt);
        fetchDataAndFilter("description", "printed", (item) => item.gender === "Men" && item.subCategory === "tshirt", setPrintedTShirt);
        fetchDataAndFilter("description", "shirts", (item) => item.gender === "Men" && item.subCategory === "shirt", setShirts);
        fetchDataAndFilter("subCategory", "pyjamas", (item) => item.gender === "Men", setPyjamas);
        fetchDataAndFilter("description", "oversized", (item) => item.gender === "Men" && item.subCategory=== "tshirt", setOverSizedTShirt);      
      }, 0);
    }
  }, [data]);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center my-2.5">
          <div className="w-[76.2%] flex flex-col justify-center ">
            {!isMobile ?
            (<h2 className="text-[20px] font-bold py-3.5">BIG SAVING ZONE</h2>):
            (<h2 className="font-bold py-3.5">BIG SAVING ZONE</h2>) 
            }   
            <div className="flex justify-center my-4 items-center">
              <GridLoader color="#36d6b1" loading margin={5} size={15} />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {!isMobile && (
        <div className="flex justify-center items-center my-2.5">
          <div className="w-[76.2%] flex flex-col justify-center ">
            <h2 className="text-[20px] font-bold py-3.5">BIG SAVING ZONE</h2>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination, Navigation]}
              className="w-full h-full"
            >
              <SwiperSlide className="flex justify-center align-center">
                <Link 
                  to="clothing/travel"
                  state={{data: travelData}}
                >
                  <div>
                    <img
                      className="block w-full h-full object-cover"
                      src={img1}
                      alt=""
                    />
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center align-center">
                <Link 
                  to="clothing/printed-t-shirt"
                  state={{data: printedTShirt}}                  
                >
                  <div>
                    <img
                      className="block w-full h-full object-cover"
                      src={img4}
                      alt=""
                    />
                  </div>
                </Link>
              </SwiperSlide>
              {/* <SwiperSlide className="flex justify-center align-center">
              <Link 
                  to="clothing/plain-t-shirt"
                  state={{data: plainTShirt}}
                >
                  <div>
                    <img
                      className="block w-full h-full object-cover"
                      src={img2}
                      alt=""
                      />
                  </div>
                </Link>
              </SwiperSlide> */}
              <SwiperSlide className="flex justify-center align-center">
                <Link 
                  to="clothing/polo-t-shirt"
                  state={{data: poloTShirt}}
                >
                  <div>
                    <img
                      className="block w-full h-full object-cover"
                      src={img3}
                      alt=""
                    />
                </div>
                </Link>
              </SwiperSlide>
              
              <SwiperSlide className="flex justify-center align-center">
                <Link
                  to="clothing/shirts"
                  state={{data: shirts}}
                >
                  <div>
                    <img
                      className="block w-full h-full object-cover"
                      src={img5}
                      alt=""
                    />
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center align-center">
                <Link
                  to="clothing/pyjamas"
                  state={{data: pyjamas}}
                >
                  <div>
                    <img
                      className="block w-full h-full object-cover"
                      src={img6}
                      alt=""
                      />
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center align-center">
                <Link
                  to="clothing/oversized-t-shirt"
                  state={{data: overSizedTShirt}}
                >
                  <div>
                    <img
                      className="block w-full h-full object-cover"
                      src={img7}
                      alt=""
                      />
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="flex justify-center items-center my-2.5">
          <div className="w-[76.2%] flex flex-col justify-center ">
            <h2 className="font-bold py-3.5">BIG SAVING ZONE</h2>
            <div className="flex flex-nowrap gap-3 overflow-x-scroll overflow-y-hidden whitespace-nowrap">
              <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <Link 
                  to="clothing/travel"
                  state={{data: travelData}}
                >
                    <img className=" w-[200px]" src={img1} alt="" />
                </Link>
              </div>
              {/* <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <img className=" w-[200px]" src={img2} alt="" />
              </div> */}
              <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <Link 
                  to="clothing/printed-t-shirt"
                  state={{data: printedTShirt}}
                >
                  <img className=" w-[200px]" src={img4} alt="" />
                </Link>
              </div>
              <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <Link 
                  to="clothing/polo-t-shirt"
                  state={{data: poloTShirt}}
                >
                  <img className=" w-[200px]" src={img3} alt="" />
                </Link>
              </div>
              
              <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <Link
                  to="clothing/shirts"
                  state={{data: shirts}}
                >
                  <img className=" w-[200px]" src={img5} alt="" />
                </Link>
              </div>
              <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <Link
                  to="clothing/pyjamas"
                  state={{data: pyjamas}}
                >
                  <img className=" w-[200px]" src={img6} alt="" />
                </Link>
              
              </div>
              <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <Link
                  to="clothing/oversized-t-shirt"
                  state={{data: overSizedTShirt}}
                >
                  <img className=" w-[200px]" src={img7} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeCarouselSection4;
