import { useEffect, useState } from "react";
import { useDataContext } from "../Fetching/DataContext";

import { AiOutlineClose } from 'react-icons/ai'
 
import img from "../../assets/user-page.jpg"
import './UserAuthentication.css'
import { useNavigate } from "react-router-dom";

const UserAuthentication = ( {singing} ) => {
    const { isDialogOpen, openDialog, closeDialog, refreshNavbar, refresher  } = useDataContext();
    
    const handleFormClick = (e) => {
        e.stopPropagation();
    };

    
    const [signingToggle, setSigningToggle] = useState(true);

    const navigate = useNavigate();
    
    const [userName, setUserName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    
    const [userNameError, setUserNameError] = useState(true);
    const [userEmailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);

    const [loginStatusError, setLoginStatusError] = useState(true);

    useEffect(()=> {
        setSigningToggle(singing);
    }, [openDialog])


    const handlerToggleSigning = () => {
        setSigningToggle(!signingToggle);
        
        setEmail("");
        setUserName("");
        setPassword("");
        setUserNameError(true);
        setEmailError(true);
        setPasswordError(true);
    }
    

    let allStatus = signingToggle && !userNameError && !userEmailError && !passwordError ||
    !signingToggle && !userEmailError && !passwordError


    const nameRegex = /^[a-zA-Z\-]+$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const handlerUserName = (e) => {
        if (e.target.value.match(nameRegex)) {
            setUserName(e.target.value);
            setUserNameError(false)
        } else {
            setUserName(e.target.value);
            setUserNameError(true)
        }
    }
    const handlerEmail = (e) => {
        if (e.target.value.match(emailRegex)) {
            setEmail(e.target.value);
            setEmailError(false);
        } else {
            setEmail(e.target.value);
            setEmailError(true);
        }
    }
    const handlerPassword = (e) => {
        if (e.target.value.length > 7) {
            setPassword(e.target.value);
            setPasswordError(false);
        } else {
            setPassword(e.target.value);
            setPasswordError(true);
        }
    }

    const signUp = 'api/v1/user/signup';
    const login = 'api/v1/user/login'
    const updatePassword = 'api/v1/user/updateMyPassword';

    const [loginStatus, setLoginStatus] = useState(false);

    const localStorageUserDetails = () => {
        const dataFromLocal = JSON.parse(localStorage.getItem('userDetails')) || [];
        if (dataFromLocal.username) {
            setLoginStatus(true);
            
        } else {
            setLoginStatus(false);
        }
    }

    useEffect(()=> {
        localStorageUserDetails();
        
    }, [refresher])
    
    
    useEffect(()=> {
        
        setEmail("");
        setUserName("");
        setPassword("");
        setUserNameError(true);
        setEmailError(true);
        setPasswordError(true);
    }, [loginStatus])

    const signingFetch = async(url, username, useremail, userpassword) => {
        let myHeaders = new Headers();
        myHeaders.append("projectID", "vflsmb93q9oc");
        myHeaders.append("Content-Type", "application/json");
        
        let raw = JSON.stringify({
          "name": `${username}`,
          "email": `${useremail}`,
          "password": `${userpassword}`,
          "appType": "ecommerce"
        });
        
        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        const response = await fetch(`https://academics.newtonschool.co/${url}`, requestOptions)
        const result = await response.json();
        
        if (result.status === 'success') {
            if (url === "api/v1/user/signup") {
                const userDetailsFromFetch  = {
                    username: result?.data.user.name,
                    emailId: result?.data.user.email,
                    id: result?.data.user._id,
                    token: result?.token,
                }
                setLoginStatus(true);
                navigate('/myaccount/profile');
                closeDialog();
                localStorage.setItem('userDetails', JSON.stringify(userDetailsFromFetch));
            } else if (url === 'api/v1/user/login') {
                const userDetailsFromFetch  = {
                    username: result?.data.name,
                    emailId: result?.data.email,
                    id: result?.data._id,
                    token: result?.token,
                }
                setLoginStatus(true);
                localStorage.setItem('userDetails', JSON.stringify(userDetailsFromFetch));
                navigate('/myaccount/profile');
                closeDialog();
            } else if (url === "api/v1/user/updateMyPassword") {
                const userDetailsFromFetch  = {
                    username: result?.data.name,
                    emailId: result?.data.email,
                    id: result?.data._id,
                    token: result?.token,
                }
                setLoginStatus(true);
                localStorage.setItem('userDetails', JSON.stringify(userDetailsFromFetch));
            }
        } else {
            setLoginStatusError(result.message);
        }
    }


    const handlerSigning = () => {
        if (signingToggle) {
            signingFetch(signUp, userName, userEmail, password);
        } else {
            signingFetch(login, userName, userEmail, password);
        }
        refreshNavbar();
    }


    const handlerLogout = () => {
        setLoginStatus(false);
        localStorage.removeItem('userDetails');
        localStorage.removeItem('orderedProducts');
    }



    return (
        <>
            {isDialogOpen && (
                <div onClick={closeDialog} className=" modal-container">
                    <div onClick={handleFormClick} className="relative m-auto w-[500px]  h-[550px] bg-white">
                        <div className="relative">
                            <img src={img} alt="" />                            
                            <div className="absolute top-[30%] px-1 py-2 font-bold right-[1%] text-[1.1rem] w-[160px]">
                                Get Free Shipping on All Orders
                            </div>
                        </div>
                        <div className="pt-2">
                            {!loginStatus &&
                                <div className="flex justify-center items-center gap-1 flex-col">
                                    {(signingToggle) && 
                                        <>
                                            <input value={userName} onChange={(e)=>handlerUserName(e)} type="text" placeholder="User Name" className="outline outline-[1px] w-[50%] outline-gray-300 px-2 py-1" />
                                            {userNameError && 
                                            <p className="text-[0.7rem] text-red-500">Please Enter Valid Name</p>}
                                        </>
                                    }
                                    <input value={userEmail} onChange={(e)=>handlerEmail(e)} type="email" placeholder="Email" className="outline outline-[1px] w-[50%] outline-gray-300 px-2 py-1" />
                                    {userEmailError && 
                                        <p className="text-[0.7rem] text-red-500">Please Enter Valid Mail</p>
                                    }
                                    <input value={password} onChange={(e)=>handlerPassword(e)} type="password" placeholder="Password" className="outline outline-[1px] w-[50%] outline-gray-300 px-2 py-1" />                                
                                    {passwordError &&
                                        <p className="text-[0.7rem] text-red-500">Password should minimum 8 characters</p>
                                    }
                                    <div className="flex flex-col justify-center items-center gap-2 py-2">
                                        <button onClick={allStatus ? ()=>handlerSigning() : null} className={`${allStatus?'bg-violet-300' : 'bg-gray-300'} ${allStatus ? 'hover:bg-violet-500':''} text-white font-bold px-3 py-1 rounded `}>
                                            {signingToggle ? 'Sign up' : 'Log In'} 
                                        </button>
                                        <div

                                            onClick={()=>handlerToggleSigning()}
                                            className="text-[0.9rem] text-gray-400 hover:text-black cursor-pointer">
                                            {signingToggle ? 'Already have an account' : 'Create a Account'}                                         
                                        </div>
                                        <div className="text-[0.75rem] text-red-500">
                                            {loginStatusError}
                                        </div>
                                    </div>
                                </div>
                            }
                            
                        </div>
                        <div onClick={closeDialog} className="absolute top-2 right-2">
                            <AiOutlineClose className="text-[1.5rem] bg-yellow-300 rounded-full p-1"/>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserAuthentication;


{/* {loginStatus && 
                                
    // <div className="flex justify-center items-center gap-1 flex-col">
    //     <input value={userEmail} onChange={(e)=>handlerEmail(e)} type="email" placeholder="Current Password" className="outline outline-[1px] w-[50%] outline-gray-300 px-2 py-1" />
    //     {userEmailError && 
    //         <p className="text-[0.7rem] text-red-500">Please Enter Correct Password</p>
    //     }
    //     <input value={password} onChange={(e)=>handlerPassword(e)} type="password" placeholder="New Password" className="outline outline-[1px] w-[50%] outline-gray-300 px-2 py-1" />                                
    //     {passwordError &&
    //         <p className="text-[0.7rem] text-red-500">Password should minimum 8 characters</p>
    //     }
    //     <div className="flex flex-col justify-center items-center gap-2 py-2">
    //         <button onClick={()=>handlerUpdatePassword()} className={`bg-violet-300 hover:bg-violet-500 text-white font-bold px-3 py-1 rounded text-center w-[140px] `}>
    //             Update Password 
    //         </button>
    //         <button onClick={()=>handlerLogout()} className={`bg-violet-300 hover:bg-violet-500 text-white font-bold px-3 py-1 rounded text-center w-[140px] `}>
    //             Log Out 
    //         </button>
            
    //     </div>
    // </div>
} */}