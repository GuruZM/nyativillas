import React,{useEffect} from 'react'
import {gsap} from 'gsap'
import img1 from '../assets/images/about2.jpg'

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
    <div className=' min-h-screen  w-4/5 m-auto flex   justify-between  py-16'>
        <div className='flex flex-col justify-center   '>
           <h2 className='comfort text-2xl font-bold '>OutDoor Comfort</h2>
           <p>Lorem ipsum dolor sit.</p>
        </div>
        <div>
        <img src={img1}   className='image1 w-full bg-fixed' alt="" />
        </div>
      
        </div>
  )
}

export default AboutUs