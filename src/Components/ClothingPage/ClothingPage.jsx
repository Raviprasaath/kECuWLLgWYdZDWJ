import React, { useEffect, useRef, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoIosOptions } from "react-icons/io";
import { BiSortAlt2 } from "react-icons/bi";
import * as Dialog from "@radix-ui/react-dialog";
import ClothingFilter from "./ClothingFilter";

import { useScreenSize } from "../CommonFunctions/CommonFunctions";

import "./ClothingPage.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDataContext } from "../Fetching/DataContext";
import { GridLoader } from 'react-spinners';


let productsIdArray = [];

const ClothingPage = ({ handlerOpenFilter, handlerFilterData }) => {
  const location = useLocation();
  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;

  const navigate = useNavigate();

  const { openDialog, refreshNavbar, filterTypeSelection, handlerTypeOfFilterChoose } = useDataContext();

  const [dataRender, setDataRender] = useState();
  const [productsFavHeartId, setProductsFavHeartId] = useState([]);
  const [tokenVal, setTokenVal] = useState();


  const [loginCheck, setLoginCheck] = useState(false);
  let dataFromLocal = JSON.parse(localStorage.getItem("userDetails")) || [];


  const productFirstInFetch = async (idVal, method, token) => {
    try {
      let myHeaders = new Headers();
      myHeaders.append("projectID", "vflsmb93q9oc");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      let raw = JSON.stringify({
        productId: `${idVal}`,
      });

      let requestOptions = {
        method: `${method}`,
        headers: myHeaders,
        redirect: "follow",
      };

      if (method === "PATCH") {
        requestOptions.body = raw;
      }

      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/ecommerce/wishlist",
        requestOptions
      );
      if (response.ok) {
        const result = await response.json();

        let productsIdSet = new Set(productsIdArray); 

        const favProductsIdExtract = result.data.items.map((item) => {
          return item.products._id;
        });

        favProductsIdExtract.forEach((id) => {
          productsIdSet.add(id);
        });

        productsIdArray = Array.from(productsIdSet);
        setProductsFavHeartId(favProductsIdExtract);        
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const productAddingInFetch = async (idVal, method, token) => {
    try {
      let myHeaders = new Headers();
      myHeaders.append("projectID", "vflsmb93q9oc");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      let raw = JSON.stringify({
        productId: `${idVal}`,
      });

      let requestOptions = {
        method: `${method}`,
        headers: myHeaders,
        redirect: "follow",
      };

      if (method === "PATCH") {
        requestOptions.body = raw;
      }

      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/ecommerce/wishlist",
        requestOptions
      );
      if (response.ok) {
        productFirstInFetch("", "GET", token)
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const productRemovingInFetch = async (idVal, method, token) => {
    try {
      let myHeaders = new Headers();
      myHeaders.append("projectID", "vflsmb93q9oc");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      let raw = JSON.stringify({
        productId: `${idVal}`,
      });

      let requestOptions = {
        method: `${method}`,
        headers: myHeaders,
        redirect: "follow",
      };

      if (method === "PATCH") {
        requestOptions.body = raw;
      }

      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${idVal}`,
        requestOptions
      );
      if (response.ok) {
        const updateLocalArray = productsIdArray.filter((item) => item !== idVal);
        productsIdArray = updateLocalArray;
        refreshNavbar();
        productFirstInFetch("", "GET", token)
      }
    } catch (error) {
      console.log("error", error);
    }
  };


  const handlerFavAdding = (event, item, idVal) => {
    event.preventDefault();
    if (loginCheck) {
      const newIdArray = productsFavHeartId.includes(idVal) || productsIdArray.includes(idVal);
      if (newIdArray) {
        productRemovingInFetch(idVal, "DELETE", tokenVal);
      } else {
        productAddingInFetch(idVal, "PATCH", tokenVal);
      }
      refreshNavbar();
    } else {
      openDialog();
    }
  };

  let dataFromHP3 = location?.state?.data;

  useEffect(() => {
    if (!filterTypeSelection) {
      setDataRender(dataFromHP3);
    } else if ( filterTypeSelection === 'S' || filterTypeSelection === 'M' ||  filterTypeSelection === 'L' ||  filterTypeSelection === 'XL' ||  filterTypeSelection === 'XXL' ) {      
      handlerFilteredContent(filterTypeSelection, 'size');
    } else if (filterTypeSelection === 'Low to High' || filterTypeSelection === 'High to Low') {
      handlerFilteredContent(filterTypeSelection, 'price');
    } else {
      handlerFilteredContent(filterTypeSelection, 'color');
    }

    if (dataFromLocal.username) {
      setLoginCheck(true);
      setTokenVal(dataFromLocal?.token);
      const token = dataFromLocal?.token;
      productFirstInFetch("", "GET", token);
      productsIdArray = [];

    } else {
      setLoginCheck(false);
      setProductsFavHeartId([]);
      productsIdArray = [];
    }



  }, [location.pathname, refreshNavbar ]);


  const handlerFilteredContent = (filterGetting, typeOfFilter) => {
    if (typeOfFilter === 'size') {
      let sortedData = dataFromHP3?.filter((item)=> {
        return item.size.includes(filterGetting);
      })
      setDataRender(sortedData);
    } else if (typeOfFilter === 'price') {
      let sortedData;
      if (filterGetting === 'Low to High') {
        sortedData = dataFromHP3.sort(function(a, b){return a.price - b.price});
      } else {
        sortedData = dataFromHP3.sort(function(a, b){return b.price - a.price});
      }
      setDataRender(sortedData);
    } else if (typeOfFilter === 'color') {
      let sortedData = dataFromHP3?.filter((item)=> {
        return item.color === filterGetting
      })
      setDataRender(sortedData);
    }
  }


  const [imageLoaded, setImageLoaded] = useState(false);
  const contentBody = (
    <>
      <div className="flex flex-row justify-center flex-wrap gap-4 p-4">
        {!dataRender ? (
          <div className="flex justify-center items-center">
            <GridLoader color="#36d6b1" loading margin={5} size={15} />
          </div>
        ) : dataRender.length === 0 ? (
          navigate('/out-of-stock')
        ) : (
          dataRender.map((item) => (
            <Link
              key={item._id}
              to={`${location.pathname}/${item._id}`}
              state={{ similarProducts: dataRender }}
            >
              <div className="relative max-w-[200px] flex flex-col justify-center items-center">
                <div>
                  <img
                    className="max-w-[200px] rounded-md"
                    src={item.displayImage? item.displayImage: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/08/s_2A9C470D38F43091CCD122E63014ED4503CAA7508FAF0C6806AE473C2B94B83E_1627522653545_loadinfo.gif?resize=200%2C200&ssl=1'}
                    alt=""
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                <div>
                  <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
                    {item.name}
                  </p>
                  <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
                    {item.subCategory}
                  </p>
                  <p className="flex flex-row justify-center items-center">
                    <span className="px-1.5 font-bold text-[0.9rem]">
                      ₹{item.price}
                    </span>
                    <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                      ₹{item.price + item.price * (50 / 100)}
                    </span>
                    <span className="px-1 font-bold text-[0.8rem] text-green-500">
                      (50% Off)
                    </span>
                  </p>
                </div>

                <div
                  className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
                  onClick={(event) => handlerFavAdding(event, item, item._id)}
                >
                  {productsFavHeartId.includes(item._id) || productsIdArray.includes(item._id) ? (
                    <AiFillHeart className="text-red-500" />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );


  return (
    <>
      <div className="flex relative">
        {!isMobile && (
          <div className="sticky">
            <>
              <div className="flex">
                <div>{<ClothingFilter clothingData={dataRender} />}</div>
                <div className="z-1">{contentBody}</div>
              </div>
            </>
          </div>
        )}

        {isMobile && <div className="z-1">{contentBody}</div>}

        {isMobile && (
          <>
            <div className="fixed flex flex-row bottom-0 w-full justify-around bg-white py-2">
              <div
                onClick={() => {
                  handlerFilterData(dataRender);
                  handlerOpenFilter(true);
                  
                }}
                className="flex justify-center items-center gap-2 w-1/2 cursor-pointer"
              >
                <IoIosOptions />
                <p>FILTER</p>
              </div>
              <div className="border-1"></div>
              <div className="flex justify-center items-center gap-2 w-1/2 cursor-pointer">
                <BiSortAlt2 />

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <p>SORT BY</p>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                      <Dialog.Description className="DialogDescription">
                        <div className="text-center">
                          <p className="font-bold">SORT BY </p>
                          <p className="cursor-pointer" onClick={()=>handlerTypeOfFilterChoose('Low to High')} >PRICE LOW TO HIGH</p>
                          <p className="cursor-pointer" onClick={()=>handlerTypeOfFilterChoose('High to Low')} >PRICE HIGH TO LOW</p>
                        </div>
                      </Dialog.Description>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ClothingPage;
