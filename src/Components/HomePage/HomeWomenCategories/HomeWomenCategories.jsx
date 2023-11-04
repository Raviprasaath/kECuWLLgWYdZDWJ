import { useScreenSize } from "../../CommonFunctions/CommonFunctions";

import image1 from "../../../assets/categories-for-women/1.jpg";
import image2 from "../../../assets/categories-for-women/2.jpg";
import image3 from "../../../assets/categories-for-women/3.jpg";
import image4 from "../../../assets/categories-for-women/4.jpg";
import image5 from "../../../assets/categories-for-women/5.jpg";
import image6 from "../../../assets/categories-for-women/6.jpg";

import image1b from "../../../assets/categories-for-women/1b.jpg";
import image2b from "../../../assets/categories-for-women/2b.jpg";
import image3b from "../../../assets/categories-for-women/3b.jpg";
import image4b from "../../../assets/categories-for-women/4b.jpg";
import image5b from "../../../assets/categories-for-women/5b.jpg";
import image6b from "../../../assets/categories-for-women/6b.jpg";
import image7b from "../../../assets/categories-for-women/7b.jpg";
import image8b from "../../../assets/categories-for-women/8b.jpg";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../Fetching/DataContext";
import { GridLoader } from 'react-spinners';

const HomeWomenCategories = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;
  const { data, loading } = useDataContext();

  const [overSizedTShirt, setOverSizedTShirt] = useState([]);
  const [kurti, setKurti] = useState([]);
  const [printedTShirt, setPrintedTShirt] = useState([]);
  const [plainTShirt, setPlainTShirt] = useState([]);
  const [fullSleeveTShirt, setFullSleeveTShirt] = useState([]);
  const [boxer, setBoxer] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [tops, setTops] = useState([]);

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
        fetchDataAndFilter("description", "oversized", (item) => item.gender === "Women" && item.subCategory === "tshirt", setOverSizedTShirt);
        fetchDataAndFilter("subCategory", "kurti", (item) => item.gender === "Women", setKurti);
        fetchDataAndFilter("description", "printed", (item) => item.gender === "Women" && item.subCategory === "tshirt", setPrintedTShirt);
        fetchDataAndFilter("description", "plain", (item) => item.gender === "Women" && item.subCategory === "tshirt", setPlainTShirt);
        fetchDataAndFilter("name", "full", (item) => item.gender === "Women", setFullSleeveTShirt);
        fetchDataAndFilter("description", "boxer", (item) => item.gender === "Women", setBoxer);
        fetchDataAndFilter("description", "shirts", (item) => item.gender === "Women" && item.subCategory === "shirt", setShirts);
        fetchDataAndFilter("description", "tops", (item) => item.gender === "Women" && item.subCategory === "shirt", setTops);
      }, 0);
    }
  }, [data]);
  
  if (loading) {
    return <div className="flex justify-center items-center">
      <GridLoader color="#36d6b1" loading margin={5} size={15} />
    </div>;
  }

  return (
    <>
      {!isMobile && (
        <div className="flex justify-center">
          <div className="flex flex-col justify-center w-[78%]">
            <h1 className="text-[20px] font-bold">FOR WOMEN</h1>
            <div className="flex flex-row flex-wrap gap-2">
              <Link
                to="/clothing/oversized-t-shirt-women"
                state={{ data: overSizedTShirt }}
              >
                <img className="w-[190px]" src={image1} alt="img1" />
              </Link>
              <Link to="/clothing/kurti-women" state={{ data: kurti }}>
                <img className="w-[190px]" src={image2} alt="img2" />
              </Link>
              <Link
                to="/clothing/printed-t-shirt-women"
                state={{ data: printedTShirt }}
              >
                <img className="w-[190px]" src={image3} alt="img3" />
              </Link>
              <Link
                to="/clothing/plain-t-shirt-women"
                state={{ data: plainTShirt }}
              >
                <img className="w-[190px]" src={image4} alt="img4" />
              </Link>
              <Link
                to="/clothing/full-sleeve-t-shirt-women"
                state={{ data: fullSleeveTShirt }}
              >
                <img className="w-[190px]" src={image5} alt="img5" />
              </Link>
              <Link to="/clothing/boxer-women" state={{ data: boxer }}>
                <img className="w-[190px]" src={image6} alt="img6" />
              </Link>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="flex justify-center">
          <div className="flex flex-col w-[77%]">
            <div className="flex flex-col">
              <h2 className="font-bold py-3.5">FOR WOMEN</h2>
              <div className="flex flex-nowrap gap-3 overflow-x-scroll overflow-y-hidden whitespace-nowrap">
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link
                    to="/clothing/oversized-t-shirt-women"
                    state={{ data: overSizedTShirt }}
                  >
                    <img className=" w-[200px]" src={image1b} alt="" />
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link to="/clothing/kurti-women" state={{ data: kurti }}>
                    <img className=" w-[200px]" src={image2b} alt="" />
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link
                    to="/clothing/printed-t-shirt-women"
                    state={{ data: printedTShirt }}
                  >
                    <img className=" w-[200px]" src={image3b} alt="" />
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link
                    to="/clothing/plain-t-shirt-women"
                    state={{ data: plainTShirt }}
                  >
                    <img className=" w-[200px]" src={image4b} alt="" />
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link to="/clothing/shirt-women" state={{ data: shirts }}>
                    <img className=" w-[200px]" src={image5b} alt="" />
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link
                    to="/clothing/full-sleeve-t-shirt-women"
                    state={{ data: fullSleeveTShirt }}
                  >
                    <img className=" w-[200px]" src={image6b} alt="" />
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link to="/clothing/tops-women" state={{ data: tops }}>
                    <img className=" w-[200px]" src={image7b} alt="" />
                  </Link>
                </div>
                <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                  <Link to="/clothing/boxer-women" state={{ data: boxer }}>
                    <img className=" w-[200px]" src={image8b} alt="" />
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

export default HomeWomenCategories;
