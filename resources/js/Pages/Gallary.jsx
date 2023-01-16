import React,{ useRef, useState }  from 'react'
import { FiFacebook } from "@react-icons/all-files/fi/FiFacebook";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { RiTwitterLine } from "@react-icons/all-files/ri/RiTwitterLine";

 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Gallary() {
  return (
    <div className=' max-h-min '>
       <div className='  px-28 flex flex-col justify-end'>
        <p className='text-right text-sm max-w-md pb-5'>Comfortable lounge seating for entire family around a fire to view either the sunrise or sunset. Well staffed with cleaning services. Boats for fishing and cruising also available. </p>
        <div className="flex socials relative    space-x-5">
                                    {/* <img src={facebook} width={20} className='text-white py-10' style={{ color:'white' }}  alt="" /> */}
                                   <div className='p-3 shadow-md rounded-md '>
                                   <FiFacebook
                                        color="black"
                                        className="icon1  "
                                        size={20}
                                    />
                                   </div>
                                    
                                   <div className='p-3 shadow-md rounded-md  '>
                                    <FiInstagram color="#FFAE00" 
                                    className="icon2"
                                    size={20} />
                                    </div>
                                    <div className='p-3 shadow-md rounded-md  '>
                                    <RiTwitterLine color="black"
                                    className="icon3"
                                    size={20} />
                                    </div>
                                </div>
                                <h2 className='text-7xl py-2 font-bold text-right'>
                                  Rev<span className='text-[#FFAE00]'>i</span>ews
                                </h2>
       </div>
       
    </div>
  )
}
