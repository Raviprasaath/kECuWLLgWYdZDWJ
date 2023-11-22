import { RiSecurePaymentLine } from 'react-icons/ri'
import { CiLocationOn } from 'react-icons/ci'
import { MdPayment } from 'react-icons/md'
import { BsCash } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'
import { PiTruckBold } from 'react-icons/pi'
import TextField from "@mui/material/TextField";
import Switch from '@mui/material/Switch';

import { useScreenSize } from '../CommonFunctions/CommonFunctions'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { cartsData } from './CheckoutCart'
import Tooltip from '@mui/material/Tooltip';


const CheckoutCartShipping = () => {
    const screenSize = useScreenSize();
    const isMobile = screenSize < 960;
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
    const userCompleteDataGetting = JSON.parse(localStorage.getItem('userCompleteData'));
    const [userDataLocalCheck, setUserDataLocalCheck] = useState(false);
    const [togglerSwitch, setTogglerSwitch] = useState(false);
    
    
    const handlerSwitchControl = () => {
        setTogglerSwitch(!togglerSwitch);
        if (!togglerSwitch) {
            setBooleanCondition(false);
            setFirstName(false);
            setLastName(false);
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

            setDataMerging ({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                pincode: "",
                city: "",
                state: "",
                address: "",
            })
        } else {
            setBooleanCondition(true);
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
        if(!userDataLocalCheck) {
            setTogglerSwitch(false);
        }
    };


    const [booleanCondition, setBooleanCondition] = useState(false);    

    // let booleanCondition = 
    // firstName && lastName && email && phone && pinCode && address ? true : false;
    



    useEffect(()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        const localValues = JSON.parse(localStorage.getItem('userDetails'));
        setEmailValue(localValues.emailId);
        if ( userCompleteDataGetting?.data?.user?.address[0]?.zipCode ) {
            setUserDataLocalCheck(true);
            setBooleanCondition(true);
            setFirstNameValue(userCompleteDataGetting?.data.user.name.slice(0, userCompleteDataGetting?.data.user.name.indexOf(' ')));
            setLastNameValue(userCompleteDataGetting?.data.user.name.slice(userCompleteDataGetting?.data.user.name.indexOf(' ')));
            setEmailValue(localValues.emailId);
            setPhoneValue(userCompleteDataGetting?.data.user.phone);
            setPinCodeValue(userCompleteDataGetting?.data.user.address[0]?.zipCode);
            setCityValue(userCompleteDataGetting?.data.user.address[0]?.city);
            setStateValue(userCompleteDataGetting?.data.user.address[0]?.state);
            setAddressValue(userCompleteDataGetting?.data.user.address[0]?.street);

            setDataMerging ({
                firstName: userCompleteDataGetting?.data.user.name.slice(0, userCompleteDataGetting?.data.user.name.indexOf(' ')),
                lastName: userCompleteDataGetting?.data.user.name.slice(userCompleteDataGetting?.data.user.name.indexOf(' ')),
                email: localValues.emailId,
                phone: userCompleteDataGetting?.data.user.phone,
                pincode: userCompleteDataGetting?.data.user.address[0]?.zipCode,
                city: userCompleteDataGetting?.data.user.address[0]?.city,
                state: userCompleteDataGetting?.data.user.address[0]?.state,
                address: userCompleteDataGetting?.data.user.address[0]?.street,
            })

            setFirstName(true);
            setLastName(true);
            setEmail(true);
            setPhone(true);
            setPinCode(true);
            setCity(true);
            setState(true);
            setAddress(true);



        } else {
            setUserDataLocalCheck(false);
            setTogglerSwitch(true)
        }

        

    }, [])
    
    const handlerScroller = () => {
        const element = document.getElementById('cart-data');
        if (element) {            
            const offset = element.getBoundingClientRect().top + window.scrollY - 50;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    }



    //#region --------------Form Validation -----------    
    const handlerFirstName = (e) => {
        if (isTextFormat (e.target.value)) {
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
        setCityValue(e.target.value);
        if (isTextFormat (e.target.value)) {
            setCity(true);
        } else {
            setCity(false);
        }
    }
    
    const handlerState = (e) => {
        setStateValue(e.target.value);
        if (isTextFormat (e.target.value)) {
            setState(true);
        } else {
            setState(false);
        }
    }

    const handlerAddress = (e) => {
        setAddressValue(e.target.value);
        if (e.target.value) {
            setAddress(true);
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
        if (firstNameValue && lastNameValue && emailValue && phoneValue && pinCodeValue && cityValue && stateValue && e.target.value) {
            setBooleanCondition(true);
        }
    }
    
    

    const isValidEmail = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const isTextFormat = (value) => {
        return /^[a-zA-Z\-]+$/;
    }

    const [pinCodeCity, setPinCodeCity] = useState("")
    const [pinCodeState, setPinCodeState] = useState("")
    const [pinCodeNotMatch, setPinCodeNotMatch] = useState(false);

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

    //#endregion --------------Form Validation -----------

    

    const checkoutHeader1 = (
        <div className='w-full md2:w-[80%] md2:m-auto border'>
            <div className="flex shadow-lg h-[50px]">
                <Link to="/" className={`font-bold w-1/2 bg-white flex items-center justify-center ${isMobile?"text-[0.8rem]":"text-[1rem]"}`}>
                    <div className={`font-bold w-1/2 bg-white flex items-center justify-center ${isMobile?"text-[0.8rem]":"text-[1rem]"}`}>
                        BEYOUNG
                    </div>
                </Link>
                <div className="font-bold w-1/2 flex gap-2 items-center justify-center bg-gray-100">
                    <div>
                        <RiSecurePaymentLine />
                    </div>
                    <div className={`${isMobile?"text-[0.8rem]":"text-[1rem]"}`}>
                        100% SECURE PAYMENT
                    </div>
                </div>
            </div>                
        </div>
    )
    const checkoutHeader2 = (
        <>
            <div className='py-4 my-4 relative z-[1] bg-gray-100 lg:w-[80%] m-auto'>
                <div className='absolute z-[2] left-[15%] lg:left-[17%] lg:right[14%] right-[18%] top-[48px] lg:top-[30px] border border-gray-400 lg:w-[600px] m-auto'></div>            
                <div className='relative z-[3] my-4 flex justify-around w-full lg:w-[900px] lg:m-auto'>
                    <Link to="/checkout/cart">
                        <div className='flex flex-col justify-center items-center'>
                            <div>
                                <TiTick className='text-green-500 border-2 bg-white text-[2rem] rounded-full p-1'/>
                            </div>
                            <div className='text-[0.9rem]'>
                                My Cart
                            </div>
                        </div>
                    </Link>
                    <div className='flex flex-col justify-center items-center'>                    
                        <div>
                            <CiLocationOn  className='border-2 bg-white text-[2rem] rounded-full p-1'/>
                        </div>
                        <div className='text-[0.9rem]'>
                            Address
                        </div>
                    </div>
                    <div className='flex flex-col  justify-center items-center'>                                            
                        <div>
                            <MdPayment className='border-2 bg-white text-[2rem] rounded-full p-1' />
                        </div>
                        <div className='text-[0.9rem]'>
                            Payment
                        </div>
                    </div>        
                </div>            
            </div>
        </>
    )

    const productsContainer = (
        <div className='flex justify-center '>
            <div className='bg-gray-100 w-full flex flex-col md2:w-[80%]  md2:flex-row'>
                <div className='bg-gray-100 p-2 flex flex-col items-center w-full md2:w-[60%]'>
                    <div className='bg-white w-full'>
                        <div className='flex items-center'>
                            <div className=' bg-white px-2 font-semibold'>
                                
                                Delivery Address
                            </div>
                            <div className='flex items-center text-[0.8rem]'>
                                (Use Registered Address)
                                <Tooltip title={`${!userDataLocalCheck ? 'User Address Not Found':'Add New Address'} `}>
                                    <div>
                                        <Switch
                                            disabled = {!userDataLocalCheck}
                                            defaultChecked = {userDataLocalCheck}
                                            onChange={() => handlerSwitchControl()} 
                                        />                                  
                                    </div>
                                </Tooltip>
                            </div>
                        </div>

                        <div className='m-2 '>
                            <div className=' flex p-2 gap-2 w-full justify-between '>
                                <TextField
                                    label="First Name"
                                    type="input"
                                    disabled={!togglerSwitch}
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
                                <TextField
                                    label="Email"
                                    type="input"
                                    disabled={true}                                   
                                    
                                    className='w-full'
                                    onChange={(e)=>handlerEmail(e)}
                                    value={emailValue}
                                />
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
                                    {!pinCodeNotMatch &&
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
                        </div>
                    </div>
                </div>
            
                <div className=' w-[100%] md2:w-[35%]'>
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

                    <div className='my-[9px] p-2 bg-white'>
                        <div id="cart-data" className='font-semibold'>Price Details (4 items)</div>
                        <div className='border'></div>
                        
                        <div className='flex flex-col gap-1'>
                            <div className='flex text-[0.9rem] justify-between'>
                                <div>Total MRP (Inc.of Taxes)</div>
                                <div>₹ {cartsData?.cartTotal}</div>
                            </div>
                            <div className='flex justify-between text-[0.9rem]'>
                                <div>Beyoung Discount</div>
                                <div>- ₹ {cartsData?.cartTotal - cartsData?.cartAmount}</div>
                            </div>
                            <div className='flex justify-between text-[0.9rem]'>
                                <div>Shipping</div>
                                <div className='text-green-500'>Free</div>
                            </div>
                            <div className='py-2 flex justify-between text-[0.9rem]'>
                                <div>Cart Total</div>
                                <div className='font-bold'>₹ {cartsData?.cartAmount}</div>
                            </div>
                        </div>
                    </div>

                    <div className='my-[5px] flex flex-col justify-between p-2 bg-white'>
                        <div className='flex justify-between'>
                            <div className='font-semibold'>
                                Total  Amount
                            </div>
                            <div className='font-bold text-[0.9rem]'>
                                ₹ {cartsData?.offer? cartsData?.cartAmount-100:cartsData?.cartAmount }
                            </div>
                        </div>

                        <div className='my-3 bg-lime-600 font-semibold text-white text-center p-1 text-[0.8rem]'>
                            You Saved ₹ { cartsData?.offer? cartsData?.cartTotal - cartsData?.cartAmount + 100 : cartsData?.cartTotal - cartsData?.cartAmount   } On This Order
                        </div>
                        {!isMobile &&                 
                            (
                                <>
                                    {booleanCondition ? (
                                    <Link 
                                        to='/checkout/payment'
                                        state= {{data: dataMerging}}
                                    >
                                        <button
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
                            )
                        }
                    </div>

                    <div className='text-[0.8rem] flex justify-center items-center gap-2 text-gray-500'>
                        <div>
                            <PiTruckBold className='text-[1rem]'/>
                        </div>
                        <div>
                            Free Delivery & Inclusive Of All Taxes
                        </div>
                    </div>

                    <div className='h-[80px]'>

                    </div>
                </div>

            </div>
            
            {isMobile &&
                <div className='fixed shadow-inner z-10 bottom-0 bg-white  w-full flex flex-row justify-between p-2'>
                    <div>
                        <div>
                            ₹ {cartsData?.offer? cartsData?.cartAmount-100:cartsData?.cartAmount }          
                        </div>
                        <div onClick={()=>handlerScroller()} className='text-teal-400 text-[0.7rem] font-semibold'>
                            View Details
                        </div>
                    </div>
                    <div>
                        {booleanCondition ? (
                            <Link 
                                to='/checkout/payment'
                                state= {{data: dataMerging}}
                            >
                                <button
                                className={`${booleanCondition ? 'bg-teal-400':'bg-gray-300'}  text-white font-semibold p-2 rounded text-[0.8rem]`}
                                >
                                CHECKOUT SECURELY
                                </button>
                            </Link>
                            ) : (
                            <button
                                className={`${booleanCondition ? 'bg-teal-400':'bg-gray-300'}  text-white font-semibold p-2 rounded text-[0.8rem]`}
                                disabled
                            >
                                CHECKOUT SECURELY
                            </button>
                        )}



                    </div>

                </div>
            }
        </div>
    )
    return (
        <>
            <div>
                {checkoutHeader1}
                {checkoutHeader2}
                {productsContainer}
            </div>
        </>
    )

}

export default CheckoutCartShipping;