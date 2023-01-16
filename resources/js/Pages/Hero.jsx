import React, { useRef, useEffect } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import videobg from "../assets/videos/bg2.mp4";
import Nav1 from './Nav1';
import { gsap } from "gsap";
import { FiFacebook } from "@react-icons/all-files/fi/FiFacebook";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { RiTwitterLine } from "@react-icons/all-files/ri/RiTwitterLine";
import {AiFillHeart} from "@react-icons/all-files/ai/AiFillHeart"
import {GiVillage} from "@react-icons/all-files/gi/GiVillage"

export default function Hero({ props }) {
    let app = useRef(null);
    let heading = useRef(null);
    let icons = useRef(null);
    let tl = gsap.timeline();

    useEffect(() => {
       
    
        tl.from(".heading", 1.2, { y:-30, opacity:0,duration:10,ease: "power3.inOut" }).from(
            ".icon1",1.2,{
                y:-2,
                duration:10,
                ease:"power3.inOut",
                
                opacity:0,
            }
        ).from(
            ".icon2",1.2,{
                y:-2,
                duration:10,
                ease:"power3.inOut",
                opacity:0,
            } 
        ).from(
            ".icon3",1.2,{
                y:-2,
                duration:10,
                ease:"power3.inOut",
                opacity:0,
            } 
        )  
    }, [tl]);

    return (
        <>
            <div className="hero relative h-min-screen">
                <div className="overlay"></div>
                <video
                    src={videobg}
                    autoPlay
                    loop
                    muted
                    style={{
                        width: "100%",
                        objectFit: "cover",
                        height: "100vh",
                    }}
                />
                <div className="absolute top-72  w-full flex   items-center">
                    <Head title="Welcome" />
                    <div className="relative flex items-top justify-center   sm:items-center sm:pt-0">
                        <div className="fixed top-0 right-0    py-4 sm:block">
                            {/* {props.auth.user ? (
                                <Link
                                    href={route("dashboard")}
                777777777777777777xcxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxsaaaaaaaaaaasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="text-sm text-gray-700 dark:text-gray-500 underline"
                                    >
                                        Log in
                                    </Link>

                                    <Link
                                        href={route("register")}
                                        className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                                    >
                                        Register
                                    </Link>
                                </>
                            )} */}
                        </div>

                        <div className="max-w-6xl flex absolute  left-32 mx-auto sm:px-6 lg:px-8">
                            <div className=" justify-center  sm:justify-start sm:pt-0">
                                <h2 className="md:text-8xl text-6xl text-white heading ">
                                    Nyati
                                    <span className="text-[#FFAE00]">
                                        Villas
                                    </span>
                                </h2>
                                <p className="text-white pt-6 text-sm md:text-center">
                                "A safe location with modern comfortable accommodation on self catering basis. Everything is available for you to relax and have a great holiday"
                                </p>
                               

                                {/* <p className="text-white tracking-lg font-[Nunito] font-light  md:text-lg py-2 text-sm flex justify-center text-center">
                                    We invite you to come and discover the magic
                                    of Nyativillas for yourself. We look forward
                                    to welcoming you soon!
                                </p> */}

                                <nav className="flex  space-x-10    bg-[#FFAE00] shadow-md   bg-opacity-25  items-center pl-10 rounded-full my-5 justify-between   ">
                                    <div className="flex flex-col border-r-2 border-opacity-25 border-[#FFAE00]    pr-6">
                                        <span className="text-white flex space-x-7 items-center">
                                            Reviews <AiFillHeart color="#FFAE00" className="mx-2"/>
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-white flex space-x-7 items-center">Gallary
                                        <GiVillage color="#FFAE00" className="mx-2" />
                                        </span>
                                    </div>
                                    <Link className=" text-center p-3 border-l-2 border-opacity-25 border-[#FFAE00] flex-initial w-48 bg-  rounded-r-full ">
                                        <div className="text-white text-center  ">
                                            Book Now
                                        </div>
                                    </Link>
                                </nav>
                            </div>

                           
                        </div>
                    </div>
                </div>
                <div className=" absolute bottom-0 h-28 opacity-75 blur-xl w-full bg-black  bg-opacity-25 space-x-10 flex items-center justify-center">
                                <div className="flex text-transparent flex-col text-white items-center border-opacity-50 border-r-2 border-[#FFAE00]   pr-10" >
                                    <span >
                                        Available Villas
                                    </span>
                                    <span>4</span>
                                </div>
                                <div className="flex flex-col text-white items-center border-opacity-50   border-[#FFAE00]   pr-10" >
                                    <span >
                                        Available Villas
                                    </span>
                                    <span>4</span>
                                </div>
                            </div>
            </div>
        </>
    );
}
