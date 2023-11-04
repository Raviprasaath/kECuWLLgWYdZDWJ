import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { useScreenSize } from "../CommonFunctions/CommonFunctions";
import React, { useEffect, useState } from "react";

import "./NavbarLayer2.css";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import navbarImage1 from "../../assets/navbar-1.jpg";
import { Link, useLocation } from "react-router-dom";
import { useDataContext } from "../Fetching/DataContext";

const NavbarLayer2 = ({ handlerNavbarToggle }) => {
  const { data, loading, refreshNavbar, openDialog } = useDataContext();
  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;
  const location = useLocation();
  
  let dataFromLocal = JSON.parse(localStorage.getItem("userDetails")) || [];

  const [loginCheck, setLoginCheck] = useState(false);
  const [tokenVal, setTokenVal] = useState();

  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [searchBarResult, setSearchBarResult] = useState(false);

  const [searchResult, setSearchResult] = useState([]);


  const [cartCount, setCartCount] = useState(0);
  const [wishListCount, setWishListCount] = useState(0);
  const [searchValueType, setSearchValueType] = useState("");
  const [searchResultShowing, setSearchResultShowing] = useState(false);
  

  let timerId;
  const handlerSearchBar = (e) => {
    clearTimeout(timerId);
    setSearchValueType(e.target.value);
    timerId = setTimeout(()=> {
      handlerSearchingResult(e.target.value);
    }, 1000)
  }

  const handlerSearchResult = () => {
    setSearchValueType("")
  }
  const [queryParamVal, setQueryParamVal] = useState('0');
  const queryParamRandomCreation = () => {
    let numberValue = Math.floor(Math.random()*1000);
    setQueryParamVal(numberValue);
  }
  
  const handlerSearchingResult = (value) => {
    if (value.length !== 0) {
      queryParamRandomCreation();

      let filter1 = (data?.data || []).filter((item) => {
        return item.subCategory && item.subCategory.includes(value);
      });
      let filter2 = (data?.data || []).filter((item) => {
        return item.brand && item.brand.includes(value);
      });
      let filter3 = (data?.data || []).filter((item) => {
        return item.name && item.name.includes(value);
      });
    
      let filter4 = [];
    
      if (filter1.length === 0 && filter2.length === 0 && filter3.length === 0) {
        filter4 = (data?.data || []).filter((item) => {
          return item.description && item.description.includes(value);
        });
      }
      const mergerArray = [];
      [filter1, filter2, filter3].forEach((filter)=> {
        filter.forEach((item)=> {
          if(!mergerArray.some((mergedItem) => mergedItem._id === item._id)) {
            mergerArray.push(item);
          }
        });
      });

      if (mergerArray.length !== 0) {
        setSearchResult(mergerArray);
        setSearchResultShowing(false);
      } else {
        setSearchResultShowing(true);
        setSearchResult(filter4);
      }
    }
  }

  const [isHovered, setIsHovered] = useState(false);

  const handlerSearchOpen = () => {
    setSearchBarOpen(!searchBarOpen);
  }


  const handlerCardGetting = async (tokenVal) => {
    let myHeaders = new Headers();
    myHeaders.append("projectID", "vflsmb93q9oc");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${tokenVal}`);

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/cart/", requestOptions)
    if (response.ok) {
      const result = await response.json();
      setCartCount(result.results);
    }
  }
  const handlerWishListGetting = async (tokenVal) => {
    let myHeaders = new Headers();
    myHeaders.append("projectID", "vflsmb93q9oc");
    myHeaders.append("Authorization", `Bearer ${tokenVal}`);

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist", requestOptions)
    if (response.ok) {
      const result = await response.json();
      setWishListCount(result.results);
    }
  }

  useEffect(() => {
    if (dataFromLocal.username) {
        setLoginCheck(true);
        handlerCardGetting(dataFromLocal?.token);
        handlerWishListGetting(dataFromLocal?.token);
        setTokenVal(dataFromLocal?.token);

      } else {
        setLoginCheck(false);
        setCartCount(0);
        setWishListCount(0);
      }
      setSearchBarOpen(false);
}, [location.pathname, refreshNavbar, cartCount, wishListCount]);



  //#region ------------------------Men-----------------

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
  const [athleisure, setAthleisure] = useState([]);
  const [halfSleeve, setHalfSleeve] = useState([]);
  const [combo, setCombo] = useState([]);
  const [chino, setChino] = useState([]);
  const [gym, setGym] = useState([]);
  const [cartoon, setCartoon] = useState([]);
  const [sports, setSports] = useState([]);
  const [music, setMusic] = useState([]);
  const [jackets, setJackets] = useState([]);
  const [sweatShirts, setSweatShirts] = useState([]);
  const [hoodies, setHoodies] = useState([]);
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);

  // function fetchDataAndFilter(
  //   title, searchTerm, filterFunction, setDataFunction) {
  //   const filteredData = data.data.filter((item) => {
  //     return item[title].includes(searchTerm) && filterFunction(item);
  //   });
  //   setDataFunction(filteredData);
  // }
  function fetchDataAndFilter(title, searchTerm, filterFunction, setDataFunction) {
    if (data && Array.isArray(data.data) ) {
      const filteredData = data.data.filter((item) => {
        return item[title].includes(searchTerm) && filterFunction(item);
      });
      setDataFunction(filteredData);
    }
  }
  

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        const filters = [
          ["description", "shirts", (item) => item.gender === "Men" && item.subCategory === "shirt", setShirts],
          ["description", "printed", (item) => item.gender === "Men" && item.subCategory === "tshirt", setPrintedTShirt],
          ["description", "plain", (item) => item.gender === "Men" && item.subCategory === "tshirt", setPlainTShirt],
          ["description", "polo", (item) => item.subCategory === "tshirt", setPoloTShirt],
          ["name", "full", (item) => item.gender === "Men", setFullSleeveTShirt],
          ["description", "active wear", (item) => item.gender === "Men", setActiveWear],
          ["name", "plus size t-shirt", (item) => item.gender === "Men", setPlusSizeTShirt],
          ["subCategory", "jogger", (item) => item.gender === "Men", setJoggers],
          ["subCategory", "pyjamas", (item) => item.gender === "Men", setPyjamas],
          ["subCategory", "jeans", (item) => item.gender === "Men", setJeans],
          ["description", "chinos", (item) => item.gender === "Men", setChinos],
          ["description", "boxer", (item) => item.gender === "Men", setBoxer],
          ["description", "oversized", (item) => item.gender === "Men" && item.subCategory === "tshirt", setOverSizedTShirt],
          ["description", "travel", (item) => item.gender === "Men", setTravelData],
          ["description", "urban", (item) => item.gender === "Men" && item.subCategory === "shirt", setUrban],
          ["description", "casual", (item) => item.gender === "Men" && item.subCategory === "shirt", setCasual],
          ["description", "cargo-jogger", (item) => item.gender === "Men", setCargoJogger],
          ["description", "knitted", (item) => item.gender === "Men", setKnitted],
          ["name", "shorts", (item) => item.gender === "Men", setShorts],
          ["description", "Athleisure", (item) => item.gender === "Men", setAthleisure],
          ["description", "half sleeve", (item) => item.gender === "Men", setHalfSleeve],
          ["description", "combo", (item) => item.gender === "Men", setCombo],
          ["subCategory", "shorts", (item) => item.gender === "Men", setChino],
          ["description", "gym", (item) => item.gender === "Men", setGym],
          ["description", "cartoon", (item) => item.gender === "Men", setCartoon],
          ["description", "sports", (item) => item.gender === "Men", setSports],
          ["description", "music", (item) => item.gender === "Men", setMusic],
          ["description", "Jackets", (item) => item.gender === "Men", setJackets],
          ["subCategory", "sweater", (item) => item.gender === "Men", setSweatShirts],
          ["subCategory", "hoodie", (item) => item.gender === "Men", setHoodies],
          ["gender", "Men", (item) => item.gender === "Men", setMen],
          ["gender", "Women", (item) => item.gender === "Women", setWomen],
        ];
  
        filters.forEach(([title, searchTerm, filterFunction, setDataFunction]) => fetchDataAndFilter(title, searchTerm, filterFunction, setDataFunction));
      }, 0);
    }
  }, [data]);
  //#endregion ------------------------Men-----------------

  //#region ---------------------------------
  const [printedTShirtWomen, setPrintedTShirtWomen] = useState([]);
  const [overSizedTShirtWomen, setOverSizedTShirtWomen] = useState([]);
  const [kurtiWomen, setKurtiWomen] = useState([]);
  const [shirtsWomen, setShirtsWomen] = useState([]);
  const [halfSleeveWomen, setHalfSleeveWomen] = useState([]);
  const [plainTShirtWomen, setPlainTShirtWomen] = useState([]);
  const [fullSleeveTShirtWomen, setFullSleeveTShirtWomen] = useState([]);
  const [kurtaWomen, setKurtaWomen] = useState([]);
  const [cropTopsWomen, setCropTopsWomen] = useState([]);
  const [plusSizeTShirtsWomen, setPlusSizeTShirtWomen] = useState([]);
  const [comboWomen, setComboWomen] = useState([]);
  const [boxerWomen, setBoxerWomen] = useState([]);
  const [jeggingsWomen, setJeggingsWomen] = useState([]);
  const [pantsWomen, setPantsWomen] = useState([]);
  const [copleBoxerWomen, setCoupleBoxerWomen] = useState([]);
  const [travelWomen, setTravelWomen] = useState([]);
  const [gymWomen, setGymWomen] = useState([]);
  const [cartoonWomen, setCartoonWomen] = useState([]);
  const [sportsWomen, setSportsWomen] = useState([]);
  const [musicWomen, setMusicWomen] = useState([]);
  const [bikerWomen, setBikerWomen] = useState([]);
  const [funkyWomen, setFunkyWomen] = useState([]);
  const [godWomen, setGodWomen] = useState([]);
  const [quotesWomen, setQuotesWomen] = useState([]);

  const [jacketsWomen, setJacketsWomen] = useState([]);
  const [sweatShirtsWomen, setSweatShirtsWomen] = useState([]);
  const [hoodiesWomen, setHoodiesWomen] = useState([]);
  const [topsWomen, setTopsWomen] = useState([]);
  
  const [travelCommon, setTravelCommon] = useState([]);
  const [urbanCommon, setUrbanCommon] = useState([]);
  const [tShirtsCommon, setTShirtsCommon] = useState([]);
  const [hawaiianCommon, setHawaiianCommon] = useState([]);
  const [savageCommon, setSavageCommon] = useState([]);
  
  const [shopByLook, setShopByLook] = useState([]);



  useEffect(() => {
    if (data) {
      setTimeout(() => {
        const filters = [
          ["description", "oversized", (item) => item.gender === "Women" && item.subCategory === "tshirt", setOverSizedTShirtWomen],
          ["subCategory", "kurti", (item) => item.gender === "Women", setKurtiWomen],
          ["subCategory", "kurta", (item) => item.gender === "Women", setKurtaWomen],
          ["description", "crop top", (item) => item.gender === "Women", setCropTopsWomen],
          ["name", "printed", (item) => item.gender === "Women" && item.subCategory === "tshirt", setPrintedTShirtWomen],
          ["description", "plain", (item) => item.gender === "Women" && item.subCategory === "tshirt", setPlainTShirtWomen],
          ["name", "full", (item) => item.gender === "Women", setFullSleeveTShirtWomen],
          ["description", "boxer", (item) => item.gender === "Women", setBoxerWomen],
          ["description", "shirts", (item) => item.gender === "Women" && item.subCategory === "shirt", setShirtsWomen],
          ["description", "tops", (item) => item.gender === "Women" && item.subCategory === "shirt", setTopsWomen],
          ["description", "plus size t-shirt", (item) => item.gender === "Women", setPlusSizeTShirtWomen],
          ["description", "half sleeve", (item) => item.gender === "Women", setHalfSleeveWomen],
          ["description", "combo", (item) => item.gender === "Women", setComboWomen],
          ["description", "gym", (item) => item.gender === "Women", setGymWomen],
          ["description", "cartoon", (item) => item.gender === "Women", setCartoonWomen],
          ["description", "sports", (item) => item.gender === "Women", setSportsWomen],
          ["description", "music", (item) => item.gender === "Women", setMusicWomen],
          ["description", "jacket", (item) => item.gender === "Women", setJacketsWomen],
          ["description", "sweatshirt", (item) => item.gender === "Women", setSweatShirtsWomen],
          ["description", "hoodies", (item) => item.gender === "Women", setHoodiesWomen],
          ["description", "travel", (item) => item.gender === "Women", setTravelWomen],
          ["description", "jeggings", (item) => item.gender === "Women", setJeggingsWomen],
          ["subCategory", "jeans", (item) => item.gender === "Women", setPantsWomen],
          ["description", "bike", (item) => item.gender === "Women", setBikerWomen],
          ["description", "funky", (item) => item.gender === "Women", setFunkyWomen],
          ["description", "god", (item) => item.gender === "Women", setGodWomen],
          ["description", "quote", (item) => item.gender === "Women", setQuotesWomen],
          ["description", "travel", (item) => item , setTravelCommon],
          ["description", "urban", (item) => item.subCategory === "shirt" , setUrbanCommon],
          ["subCategory", "tshirt", (item) => item , setTShirtsCommon],
          ["description", "hawaiian", (item) => item , setHawaiianCommon],
          ["description", "savage", (item) => item , setSavageCommon],
          ["description", "", (item) => item , setShopByLook],
        ]; 
  
        filters.forEach(([title, searchTerm, filterFunction, setDataFunction]) => fetchDataAndFilter(title, searchTerm, filterFunction, setDataFunction));
      }, 0);
    }
  }, [data]);
  


  //#endregion ------------------------------------

  
  return (
    <>
      {!isMobile && (
        <>
          <div className="flex justify-center bg-white ">
            <div className=" relative flex justify-between w-[960px] xl:w-[1200px] ">
              <div>
                <NavigationMenu.Root className="relative flex z-1 py-2.5">
                  <div className="font-sans cursor-pointer font-black tracking-widest text-[1.5rem]">
                    <Link to="/">BEYOUNG</Link>
                  </div>
                  <NavigationMenu.List className="flex justify-center w-full bg-white p-[4px] m-0 ">
                    <NavigationMenu.Item className="hover:bg-yellow-300">
                      <NavigationMenu.Trigger className="hover:bg-yellow-300 MenubarTrigger cursor-pointer text-[0.85rem] font-bold">
                        <Link to="/clothing/men" state={{ data: men }}>
                          MEN
                        </Link>
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="relative">
                        <div className="absolute top-0 -left-[140px] bg-white shadow-2xl flex flex-row w-[960px] xl:w-[1200px] h-[580px] justify-between font-sans px-5 py-5">
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">
                              Top Wear
                            </div>
                            <div>
                              <Link
                                to="/clothing/printed-t-shirt"
                                state={{ data: printedTShirt }}
                              >
                                Printed T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/oversized-t-shirt"
                                state={{ data: overSizedTShirt }}
                              >
                                Oversize T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/plain-t-shirt"
                                state={{ data: plainTShirt }}
                              >
                                Plain T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/full-sleeve-t-shirt"
                                state={{ data: fullSleeveTShirt }}
                              >
                                Full Sleeve T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/shirts"
                                state={{ data: shirts }}
                              >
                                Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/polo-t-shirt"
                                state={{ data: poloTShirt }}
                              >
                                Polo T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/athleisure"
                                state={{ data: athleisure }}
                              >
                                Athleisure T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/halfSleeve"
                                state={{ data: halfSleeve }}
                              >
                                Half Sleeve T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/plus-size-t-shirt"
                                state={{ data: plusSizeTShirt }}
                              >
                                Plus Size T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link to="/out-of-stock">
                                Combos
                              </Link>
                            </div>
                            <div className="MenubarSeparator"></div>
                            <div className="font-bold text-[1.1rem]">
                              Bottom Wear
                            </div>
                            <div>
                              <Link
                                to="clothing/cargo-jogger"
                                state={{ data: cargoJogger }}
                              >
                                Joggers
                              </Link>
                            </div>
                            <div>
                              <Link to="clothing/chino" state={{ data: chino }}>
                                Chino Pants
                              </Link>
                            </div>
                            <div>
                              <Link to="clothing/boxer" state={{ data: boxer }}>
                                Boxers
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/shorts"
                                state={{ data: shorts }}
                              >
                                Shorts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/cargo-jogger"
                                state={{ data: cargoJogger }}
                              >
                                Cargo Pants
                              </Link>
                            </div>
                            <div>
                              <Link to="clothing/jeans" state={{ data: jeans }}>
                                Jeans
                              </Link>
                            </div>
                            <div>
                              <Link to="clothing/boxer" state={{ data: boxer }}>
                                Couple Boxers
                              </Link>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">Theme</div>
                            <div>
                              <Link
                                to="clothing/travel"
                                state={{ data: travelData }}
                              >
                                Travel
                              </Link>
                            </div>
                            <div>
                              <Link to="clothing/gym" state={{ data: gym }}>
                                Gym
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/cartoon"
                                state={{ data: cartoon }}
                              >
                                Cartoon
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/sports"
                                state={{ data: sports }}
                              >
                                Sports
                              </Link>
                            </div>
                            <div>
                              <Link to="clothing/music" state={{ data: music }}>
                                Music
                              </Link>
                            </div>
                            <div className="MenubarSeparator"></div>
                            <div className="font-bold">Shirts</div>
                            <div>
                              <Link
                                to="clothing/plain-t-shirt"
                                state={{ data: plainTShirt }}
                              >
                                Plain Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/urban-shirt"
                                state={{ data: urban }}
                              >
                                Urban Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/casual"
                                state={{ data: casual }}
                              >
                                Casual Shirts
                              </Link>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">
                              Special
                            </div>
                            <div>
                              <Link to="/out-of-stock">Couple T-Shirts</Link>
                            </div>
                            <div>
                              <Link to="/out-of-stock">Bestseller T Shirts</Link>
                            </div>
                            <div className="MenubarSeparator"></div>
                            <div className="font-bold">Winter Wears</div>
                            <div>
                              <Link
                                to="/clothing/jackets"
                                state={{ data: jackets }}
                              >
                                Jackets
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/sweat-shirt"
                                state={{ data: sweatShirts }}
                              >
                                Sweatshirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/hoodies"
                                state={{ data: hoodies }}
                              >
                                Hoodies
                              </Link>
                            </div>
                          </div>
                          <div>
                            <img
                              src={navbarImage1}
                              className="w-[250px]"
                              alt=""
                            />
                          </div>
                        </div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className="hover:bg-yellow-300">
                      <NavigationMenu.Trigger className="hover:bg-yellow-300 MenubarTrigger cursor-pointer text-[0.85rem] font-bold">
                        <Link to="/clothing/women" state={{ data: women }}>
                          WOMEN
                        </Link>
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="relative">
                        <div className="absolute top-0 -left-[195px] bg-white flex flex-row w-[960px] xl:w-[1200px] h-[580px] justify-between font-sans px-5 py-5">
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">
                              Top Wear
                            </div>
                            <div>
                              <Link
                                to="/clothing/printed-t-shirt-women"
                                state={{ data: printedTShirtWomen }}
                              >
                                Printed T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/oversized-t-shirt-women"
                                state={{ data: overSizedTShirtWomen }}
                              >
                                Oversize T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/kurti-women"
                                state={{ data: kurtiWomen }}
                              >
                                Kurti
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/shirt-women"
                                state={{ data: shirtsWomen }}
                              >
                                Women Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/half-sleeve-t-shirt-women"
                                state={{ data: halfSleeveWomen }}
                              >
                              Half Sleeve T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/plain-t-shirt-women"
                                state={{ data: plainTShirtWomen }}
                              >
                                Plain T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/full-sleeve-t-shirt-women"
                                state={{ data: fullSleeveTShirtWomen }}
                              >
                                Full Sleeve T-Shirts
                              </Link>                            
                            </div>
                            <div>
                              <Link
                                to="clothing/kurta-women"
                                state={{ data: kurtaWomen }}
                              >
                                Kurta Sets
                              </Link>
                            
                            </div>
                            <div>
                              <Link
                                to="clothing/crop-tops-women"
                                state={{ data: cropTopsWomen }}
                              >
                                Crop Tops
                              </Link>
                            
                            </div>
                            <div>
                              <Link
                                to="clothing/plus-size-t-shirt-women"
                                state={{ data: plusSizeTShirtsWomen }}
                              >
                                Plus Size T-Shirts
                              </Link>
                            
                            </div>
                            <div>
                              <Link to="/out-of-stock">
                                Combos
                              </Link>
                            </div>
                            <div className="MenubarSeparator"></div>
                            <div className="font-bold text-[1.1rem]">                              
                                Bottom Wear                                                            
                            </div>
                            <div>
                              <Link
                                to="clothing/boxer-women"
                                state={{ data: boxerWomen }}
                              >
                                Boxer for Women
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/jeggings-women"
                                state={{ data: jeggingsWomen }}
                              >
                                Jeggings
                              </Link>
                            
                            </div>
                            <div>
                              <Link
                                to="clothing/pants-women"
                                state={{ data: pantsWomen }}
                              >
                                Women Pants
                              </Link>
                            
                            </div>
                            <div>
                              <Link
                                to="/out-of-stock"
                              >
                                Couple Boxers
                              </Link>                            
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">Theme</div>
                            <div>
                              <Link
                                to="clothing/travel-women"
                                state={{ data: travelWomen }}
                              >
                                Travel
                              </Link>                          
                            </div>
                            <div>
                              <Link
                                to="clothing/gym-women"
                                state={{ data: gymWomen }}
                              >
                                Gym
                              </Link>
                            
                            </div>
                            <div>
                              <Link
                                to="clothing/cartoon-women"
                                state={{ data: cartoonWomen }}
                              >
                                Cartoon
                              </Link>
                            
                            </div>
                            <div>
                              <Link
                                to="clothing/sports-women"
                                state={{ data: sportsWomen }}
                              >
                                Sports
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/music-women"
                                state={{ data: musicWomen }}
                              >
                                Music
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/biker-women"
                                state={{ data: bikerWomen }}
                              >
                                Biker
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/funky-women"
                                state={{ data: funkyWomen }}
                              >
                                Funky
                              </Link>                            
                            </div>
                            <div>
                              <Link
                                to="clothing/god-women"
                                state={{ data: godWomen }}
                              >
                                God
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/quote-women"
                                state={{ data: quotesWomen }}
                              >
                                Quotes
                              </Link>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">
                              Special
                            </div>
                            <div>
                              <Link
                                to="/out-of-stock"                                
                              >
                                Couple T-Shirts
                              </Link>
                              </div>
                              
                            <div>
                              <Link
                                to="/out-of-stock"                                
                              >
                                Bestseller T Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/out-of-stock"                                
                              >
                                Deals and Offers
                              </Link>
                            </div>
                            <div className="MenubarSeparator"></div>
                            <div className="font-bold">Winter Wears</div>
                            <div>
                              <Link
                                to="clothing/jackets-women"
                                state={{ data: jacketsWomen }}
                              >
                                Jackets
                              </Link>
                            
                            </div>
                            <div>
                              <Link
                                to="clothing/sweatshirt-women"
                                state={{ data: sweatShirtsWomen }}                                
                              >
                                Sweatshirts
                              </Link>
                            
                            </div>
                            <div>
                              <Link
                                to="clothing/hoodies-women"
                                state={{ data: hoodiesWomen }}                                
                              >

                                Hoodies
                              </Link>
                              </div>
                          </div>
                          <div>
                            <img
                              src={navbarImage1}
                              className="w-[250px]"
                              alt=""
                            />
                          </div>
                        </div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className="hover:bg-yellow-300">
                      <NavigationMenu.Trigger className="hover:bg-yellow-300 MenubarTrigger cursor-pointer text-[0.85rem] font-bold">
                        <Link to="/out-of-stock">
                          COMBOS
                        </Link>
                      </NavigationMenu.Trigger>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className="hover:bg-yellow-300">
                      <NavigationMenu.Trigger className="hover:bg-yellow-300 MenubarTrigger cursor-pointer text-[0.85rem] font-bold">
                        <Link
                          to="clothing/joggers"
                          state={{ data: joggers }}                                
                        >
                          JOGGERS
                        </Link>

                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="relative">
                        <div className="absolute top-0 left-0 bg-white flex flex-row w-[200px] h-[100px] justify-between font-sans px-5 py-5">
                          <div className="flex flex-col gap-2">
                            <div>
                              <Link
                                to="clothing/cargo"
                                state={{ data: cargoJogger }}                                
                              >
                                Cargo Joggers
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/knitted"
                                state={{ data: knitted }}                                
                              >
                                Knitted Joggers
                              </Link>
                            </div>
                          </div>
                        </div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className="hover:bg-yellow-300">
                      <NavigationMenu.Trigger className="hover:bg-yellow-300 MenubarTrigger cursor-pointer text-[0.85rem] font-bold">
                        <Link
                          to="clothing/shop-by-look"
                          state={{ data: shopByLook }}                                
                        >
                          SHOP THE LOOK
                        </Link>
                        
                      </NavigationMenu.Trigger>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className="hover:bg-yellow-300">
                      <NavigationMenu.Trigger className="hover:bg-yellow-300 MenubarTrigger cursor-pointer text-[0.85rem] font-bold">
                              <Link
                                to="clothing/shop-by-collection"
                                state={{ data: tShirtsCommon }}                                
                              >
                                SHOP BY COLLECTION
                              </Link>

                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="relative">
                        <div className="absolute top-0 left-0 bg-white flex flex-row w-[200px] h-[250px] justify-between font-sans px-5 py-5">
                          <div className="flex flex-col gap-2">
                            <div>
                              <Link
                                to="clothing/travel-common"
                                state={{ data: travelCommon }}                                
                              >                            
                              Travel
                            </Link>
                            </div>
                            <div>
                            <Link
                                to="clothing/urban-common"
                                state={{ data: urbanCommon }}                                
                              >
                                Urban Shirts
                              </Link>                          
                            </div>
                            <div>
                              <Link
                                to="clothing/tshirt-common"
                                state={{ data: tShirtsCommon }}                                
                              >
                                T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/hawaiian-common"
                                state={{ data: hawaiianCommon }}                                
                              >
                                Hawaiian Shirts
                              </Link>
                            
                            </div>
                            <div>
                              <Link
                                to="clothing/savage-common"
                                state={{ data: savageCommon }}                                
                              >
                                Savage Denim
                              </Link>                            
                            </div>
                            <div>
                            <Link
                                to="/out-of-stock"
                                state={{ data: travelCommon }}                                
                              >
                                Beyoung Originals
                              </Link>                              
                            </div>
                          </div>
                        </div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                  </NavigationMenu.List>
                </NavigationMenu.Root>
              </div>
              <div className="flex absolute right-0 top-[20px] gap-4 text-[1.3rem]">
                <AiOutlineSearch onClick={()=>handlerSearchOpen()} className="cursor-pointer" />
                
                
                
                <Link to={loginCheck ? "/myaccount/wishlist" : "/"}>
                  <div>
                    <AiFillHeart onClick={() => (!loginCheck ? openDialog() : null)} className="cursor-pointer"/>
                  </div>
                  <div className={`absolute -top-[15px] text-[0.7rem] right-[25px] bg-yellow-300 border rounded-full w-[18px] h-[18px] text-center`}>
                    {wishListCount}
                  </div>
                </Link>
                
                <Link to={loginCheck ? "/checkout/cart" : "/"}>
                  <div>
                    <BsFillCartFill onClick={() => (!loginCheck ? openDialog() : null)} className="cursor-pointer" />
                  </div>
                  <div className="absolute -top-[15px] text-[0.7rem] -right-[10px] bg-yellow-300 border rounded-full w-[18px] h-[18px] text-center">
                    {cartCount}
                  </div>
                </Link>
              </div>

            {/* search bar */}

            {searchBarOpen && (
              <div className="absolute border-2 border-gray-300 right-[0px] top-[58px] bg-white">
                <input onChange={(e)=>handlerSearchBar(e)} value={searchValueType} className="p-1.5 w-[170px]" type="text" name="search" id="search" />
                <Link to={`/clothing/search-result${queryParamVal}`} state={{ data: searchResult }}>
                  <label onClick={() => handlerSearchResult()} className="px-2.5 py-1 m-1 bg-black text-white">
                    Search
                  </label>
                </Link>
              </div>
            )}
            
            {searchBarOpen && (
              <div className="absolute right-[0px] top-[97px] bg-white w-[259.9px] h-[150px] overflow-auto">              
                  {searchResult?.map((item)=> (
                    <Link key={item._id} to={`/clothing/search-result${queryParamVal}`} state={{ data: searchResult }}>
                          <div className="px-2 text-[1.1rem]">
                          {!searchResultShowing ? 
                            // item.name : item.description
                            item.name : item.name
                          }
                          </div>
                        <div className="border"></div>
                    </Link>
                  ))}
                  {searchResult.length == 0 &&
                  <div className="px-2">No Result</div>
                }
              </div>
            )}
            </div>
          </div>
        </>
      )}
      {isMobile && (
        <div className="flex bg-white items-center w-full ">
          <div className="flex justify-between items-center gap-2.5 w-full px-2.5 py-2">
            <div className="flex items-center gap-2.5">
              <GiHamburgerMenu
                onClick={() => handlerNavbarToggle(true)}
                className="hover:opacity-50"
              />
              <div className="font-extrabold tracking-widest">
                <Link to="/">BEYOUNG</Link>
              </div>
            </div>

            <div className="relative flex items-center gap-2.5 text-[1.2rem]">
              <AiOutlineSearch onClick={()=>handlerSearchOpen()} className="cursor-pointer" />
              
              <Link to={loginCheck ? "/myaccount/wishlist" : "/"}>
                <div>
                <AiFillHeart onClick={() => (!loginCheck ? openDialog() : null)} className="cursor-pointer"/>
                </div>
                <div className="absolute -top-[10px] text-[0.7rem] right-[25px] bg-yellow-300 border rounded-full w-[15px] h-[15px] text-center">
                  {wishListCount}
                </div>
              </Link>

              <Link to={loginCheck ? "/checkout/cart" : "/"}>
                <div>
                  <BsFillCartFill onClick={() => (!loginCheck ? openDialog() : null)} className="cursor-pointer" />
                </div>
                <div className="absolute -top-[10px] text-[0.7rem] -right-[5px] bg-yellow-300 border rounded-full w-[15px] h-[15px] text-center">
                  {cartCount}
                </div>
              </Link>

            </div>

            {/* search bar */}
            { searchBarOpen && 
              <div className="absolute border-2 border-gray-300 right-[15px] top-[40px] bg-white">
                <input onChange={(e)=>handlerSearchBar(e)} value={searchValueType} className="p-1.5 w-[170px]" type="text" name="search" id="search" />
                <Link to={`/clothing/search-result${queryParamVal}`} state={{ data: searchResult }}>
                  <label onClick={() => handlerSearchResult()} className="px-2.5 py-1 m-1 bg-black text-white">
                    Search
                  </label>
                </Link>
              </div>
            }

            {searchBarOpen && 
              <div className="absolute right-[15px] top-[79px] bg-white w-[259.9px] h-[150px] overflow-auto ">
                {searchResult?.map((item)=> (
                  <Link key={item._id} to={`/clothing/search-result${queryParamVal}`} state={{ data: searchResult }}>
                    <div className="px-2 text-[1.1rem]">
                      {!searchResultShowing ? 
                        // item.name : item.description
                        item.name : item.name
                      }
                    </div>
                    <div className="border"></div>
                  </Link>
                ))}
                {searchResult.length == 0 && 
                  <div className="px-2">No Result</div>
                }

              </div>
            }

          </div>
        </div>
      )}
    </>
  );
};

export default NavbarLayer2;
