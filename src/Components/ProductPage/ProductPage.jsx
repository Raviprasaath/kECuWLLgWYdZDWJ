import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TiTick } from 'react-icons/ti'

import './ProductPage.css'

import img1a from "../../assets/product-discription/1.jpg"
import img2a from "../../assets/product-discription/2.jpg"
import img3a from "../../assets/product-discription/3.jpg"
import img4a from "../../assets/product-discription/4.jpg"

import { GiPriceTag, GiCash } from "react-icons/gi"
import { FaShippingFast } from "react-icons/fa"
import { AiOutlineHeart, AiFillHeart, AiFillStar, AiOutlineStar } from "react-icons/ai"
import { MdShoppingCartCheckout } from "react-icons/md"
import { GrFormNextLink } from "react-icons/gr"

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { Label } from "@radix-ui/react-menubar";
import { useScreenSize } from "../CommonFunctions/CommonFunctions";

import "react-image-gallery/styles/css/image-gallery.css";
import { useDataContext } from "../Fetching/DataContext";



let productsIdArray = [];

const ProductPage = () => {
    const { openDialog, refreshNavbar } = useDataContext();

    const navigate = useNavigate();

    const [singleProduct, setSingleProduct] = useState();
    const [productSizeSelection, setProductSizerSelection] = useState("");
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [similarProduct, setSimilarProduct] = useState();

    const [currentProductId, setCurrentProductId] = useState("");
    const [productQuantity, setProductQuantity] = useState(1);

    const [quantityOfCart, setQuantityOfCart] = useState(0);

    const [productsFavHeartId, setProductsFavHeartId] = useState([]);
    const [tokenVal, setTokenVal] = useState();
    const [loginCheck, setLoginCheck] = useState(false);
    let dataFromLocal = JSON.parse(localStorage.getItem("userDetails")) || [];

    const [cartAddTrack, setCartAddTrack] = useState(false);

    const [pinCodeValue, setPinCodeValue] = useState(11000);
    const [pinCodeRangeCheck, setPinCodeRangeCheck] = useState(false);
    const [pinCodeErrorShow, SetPinCodeErrorShow] = useState(false);

    const screenSize = useScreenSize();
    const isMobile = screenSize < 960;

    const location = useLocation();
    const str = location.pathname;


    const handlerPinCodeType = (e) => {
        setPinCodeValue(e.target.value);
        SetPinCodeErrorShow(false);
    }
    const handlerPinCodeCheck = () => {
        if (pinCodeValue > 110000 && pinCodeValue < 880000 ) {
            setPinCodeRangeCheck(true);
        } else {
            setPinCodeRangeCheck(false);
        }
        SetPinCodeErrorShow(true);
    }
    const handlerPinCodeAgainCheck = () => {
        setPinCodeRangeCheck(false);
        SetPinCodeErrorShow(false);
    }



    let strFinal = "";
    for (let i=str.length-1; i>=0; i--) {
        if (str.charAt(i) !== '/') {
            strFinal += (str.charAt(i));
        } else {
            break;
        }
    }

    const reversedStrFinal = strFinal.split('').reverse().join('');
    
    const oldLocation = location.pathname;
    let newLocation = oldLocation.replace(reversedStrFinal, '');


    const gettingReviews = () => {

    }

    const addReview = (currentProductId) => {
        'https://academics.newtonschool.co/api/v1/ecommerce/review/:productId'
    }

    const handlerAddToCart = async (currentProductId, quantity, tokenVal) => {
        let myHeaders = new Headers();
        myHeaders.append("projectID", "vflsmb93q9oc");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${tokenVal}`);

        let raw = JSON.stringify({
        "quantity": `${quantity}`
        });

        let requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${currentProductId}`, requestOptions)
        if (response.ok) {
            const result = await response.json();
            refreshNavbar();
            setCartAddTrack(true);
        }
    }
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
          const cartData = result.data.items;
          const cartDataCheck = cartData.some((item)=> {
            return item.product._id === reversedStrFinal
          })
          const cartDataQuantity = cartData.filter((item)=> {
            if (item.product._id === reversedStrFinal) {
                return item.quantity;
            }
          })

          if (cartDataCheck) {
            setCartAddTrack(true);
            setQuantityOfCart(cartDataQuantity[0].quantity)
          }
        }
    };
    


    const handlerSizeSelector = (e) => {
        if (productSizeSelection === e.target.innerText) {
            setProductSizerSelection("");
        } else {
            setProductSizerSelection(e.target.innerText);
        }
    }


    
    async function singleProductFetch() {
        const productId = reversedStrFinal;
      
        try {
          const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${productId}`, {
            method: 'GET',
            headers: {
              'projectID': 'vflsmb93q9oc',
              'Content-Type': 'application/json', 
            },
            mode: 'cors',
          });
      
          const result = await response.json();          
          setSingleProduct(result.data);
          setCurrentProductId(result.data._id);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    }
      
    useEffect(() => {
        singleProductFetch();
        setCartAddTrack(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [reversedStrFinal]);

    useEffect(() => {
        singleProductFetch();
        
        const dataFromHP3 = location?.state?.similarProducts || location?.state?.data;
        setSimilarProduct(dataFromHP3);        
        if (dataFromLocal.username) {
            setLoginCheck(true);
            setTokenVal(dataFromLocal?.token);
            const token = dataFromLocal?.token;
            productFirstInFetch("", "GET", token);
            handlerCardGetting(token);
            productsIdArray = [];

          } else {
            setLoginCheck(false);
            setProductsFavHeartId([]);
            setCartAddTrack(false);

            productsIdArray = [];
          }
    }, [location.pathname, refreshNavbar, reversedStrFinal ]);


    const handlerCheckout = () => {
        if (productSizeSelection === "") {
            handlerScrollToSizeChart();
        } else {
            handlerAddToCart(currentProductId, productQuantity, tokenVal);
        }
    }
    const handlerCheckoutBuy = () => {
        if(cartAddTrack && productSizeSelection === "" || productSizeSelection !== "" ) {
            navigate('/checkout/cart');
        } else if (productSizeSelection === "") {
            handlerScrollToSizeChart();
        } else {
            handlerAddToCart(currentProductId, productQuantity, tokenVal);
        }
    }

    //#region ----------------------
    const handlerQuantity = (e) => {
        setProductQuantity(e.target.value);
    }

    const handlerScrollToSizeChart = () => {
        const element = document.getElementById('sizeChart');
        if (element) {            
            const offset = element.getBoundingClientRect().top + window.scrollY - 50;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };  
    const handlerSwiperData = (e) => {
        singleProductFetch();
        setThumbsSwiper(e);
    }
    const imageContainer = (
        <>
        {isMobile &&         
            <Swiper
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                {singleProduct?.images.map((item, index)=> (
                    <SwiperSlide key={index} >
                        <div className="grid place-items-center">
                            <img className="w-[80%]" src={item} alt="" />
                        </div>
                    </SwiperSlide>
                ))}         
            </Swiper>
        }

        {!isMobile && singleProduct &&
            <>
            <div className="flex flex-row-reverse">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper?thumbsSwiper:  ""  }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 w-[600px] h-[500px]"
                >
                {singleProduct?.images.map((item, index)=> (
                    <SwiperSlide className="flex justify-center items-center" key={index} >
                        <img className="h-[500px]" src={item} alt="" />
                    </SwiperSlide>
                ))}
                </Swiper>
                <Swiper
                    onSwiper={handlerSwiperData}
                    // onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    direction="vertical"
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {singleProduct?.images.map((item, index)=> (
                        <SwiperSlide className="w-[100px] h-[100%]" key={index} >                            
                            <img className="w-[200px] h-[auto]" src={item} alt="" />                            
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            </>
        }
        </>
    );
    const productPriceDescription = (
        <div className="px-2">
            <p className={`${isMobile?'text-[1rem]':'text-[1.4rem]'} w-[90%] font-bold px-2`}>{singleProduct?.name}</p>
            <p className={`${isMobile?'text-[0.9rem]':'text-[1.2rem]'} opacity-70 px-2`}>{singleProduct?.subCategory}</p>
            <p className="px-2">
                <span className={`${isMobile?'text-[1rem]':'text-[1.2rem]'} font-bold`}>                    
                    ₹ {singleProduct?.price}
                </span>
                <span className={`line-through ${isMobile?'text-[0.8rem]':'text-[1rem]'} px-1 opacity-70`}>
                    ₹ {singleProduct?.price + (singleProduct?.price * ( 50 / 100 ) )}
                </span>
                <span className={`px-1 ${isMobile?'text-[0.9rem]':'text-[1.2rem]'} text-green-500 font-bold`}>
                    (50% Off)
                </span>
            </p>
            <p className={`${isMobile?'text-[0.8rem]':'text-[1rem]'} opacity-50 px-2 py-2`}>Inclusive of Taxes + Free Shipping</p>
            <div className="flex ">
                <GiPriceTag className={`text-rose-500 mx-1 ${isMobile?'text-[1.1rem]':'text-[1.8rem]'}`}/> 
                <p className={`${isMobile?'text-[0.7rem]':'text-[1rem]'} font-bold`}>
                    Extra 100 OFF on ₹999 (Code: BEYOUNG100)
                </p>
            </div>
        </div>
    )

    const sizeSelection = (
        <div id="sizeChart" className="px-2">
        <h4 className={`${isMobile?'text-[0.9rem]':'text-[1.2rem]'} font-medium px-2`}>SIZE</h4>
        {productSizeSelection ==="" &&
            <p className={`${isMobile?'text-[0.7rem]':'text-[1rem] px-2'} text-red-500 px-2`}>Please select a size</p>
        }
        
        <div className={`py-2 flex items-center gap-2.5 ${isMobile?'justify-center':""}`} >
            {singleProduct?.size.includes('S') &&
                <div onClick={(event)=>handlerSizeSelector(event)} className={`cursor-pointer ${isMobile?'text-[0.75rem]':'text-[1rem]'} rounded-full border-2 w-[50px] pt-[10.5px] h-[50px] text-center ${productSizeSelection === "S" ? 'border-teal-400' : ''}`}>
                    S
                </div>            
            }
            {singleProduct?.size.includes('M') &&
                <div onClick={(event)=>handlerSizeSelector(event)} className={`cursor-pointer ${isMobile?'text-[0.75rem]':'text-[1rem]'} rounded-full border-2 w-[50px] pt-[10.5px] h-[50px] text-center ${productSizeSelection === "M" ? 'border-teal-400':""}`}>
                    M
                </div>
            }
            {singleProduct?.size.includes('L') &&
                <div onClick={(event)=>handlerSizeSelector(event)} className={`cursor-pointer ${isMobile?'text-[0.75rem]':'text-[1rem]'} rounded-full border-2 w-[50px] pt-[10.5px] h-[50px] text-center ${productSizeSelection === "L" ? 'border-teal-400' : ''}`}>
                    L
                </div>
            }
            {singleProduct?.size.includes('XL') &&
                <div onClick={(event)=>handlerSizeSelector(event)} className={`cursor-pointer ${isMobile?'text-[0.75rem]':'text-[1rem]'} rounded-full border-2 w-[50px] pt-[10.5px] h-[50px] text-center ${productSizeSelection === "XL" ? 'border-teal-400' : ''}`}>
                    XL
                </div>
            }
            {singleProduct?.size.includes('XXL') &&
                <div onClick={(event)=>handlerSizeSelector(event)} className={`cursor-pointer ${isMobile?'text-[0.75rem]':'text-[1rem]'} rounded-full border-2 w-[50px] pt-[10.5px] h-[50px] text-center ${productSizeSelection === "XXL" ? 'border-teal-400' : ''}`}>
                    XXL
                </div>
            }
        </div>
        </div>
    )
    


    const quantity = (
        <div className="flex px-2">
            <Label htmlFor="qty">QTY: </Label>
            <select onChange={(e)=>handlerQuantity(e)} className="mx-2 px-1 w-[70px] border-2" name="qty" id="qty">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>                
        </div>
    )
    const delivery = (
        <div className="px-2">
                <h4 className={`${isMobile?'text-[0.9rem]':'text-[1.3rem]'} font-medium`} >DELIVERY OPTIONS</h4>
                
                <div className="flex">
                    {!pinCodeRangeCheck && 
                        <>
                            <input onChange={(e)=>handlerPinCodeType(e)} className="my-2 px-2 border-solid border-2 border-stone-300 w-[70%]" type="number" placeholder="Enter Pincode"/>
                            <Label onClick={()=>handlerPinCodeCheck()} className="cursor-pointer my-2 w-[20%] text-white font-bold text-center bg-teal-400">CHECK</Label>
                        </>
                    }
                    {pinCodeRangeCheck && pinCodeErrorShow && 
                        <div className="flex justify-between w-[80%] my-4 ">
                            <div className="flex gap-2 items-center">
                                <div>
                                    Deliver to : {pinCodeValue} 
                                </div>
                                <div>
                                    <TiTick className="bg-green-400 p-1 text-[1.5rem] rounded-full text-white" />
                                </div>
                            </div>
                            <button className='cursor-pointer' onClick={()=>handlerPinCodeAgainCheck()} className="text-teal-400">
                                Change
                            </button>
                        </div>

                    }
                </div>
                {pinCodeValue.length === 0 && pinCodeErrorShow && 
                    <p className="text-[0.8rem] text-red-500">Please enter valid Pincode</p>
                }
                {pinCodeValue.length !== 0 && !pinCodeRangeCheck && pinCodeErrorShow &&
                    <p className="text-[0.8rem] text-red-400">Shipping not available at {pinCodeValue}</p>
                }
                
            
                
                <div className="px-2">
                    <div className="flex items-center gap-2 py-2">
                        <GiCash className={`bg-teal-100 text-[1.5rem]`} /> 
                        <p className={`${isMobile?'text-[0.8rem]':'text-[1rem]'}`}>
                            Cash On Delivery
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaShippingFast className={`bg-teal-100 text-[1.5rem]`} />
                        <p className={`${isMobile?'text-[0.8rem]':'text-[1rem]'}`}>
                            Express Shipping
                        </p>
                    </div>
                </div>
        </div>
    )

    function removeHtmlTags(input) {
        const regex = /<[^>]+>/g;
        return input.replace(regex, '');
    }
    const productDescription = (
        <div className="px-2">
            <h4 className={`${isMobile?'text-[0.9rem]':'text-[1.3rem]'} font-medium`}>PRODUCT DETAILS</h4>
            <div className={`my-2 ${isMobile?'text-[0.8rem]':'text-[1rem]'}`}>
                {singleProduct && removeHtmlTags(singleProduct.description)}
            </div>
        </div>
    )
    const ratingReview = (
        <div className="p-2 bg-gray-100">
            <h4 className={`my-2 ${isMobile?'text-[0.9rem]':'text-[1.3rem]'} font-medium`}>RATINGS & REVIEW</h4>
            <div className="m-2 p-2 flex flex-col gap-2 md1:flex-row">
                <div className=" flex flex-col gap-2">
                    <div className="flex justify-between">
                        <div className="flex">
                            <AiFillStar className="text-[1.4rem] text-black" />
                            <AiFillStar className="text-[1.4rem] text-black" />
                            <AiFillStar className="text-[1.4rem] text-black" />
                            <AiFillStar className="text-[1.4rem] text-black" />
                            <AiFillStar className="text-[1.4rem] text-gray-300" />
                        </div>
                        <p className={`text-gray-400 text-[0.9rem]`}>User Name</p>
                    </div>
                    <div className="flex">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio libero fugit delectus cumque deleniti distinctio enim ratione temporibus perspiciatis ea. Esse nobis quasi quaerat libero incidunt voluptate consectetur beatae nulla!</p>
                    </div>
                </div>                
            </div>

            <div className="border border-yellow-300"></div>
            
            <div className="m-2 p-2 flex flex-col gap-2 md1:flex-row">
                <div className="">
                    <div className="flex justify-between">
                        <div className="flex">
                            <AiFillStar className="text-[1.4rem] text-black" />
                            <AiFillStar className="text-[1.4rem] text-black" />
                            <AiFillStar className="text-[1.4rem] text-black" />
                            <AiFillStar className="text-[1.4rem] text-black" />
                            <AiFillStar className="text-[1.4rem] text-black" />
                        </div>
                        <p className={`text-gray-400 text-[0.9rem]`}>User Name</p>
                    </div>
                <div className="flex flex-col gap-2 md1:flex-row">
                    <div className="flex">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum illum corporis libero pariatur illo! Corrupti aperiam, a expedita corporis rem molestiae ipsa accusantium temporibus itaque consectetur laudantium. Ea, aliquam voluptate
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum illum corporis libero pariatur illo! Corrupti aperiam, a expedita corporis rem molestiae ipsa accusantium temporibus itaque consectetur laudantium. Ea, aliquam voluptate
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum illum corporis libero pariatur illo! Corrupti aperiam, a expedita corporis rem molestiae ipsa accusantium temporibus itaque consectetur laudantium. Ea, aliquam voluptate
                            
                        </p>
                    </div>
                    <button className="h-fit md1:m-auto w-[50px] text-center bg-teal-300 text-white px-2">Delete</button>
                </div>                
                </div>
            </div>
            
            <div className="border border-yellow-300"></div>

            <div className="m-2 p-2 flex flex-col gap-2 ">
                <div className="flex">
                    <AiFillStar className="text-[1.5rem] text-black" />
                    <AiFillStar className="text-[1.5rem] text-black" />
                    <AiFillStar className="text-[1.5rem] text-black" />
                    <AiFillStar className="text-[1.5rem] text-black" />
                    <AiFillStar className="text-[1.5rem] text-black" />
                </div>
                <div className="flex flex-col w-full gap-2 md1:flex-row">
                    <textarea className="w-[100%]  h-[100px] md1:h-[80px] border-2 border-solid border-gray-300" type="text" placeholder="Add a review" />
                    <button className="h-fit w-[50px] my-2 text-center bg-teal-300 text-white px-2">Add</button>
                </div>
            </div>
        </div>
    )
    const branding = (
        <div className="flex gap-2 justify-center">
                <div className="flex flex-col justify-center items-center border-2 2-fit">
                    <img className={`${isMobile?'w-[80px]' : 'w-[40%]'}`} src={img1a} alt="" />
                    <p className={`text-center px-2 ${isMobile?'text-[0.7rem]':'text-[1rem]'}`}>
                        1.5M+ Happy Customers
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center border-2 2-fit">
                    <img className={`${isMobile?'w-[80px]' : 'w-[40%]'}`} src={img2a} alt="" />
                    <p className={`text-center px-2 ${isMobile?'text-[0.7rem]':'text-[1rem]'}`}>
                        15 Days Easy Returns
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center border-2 2-fit">
                    <img className={`${isMobile?'w-[80px]' : 'w-[40%]'}`} src={img3a} alt="" />
                    <p className={`text-center px-2 ${isMobile?'text-[0.7rem]':'text-[1rem]'}`}>
                        Homegrown Brand
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center border-2 2-fit">
                    <img className={`${isMobile?'w-[80px]' : 'w-[40%]'}`} src={img4a} alt="" />
                    <p className={`text-center px-2 ${isMobile?'text-[0.7rem]':'text-[1rem]'}`}>
                        Packed with Safety
                    </p>
                </div>
            </div>
    )
    const checkout = (
        <>
            <div className="flex">
                {!cartAddTrack && 
                <div 
                        onClick={ 
                            loginCheck ? 
                            ()=>handlerCheckout() : ()=>openDialog()                     
                        } 
                        
                        className={`${!cartAddTrack ?'cursor-pointer':'cursor-not-allowed	'}  flex font-bold justify-center items-center gap-2 ${isMobile?'text-[0.8rem]':'text-[1rem]'} px-2 text-white py-2 rounded m-1 w-full bg-teal-400`}>
                    <MdShoppingCartCheckout /> 
                    <p >
                        {!cartAddTrack ? 'ADD TO CART':'PRODUCT ADDED'} 
                    </p>
                </div>
                }
                {cartAddTrack && 
                    <div className={`${!cartAddTrack ?'cursor-pointer':'cursor-not-allowed	'}  flex font-bold justify-center items-center gap-2 ${isMobile?'text-[0.8rem]':'text-[1rem]'} px-2 text-white py-2 rounded m-1 w-full bg-teal-400`}>
                        <MdShoppingCartCheckout /> 
                        <p >
                            {!cartAddTrack ? 'ADD TO CART':'PRODUCT ADDED'} 
                        </p>
                    </div>
                }
                
                {productSizeSelection  === ""? 
                (
                    <div onClick={
                        loginCheck ? 
                        ()=>handlerCheckoutBuy() : ()=>openDialog() 
                        }  className="cursor-pointer flex font-bold justify-center items-center gap-2 ${isMobile?'text-[0.8rem]':'text-[1rem]'} px-2 py-2 rounded m-1 w-full bg-yellow-300">
                        <GrFormNextLink />
                            <p id="1">
                                BUY NOW
                            </p>                            
                        </div>
                ):(
                     !cartAddTrack ? 
                        (<Link className="w-full" to='/checkout/cart'>
                            <div onClick={()=>handlerCheckout()}  className="cursor-pointer flex font-bold justify-center items-center gap-2 ${isMobile?'text-[0.8rem]':'text-[1rem]'} px-2 py-2 rounded m-1 w-full bg-yellow-300">
                            <GrFormNextLink />
                                <p id="2">
                                    BUY NOW
                                </p>
                            </div>
                        </Link>) :
                        (<Link className="w-full" to='/checkout/cart'>
                            <div className="cursor-pointer flex font-bold justify-center items-center gap-2 ${isMobile?'text-[0.8rem]':'text-[1rem]'} px-2 py-2 rounded m-1 w-full bg-yellow-300">
                            <GrFormNextLink />
                                <p id="3">
                                    BUY NOW
                                </p>
                            </div>
                        </Link>)
                    
                )}
                


            </div>
        </>
    )



    
 //#endregion ----------------------

    const sameProduct = (
    <>
        {similarProduct && similarProduct[0].name ? (
        similarProduct[0].name ? (
            similarProduct.map((item) => (
            <Link
                key={item._id}
                to={`${newLocation}${item._id}`}
                state={{ data: similarProduct }}
            >
                <div className="relative max-w-[200px] flex flex-col justify-center items-center">
                <div>
                    <img
                    className="max-w-[200px] rounded-md"
                    src={item.displayImage}
                    alt=""
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
                    <span className="px-1.5 font-bold text-[0.9rem]">₹{item.price}</span>
                    <span className="px-1 line-through text-[gray] font-bold text-[0.9rem]">
                        ₹{item.price + item.price * (50 / 100)}
                    </span>
                    <span className="px-1 font-bold text-[0.8rem] text-green-500">(50% Off)</span>
                    </p>
                </div>
                <div
                    className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem]"
                    onClick={(event) => handlerFavAdding(event, item._id)}
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
        ) : (
            <p>Loading...</p>
        )
        ) : similarProduct && similarProduct[0]?.products?.name ? (
            similarProduct?.map((item)=> (
                <Link
                    key={item.products._id}
                    to={`/clothing/${item.products.name}/${item.products._id}`}
                    state={{ data: similarProduct ? similarProduct : null }}
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
            ))
        ) : (
        <p>Loading...</p>
        )}

    </>
    )
    const handlerFavAdding = (event, idVal) => {
        event.preventDefault();
        if (loginCheck) {
            const newIdArray = productsFavHeartId.includes(idVal) || productsIdArray.includes(idVal);
            if (newIdArray) {
              productRemovingInFetch(idVal, "DELETE", tokenVal);
            } else {
              productAddingInFetch(idVal, "PATCH", tokenVal);
            }
        } else {
            openDialog();
        }
    };

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
        
        productFirstInFetch("", "GET", token)
        }
    } catch (error) {
        console.log("error", error);
    }
    };

    return (
        <>
        {!singleProduct && <>Loading</>}
        {isMobile && 
            <>
                {singleProduct && 
                    <>
                        {imageContainer}
                        <div>
                            {productPriceDescription}
                            <div className="my-2 border-2"></div>
                            {sizeSelection}
                            <div className="my-2 border-2"></div>
                            {quantity}
                            <div className="my-2 border-2"></div>
                            {delivery}
                            <div className="my-2 border-2"></div>
                            {productDescription}
                            <div className="my-2 border-2"></div>
                            {ratingReview}
                            <div className="my-2 border-2"></div>
                            {branding}
                            <div className="my-2 border-2"></div>        
                        </div>
                        <div className="sticky z-20 bg-white bottom-0">
                            {checkout}
                        </div>
                    </>
                }
            </>
        }
        {!isMobile &&
            <>
                <div className="flex w-[100%] justify-center gap-[20px] ">
                    <div className="w-[40%]">
                        {imageContainer}
                    </div>
                    <div className="w-[40%] bg-yellow--300 relative">
                        {/* {singleProduct._id ? (
                            <AiFillHeart onClick={()=>handlerFavAdding()} className="absolute right-0 text-red-500 text-[2rem] border-2 rounded-full p-1"/>
                        ) : (
                        <AiOutlineHeart onClick={()=>handlerFavAdding()} className="absolute right-0  text-[2rem] border-2 rounded-full p-1"/>
                        )} */}
                        {productPriceDescription}
                        <div className="py-2"></div>
                        {sizeSelection}
                        <div className="py-1"></div>
                        {quantity}
                        <div className="py-1"></div>
                        {checkout}
                        <div className="py-1"></div>
                        {delivery}
                    </div>
                </div>
                <div className="my-4 w-[82%] bg-gray-100 flex justify-center m-auto">
                    {productDescription}
                </div>
                <div className="my-4 w-[82%] m-auto bg-gray-100">
                    {ratingReview}
                </div>
                <div className="w-[82%] m-auto">
                    {branding}
                </div>
                    
            </>
        }
        <div className="w-[82%] m-auto py-4">
            <div>Similar Product</div>
            <div className="flex gap-2 flex-wrap justify-center items-center">
                {sameProduct ? sameProduct : "nothing"}
            </div>
        </div>
        </>
    );
};

export default ProductPage;