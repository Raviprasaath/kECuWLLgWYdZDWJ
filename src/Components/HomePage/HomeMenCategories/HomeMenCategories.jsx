import image1 from "../../../assets/categories-for-men/1.jpg";
import image2 from "../../../assets/categories-for-men/2.jpg";
import image3 from "../../../assets/categories-for-men/3.jpg";
import image4 from "../../../assets/categories-for-men/4.jpg";
import image5 from "../../../assets/categories-for-men/5.jpg";
import image6 from "../../../assets/categories-for-men/6.jpg";
import image7 from "../../../assets/categories-for-men/7.jpg";
import image8 from "../../../assets/categories-for-men/8.jpg";
import image9 from "../../../assets/categories-for-men/9.jpg";
import image10 from "../../../assets/categories-for-men/10.jpg";
import image11 from "../../../assets/categories-for-men/11.jpg";
import image12 from "../../../assets/categories-for-men/12.jpg";

import image1a from "../../../assets/categories-for-men/1a.jpg";
import image2a from "../../../assets/categories-for-men/2a.png";
import image3a from "../../../assets/categories-for-men/3a.png";
import image4a from "../../../assets/categories-for-men/4a.jpg";
import image5a from "../../../assets/categories-for-men/5a.png";
import image6a from "../../../assets/categories-for-men/6a.png";

import image1b from "../../../assets/categories-for-men/1b.png";
import image2b from "../../../assets/categories-for-men/2b.png";
import image3b from "../../../assets/categories-for-men/3b.png";

import image1c from "../../../assets/categories-for-men/1c.jpg";

import image1d from "../../../assets/categories-for-men/1d.png";
import image2d from "../../../assets/categories-for-men/2d.png";

import image1e from "../../../assets/categories-for-men/1e.png";
import image2e from "../../../assets/categories-for-men/2e.jpg";

import image1f from "../../../assets/categories-for-men/1f.png";
import image2f from "../../../assets/categories-for-men/2f.png";
import image3f from "../../../assets/categories-for-men/3f.jpg";
import image4f from "../../../assets/categories-for-men/4f.jpg";
import image5f from "../../../assets/categories-for-men/5f.png";

import { useScreenSize } from "../../CommonFunctions/CommonFunctions";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDataContext } from "../../Fetching/DataContext";
import { GridLoader } from 'react-spinners';

