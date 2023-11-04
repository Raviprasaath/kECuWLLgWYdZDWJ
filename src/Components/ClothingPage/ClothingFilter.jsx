
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDataContext } from "../Fetching/DataContext";


// clothingData - Lap view Data
// filteredData - Mobile view Data
const ClothingFilter = ({ filteredData, clothingData, handlerFilterData }) => {
  const { handlerTypeOfFilterChoose, refreshNavbar, refresher } = useDataContext();

  const [price, setPrice] = useState("low");
  const [selectedFilterCategory, setSelectedFilterCategory] = useState('');

  const colorElements = [];
  const addedColors = new Set();

  let dataGot = filteredData || clothingData;
  
  const handlerFilterPicker = (data) => {
    refreshNavbar();
    setSelectedFilterCategory(data===selectedFilterCategory?'':data);
    handlerTypeOfFilterChoose(data===selectedFilterCategory?'':data);
  }



  const colors = [

    {title:"BLACK", className:`${selectedFilterCategory === 'BLACK' ? 'border-2 border-green-500' : "" } bg-black cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"BROWN" , className:`${selectedFilterCategory === 'BROWN' ? 'border-2 border-black' : "" } bg-amber-700 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"WHITE" , className:`${selectedFilterCategory === 'WHITE' ? 'border-2 border-black' : "" } bg-white border-2 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"GREY" , className:`${selectedFilterCategory === 'GREY' ? 'border-2 border-black' : "" } bg-gray-500 cursor-pointer	rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"CREAM" , className:`${selectedFilterCategory === 'CREAM' ? 'border-2 border-black' : "" } bg-amber-100 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"ORANGE" , className:`${selectedFilterCategory === 'ORANGE' ? 'border-2 border-black' : "" } bg-orange-500 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"BLUE" , className:`${selectedFilterCategory === 'BLUE' ? 'border-2 border-black' : "" } bg-blue-500 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"GREEN" , className:`${selectedFilterCategory === 'GREEN' ? 'border-2 border-black' : "" } bg-green-500 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"RED" , className:`${selectedFilterCategory === 'RED' ? 'border-2 border-black' : "" } bg-red-500 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"LAVENDER" , className:`${selectedFilterCategory === 'LAVENDER' ? 'border-2 border-black' : "" } bg-indigo-200 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"PINK" , className:`${selectedFilterCategory === 'PINK' ? 'border-2 border-black' : "" } bg-pink-600 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"KHAKI" , className:`${selectedFilterCategory === 'KHAKI' ? 'border-2 border-black' : "" } bg-yellow-700 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"PURPLE" , className:`${selectedFilterCategory === 'PURPLE' ? 'border-2 border-black' : "" } bg-purple-600 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"YELLOW " , className:`${selectedFilterCategory === 'YELLOW' ? 'border-2 border-black' : "" } bg-yellow-500 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"MAROON " , className:`${selectedFilterCategory === 'MAROON' ? 'border-2 border-black' : "" } bg-amber-900 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"BEIGE" , className:`${selectedFilterCategory === 'BEIGE' ? 'border-2 border-black' : "" } bg-rose-100 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"OLIVE" , className:`${selectedFilterCategory === 'OLIVE' ? 'border-2 border-black' : "" } bg-lime-600 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"CHARCOAL" , className:`${selectedFilterCategory === 'CHARCOAL' ? 'border-2 border-black' : "" } bg-zinc-500 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
    {title:"SILVER" , className:`${selectedFilterCategory === 'SILVER' ? 'border-2 border-black' : "" } bg-zinc-300 cursor-pointer rounded-full w-[25px] h-[25px] m-1`} ,
  ]
  
  let sizeArray = [];
  const uniqueValues = new Set();

  useEffect(()=> {
    console.log("dataGot", dataGot);
    console.log("filteredData", filteredData);

    dataGot?.forEach((data, index) => {
      const matchingColor = colors?.find((color) => color.title === data.color);
      if (matchingColor && !addedColors.has(matchingColor.title)) {
        colorElements.push(
          <div onClick={() => handlerFilterPicker(matchingColor.title)} key={index} title={matchingColor.title} className={matchingColor.className}></div>
        );
        addedColors.add(matchingColor.title);
      }
    });

    dataGot?.forEach((data) => {
      sizeArray.push(data.size);
    })
  
    sizeArray.forEach((arr) => {
      arr.forEach((value) => {
        uniqueValues.add(value);
      });
    });
  }, [filteredData, selectedFilterCategory, refresher])
  


  dataGot?.forEach((data, index) => {
    const matchingColor = colors?.find((color) => color.title === data.color);
    if (matchingColor && !addedColors.has(matchingColor.title)) {
      colorElements.push(
        <div onClick={() => handlerFilterPicker(matchingColor.title)} key={index} title={matchingColor.title} className={matchingColor.className}></div>
      );
      addedColors.add(matchingColor.title);
    }
  });
  
  dataGot?.forEach((data) => {
    sizeArray.push(data.size);
  })

  sizeArray.forEach((arr) => {
    arr.forEach((value) => {
      uniqueValues.add(value);
    });
  });
  
  const mergedArray = [...uniqueValues];








    


    return (
      <>
        <div className="max-w-[250px] sticky top-4">
            <h2 className="px-[20px] border-b border-dotted">FILTER</h2>
            <Accordion.Root
              className="AccordionRoot w-[250px]"
              type="single"
              defaultValue="item-1"
              collapsible
            >
            <Accordion.Item className="AccordionItem" value="item-1">
                <AccordionTrigger>COLOR</AccordionTrigger>
                <AccordionContent>
                <div className="flex flex-wrap">
                    
                  {colorElements}
                    
                </div>
                </AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" value="item-2">
                <AccordionTrigger>SIZE</AccordionTrigger>
                <AccordionContent>
                  {mergedArray.map((item)=> (
                    <div key={item} className={`${selectedFilterCategory===item ?'text-teal-400':''} cursor-pointer`} onClick={()=>handlerFilterPicker(item)}>{item}</div>
                  ))}
                </AccordionContent>
            </Accordion.Item>
            {/* <Accordion.Item className="AccordionItem" value="item-3">
                <AccordionTrigger>DESIGN</AccordionTrigger>
                <AccordionContent>
                <div>Checks Shirts</div>
                </AccordionContent>
            </Accordion.Item> */}
            <Accordion.Item className="AccordionItem" value="item-4">
                <AccordionTrigger>PRICE</AccordionTrigger>
                <AccordionContent>
                <div>
                  <input
                    type="checkbox"
                    id="low"
                    onChange={() => setPrice(price === "low" ? "" : "low")}
                    checked={price === "low"}
                    name="low"
                    
                    
                  />
                  <button
                    onClick={()=>handlerFilterPicker('Low to High')}
                    htmlFor="low" className={`text-[1rem] cursor-pointer px-3 ${selectedFilterCategory==='Low to High'?'text-teal-400':''}`}>
                      Price: Low to High
                  </button>
                </div>
                <div>
                    <input
                      type="checkbox"
                      id="high"
                      onChange={() => setPrice(price === "high" ? "" : "high")}
                      checked={price === "high"}
                      name="high"
                      
                    />
                    <button
                    onClick={()=>handlerFilterPicker('High to Low')}
                    htmlFor="high" className={`text-[1rem] cursor-pointer px-3 ${selectedFilterCategory==='High to Low'?'text-teal-400':''}`}>
                      Price: High to Low
                    </button>
                </div>
                </AccordionContent>
            </Accordion.Item>
            </Accordion.Root>
        </div>

      </>
    )
}
const AccordionTrigger = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Header className={classNames("AccordionHeader", className)}>
        <Accordion.Trigger
          className={classNames("AccordionTrigger text-[0.85rem]", className)}
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
export default ClothingFilter;