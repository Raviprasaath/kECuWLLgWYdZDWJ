import React, { useEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Tabs from "@radix-ui/react-tabs";
import * as Accordion from "@radix-ui/react-accordion";
import "./NavbarLayer3.css";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import psImage1 from "../../assets/play-store-1.png"
import psImage2 from "../../assets/play-store-2.png"
import { Link } from "react-router-dom";
import { useDataContext } from "../Fetching/DataContext";

const NavbarLayer3 = (props) => {
  const { toggleState, handlerNavbarToggle } = props;
  const [sideNavbarToggle, setSideNavbarToggle] = useState(0);
  const [bottomBorder, setBottomBorder] = useState(1);
  const { data, loading } = useDataContext();

  useEffect(() => {
    if (toggleState) {
      setSideNavbarToggle("0");
    } else {
      setSideNavbarToggle("-100vw");
    }
  }, [toggleState]);


  const handlerBorderBottom = (e) => {
    if (e.target.textContent === "Men") {
      setBottomBorder(1);
    } else {
      setBottomBorder(0);
    }
  };




  
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
  const [cargo, setCargo] = useState([]);
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
          ["description", "cargo jogger", (item) => item.gender === "Men", setCargoJogger],
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
          ["description", "sweat shirt", (item) => item.gender === "Men", setSweatShirts],
          ["description", "hoodies", (item) => item.gender === "Men", setHoodies],
          ["description", "cargo pant", (item) => item.gender === "Men", setCargo],
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
          ["description", "pants", (item) => item.gender === "Women", setPantsWomen],
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
      <div
        className={`fixed flex top-0 w-full ${toggleState ? 'translate-x-0' : '-translate-x-full'} h-full`} >
        <div className="bg-white w-[75vw] duration-1000">
          <div className="w-full bg-yellow-300 p-2.5 font-black text-center text-3xl">
            BEYOUNG
            
          </div>
          <Tabs.Root className="TabsRoot" defaultValue="tab1">
            <Tabs.List className="TabsList" aria-label="Manage your account">
              <Tabs.Trigger
                onClick={handlerBorderBottom}
                className={`TabsTrigger ${bottomBorder === 1 ? "active" : ""} `}
                value="tab1"
              >
                Men
              </Tabs.Trigger>
              <Tabs.Trigger
                onClick={handlerBorderBottom}
                className={`TabsTrigger ${bottomBorder === 0 ? "active" : ""} `}
                value="tab2"
              >
                Women
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className="TabsContent" value="tab1">
              <div className="h-[70vh] overflow-auto">
                <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
                  <Accordion.Item className="AccordionItem" value="item-1">
                    <AccordionTrigger>NEW ARRIVALS</AccordionTrigger>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="/clothing/urban-shirt" state={{data: urban}} >
                        Urban Shirts
                      </Link>
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="/clothing/oversized-t-shirt" state={{data: overSizedTShirt}} >
                        Oversize T-Shirts
                      </Link>
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="/out-of-stock">
                        Beyoung Originals
                      </Link>
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/knitted" state={{data: knitted}} >
                        Knitted Joggers
                      </Link>
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/view-all" state={{data: men}} >
                        View All
                      </Link>
                    </AccordionContent>
                  </Accordion.Item>
                  
                  
                  <Accordion.Item className="AccordionItem" value="item-2">
                    <AccordionTrigger>TOPWEAR</AccordionTrigger>
                    <AccordionContent>
                      
                      <Accordion.Root type="single" defaultValue="item-3" collapsible>
                        <Accordion.Item className="AccordionItem" value="item-3">
                          <AccordionTrigger>T-Shirts</AccordionTrigger>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="clothing/plain-t-shirt"
                            state={{data: plainTShirt}}
                            >
                              Plain T-Shirts
                            </Link>                                                  
                          </AccordionContent>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="clothing/printed-t-shirt"
                              state={{data: printedTShirt}}
                            >
                              Printed T-Shirts
                            </Link>                              
                          </AccordionContent>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="clothing/oversized-t-shirt"
                              state={{data: overSizedTShirt}}
                            >
                              Oversize T-Shirts
                            </Link>                          
                          </AccordionContent>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="clothing/polo-t-shirt"
                              state={{data: poloTShirt}}
                            >
                              Polo T-Shirts
                            </Link>                          
                          </AccordionContent>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="clothing/full-sleeve-t-shirt"
                              state={{data: fullSleeveTShirt}}
                            >
                              Full Sleeve T-Shirts
                            </Link>                          
                          </AccordionContent>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="clothing/plus-size-t-shirt"
                              state={{data: plusSizeTShirt}}
                            >
                              Plus Size T-Shirts
                            </Link>                          
                          </AccordionContent>
                        </Accordion.Item>
                      </Accordion.Root>

                      <Accordion.Root type="single" defaultValue="item-4" collapsible>
                        <Accordion.Item className="AccordionItem" value="item-4">
                          <AccordionTrigger>Shirts</AccordionTrigger>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="clothing/plain-t-shirt"
                              state={{data: plainTShirt}}
                            >
                              Plain Shirts
                            </Link>
                          </AccordionContent>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="/clothing/urban-shirt"
                              state={{data: urban}}
                            >
                              Urban Shirts
                            </Link>
                          
                          </AccordionContent>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="clothing/casual"
                              state={{data: casual}}
                            >
                              Casual Shirts
                            </Link>
                          
                          </AccordionContent>
                        </Accordion.Item>
                      </Accordion.Root>                     

                      <Accordion.Root type="single" defaultValue="item-5" collapsible>
                        <Accordion.Item className="AccordionItem" value="item-5">
                          <AccordionTrigger>Winter Wears</AccordionTrigger>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="/clothing/jackets"
                              state={{data: jackets}}
                            >
                              Jackets
                            </Link>
                          </AccordionContent>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="clothing/sweatshirt"
                              state={{data: sweatShirts}}
                            >
                              Sweatshirts
                            </Link>
                          
                          </AccordionContent>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="clothing/hoodies"
                              state={{data: hoodies}}
                            >
                              Hoodies
                            </Link>
                          
                          </AccordionContent>
                        </Accordion.Item>
                      </Accordion.Root>

                    </AccordionContent>
                  </Accordion.Item>

                  <Accordion.Item className="AccordionItem" value="item-3">
                  <AccordionTrigger>BOTTOMWEAR</AccordionTrigger>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/chino"
                        state={{data: chino}}
                      >
                        Chino
                      </Link>
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/boxer" state={{data: boxer}} >
                        Boxer
                      </Link>
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/pyjamas" state={{data: pyjamas}} >
                        Pyjama
                      </Link>
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/shorts" state={{data: shorts}} >
                        Shorts
                      </Link>                    
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/cargoPant" state={{data: cargo}} >
                        Cargo Pants
                      </Link>
                    
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/jeans"
                        state={{data: jeans}}
                      >
                        Jeans
                      </Link>                    
                    </AccordionContent>              
                  </Accordion.Item>

                  <Accordion.Item className="AccordionItem" value="item-4">
                  <AccordionTrigger>BEYOUNG ORIGINALS</AccordionTrigger>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                    <Link to="/out-of-stock">
                      Combos
                    </Link>
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/travel"
                        state={{data: travelData}}
                      >
                        Travel
                      </Link>                    
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                    <Link to="out-of-stock">
                      Couple T-Shirts
                    </Link>                    
                    </AccordionContent>
                  </Accordion.Item>
                  
                  <div
                    onClick={() => handlerNavbarToggle(false)}
                    className="px-[20px] py-[8px] text-[15px]">
                      <Link to="clothing/men"
                        state={{data: men}}
                      >
                      SHOP BY LOOK
                    </Link>
                    
                  </div>

                  <Accordion.Item className="AccordionItem" value="item-5">
                  <AccordionTrigger>SHOP BY THEME</AccordionTrigger>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/gym"
                        state={{data: gym}}
                      >
                        Gym
                      </Link>                    
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/travel"
                        state={{data: travelData}}
                      >
                        Travel
                      </Link>                    
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/sports"
                        state={{data: sports}}
                      >
                        Sports
                      </Link>                    
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/music"
                        state={{data: music}}
                      >
                        Music
                      </Link>                    
                    </AccordionContent>
                  </Accordion.Item>

                  <div className="flex flex-col justify-center items-center">
                    <div>
                      DOWNLOAD THE APP
                    </div>
                    <div className="flex flex-row gap-2.5">
                      <Link target="_blank" to="https://play.google.com/store/apps/details?id=com.beyoungapp&referrer=utm_source%3Dwebsite%26utm_medium%3Dfooter%26anid%3Dadmob&pli=1">
                        <img className="max-w-[120px]" src={psImage1} alt="" />
                      </Link>
                      <Link target="_blank" to="https://apps.apple.com/in/app/beyoung/id1665513310">
                        <img className="max-w-[120px]" src={psImage2} alt="" />
                      </Link>
                    </div>
                  </div>

                </Accordion.Root>
              </div>


            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab2">
            <div className="h-[70vh] overflow-auto">
              <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
                  

                  <Accordion.Item className="AccordionItem" value="item-2">
                    <AccordionTrigger>SHOP</AccordionTrigger>
                    <AccordionContent>
                      
                      <Accordion.Root type="single" defaultValue="item-3" collapsible>
                        <Accordion.Item className="AccordionItem" value="item-3">
                          <AccordionTrigger>T-Shirts</AccordionTrigger>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="/clothing/plain-t-shirt-women"
                              state={{data: plainTShirtWomen}}
                            >
                              Plain T-Shirts
                            </Link>
                          </AccordionContent>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="/clothing/printed-t-shirt-women"
                              state={{data: printedTShirtWomen}}
                            >
                              Printed T-Shirts
                            </Link>
                          </AccordionContent>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="/clothing/oversized-t-shirt-women"
                              state={{data: overSizedTShirtWomen}}
                            >
                              Oversize T-Shirts
                            </Link>
                          </AccordionContent>                        
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="/clothing/full-sleeve-t-shirt-women"
                              state={{data: fullSleeveTShirtWomen}}
                            >
                              Full Sleeve T-Shirts
                            </Link>
                          </AccordionContent>                        
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="clothing/plus-size-t-shirt-women"
                              state={{data: plusSizeTShirt}}
                            >
                              Plus Size T-Shirts
                            </Link>
                          </AccordionContent>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="clothing/women"
                              state={{data: women}}
                            >
                              View All
                            </Link>
                          </AccordionContent>
                        </Accordion.Item>
                      </Accordion.Root>

                      <Accordion.Root type="single" defaultValue="item-4" collapsible>
                        <Accordion.Item className="AccordionItem" value="item-4">
                          <AccordionTrigger>Shirts</AccordionTrigger>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="/clothing/plain-t-shirt-women"
                              state={{data: plainTShirt}}
                            >
                              Plain Shirts
                            </Link>
                          </AccordionContent>                        
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                          <Link
                            to="/clothing/shirt-women"
                            state={{data: shirtsWomen}}
                          >
                            Shirts
                          </Link>
                          </AccordionContent>
                        </Accordion.Item>
                      </Accordion.Root>                    

                      <Accordion.Root type="single" defaultValue="item-5" collapsible>
                        <Accordion.Item className="AccordionItem" value="item-5">
                          <AccordionTrigger>Winter Wears</AccordionTrigger>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="clothing/jackets-women"
                              state={{data: jacketsWomen}}
                            >
                              Jackets
                            </Link>
                          </AccordionContent>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="clothing/sweatshirt-women"
                              state={{data: sweatShirtsWomen}}
                            >
                              Sweatshirts
                            </Link>
                          </AccordionContent>
                          <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                            <Link to="clothing/hoodies-women"
                              state={{data: hoodiesWomen}}
                            >
                              Hoodies
                            </Link> 
                          </AccordionContent>
                        </Accordion.Item>
                      </Accordion.Root>

                    </AccordionContent>
                  </Accordion.Item>

                  <Accordion.Item className="AccordionItem" value="item-4">
                  <AccordionTrigger>BEYOUNG ORIGINALS</AccordionTrigger>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="out-of-stock">
                        Combos
                      </Link>
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/travel-women"
                          state={{data: travelWomen}}
                      >
                        Travel
                      </Link>
                    </AccordionContent>
                  </Accordion.Item>
                  
                  <div 
                    onClick={() => handlerNavbarToggle(false)}
                    className="px-[20px] py-[8px] text-[15px]"
                  >
                    <Link
                      to="clothing/women"
                      state={{data: women}}
                    >
                      SHOP BY LOOK
                    </Link>
                  </div>

                  <Accordion.Item className="AccordionItem" value="item-5">
                  <AccordionTrigger>SHOP BY THEME</AccordionTrigger>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                    <Link
                      to="clothing/gym-women"
                      state={{data: gymWomen}}
                    > 
                      Gym
                    </Link>
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/travel-women"
                          state={{data: travelWomen}}
                      >
                        Travel
                      </Link>
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/sports-women"
                        state={{data: sportsWomen}}
                      >
                        Sports
                      </Link>
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/music-women"
                          state={{data: musicWomen}}
                      >
                        Music
                      </Link>
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/biker-women"
                        state={{data: bikerWomen}}
                      >
                        Biker
                      </Link>
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/funky-women"
                        state={{data: funkyWomen}}
                      >
                        Funky
                      </Link>
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/god-women"
                        state={{data: godWomen}}
                      >
                        God
                      </Link>                  
                    </AccordionContent>
                    <AccordionContent onClick={() => handlerNavbarToggle(false)}>
                      <Link to="clothing/quote-women"
                        state={{data: quotesWomen}}
                      >
                        Quotes
                      </Link>
                    </AccordionContent>
                  </Accordion.Item>

                  <div className="flex flex-col justify-center items-center">
                    <div>
                      DOWNLOAD THE APP
                    </div>
                    <div className="flex flex-row gap-2.5">
                      <Link target="_blank" to="https://play.google.com/store/apps/details?id=com.beyoungapp&referrer=utm_source%3Dwebsite%26utm_medium%3Dfooter%26anid%3Dadmob&pli=1">
                        <img className="max-w-[120px]" src={psImage1} alt="" />
                      </Link>
                      <Link target="_blank" to="https://apps.apple.com/in/app/beyoung/id1665513310">
                        <img className="max-w-[120px]" src={psImage2} alt="" />
                      </Link>
                    </div>
                  </div>

              </Accordion.Root>
            </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
        <div
          onClick={() => handlerNavbarToggle(false)}
          className="w-[25vw] backdrop-brightness-50 backdrop-opacity-100 backdrop-blur-sm"
        ></div>
      </div>
    </>
  );
};

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className={classNames("AccordionHeader", className)}>
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default NavbarLayer3;
