import React from "react";
import { useScreenSize } from "../CommonFunctions/CommonFunctions";
import { HiLocationMarker } from "react-icons/hi";
import { useDataContext } from "../Fetching/DataContext";
import { useEffect, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";

import { AiFillCloseCircle } from 'react-icons/ai'

import { IoIosArrowForward } from 'react-icons/io'
import { Link } from "react-router-dom";

const NavbarLayer1 = ({ handlerSigningToggle }) => {
  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;

  const { openDialog, refreshNavbar } = useDataContext();

  const [loginCheck, setLoginCheck] = useState(false);
  let dataFromLocal = JSON.parse(localStorage.getItem("userDetails")) || [];
  const [tokenVal, setTokenVal] = useState();

  const [popupOpen, setPopupOpen] = useState(false);

  const handlerLocalStoreClean = () => {
    localStorage.removeItem('userDetails');
    refreshNavbar();
  }


  useEffect(() => {    
    if (dataFromLocal.username) {
      setLoginCheck(true);
      setTokenVal(dataFromLocal?.token);
    } else {
      setLoginCheck(false);    }

      
    }, [location.pathname, refreshNavbar]);
    

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="flex justify-center bg-yellow-300 p-[5px]">
          {isMobile && (
            <section className="text-[0.8rem] text-center	font-extrabold">
              Free Shopping on All Orders | Shop now
            </section>
          )}
          {!isMobile && (
            <section className="text-sm text-center	font-extrabold">
              Free Shopping on All Orders | Get Extra ₹100 OFF on Spent of ₹999
              Use Code: BEYOUNG100
            </section>
          )}
        </div>
        
        <div className="relative flex justify-around items-center bg-black text-white">
          <div onClick={()=>setPopupOpen(true)} className=" cursor-pointer flex gap-2 items-center sm4:text-[1rem]">
              <HiLocationMarker className="text-base" />
              Track order
          </div>
              {popupOpen && 
                <div className="absolute flex justify-center items-center bg-yellow-400 w-[250px] h-[80px] top-[35px] left-[15%] z-50">
                  <AiFillCloseCircle onClick={()=>setPopupOpen(false)} className="absolute right-1 top-1 text-[1.5rem]" />
                  Feature will be add in Future
                </div>
              }
          <div  className="flex text-[0.85rem] gap-2 py-2.5 sm4:flex sm4:justify-around ">
            {!loginCheck ? 
                (<div className="cursor-pointer"  onClick={()=>{openDialog(), handlerSigningToggle(false)}}>
                  LOGIN
                </div>) : 
                (
                <Link to="/myaccount/profile">
                  <div className="cursor-pointer" >
                    MY ACCOUNT
                  </div>
                </Link>
              )
            }
            <div>
              |
            </div>
            {!loginCheck ? 
              (<div className="cursor-pointer" onClick={()=>{openDialog(), handlerSigningToggle(true)}} >
                SIGNUP
              </div>) :
              (
                <div className="cursor-pointer" onClick={()=>handlerLocalStoreClean()}>
                  LOGOUT
                </div>

              )
            }
          </div>
        </div>
      </div>

      
    </>
  );
};

export default NavbarLayer1;
