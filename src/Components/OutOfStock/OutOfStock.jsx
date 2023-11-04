
import { useEffect } from 'react'
import image from '../../assets/outofstock.jpg'

import './OutOfStock.css'

const ComingSoonPage = () => {
    useEffect(()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [])
    return (
        <>
        <div className='relative image-container'>
            <div className='flex justify-center items-center'>
                <img src={image} className='w-[70%]' alt="" />                
            </div>
            <div className='letter-anime absolute text-[1rem] lg:text-[1.7rem] z-2 left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]
                font-bold 
            '>
                OUT OF STOCK
            </div>
        </div>
        </>
    )
}

export default ComingSoonPage;