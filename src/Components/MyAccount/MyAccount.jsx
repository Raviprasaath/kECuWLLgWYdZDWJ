
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useScreenSize } from "../CommonFunctions/CommonFunctions";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDataContext } from "../Fetching/DataContext";
import wishListEmpty from "../../assets/EMPTY-WISHLIST.jpg"
import noCoupon from "../../assets/no-coupon.jpg"
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import emptyCart from "../../assets/EMPTY CARTORDER PAGE..png";
import TextField from "@mui/material/TextField";
import Tooltip from '@mui/material/Tooltip';
import Switch from '@mui/material/Switch';

import "./MyAccount.css"

import { GrPrevious } from 'react-icons/gr'
let productsIdArray = [];

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const MyAccount = () => {
    const screenSize = useScreenSize();
    const isMobile = screenSize < 960;
    const location = useLocation();
    const navigate = useNavigate();
    
    let dataFromLocal = JSON.parse(localStorage.getItem("userDetails")) || [];
    
    const [currentLocation, setCurrentLocation] = useState("profile");
    const [loginCheck, setLoginCheck] = useState(false);
    
    const { refreshNavbar, refresher } = useDataContext();
    const [tokenVal, setTokenVal] = useState();

    const [mail, setMail] = useState("");
    const [wishList,setWishList] = useState();

    const [isProfilePicFetched, setIsProfilePicFetched] = useState(false);
    const [profilePic,  setProfilePic] = useState();

    const [profileName, setProfileDisplayName] = useState("");


    const [profileFirstLetter, setProfileFirstLetter] = useState("");
    const [profilePicFetch, setProfilePicFetch] = useState();

    const [mobileViewToggler, setMobileViewToggler] = useState(false);

    const [profileNameFromType, setProfileNameFromType] = useState();
    const [mobileNumber, setMobileNumber] = useState("");

    const [phoneError, setPhoneError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    
    let booleanCondition = phoneError && userNameError

    let orderedDataFromLocal = JSON.parse(localStorage.getItem('orderedProducts')) || [];
    

    const [orderPageSwap, setOrderPageSwap] = useState(false);
    const [clickedCartNumber, setClickedCartNumber] = useState(0);
    const [selectedOrderedProduct, setSelectedOrderedProduct] = useState();
    

    const [firstName, setFirstName] = useState(false);
    const [lastName, setLastName] = useState(false);
    const [email, setEmail] = useState(false);
    const [phone, setPhone] = useState(false);
    const [pinCode, setPinCode] = useState(false);
    const [city, setCity] = useState(false);
    const [state, setState] = useState(false);
    const [address, setAddress] = useState(false);

    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [pinCodeValue, setPinCodeValue] = useState("");
    const [cityValue, setCityValue] = useState("");
    const [stateValue, setStateValue] = useState("");
    const [addressValue, setAddressValue] = useState("");

    const [dataMerging, setDataMerging] = useState({});

    const [pinCodeCity, setPinCodeCity] = useState("")
    const [pinCodeState, setPinCodeState] = useState("")
    const [pinCodeNotMatch, setPinCodeNotMatch] = useState(false);

    const [addressBooleanCondition, setAddressBooleanCondition] = useState(false);

    const handlerOrderValue = (value) => {
        setOrderPageSwap(true);
        setSelectedOrderedProduct(value);
        // setClickedCartNumber(value.target.textContent.replace('Order ', ""));
    }

    const userCompleteDataGetting = JSON.parse(localStorage.getItem('userCompleteData'));
    const [cartEmptyIndicator, setCartEmptyIndicator] = useState(false);
    
    const [togglerSwitch, setTogglerSwitch] = useState(false);

    const handlerSwitchControl = () => {
        setTogglerSwitch(!togglerSwitch);
        if (!togglerSwitch) {
            setFirstName(false);
            setLastName(false);
            setEmail(false);
            setPhone(false);
            setPinCode(false);
            setCity(false);
            setState(false);
            setAddress(false);
            setFirstNameValue("");
            setLastNameValue("");
            setPhoneValue("");
            setPinCodeValue("");
            setCityValue("");
            setStateValue("");
            setAddressValue("");
        } else {
            setProfilePicFetch(userCompleteDataGetting?.data.user.profileImage);
            setProfileDisplayName(userCompleteDataGetting?.data.user.name);
            setMobileNumber(userCompleteDataGetting?.data.user.phone);
            setFirstNameValue(userCompleteDataGetting?.data.user.name.slice(0, userCompleteDataGetting?.data.user.name.indexOf(' ')));
            setLastNameValue(userCompleteDataGetting?.data.user.name.slice(userCompleteDataGetting?.data.user.name.indexOf(' ')));
            setEmailValue(userCompleteDataGetting?.data.user.email);
            setPhoneValue(userCompleteDataGetting?.data.user.phone);
            setPinCodeValue(userCompleteDataGetting?.data.user.address[0]?.zipCode);
            setCityValue(userCompleteDataGetting?.data.user.address[0]?.city);
            setStateValue(userCompleteDataGetting?.data.user.address[0]?.state);
            setAddressValue(userCompleteDataGetting?.data.user.address[0]?.street);

            setFirstName(true);
            setLastName(true);
            setEmail(true);
            setPhone(true);
            setPinCode(true);
            setCity(true);
            setState(true);
            setAddress(true);
        }
    };


    let counter = 0
    const orderedProduct = (
        !orderPageSwap ? (
            <div className="m-2 flex flex-row gap-2 flex-wrap">
                {cartEmptyIndicator && orderedDataFromLocal.length !== 0 && orderedDataFromLocal?.map((item, index) => {
                    if (item && tokenVal) {
                        const itemToken = item.token ? item.token.slice(0, 92) : '';
                        const tokenValSlice = tokenVal.slice(0, 92);
                        if (itemToken === tokenValSlice) {
                            counter++;
                            return (
                                <div
                                    onClick={() => handlerOrderValue(item)}
                                    key={index}
                                    className="cursor-pointer w-[200px] h-[120px] text-[1.1rem] uppercase shadow-lg bg-gray-200 flex justify-center items-center"
                                >
                                    Order {counter}
                                </div>
                            );
                        }
                    }
                    return null;
                })}

                {/* {orderedDataFromLocal.length !==0 && orderedDataFromLocal?.map((item, index)=> (
                    <div onClick={(index)=>handlerOrderValue(index)} key={index} className="cursor-pointer w-[200px] h-[120px] text-[1.1rem] uppercase shadow-lg bg-gray-200 flex justify-center items-center">
                        Order {index+1}
                    </div>
                ))} */}


                
                {!cartEmptyIndicator &&
                    <div className="w-full flex justify-center items-center">
                        <img src={emptyCart} alt="" />
                    </div>
                }
            </div>
        ) : (
            <>
                <button className="bg-yellow-300 px-4 py-[2px] rounded mt-2 mb-5" onClick={()=>setOrderPageSwap(false)}>
                    Back to Order Page
                </button>

                <div className="flex  justify-center">
                    {selectedOrderedProduct.cartData !== 0 && (
                        <>
                            <div className="bg-gray-100 flex flex-col py-3 md2:w-[80%] md2:flex-row">
                                <div className="bg-gray-100 flex flex-col items-center  md2:w-[60%]">
                                    {!selectedOrderedProduct.cartData
                                    ? "Loading"
                                    : selectedOrderedProduct.cartData?.map((item) => (
                                        
                                        <div
                                            key={item._id}
                                            className="my-2 bg-white shadow-lg w-[90%] flex flex-col"
                                        >
                                            <div className="flex gap-2  p-3">
                                            <div className="flex flex-col md2:flex-row">
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
                                            </div>
                                            <div className="px-4">Quantity: {item.quantity}</div>
                                            <div className="border"></div>

                                        </div>
                                    ))}

                                    
                                </div>
                                <div className=" w-[100%] md2:w-[35%] bg-white mt-2 h-fit p-4">
                                    <div className="text-[1.1rem] font-bold tracking-wider my-2">Your Order Details</div>
                                    <div className="flex gap-4">
                                        <div className="text-yellow-500 font-bold">
                                            First Name: 
                                        </div>
                                        <div className="whitespace-no-wrap w-[150px] overflow-hidden overflow-ellipsis">
                                            {selectedOrderedProduct.userData.firstName}
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-yellow-500 font-bold">
                                            Last Name: 
                                        </div>
                                        <div className="whitespace-no-wrap w-[150px] overflow-hidden overflow-ellipsis">
                                            {selectedOrderedProduct.userData.lastName}
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-yellow-500 font-bold">
                                            Last Name: 
                                        </div>
                                        <div className="whitespace-no-wrap w-[150px] overflow-hidden overflow-ellipsis">
                                            {selectedOrderedProduct.userData.email}
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-4">
                                        <div className="text-yellow-500 font-bold">
                                            Address: 
                                        </div>
                                        <div className="whitespace-no-wrap w-[150px] overflow-hidden overflow-ellipsis">
                                            {selectedOrderedProduct.userData.address}
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-yellow-500 font-bold">
                                            City: 
                                        </div>
                                        <div className="whitespace-no-wrap w-[150px] overflow-hidden overflow-ellipsis">
                                            {selectedOrderedProduct.userData.city}
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-yellow-500 font-bold">
                                            Pin Code: 
                                        </div>
                                        <div className="whitespace-no-wrap w-[150px] overflow-hidden overflow-ellipsis">
                                            {selectedOrderedProduct.userData.pincode}
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-yellow-500 font-bold">
                                            State: 
                                        </div>
                                        <div className="whitespace-no-wrap w-[150px] overflow-hidden overflow-ellipsis">
                                            {selectedOrderedProduct.userData.state}
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-yellow-500 font-bold">
                                            Phone: 
                                        </div>
                                        <div className="whitespace-no-wrap w-[150px] overflow-hidden overflow-ellipsis">
                                            {selectedOrderedProduct.userData.phone}
                                        </div>
                                    </div>


                                </div>
                            </div>
                            
                        </>
                    )}
                    <div>
                        {selectedOrderedProduct.cartData?.length === 0 && (
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
                </div>
            </>
        )
    )

    useEffect(() => {
        const token = dataFromLocal?.token;
        productFirstInFetch("", "GET", token);
        if (dataFromLocal.username) {
          setLoginCheck(true);
          setTokenVal(dataFromLocal?.token);

          setMail(dataFromLocal.emailId)
          setProfileFirstLetter(dataFromLocal.username.charAt(0).toUpperCase());
        } else {
            setLoginCheck(false);
            navigate('/');
        }
        if (location.pathname === '/myaccount/order') {
            setCurrentLocation('order');
        } else if (location.pathname === '/myaccount/address') {
            setCurrentLocation('address');
        } else if (location.pathname === '/myaccount/profile') {
            setCurrentLocation('profile');
        } else if (location.pathname === '/myaccount/wishlist') {
            setCurrentLocation('wishlist');
        } else if (location.pathname === '/myaccount/coupons') {
            setCurrentLocation('coupons');
        }

        handlerWishListGetting(token);
        gettingDetailsOutFromProfile(token,"", "", "");
        setProductsFavHeartId([]);
        productsIdArray = [];


        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        
        
        for (let i=0; i<orderedDataFromLocal.length; i++) {
            if (orderedDataFromLocal[i]?.token?.slice(0, 92) === tokenVal?.slice(0, 92)) {
                setCartEmptyIndicator(true);
                break;
            } else {
                setCartEmptyIndicator(false);
            }
        }

    }, [location.pathname, refreshNavbar, refresher]);
    
    //#region ------------Form----------------
    const handlerLogout = () => {
        setLoginCheck(false);
        refreshNavbar();
        localStorage.removeItem('userDetails');
        setTimeout(()=> {
            navigate('/')
        }, 500)
    }
    const handlerMobileNumber = (e) => {
        if (e.target.value.length === 10) {
            setMobileNumber(e.target.value)
            setPhoneError(true);
        } else {
            setPhoneError(false);
        }
    }
    const userNameCheck = (e) => {
        if (e.target.value.length > 2) {
            setProfileNameFromType(e.target.value)
            setUserNameError(true);
        } else {
            setUserNameError(false);
        }
    }
    
    const pinCodeFetching = async(value) => {
        const response = await fetch(`https://api.postalpincode.in/pincode/${value}`);
        const result = await response.json();
        if (result[0].Status === "Success") {
            setStateValue(result[0].PostOffice[0].State);
            setCityValue(result[0].PostOffice[0].District);
            setPinCodeCity(result[0].PostOffice[0].District);
            setPinCodeState(result[0].PostOffice[0].State);
            setPinCodeNotMatch(true);
            setCity(true);
            setState(true);
        } else {
            setStateValue("");
            setCityValue("");
            setPinCodeCity("");
            setPinCodeState("");
            setPinCodeNotMatch(false);
            setCity(false);
            setState(false);
        }
    }

    const handlerFirstName = (e) => {
        if ( isTextFormat (e.target.value)) {
            setFirstName(true);
            setFirstNameValue(e.target.value);
        } else {
            setFirstName(false);
        }
    }

    const handlerLastName = (e) => {
        if (isTextFormat (e.target.value)) {
            setLastName(true);
            setLastNameValue(e.target.value);
        } else {
            setLastName(false);
        }
    }

    const handlerEmail = (e) => {
        setEmailValue(e.target.value);
        if ( isValidEmail(e.target.value) ) {
            setEmail(true);
        } else {
            setEmail(false);
        }
    }

    const handlerPhoneNumber = (e) => {
        setPhoneValue(e.target.value);
        if (e.target.value.length === 10) {
            setPhone(true);
        } else {
            setPhone(false);
        }
    }

    const handlerPinCode = (e) => {
        setPinCodeValue(e.target.value);
        if (e.target.value.length === 6) {
            setPinCode(true);
            pinCodeFetching(e.target.value);
        } else {
            setPinCode(false);
        }
    }

    const handlerCity = (e) => {
        if (isTextFormat (e.target.value)) {
            setCity(true);
            setCityValue(e.target.value);
        } else {
            setCity(false);
        }
    }
    
    const handlerState = (e) => {
        if (isTextFormat (e.target.value)) {
            setState(true);
            setStateValue(e.target.value);
        } else {
            setState(false);
        }
    }

    const handlerAddress = (e) => {
        if (e.target.value) {
            setAddress(true);
            setAddressValue(e.target.value);
            
        } else {
            setAddress(false);
        }
        setDataMerging ({
            firstName: firstNameValue,
            lastName: lastNameValue,
            email: emailValue,
            phone: phoneValue,
            pincode: pinCodeValue,
            city: cityValue,
            state: stateValue,
            address: e.target.value,
        })
       if (firstNameValue && lastNameValue && emailValue && phoneValue &&
        cityValue && stateValue && e.target.value) {
            setAddressBooleanCondition(true);
        }
    }
    
    

    const isValidEmail = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const isTextFormat = (value) => {
        return /^[a-zA-Z\-]+$/;
    }
    //#endregion ------------Form----------------

    
    const handlerMobileViewToggler = () => {
        setMobileViewToggler(true);
    }
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

    const handlerProfileNameMobUpdate = () => {
        gettingDetailsOutFromProfile(tokenVal, profileNameFromType,"", mobileNumber);
        handleClick();
    }
    const handlerAddressUpdate = () => {
        gettingDetailsOutFromProfile(tokenVal, profileNameFromType, dataMerging, mobileNumber);
        handleClick();
    }


    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };


    const addressField = (
        <div className='m-2 w-[100%] md2:w-[50%]'>
            <div className="flex items-center">
                <h1 className="mx-2 font-semibold">Save Your Address</h1>
                <Tooltip title="Edit">
                    <Switch onChange={() => handlerSwitchControl()} />                                    
                </Tooltip>
            </div>
            <div className=' flex p-2 gap-2 w-full justify-between '>
                <TextField
                    label="First Name"
                    disabled={!togglerSwitch}
                    type="input"
                    error={firstName ? false : true}
                    className=" w-1/2 border-solid"
                    onChange={(e)=>handlerFirstName(e)}
                    value={firstNameValue}
                    />
                <TextField                                    
                    label="Last Name"
                    disabled={!togglerSwitch}
                    type="input"
                    error={lastName ? false : true}                                    
                    className=' w-1/2'
                    onChange={(e)=>handlerLastName(e)}
                    value={lastNameValue}
                    />
            </div>
            <div className='flex p-2 gap-2 w-full justify-between'>
                <div className="w-full">
                    <TextField
                        label="Email"
                        disabled={true}
                        type="input"                                    
                        error={email ? false : true}
                        className='w-full'
                        onChange={(e)=>handlerEmail(e)}
                        value={emailValue}
                    />
                    <div className="text-[0.8rem] text-green-400">Changing Email is prohibited</div>
                </div>
            </div>
            <div className='flex p-2 gap-2 w-full justify-between'>
                <TextField
                    label="Phone Number"
                    disabled={!togglerSwitch}
                    type="number"
                    error={phone ? false : true}
                    className='w-1/2'
                    onChange={(e) => handlerPhoneNumber(e)}
                    value={phoneValue}
                />
                <div className="w-1/2">
                    <TextField                                    
                        label="Pin Code"
                        disabled={!togglerSwitch}
                        type="number"
                        error={pinCode ? false : true}
                        className='w-full'
                        onChange={(e)=>handlerPinCode(e)}
                        value={pinCodeValue}
                    />
                    {!pinCodeNotMatch && togglerSwitch &&
                        <div className="text-[0.9rem] text-red-500">
                            Please Enter Valid Pin Code
                        </div>
                    }
                </div>
            </div>
            <div className=' flex p-2 gap-2 w-full justify-between'>
                
                    <TextField                       
                        label="City / District"
                        disabled={!togglerSwitch}
                        type="input"
                        error={city ? false : true}
                        className='w-1/2'
                        value={cityValue}
                        onChange={(e)=>handlerCity(e)}
                    />
                
                <TextField                                    
                    label="State"
                    type="input"
                    disabled={!togglerSwitch}
                    error={state ? false : true}
                    className='w-1/2'
                    value={stateValue}
                    onChange={(e)=>handlerState(e)}
                />
            </div>
            <div className='flex p-2 gap-2 w-full justify-between'>
                <TextField
                    label="Address (House No, Street, Area)"
                    type="input"
                    disabled={!togglerSwitch}
                    error={address ? false : true}
                    className='w-full'  
                    onChange={(e)=>handlerAddress(e)}
                    value={addressValue}
                />
            </div>
            {addressBooleanCondition &&
                <button onClick={()=>handlerAddressUpdate()} className="w-full text-center bg-yellow-300 my-4 py-2 rounded-lg uppercase">Save Changes</button>
            }
            {!addressBooleanCondition &&
                <button className="w-full text-center bg-gray-300 my-4 py-2 rounded-lg uppercase">Save Changes</button>
            }
        </div>
    )


    const handleClose = (reason) => {
        if (reason === "clickaway") {
          return;
        }
        setOpen(false);
      };

    const gettingDetailsOutFromProfile = async (tokenVal, name, address, mobile) => {

        let myHeaders = new Headers();
        myHeaders.append("projectID", "vflsmb93q9oc");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${tokenVal}`);

        let raw;
        if (name) {
            raw = JSON.stringify({
                "name": name,
                "address": "",
                "phone": mobile
            });
        } else if (address.firstName) {
            raw = JSON.stringify({
                "name": `${address.firstName} ${address.lastName}`,
                "phone": `${address.phone}`,
                "address": {
                    "street": `${address.address}`,
                    "city": `${address.city}`,
                    "state": `${address.state}`,
                    "country": "India",
                    "zipCode": `${address.pincode}`
                }
            });
        }

        let requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch("https://academics.newtonschool.co/api/v1/user/updateme", requestOptions)
        if (response.ok) {
            const result = await response.json();
            localStorage.setItem('userCompleteData', JSON.stringify(result));
            if (result.data.user.profileImage) {
                setIsProfilePicFetched(true);
            }
            setProfilePicFetch(result.data.user.profileImage);
            setProfileDisplayName(result.data.user.name);
            setMobileNumber(result.data.user.phone);
            setFirstNameValue(result.data.user.name.slice(0, result.data.user.name.indexOf(' ')));
            setLastNameValue(result.data.user.name.slice(result.data.user.name.indexOf(' ')));
            setEmailValue(result.data.user.email);
            setPhoneValue(result.data.user.phone);
            setPinCodeValue(result.data.user.address[0].zipCode);
            setCityValue(result.data.user.address[0].city);
            setStateValue(result.data.user.address[0].state);
            setAddressValue(result.data.user.address[0].street);

            setFirstName(true);
            setLastName(true);
            setEmail(true);
            setPhone(true);
            setPinCode(true);
            setCity(true);
            setState(true);
            setAddress(true);
        }
    }

    const handlerProfilePicUpload = async () => {

        const myHeaders = new Headers();
        myHeaders.append("projectID", "vflsmb93q9oc");
        myHeaders.append("Authorization", `Bearer ${tokenVal}`);

        const formdata = new FormData();
        formdata.append("profileImage", profilePic);

        const requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };
    
        try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/updateProfileImage", requestOptions);
            if (response.ok) {
                const result = await response.json();
                
                if (result.data.user.profileImage) {
                    setIsProfilePicFetched(true);
                }
                setProfilePicFetch(result.data.user.profileImage);
                setProfileDisplayName(result.data.user.name);
            }
        } catch (error) {
        console.error("Image update error", error);
        }
        
    };

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
          setWishList(result.data.items);
        }
    }

  const [productsFavHeartId, setProductsFavHeartId] = useState([]);


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
        }
    };

    const wishListUi = (
        wishList && wishList.length === 0 ? (
            <>
                <img src={wishListEmpty} alt="" />
            </>
        ) :
        (wishList ?
        wishList?.map((item)=> (
            <Link
                key={item.products._id}
                to={`/clothing/${item.products.name}/${item.products._id}`}
                state={{ data: wishList ? wishList : null }}
            >
                <div className="relative max-w-[200px] flex flex-col justify-center items-center">
                <div>
                    <img
                    className="max-w-[200px] rounded-md"
                    src={item.products.displayImage}
                    alt=""
                    />
                </div>
                <div>
                    <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
                    {item.products.name}
                    </p>
                    
                    <p className="flex flex-row justify-center items-center">
                    <span className="px-1.5 font-bold text-[0.9rem]">
                        ₹{item.products.price}
                    </span>
                    <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                        ₹{item.products.price + item.products.price * (50 / 100)}
                    </span>
                    <span className="px-1 font-bold text-[0.8rem] text-green-500">
                        (50% Off)
                    </span>
                    </p>
                </div>

                <div
                    className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
                    onClick={(event) => handlerFavAdding(event, item, item.products._id)}
                >
                    {productsFavHeartId.includes(item.products._id) || productsIdArray.includes(item.products._id) ? (
                    <AiFillHeart className="text-red-500" />
                    ) : (
                    <AiOutlineHeart />
                    )}
                </div>
                </div>
            </Link>
        )) : ("Loading"))
    )



    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setProfilePic(selectedFile);
        }
    }

    const accountDetailSelector = (
        <div className={` ${isMobile ? 'w-[95%]':'w-[20%]' } p-3 m-2 border`}>
            <aside className="bg-zinc-300 flex flex-col justify-center items-center gap-3 py-2">
                <div className="font-semibold text-white text-[3rem] bg-black w-[100px] h-[100px] flex justify-center items-center rounded-full">
                    {isProfilePicFetched ? 
                        (<div className="h-24 w-24 rounded-full overflow-hidden bg-red-400">
                            <img className="h-full w-full object-cover rounded-full" accept="image/*" src={profilePicFetch} alt="" />
                        </div>) : 
                        (
                        <div className="font-semibold text-white text-[3rem] bg-black w-[100px] h-[100px] flex justify-center items-center rounded-full">
                            {profileFirstLetter}
                        </div>
                        )
                    }
                </div>
                <div className="whitespace-no-wrap w-[150px] text-center overflow-hidden overflow-ellipsis">
                    {profileName}
                </div>
                <div className="text-gray-500 text-[0.8rem]">
                    #BeYoungster
                </div>
            </aside>
            <div className="flex flex-col gap-1">
                <Link to='/myaccount/order'>
                    <div onClick={isMobile ? ()=>handlerMobileViewToggler() : null } className={`p-2 ${!isMobile && currentLocation === 'order'?'font-bold':''}`}>
                        Order
                    </div>
                </Link>
                <div className="border m-2"></div>
                <Link to='/myaccount/address'>
                    <div onClick={isMobile ? ()=>handlerMobileViewToggler() : null } className={`p-2 ${!isMobile && currentLocation === 'address'?'font-bold':''}`}>
                        Address
                    </div>
                </Link>
                <div className="border m-2"></div>
                <Link to='/myaccount/profile'>
                    <div onClick={isMobile ? ()=>handlerMobileViewToggler() : null } className={`p-2 ${!isMobile && currentLocation === 'profile'?'font-bold':''}`}>
                        Profile
                    </div>
                </Link>
                <div className="border m-2"></div>
                <Link to='/myaccount/wishlist'>
                    <div onClick={isMobile ? ()=>handlerMobileViewToggler() : null } className={`p-2 ${!isMobile && currentLocation === 'wishlist'?'font-bold':''}`}>
                        Wishlist
                    </div>
                </Link>
                <div className="border m-2"></div>
                <Link to='/myaccount/coupons'>
                    <div onClick={isMobile ? ()=>handlerMobileViewToggler() : null } className={`p-2 ${!isMobile && currentLocation === 'coupons'?'font-bold':''}`}>
                        Coupons
                    </div>
                </Link>
                <div className="border m-2"></div>
                <div className="flex py-4 justify-center">
                    <button onClick={()=>handlerLogout()} className="bg-yellow-300 w-[95%] text-center py-2 rounded-lg">
                        LOGOUT
                    </button>
                </div>
            </div>
        </div>
    )




    const accountContent = (
        <div className="w-[80%]">
            {currentLocation === 'order'&&
                <div>
                    {orderedProduct}
                </div>
            }
            {currentLocation === 'address'&&
                <div>
                    {addressField}
                </div>
            }
            {currentLocation === 'profile'&&
                <div className="flex flex-col justify-center items-center">
                    <div className="w-[50%] h-[250px]">
                        <aside className="flex flex-col justify-center items-center gap-3 py-2">
                            {isProfilePicFetched ? 
                                (<div className="h-24 w-24 rounded-full overflow-hidden bg-red-400">
                                    <img className="h-full w-full object-cover rounded-full" accept="image/*" src={profilePicFetch} alt="" />
                                </div>) : 
                                (
                                <div className="font-semibold text-white text-[3rem] bg-black w-[100px] h-[100px] flex justify-center items-center rounded-full">
                                    {profileFirstLetter}
                                </div>
                                )
                            }
                            <input type="file" onChange={handleFileChange}  accept="image/*" className="text-[0.8rem]" placeholder="Choose a Photo" />
                            <button onClick={()=>handlerProfilePicUpload()} className="cursor-pointer bg-black text-white px-2 py-1 rounded-lg text-[0.8rem]">Submit</button>
                        </aside>
                    </div>
                    <div className="w-[50%]">
                        <div className="text-[0.8rem]">Full Name</div>
                        <input onChange={(e)=>userNameCheck(e)} className="input-border" type="text" placeholder={profileName === "" ? "Full Name" : profileName}  name="" id="" />
                        {!userNameError && 
                            <p className="text-[0.85rem] my-2 text-red-500">Please Enter Valid Name</p>
                        }
                        <div className="text-[0.8rem]">Email ID</div>
                        <input className="input-border cursor-not-allowed	" type="text" disabled placeholder={mail} name="" id="" />
                        <p className="text-[0.85rem] my-2 text-green-500">Changing Email is prohibited</p>
                        {/* <div className="text-[0.8rem]">Birth Date</div>
                        <input className="input-border" type="date" placeholder="mm/dd/yyyy" name="" id="" /> */}
                        
                        <div className="text-[0.8rem]">Phone Number</div>
                        <input onChange={(e)=>handlerMobileNumber(e)} className="input-border" type="number" placeholder={mobileNumber?.length===0 || !mobileNumber ? "Phone Number" : mobileNumber}  maxLength="10" name="" id="" />
                        {!phoneError && 
                            <p className="text-[0.85rem] my-2 text-red-500">Please Enter Valid Phone Number</p>
                        }
                        {booleanCondition &&
                            <button onClick={()=>handlerProfileNameMobUpdate()} className="w-full text-center bg-yellow-300 my-4 py-2 rounded-lg uppercase">Save Changes</button>
                        }
                        {!booleanCondition &&
                            <button className="w-full text-center bg-gray-300 my-4 py-2 rounded-lg uppercase">Save Changes</button>
                        }

                    </div>
                </div>
            }
            {currentLocation === 'wishlist'&&
                <div className="flex flex-row justify-center flex-wrap gap-4 p-4">
                    {wishListUi}
                </div>
            }
            {currentLocation === 'coupons'&&
                <div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-[40%]" src={noCoupon} alt="" />
                        <p className="top-[60%] text-[1.5rem] font-mono uppercase">No Coupons Found</p>
                    </div>

                </div>
            }
        </div>
    )




    return (
        <>
        {!isMobile ? (
            <>
            <div className="flex">
                <>{accountDetailSelector}</>        
                <>{accountContent}</>
            </div>
            </>
        ) : (
            <>
                {!mobileViewToggler && 
                    <>{accountDetailSelector}</> 
                }
                {mobileViewToggler && 
                    <>
                        <Link to='/myaccount/profile'>
                            <button onClick={()=>setMobileViewToggler(false)}>
                                <div className="flex gap-2 bg-gray-300 m-1 px-2 py-1 rounded-lg cursor-pointer items-center">
                                    <GrPrevious />
                                    <p>Back</p>
                                </div>
                            </button>
                        </Link>
                        
                        <>{accountContent}</>
                    </>
                }

            </>
        )}
        <Stack  sx={{ width: "100%" }}>
            <button
            className="text-black">
                
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
                    Updated Successfully!
                </Alert>
            </Snackbar>
        </Stack>
        </>
    )
}

export default MyAccount;