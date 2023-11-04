import HomeCarouselSection1 from "./HomeCarouselSection1/HomeCarouselSection1";
import HomeCarouselSection2 from "./HomeCarouselSection2/HomeCarouselSection2";
import HomeCarouselSection3 from "./HomeCarouselSection3/HomeCarouselSection3";
import HomeCarouselSection4 from "./HomeCarouselSection4/HomeCarouselSection4";

import homePageSection5 from "../../assets/home-page-5.png";
import homePageSection7 from "../../assets/homepage-4.jpg";
import homePageSection8 from "../../assets/homepage-5.jpg";
import homePageSection9 from "../../assets/homepage-6.jpg";

import HomeCarouselSection5 from "./HomeCarouselSection5/HomeCarouselSection5";
import HomeCarouselSection6 from "./HomeCarouselSection6/HomeCarouselSection6";

import HomeMenCategories from "./HomeMenCategories/HomeMenCategories";
import HomeWomenCategories from "./HomeWomenCategories/HomeWomenCategories";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])
  return (
    <>
      <div className="relative z-0">
        <HomeCarouselSection1 />
        <HomeCarouselSection2 />
        <HomeCarouselSection3 />
        <HomeCarouselSection4 />
      </div>

      <div className="mt-5 w-full grid place-items-center">
        <img className="w-[79.5%]" src={homePageSection5} alt="home-page-5" />
      </div>
      <HomeMenCategories />
      <HomeWomenCategories />
      <div className="mt-5 w-full grid place-items-center">
        <img className="w-[78.2%]" src={homePageSection7} alt="home-page-5" />
      </div>
      {/* <HomeCarouselSection5 />
      <HomeCarouselSection6 /> */}
      <div className="mt-5 w-full grid place-items-center">
        <img className="w-[78.2%]" src={homePageSection8} alt="home-page-5" />
      </div>
      <div className="mt-5 w-full grid place-items-center">
        <img className="w-[78.2%]" src={homePageSection9} alt="home-page-5" />
      </div>
    </>
  );
};

export default Homepage;
