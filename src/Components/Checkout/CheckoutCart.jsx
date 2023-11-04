import { RiSecurePaymentLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { PiTruckBold } from "react-icons/pi";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import emptyCart from "../../assets/EMPTY CARTORDER PAGE..png";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import MuiAlert from "@mui/material/Alert";

import { Label } from "@radix-ui/react-menubar";

import { useDataContext } from "../Fetching/DataContext";

import { useScreenSize } from "../CommonFunctions/CommonFunctions";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CheckoutCart.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

let paymentSection;
let cartsData;

const CheckoutCart = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;
  const location = useLocation();
  const { data, loading, refreshNavbar } = useDataContext();

  let dataFromLocal = JSON.parse(localStorage.getItem("userDetails")) || [];
  let booleanCondition = true;
  const [loginCheck, setLoginCheck] = useState(false);
  const [tokenVal, setTokenVal] = useState();
  
  const [offerPassed, setOfferPassed] = useState(false);

  
  const [cartData, setCartData] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [offerApply, setOfferApply] = useState(false);

  

  const [modalOpened, setModalOpened] = useState(false);

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
      
      
      result.data.items.map((item)=> {
        setCartTotalPrice((prev) => prev + (item.product.price * 0.5 + item.product.price)*item.quantity)
      })
    }
  };
  const handlerRemoveWishList = async (productId, tokenVal) => {
    setCartTotalPrice(0);
    let myHeaders = new Headers();
    myHeaders.append("projectID", "vflsmb93q9oc");
    myHeaders.append("Authorization", `Bearer ${tokenVal}`);

    let requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/ecommerce/cart/${productId}`,
      requestOptions
    );
    if (response.ok) {
      const result = await response.json();
      handlerCardGetting(tokenVal);
    }
  };
  const productFavAddingInFetch = async (idVal, method, token) => {
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
        productFirstInFetch("", "GET", token);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handlerModalToggle = () => {
    setModalOpened(true);
  };
  const handlerScroller = () => {
    const element = document.getElementById('cart-data');
    if (element) {            
        const offset = element.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    if (dataFromLocal.username) {
      setLoginCheck(true);
      handlerCardGetting(dataFromLocal?.token);
      setTokenVal(dataFromLocal?.token);
      setCartTotalPrice(0);
    } else {
      setCartTotalPrice(0);
      setLoginCheck(false);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname, refreshNavbar]);
  
  const handlerCartDataAdd = () => {
    cartsData = {
      cartAmount: cartPrice,
      cartTotal: cartTotalPrice,
      offer: offerApply
    }
  }
  

  //#region ---------------snake bar --------------------

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  //#endregion -----------------------------------

  const handlerOfferAdd = (e) => {
    if (e.target.value === 'BEYOUNG100') {
        setOfferPassed(true);
    } else {
        setOfferPassed(false);
    }
  }
  const handlerOfferApplying = () => {
    if (offerPassed && cartPrice > 999) {
        setOfferApply(true);
    } else {
        setOfferApply(false);
    }
  }

  const checkoutHeader1 = (
    <div className="w-full md2:w-[80%] md2:m-auto border">
      <div className="flex shadow-lg h-[50px]">
        <div
          className={`font-bold w-1/2 bg-white flex items-center justify-center ${
            isMobile ? "text-[0.8rem]" : "text-[1rem]"
          }`}
        >
          <Link to="/">BEYOUNG</Link>
        </div>
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
      <div
        className={`py-4 my-4 ${
          !modalOpened ? "z-[1]" : "-z-[1]"
        } relative  bg-gray-100 lg:w-[80%] m-auto`}
      >
        <div className="absolute z-[2] left-[15%] lg:left-[17%] lg:right[14%] right-[18%] top-[48px] lg:top-[30px] border border-gray-400 lg:w-[600px] m-auto"></div>
        <div className="relative z-[3] my-4 flex justify-around w-full lg:w-[900px] lg:m-auto">
          <div className="flex flex-col justify-center items-center">
            <div>
              <AiOutlineShoppingCart className="border-2 bg-white text-[2rem] rounded-full p-1" />
            </div>
            <div className="text-[0.9rem]">My Cart</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <CiLocationOn className="border-2 bg-white text-[2rem] rounded-full p-1" />
            </div>
            <div className="text-[0.9rem]">Address</div>
          </div>
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

  paymentSection = (
    <div className=" w-[100%] md2:w-[35%]">
      {location.pathname.includes('/checkout/cart') &&
        <div className="my-[30px] md2:my-[10px] p-2 bg-white">
            <div className="flex items-center gap-2">
            <div>
                <BsCash />
            </div>
            <div className="font-semibold">Offers & Benefits</div>
            </div>
            <div>
            <div className="flex">
                <input
                className="my-2 px-2 border-solid border-2 border-stone-300 w-[80%]"
                type="text"
                placeholder="Enter code"
                onChange={(e)=>handlerOfferAdd(e)}
                />
                <Label onClick={()=>handlerOfferApplying()} className={`${cartPrice < 1000 ? 'cursor-not-allowed':'cursor-pointer'} my-2 w-[20%] text-white font-bold text-center bg-teal-400`}>
                Apply
                </Label>
            </div>
            <div className="border-2"></div>
            <div className="p-2 flex justify-around text-[0.8rem]">
                <div>Flat ₹100 Off OnOrders Above ₹999</div>
                <div className="h-fit bg-yellow-100 font-bold">
                    BEYOUNG100
                </div>
            </div>
            <div className="border-2"></div>
            </div>
        </div>
      }

      <div className="my-[2px] p-2 bg-white">
        <div id="cart-data" className="font-semibold">Price Details</div>
        <div className="border"></div>

        <div className="flex flex-col gap-1">
          <div className="flex text-[0.9rem] justify-between">
            <div>Total MRP (Inc.of Taxes)</div>
            <div>₹{cartTotalPrice}</div>
          </div>
          <div className="flex justify-between text-[0.9rem]">
            <div>Beyoung Discount</div>
            <div>- ₹ {cartTotalPrice - cartPrice} </div>
          </div>
          <div className="flex justify-between text-[0.9rem]">
            <div>Shipping</div>
            <div className="text-green-500">Free</div>
          </div>
          <div className="py-2 flex justify-between text-[0.9rem]">
            <div>Cart Total</div>
            <div className="font-bold">₹ {cartPrice}</div>
          </div>
        </div>
      </div>

      <div className="my-[5px] flex flex-col justify-between p-2 bg-white">
        <div className="flex justify-between">
          <div className="font-semibold">Total Amount</div>
          <div className="font-bold text-[0.9rem]">₹ {offerApply && cartPrice > 999 ? cartPrice - 100 : cartPrice}</div>
        </div>

        <div className="my-3 bg-lime-600 font-semibold text-white text-center p-1 text-[0.8rem]">
          You Saved ₹ {offerApply && cartPrice > 999 ?  cartTotalPrice - cartPrice + 100 : cartTotalPrice - cartPrice} On This Order
        </div>
        {!isMobile && (
            <>
            {booleanCondition ? (
                <Link to='/checkout/shipping'>
                    <button
                    onClick={()=>handlerCartDataAdd()}
                    className="bg-teal-400 text-white w-[95%] font-semibold text-center p-2"
                    >
                        CHECKOUT SECURELY
                    </button>
                </Link>
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
  )
  const productsContainer = (
    <div className="flex justify-center">
      {cartData.length !== 0 && (
        <div className="bg-gray-100 flex flex-col md2:w-[80%]  md2:flex-row">
          <div className="bg-gray-100 flex flex-col items-center  md2:w-[60%]">
            {!cartData
              ? "Loading"
              : cartData.map((item) => (
                  <div
                    key={item._id}
                    className="my-2 bg-white shadow-lg w-[90%] flex flex-col"
                  >
                    <div className="flex gap-2  p-3">
                      <div className="p-2">
                        <img
                          className="w-[220px] h-[200px]"
                          src={item.product.displayImage}
                          alt=""
                        />
                      </div>
                      <div className="w-full">
                        <p
                          className={`${
                            isMobile ? "text-[1rem]" : "text-[1.1rem]"
                          } w-[90%] font-bold px-2`}
                        >
                          {item.product.name}
                        </p>
                        {/* <p className={`${isMobile?'text-[0.9rem]':'text-[1rem]'} opacity-70 px-2`}>singleProduct?.subCategory</p> */}
                        <p className="p-2">
                          <span
                            className={`${
                              isMobile ? "text-[0.9rem]" : "text-[1rem]"
                            } font-bold`}
                          >
                            ₹ {item.product.price}
                          </span>
                          <span
                            className={`line-through ${
                              isMobile ? "text-[0.8rem]" : "text-[0.9rem]"
                            } px-1 opacity-70`}
                          >
                            ₹{" "}
                            {item.product.price +
                              item.product.price * (50 / 100)}
                          </span>
                          <span
                            className={`px-1 ${
                              isMobile ? "text-[0.8rem]" : "text-[0.9rem]"
                            } text-green-500 font-bold`}
                          >
                            (50% Off)
                          </span>
                        </p>
                        <div className="border "></div>
                        <div className="flex justify-around">
                          {/* <div>
                                Color: Cream
                            </div>
                            <div>
                                Size: 34
                            </div> */}
                        </div>
                        <div className="border "></div>
                      </div>
                    </div>
                    <div className="px-4">Quantity: {item.quantity}</div>
                    <div className="border"></div>
                    <div className="flex py-2 ">
                      <Dialog.Root>
                        <Dialog.Trigger asChild>
                          <div
                            onClick={() => handlerModalToggle()}
                            className="w-[30%] text-center cursor-pointer"
                          >
                            {" "}
                            Remove{" "}
                          </div>
                        </Dialog.Trigger>
                        <Dialog.Portal>
                          <Dialog.Overlay className="DialogOverlay bg-gray-rgba" />
                          <Dialog.Content className="DialogContent z-5">
                            <Dialog.Title className="DialogTitle">
                              Remove Item?
                            </Dialog.Title>
                            <Dialog.Description className="DialogDescription">
                              Are you sure you want to remove this product? You
                              can move it to your Wishlist & buy later.
                            </Dialog.Description>

                            <div
                              style={{
                                display: "flex",
                                marginTop: 25,
                                justifyContent: "flex-end",
                              }}
                            >
                              <Dialog.Close asChild>
                                <button
                                  onClick={() =>
                                    handlerRemoveWishList(
                                      item.product._id,
                                      tokenVal
                                    )
                                  }
                                  className="Button green"
                                >
                                  Yes
                                </button>
                              </Dialog.Close>
                              <Dialog.Close asChild>
                                <button className="Button green">No</button>
                              </Dialog.Close>
                            </div>
                            <Dialog.Close asChild>
                              <button className="IconButton" aria-label="Close">
                                <Cross2Icon />
                              </button>
                            </Dialog.Close>
                          </Dialog.Content>
                        </Dialog.Portal>
                      </Dialog.Root>

                      <div className="border"></div>
                      <div
                        onClick={() =>
                          productFavAddingInFetch(
                            item.product._id,
                            "PATCH",
                            tokenVal
                          )
                        }
                        className="w-[70%] text-center cursor-pointer"
                      >
                        <Stack sx={{ width: "100%" }}>
                          <button
                            className="text-black"
                            onClick={() => handleClick()}
                          >
                            Add to Wishlist
                          </button>
                          <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                          >
                            <Alert
                              onClose={handleClose}
                              severity="success"
                              sx={{ width: "100%" }}
                            >
                              Product Added to Wishlist!
                            </Alert>
                          </Snackbar>
                        </Stack>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          {cartData && cartData.length !== 0 && (
            <>
            {paymentSection}
            </>
          )}
        </div>
      )}
      <div>
        {cartData.length === 0 && (
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex bg-red-300 justify-center">
              <img className="w-[80%]" src={emptyCart} alt="" />
            </div>
            <Link to="/">
              <button className="bg-yellow-400 px-4 py-2 my-1 rounded">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </div>

      {isMobile && (
        <div className="fixed bottom-0 bg-white w-full flex flex-row justify-between p-2">
          <div>
            <div>₹ {offerApply && cartPrice > 999 ? cartPrice - 100 : cartPrice}</div>
            <div onClick={()=>handlerScroller()} className="text-teal-400 text-[0.7rem] font-semibold">
              View Details
            </div>
          </div>
          <div>
            <Link to="/checkout/shipping">
              <button onClick={()=>handlerCartDataAdd()} className="bg-teal-400 text-white font-semibold p-2 rounded text-[0.8rem]">
                CHECKOUT SECURELY
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );


  return (
    <>
      <div>
        {checkoutHeader1}
        {checkoutHeader2}
        {productsContainer}
      </div>
    </>
  );
};

export { paymentSection, cartsData };
export default CheckoutCart