const HomeMenCategories = () => {
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
  const [fullSleeveTShirt, setFullSleeveTShirt] = useState([]);
  const [activeWear, setActiveWear] = useState([]);
  const [plusSizeTShirt, setPlusSizeTShirt] = useState([]);
  const [joggers, setJoggers] = useState([]);
  const [jeans, setJeans] = useState([]);
  const [chinos, setChinos] = useState([]);
  const [boxer, setBoxer] = useState([]);
  const [urban, setUrban] = useState([]);
  const [casual, setCasual] = useState([]);
  const [cargoJogger, setCargoJogger] = useState([]);
  const [knitted, setKnitted] = useState([]);
  const [shorts, setShorts] = useState([]);

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
        fetchDataAndFilter("description", "shirts", (item) => item.gender === "Men" && item.subCategory === "shirt", setShirts);
        fetchDataAndFilter("description", "printed", (item) => item.gender === "Men" && item.subCategory === "tshirt", setPrintedTShirt);
        fetchDataAndFilter("description", "plain", (item) => item.gender === "Men" && item.subCategory === "tshirt", setPlainTShirt);
        fetchDataAndFilter("description", "polo", (item) => item.subCategory === "tshirt", setPoloTShirt);
        fetchDataAndFilter("description", "full sleeve", (item) => item.gender === "Men", setFullSleeveTShirt);
        fetchDataAndFilter("description", "active wear", (item) => item.gender === "Men", setActiveWear);
        fetchDataAndFilter("name", "plus size", (item) => item.gender === "Men", setPlusSizeTShirt);
        fetchDataAndFilter("subCategory", "jogger", (item) => item.gender === "Men", setJoggers);
        fetchDataAndFilter("subCategory", "pyjamas", (item) => item.gender === "Men", setPyjamas);
        fetchDataAndFilter("subCategory", "jeans", (item) => item.gender === "Men", setJeans);
        fetchDataAndFilter("subCategory", "shorts", (item) => item.gender === "Men", setChinos);
        fetchDataAndFilter("subCategory", "trouser", (item) => item.gender === "Men", setBoxer);
        fetchDataAndFilter("description", "oversized", (item) => item.gender === "Men", setOverSizedTShirt);
        fetchDataAndFilter("description", "travel", (item) => item.gender === "Men", setTravelData);
        fetchDataAndFilter("description", "urban", (item) => item.gender === "Men" && item.subCategory === "shirt", setUrban);
        fetchDataAndFilter("description", "casual", (item) => item.gender === "Men" && item.subCategory === "shirt", setCasual);
        fetchDataAndFilter("description", "cargo-jogger", (item) => item.gender === "Men", setCargoJogger);
        fetchDataAndFilter("description", "knitted", (item) => item.gender === "Men", setKnitted);
        fetchDataAndFilter("name", "shorts", (item) => item.gender === "Men", setShorts);
      }, 0);
    }
  }, [data]);
  
  if (loading) {
    return (
      <>
        <div className="flex justify-center my-4 items-center">
          <GridLoader color="#36d6b1" loading margin={5} size={15} />
        </div>
      </>
    ) 
  }

  return (
    <>
      {!isMobile && (
        <div className="flex justify-center my-3.5">
          <div className="w-[76.2%] flex flex-col justify-center">
            <h1 className="text-[20px] font-bold">CATEGORIES FOR MEN </h1>
            <section className="flex flex-wrap flex-row gap-4 ">
              <Link to="/clothing/shirts" state={{ data: shirts }}>
                <img className="w-[180px]" src={image1} alt="img1" />
              </Link>
              <Link
                to="/clothing/printed-t-shirt"
                state={{ data: printedTShirt }}
              >
                <img className="w-[180px]" src={image2} alt="img2" />
              </Link>
              <Link to="/clothing/plain-t-shirt" state={{ data: plainTShirt }}>
                <img className="w-[180px]" src={image3} alt="img3" />
              </Link>
              <Link to="clothing/polo-t-shirt" state={{ data: poloTShirt }}>
                <img className="w-[180px]" src={image4} alt="img4" />
              </Link>
              <Link
                to="clothing/full-sleeve-t-shirt"
                state={{ data: fullSleeveTShirt }}
              >
                <img className="w-[180px]" src={image5} alt="img5" />
              </Link>
              <Link to="clothing/active-wear" state={{ data: activeWear }}>
                <img className="w-[180px]" src={image6} alt="img6" />
              </Link>
              <Link
                to="clothing/plus-size-t-shirt"
                state={{ data: plusSizeTShirt }}
              >
                <img className="w-[180px]" src={image7} alt="img7" />
              </Link>
              <Link to="clothing/joggers" state={{ data: joggers }}>
                <img className="w-[180px]" src={image8} alt="img8" />
              </Link>
              <Link to="clothing/pyjamas" state={{ data: pyjamas }}>
                <img className="w-[180px]" src={image9} alt="img9" />
              </Link>
              <Link to="clothing/jeans" state={{ data: jeans }}>
                <img className="w-[180px]" src={image10} alt="img10" />
              </Link>
              <Link to="clothing/chinos" state={{ data: chinos }}>
                <img className="w-[180px]" src={image11} alt="img11" />
              </Link>
              <Link to="clothing/boxer" state={{ data: boxer }}>
                <img className="w-[180px]" src={image12} alt="img12" />
              </Link>
            </section>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="flex justify-center">
          <div className="flex flex-col w-[77%]">
            <div className="flex flex-col">
              <h2 className="font-bold py-3.5">T-SHIRTS-HIGH DEMAND</h2>
              <div className="flex flex-nowrap gap-3 overflow-x-scroll overflow-y-hidden whitespace-nowrap">
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link
                    to="clothing/oversized-t-shirt"
                    state={{ data: overSizedTShirt }}
                  >
                    <img className=" w-[200px]" src={image1a} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1 bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      OVERSIZED T-SHIRT
                    </h2>
                  </Link>
                </div>

                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link
                    to="/clothing/printed-t-shirt"
                    state={{ data: printedTShirt }}
                  >
                    <img className=" w-[200px]" src={image2a} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1  bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      PRINTED T-SHIRTS
                    </h2>
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link
                    to="/clothing/plain-t-shirt"
                    state={{ data: plainTShirt }}
                  >
                    <img className=" w-[200px]" src={image3a} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1  bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      PLAIN T-SHIRTS
                    </h2>
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link to="clothing/active-wear" state={{ data: activeWear }}>
                    <img className=" w-[200px]" src={image4a} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1  bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      ACTIVEWEAR
                    </h2>
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link
                    to="clothing/full-sleeve-t-shirt"
                    state={{ data: fullSleeveTShirt }}
                  >
                    <img className=" w-[200px]" src={image5a} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1  bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      FULL SLEEVE T-SHIRTS
                    </h2>
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link
                    to="clothing/plus-size-t-shirt"
                    state={{ data: plusSizeTShirt }}
                  >
                    <img className=" w-[200px]" src={image6a} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1  bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      PLUS SIZE T-SHIRTS
                    </h2>
                  </Link>
                </div>
              </div>

              <h2 className="font-bold py-3.5">
                SHIRTS-FORMAL TO CASUAL STYLES
              </h2>
              <div className="flex flex-nowrap gap-3 overflow-x-scroll overflow-y-hidden whitespace-nowrap">
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link
                    to="/clothing/plain-t-shirt"
                    state={{ data: plainTShirt }}
                  >
                    <img className=" w-[200px]" src={image1b} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1 bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      PLAIN SHIRT
                    </h2>
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link to="/clothing/urban-shirt" state={{ data: urban }}>
                    <img className=" w-[200px]" src={image2b} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1  bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      URBAN SHIRTS
                    </h2>
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link to="/clothing/casual" state={{ data: casual }}>
                    <img className=" w-[200px]" src={image3b} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1  bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      CASUAL SHIRTS
                    </h2>
                  </Link>
                </div>
              </div>
              <h2 className="font-bold py-3.5">POLO-CLASSIC TO PLAYFUL</h2>
              <div>
                <Link to="clothing/polo-t-shirt" state={{ data: poloTShirt }}>
                  <img src={image1c} alt="" />
                </Link>
              </div>

              <h2 className="font-bold py-3.5">
                JOGGERS - STEP INTO EVERYDAY COMFORT{" "}
              </h2>
              <div className="flex flex-nowrap gap-3 overflow-x-scroll overflow-y-hidden whitespace-nowrap">
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link
                    to="clothing/cargo-jogger"
                    state={{ data: cargoJogger }}
                  >
                    <img className=" w-[200px]" src={image1d} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1 bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      CARGO JOGGERS
                    </h2>
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link to="clothing/knitted" state={{ data: knitted }}>
                    <img className=" w-[200px]" src={image2d} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1 bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      KNITTED JOGGERS
                    </h2>
                  </Link>
                </div>
              </div>

              <h2 className="font-bold py-3.5">
                BOXERS - BREEZY SUMMER STYLES
              </h2>
              <div className="flex flex-nowrap gap-3 overflow-x-scroll overflow-y-hidden whitespace-nowrap">
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link to="clothing/boxer" state={{ data: boxer }}>
                    <img className=" w-[200px]" src={image1e} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1 bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      PLAIN BOXERS
                    </h2>
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link to="clothing/boxer" state={{ data: boxer }}>
                    <img className=" w-[200px]" src={image2e} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1 bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      PRINTED BOXERS
                    </h2>
                  </Link>
                </div>
              </div>

              <h2 className="font-bold py-3.5">EXPLORE MORE BOTTOMWEAR</h2>
              <div className="flex flex-nowrap gap-3 overflow-x-scroll overflow-y-hidden whitespace-nowrap">
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link to="clothing/pyjamas" state={{ data: pyjamas }}>
                    <img className=" w-[200px]" src={image1f} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1 bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      PYJAMA
                    </h2>
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link to="clothing/chinos" state={{ data: chinos }}>
                    <img className=" w-[200px]" src={image2f} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1 bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      CHINOS
                    </h2>
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link
                    to="clothing/cargo-jogger"
                    state={{ data: cargoJogger }}
                  >
                    <img className=" w-[200px]" src={image3f} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1 bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      CARGO PANTS
                    </h2>
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <Link
                    to="clothing/shorts"
                    state={{ data: shorts }}
                  >
                  <img className=" w-[200px]" src={image4f} alt="" />
                  <h2 className="absolute left-0 bottom-0 z-1 bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                    SHORTS
                  </h2>
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link to="clothing/jeans" state={{ data: jeans }}>
                    <img className=" w-[200px]" src={image5f} alt="" />
                    <h2 className="absolute left-0 bottom-0 z-1 bg-gray-400 w-full text-center text-white font-bold text-[18px]">
                      JEANS
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeMenCategories;
