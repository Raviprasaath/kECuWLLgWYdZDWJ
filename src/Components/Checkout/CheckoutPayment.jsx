import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import orderImage from "../../assets/order-placed.png"
import * as Tabs from "@radix-ui/react-tabs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { PiTruckBold } from "react-icons/pi";
import TextField from "@mui/material/TextField";

import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import paytm from "../../assets/paytm.png";
import upi from "../../assets/upi.png";
import creditCard from "../../assets/card-cradit.png";
import wallet from "../../assets/wallet.png";
import netBanking from "../../assets/netbanking.png";
import cvv from "../../assets/cvv-icon.png";
import { cartsData } from "./CheckoutCart";

import { useScreenSize } from "../CommonFunctions/CommonFunctions";
import { Link, useLocation } from "react-router-dom";

import "./CheckoutPayment.css";

const CheckoutPayment = () => {

  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;
  const [checked, setChecked] = useState(false);
  const [creditCardNumber, setCreditCardNumber] = useState(false);
  const [creditCardName, setCreditCardName] = useState(false);
  const [creditCardMonth, setCreditCardMonth] = useState(false);
  const [creditCardYear, setCreditCardYear] = useState(false);
  const [creditCardCvv, setCreditCardCvv] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [tokenVal, setTokenVal] = useState();

  
  let dataFromLocal = JSON.parse(localStorage.getItem("userDetails")) || [];

  const storedData = localStorage.getItem('orderedProducts');
  const parsedData = storedData ? JSON.parse(storedData) : [];
  
  const location = useLocation();

  const [cartData, setCartData] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);


  const [dataArray, setDataArray] = useState([]);

  useEffect(()=> {
    if (dataFromLocal.username) {
      setTokenVal(dataFromLocal?.token);
      handlerCardGetting(dataFromLocal?.token);
      setCartTotalPrice(0);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])

  const orderAdd = () => {
    localStorage.setItem('orderedProducts', JSON.stringify(dataArray));
    cartClearing(tokenVal);
  }

  const cartClearing = async (tokenVal) => {
    let myHeaders = new Headers();
    myHeaders.append("projectID", "vflsmb93q9oc");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${tokenVal}`);



    let requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };

    const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/cart/", requestOptions)
    const result = await response.json();
  }


  const handlerScroller = () => {
    const element = document.getElementById("cart-data");
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  let booleanCondition =
    (creditCardNumber &&
      creditCardName &&
      creditCardMonth &&
      creditCardYear &&
      creditCardCvv) || checked ? true : false;

  const handlerModalToggle = () => {
      setModalOpened(true);
  };

  const handlerCardNumber = (e) => {
    if (e.target.value.length === 16) {
      setCreditCardNumber(true);
    } else {
      setCreditCardNumber(false);
    }
  };
  const handlerCardName = (e) => {
    if (e.target.value.length > 5) {
      setCreditCardName(true);
    } else {
      setCreditCardName(false);
    }
  };
  const handlerCardMonth = (e) => {
    if (e.target.value <= 12 && e.target.value >= 1) {
      setCreditCardMonth(true);
    } else {
      setCreditCardMonth(false);
    }
  };
  const handlerCardYear = (e) => {
    if (e.target.value > 2022 && e.target.value.length === 4) {
      setCreditCardYear(true);
    } else {
      setCreditCardYear(false);
    }
  };
  const handlerCardCvv = (e) => {
    if (e.target.value.length === 3) {
      setCreditCardCvv(true);
    } else {
      setCreditCardCvv(false);
    }
  };

  const checkoutHeader1 = (
    <div className="w-full md2:w-[80%] md2:m-auto border">
      <div className="flex shadow-lg h-[50px]">
        <Link 
        to="/"
        className={`font-bold w-1/2 bg-white flex items-center justify-center ${
                isMobile ? "text-[0.8rem]" : "text-[1rem]"
            }`}>
            <div
            className={`font-bold w-1/2 bg-white flex items-center justify-center ${
                isMobile ? "text-[0.8rem]" : "text-[1rem]"
            }`}
            >
            BEYOUNG
            </div>
        </Link>
        <div className="font-bold w-1/2 flex gap-2 items-center justify-center bg-gray-100">
          <div>
            <RiSecurePaymentLine />
          </div>
          <div className={`${isMobile ? "text-[0.8rem]" : "text-[1rem]"}`}>
            100% SECURE PAYMENT
          </div>
        </div>
      </div>
    </div>
  );
  const checkoutHeader2 = (
    <>
      <div  className = 
      {`py-4 my-4 
        ${modalOpened && isMobile ? "z-[1]" : "-z-[1]"}
        ${modalOpened && !isMobile ? "-z-[1]" : "z-[1]"}
        relative  bg-gray-100 lg:w-[80%] m-auto`}
      >
        <div className="absolute z-[2] left-[15%] lg:left-[17%] lg:right[14%] right-[18%] top-[48px] lg:top-[30px] border border-gray-400 lg:w-[600px] m-auto"></div>
        <div className="relative z-[3] my-4 flex justify-around w-full lg:w-[900px] lg:m-auto">
          <Link to="/checkout/cart">
            <div className="flex flex-col justify-center items-center">
              <div>
                <TiTick className="text-green-500 border-2 bg-white text-[2rem] rounded-full p-1" />
              </div>
              <div className="text-[0.9rem]">My Cart</div>
            </div>
          </Link>
          <Link to="/checkout/shipping">
            <div className="flex flex-col justify-center items-center">
              <div>
                <TiTick className="text-green-500 border-2 bg-white text-[2rem] rounded-full p-1" />
              </div>
              <div className="text-[0.9rem]">Address</div>
            </div>
          </Link>
          <div className="flex flex-col  justify-center items-center">
            <div>
              <MdPayment className="border-2 bg-white text-[2rem] rounded-full p-1" />
            </div>
            <div className="text-[0.9rem]">Payment</div>
          </div>
        </div>
      </div>
    </>
  );
  const debitCardPayment = (
    <div className="flex flex-col gap-4">
      <TextField
        label="Card Number"
        type="number"
        error={creditCardNumber ? false : true}
        className="textHeight w-full border-solid"
        onChange={(e) => handlerCardNumber(e)}
      />
      <TextField
        label="Name On The Card"
        type="text"
        error={creditCardName ? false : true}
        className=" w-full border-solid"
        onChange={(e) => handlerCardName(e)}
      />
      <div>
        <p className="p-3 text-gray-500 text-[0.8rem]">VALID THROUGH (MM/YY)</p>
        <div className="flex gap-3">
          <TextField
            label="MM"
            type="number"
            error={creditCardMonth ? false : true}
            className=" w-[30%] border-solid"
            onChange={(e) => handlerCardMonth(e)}
          />
          <TextField
            label="YY"
            type="number"
            error={creditCardYear ? false : true}
            className=" w-[30%] border-solid"
            onChange={(e) => handlerCardYear(e)}
          />
          <div className=" flex relative">
            <div>
              <img src={cvv} className="absolute top-[10px] right-0" alt="" />
            </div>
            <TextField
              label="CVV"
              type="password"
              error={creditCardCvv ? false : true}
              className=" border-solid"
              onChange={(e) => handlerCardCvv(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
  const dialogPortal = (
    <>
      <div className="DialogContent z-[5]">
        <div className="py-2 font-bold uppercase font-mono text-center" >
            Order Placed
        </div>
        <div className="flex relative flex-col items-center">
            <img className="h-[300px]" src={orderImage} alt="" />
            <img className="w-[300px] absolute" src=
            "https://ml4bvmchifi6.i.optimole.com/cb:FOYR.22041/w:400/h:300/q:mauto/f:best/https://www.onarprime.net/wp-content/uploads/2023/01/order.gif" 
            alt="" />
            <Link to="/">
                <button className="bg-yellow-300 px-2 py-1 my-1">
                    Continue Shopping
                </button>
            </Link>
        </div>
      </div>
    </>
  );
  const checkbox = (
    <div className="flex bg-gray-300 w-[80%]">
      <div className="px-4 flex flex-col gap-2">
        <div className="text-[0.8rem] text-gray-100">
          Pay online to avoid cash handling charges (₹50 per product)
        </div>
        <div className="flex items-center gap-3">
          <div className="text-[1rem]">I am accepting the Terms</div>
          <label
            htmlFor="c1"
            className=" w-[20px] border border-black h-[20px]"
          >
            <Checkbox.Root
              className="CheckboxRoot"
              checked={checked}
              onCheckedChange={setChecked}
              id="c1"
            >
              <Checkbox.Indicator className="CheckboxIndicator">
                {checked ? (
                  <CheckIcon className="w-[20px] h-[20px] border-2 border-black" />
                ) : (
                  "Nope"
                )}
              </Checkbox.Indicator>
            </Checkbox.Root>
          </label>
        </div>
      </div>
    </div>
  );
  const productsContainer = (
    <div className="flex justify-center ">
      <div className="bg-gray-100 w-full flex flex-col md2:w-[80%]  md2:flex-row">
        <div className="bg-gray-100 p-2 flex flex-col items-center w-full md2:w-[60%]">
          {!isMobile && (
            <Tabs.Root
              className="TabsRoot flex flex-row w-full"
              defaultValue="tab1"
            >
              <Tabs.List
                className="TabsList flex flex-col shrink-0 "
                aria-label="Manage your account"
              >
                <Tabs.Trigger
                  className="TabsTrigger TabsTriggerActive h-[50px] p-[20px]"
                  value="tab1"
                >
                  <div className="flex  w-full items-center gap-2">
                    <img src={paytm} className="h-[50px]" alt="" />
                    <p>Pay With Paytm</p>
                  </div>
                </Tabs.Trigger>

                <Tabs.Trigger
                  className="TabsTrigger TabsTriggerActive h-[50px] p-[20px]"
                  value="tab2"
                >
                  <div className="flex  w-full items-center gap-2">
                    <img src={creditCard} className="w-[50px]" alt="" />
                    <p>Debit/Credit Card</p>
                  </div>
                </Tabs.Trigger>

                <Tabs.Trigger
                  className="TabsTrigger TabsTriggerActive h-[50px] p-[20px]"
                  value="tab3"
                >
                  <div className="flex w-full items-center gap-2">
                    <img src={upi} className="w-[50px]" alt="" />
                    <p>UPI</p>
                  </div>
                </Tabs.Trigger>

                <Tabs.Trigger
                  className="TabsTrigger TabsTriggerActive h-[50px] p-[20px]"
                  value="tab4"
                >
                  <div className="flex  w-full items-center gap-2">
                    <img src={wallet} className="w-[50px]" alt="" />
                    <p>Wallets</p>
                  </div>
                </Tabs.Trigger>

                <Tabs.Trigger
                  className="TabsTrigger TabsTriggerActive h-[50px] p-[20px]"
                  value="tab5"
                >
                  <div className="flex  w-full items-center gap-2">
                    <img src={netBanking} className="w-[50px]" alt="" />
                    <p>Net Banking</p>
                  </div>
                </Tabs.Trigger>

                <Tabs.Trigger
                  className="TabsTrigger TabsTriggerActive h-[50px] p-[20px]"
                  value="tab6"
                >
                  Pay using Epay
                </Tabs.Trigger>

                <Tabs.Trigger
                  className="TabsTrigger TabsTriggerActive h-[50px] p-[20px]"
                  value="tab7"
                >
                  Cash on Delivery
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content className="TabsContent" value="tab1">
                <div className="px-2 bg-gray-300 ">
                  The payment option will be added later, currently under
                  development.
                </div>
              </Tabs.Content>

              <Tabs.Content className="TabsContent" value="tab2">
                <div className="">
                  <p>Enter Your Debit/Credit Card Details</p>
                  {debitCardPayment}
                </div>
              </Tabs.Content>

              <Tabs.Content className="TabsContent" value="tab3">
                <div className="px-2 bg-gray-300 ">
                  The payment option will be added later, currently under
                  development.
                </div>
              </Tabs.Content>
              <Tabs.Content className="TabsContent" value="tab4">
                <div className="px-2 bg-gray-300 ">
                  The payment option will be added later, currently under
                  development.
                </div>
              </Tabs.Content>
              <Tabs.Content className="TabsContent" value="tab5">
                <div className="px-2 bg-gray-300 ">
                  The payment option will be added later, currently under
                  development.
                </div>
              </Tabs.Content>
              <Tabs.Content className="TabsContent" value="tab6">
                <div className="px-2 bg-gray-300 ">
                  The payment option will be added later, currently under
                  development.
                </div>
              </Tabs.Content>
              <Tabs.Content className="TabsContent" value="tab7">
                <div className="px-2 bg-gray-300 ">{checkbox}</div>
              </Tabs.Content>
            </Tabs.Root>
          )}
          {isMobile && (
            <>
              <Accordion.Root
                className="AccordionRoot"
                type="single"
                defaultValue="item-1"
                collapsible
              >
                <Accordion.Item className="AccordionItem" value="item-1">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <img src={paytm} className="w-[50px]" alt="" />
                      <p>Pay With Paytm</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="bg-gray-300">
                      The payment option will be added later, currently under
                      development.
                    </p>
                  </AccordionContent>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" value="item-2">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <img src={upi} className="w-[50px]" alt="" />
                      <p>UPI</p>
                    </div>
                  </AccordionTrigger>
                  <Accordion.Content className="AccordionContent">
                    <div className="AccordionContentText">
                      The payment option will be added later, currently under
                      development.
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" value="item-3">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <img src={creditCard} className="w-[50px]" alt="" />
                      <p>Debit/Credit Card</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div>{debitCardPayment}</div>
                  </AccordionContent>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" value="item-4">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <img src={wallet} className="w-[50px]" alt="" />
                      <p>Wallets</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div>
                      <p>Enter Your Debit/Credit Card Details </p>
                    </div>
                  </AccordionContent>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" value="item-5">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <img src={netBanking} className="w-[50px]" alt="" />
                      <p>Net Banking</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div>
                      <p>Enter Your Debit/Credit Card Details </p>
                    </div>
                  </AccordionContent>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" value="item-6">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <p>Cash On Delivery</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{checkbox}</AccordionContent>
                </Accordion.Item>
              </Accordion.Root>
            </>
          )}
        </div>

        <div className=" w-[100%] md2:w-[35%]">
          {/* <div className='my-[30px] md2:my-[10px] p-2 bg-white'>
            <div className='flex items-center gap-2'>
                <div>
                    <BsCash />
                </div>
                <div className='font-semibold'>
                    Offers & Benefits
                </div>
            </div>
            <div>
                <div className="flex">
                    <input className="my-2 px-2 border-solid border-2 border-stone-300 w-[80%]" type="text" placeholder="Enter code"/>
                    <Label className="cursor-pointer my-2 w-[20%] text-white font-bold text-center bg-teal-400">Apply</Label>
                </div>
                <div className='border-2'></div>
                <div className='p-2 flex justify-around text-[0.8rem]'>
                    <div>
                        Flat ₹100 Off OnOrders Above ₹999
                    </div>
                    <div className='h-fit bg-yellow-100 font-bold'>
                        BEYOUNG100
                    </div>

                </div>
                <div className='border-2'></div>
                
            </div>


        </div> */}

          <div className="my-[9px] p-2 bg-white">
            <div id="cart-data" className="font-semibold">
              Price Details (4 items)
            </div>
            <div className="border"></div>

            <div className="flex flex-col gap-1">
              <div className="flex text-[0.9rem] justify-between">
                <div>Total MRP (Inc.of Taxes)</div>
                <div>₹ {cartsData?.cartTotal}</div>
              </div>
              <div className="flex justify-between text-[0.9rem]">
                <div>Beyoung Discount</div>
                <div>- ₹ {cartsData?.cartTotal - cartsData?.cartAmount}</div>
              </div>
              <div className="flex justify-between text-[0.9rem]">
                <div>Shipping</div>
                <div className="text-green-500">Free</div>
              </div>
              <div className="py-2 flex justify-between text-[0.9rem]">
                <div>Cart Total</div>
                <div className="font-bold">₹ {cartsData?.cartAmount}</div>
              </div>
            </div>
          </div>

          <div className="my-[5px] flex flex-col justify-between p-2 bg-white">
            <div className="flex justify-between">
              <div className="font-semibold">Total Amount</div>
              <div className="font-bold text-[0.9rem]">
                ₹{" "}
                {cartsData?.offer
                  ? cartsData?.cartAmount - 100
                  : cartsData?.cartAmount}
              </div>
            </div>

            <div className="my-3 bg-lime-600 font-semibold text-white text-center p-1 text-[0.8rem]">
              You Saved ₹{" "}
              {cartsData?.offer
                ? cartsData?.cartTotal - cartsData?.cartAmount + 100
                : cartsData?.cartTotal - cartsData?.cartAmount}{" "}
              On This Order
            </div>
            {!isMobile && (
              <>
                {booleanCondition ? (
                  <>
                      <button 
                      onClick={
                        () => 
                        {handlerModalToggle(),
                        orderAdd()}
                        } className="bg-teal-400 text-white w-[95%] font-semibold text-center p-2">
                        CHECKOUT SECURELY
                      </button>
                    {modalOpened && dialogPortal}
                  </>
                ) : (
                  <button
                    className="cursor-pointer bg-gray-300 text-white w-[95%] font-semibold text-center p-2"
                    disabled
                  >
                    CHECKOUT SECURELY
                  </button>
                )}
              </>
            )}
          </div>

          <div className="text-[0.8rem] flex justify-center items-center gap-2 text-gray-500">
            <div>
              <PiTruckBold className="text-[1rem]" />
            </div>
            <div>Free Delivery & Inclusive Of All Taxes</div>
          </div>

          <div className="h-[80px]"></div>
        </div>
      </div>

      {isMobile && (
        <div className="fixed shadow-inner z-10 bottom-0 bg-white  w-full flex flex-row justify-between p-2">
          <div>
            <div>
              ₹{" "}
              {cartsData?.offer
                ? cartsData?.cartAmount - 100
                : cartsData?.cartAmount}
            </div>
            <div
              onClick={() => handlerScroller()}
              className="text-teal-400 text-[0.7rem] font-semibold"
            >
              View Details
            </div>
          </div>
          <div>
            {booleanCondition ? (
                <>
                
                <button
                onClick={
                  () => 
                  {handlerModalToggle(),
                  orderAdd()}}
                 
                 className={`${
                    booleanCondition ? "bg-teal-400" : "bg-gray-300"
                  }  text-white font-semibold p-2 rounded text-[0.8rem]`}>
                    CHECKOUT SECURELY
                </button>
                
                {modalOpened && dialogPortal}
                </>              
            ) : (
              <button
                className={`${
                  booleanCondition ? "bg-teal-400" : "bg-gray-300"
                }  text-white font-semibold p-2 rounded text-[0.8rem]`}
                disabled
              >
                CHECKOUT SECURELY
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );




  const handlerCardGetting = async (tokenVal) => {

    let myHeaders = new Headers();
    myHeaders.append("projectID", "vflsmb93q9oc");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${tokenVal}`);

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/cart/",
      requestOptions
    );
    if (response.ok) {
      const result = await response.json();
      setCartData(result.data.items);
      setCartPrice(result.data.totalPrice);
      
      if (Array.isArray(parsedData)) {
        const newData = {
          userData: location.state.data,
          cartData: result.data.items,
          token: tokenVal,
        };
        setDataArray([...parsedData, newData]);
      }
      
      result.data.items.map((item)=> {
        setCartTotalPrice((prev) => prev + (item.product.price * 0.5 + item.product.price)*item.quantity)
      })
    }
  };


  return (
    <>
      {checkoutHeader1}
      {checkoutHeader2}
      {productsContainer}
    </>
  );
};

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
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

export default CheckoutPayment;
