import React,{useEffect} from 'react'
import {gsap} from 'gsap'
import img1 from '../assets/images/pool.jpg'
import {AiFillHeart} from "@react-icons/all-files/ai/AiFillHeart"
import {FiHeart} from "@react-icons/all-files/fi/FiHeart"

function AboutUs() {
  
 let t1 = gsap.timeline();
  useEffect(()=>{

    t1.from('.image1',2,{
       
        
        ease:'power3.inOut'
    }).to(
        '.image1',2,{
            scale:.8,
            ease:'power.inOut'
        },.2
    )


  },[t1])
    return (
    
    <div className=' min-h-screen relative px-20 m-auto flex   justify-between  pt-16'>
        <div className='flex flex-col justify-center   '>
           <h2 className='comfort text-2xl font-bold text-transparent '>OutDoor Comfort</h2>
           
        </div>
        <div className='absolute   p-5 z-50   '>
          <h2 className='comfort text-7xl font-bold  '>Com<span className='text-[#FFAE00]'>f</span>ort</h2>
          <p className='md:pl-20 py-10 text-sm max-w-sm   font-md border-yellow-600'>An overhanging deck with an infinity pool looking on to the river</p> 
       <div className='flex '>
       <AiFillHeart color="#FFAE00" className=" "/>
       <AiFillHeart color="#FFAE00" className="mx-2"/>
       <FiHeart color="#FFAE00" className= " "/>
       
       </div>
        </div>
        <hr />
        <div>
        <img src={img1}   className='image1   shadow-lg' alt="" />
        </div>
      
        </div>
  )
}

export default AboutUs