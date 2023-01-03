import React, { useRef, useEffect } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import videobg from "../assets/videos/bg2.mp4";
import { gsap } from "gsap";
import { FiFacebook } from "@react-icons/all-files/fi/FiFacebook";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { RiTwitterLine } from "@react-icons/all-files/ri/RiTwitterLine";

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
            <div className="hero h-min-screen">
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
                <div className="absolute top-72  w-full flex    items-center">
                    <Head title="Welcome" />
                    <div className="relative flex items-top justify-center   sm:items-center sm:pt-0">
                        <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                            {props.auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="text-sm text-gray-700 dark:text-gray-500 underline"
                                >
                                    Dashboard
                                </Link>
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
                            )}
                        </div>

                        <div className="max-w-6xl flex absolute  left-32 mx-auto sm:px-6 lg:px-8">
                            <div className=" justify-center  sm:justify-start sm:pt-0">
                                <h2 className="md:text-8xl text-6xl text-white heading ">
                                    Nyati
                                    <span className="text-[#FFAE00]">
                                        Villas
                                    </span>
                                </h2>
                                <div className="flex md:justify-center py-6 space-x-10">
                                    {/* <img src={facebook} width={20} className='text-white py-10' style={{ color:'white' }}  alt="" /> */}
                                    <FiFacebook
                                        color="white"
                                        className="icon1"
                                        size={30}
                                    />
                                    <FiInstagram color="#FFAE00" 
                                    className="icon2"
                                    size={30} />
                                    <RiTwitterLine color="white"
                                    className="icon3"
                                    size={30} />
                                </div>

                                {/* <p className="text-white tracking-lg font-[Nunito] font-light  md:text-lg py-2 text-sm flex justify-center text-center">
                                    We invite you to come and discover the magic
                                    of Nyativillas for yourself. We look forward
                                    to welcoming you soon!
                                </p> */}

                                <nav className="flex  space-x-10    bg-[#FFAE00] shadow-md   bg-opacity-25  items-center pl-10 rounded-full my-5 justify-between   ">
                                    <div className="flex flex-col border-r-2 border-opacity-25 border-[#FFAE00]    pr-16">
                                        <span className="text-white">Icon</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-white">Icon</span>
                                    </div>
                                    <Link className=" text-center p-3 border-l-2 border-opacity-25 border-[#FFAE00] flex-initial w-48 bg-  rounded-r-full ">
                                        <div className="text-white text-center  ">
                                            Book Now
                                        </div>
                                    </Link>
                                </nav>
                            </div>

                            {/* <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6">
                        <div className="flex items-center">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-gray-500"
                            >
                                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>

                            <div className="ml-4 text-lg leading-7 font-semibold">
                                <a
                                    href="https://laravel.com/docs"
                                    className="underline text-gray-900 dark:text-white"
                                >
                                    Documentation
                                </a>
                            </div>
                        </div>

                        <div className="ml-12">
                            <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                Laravel has wonderful, thorough documentation covering every aspect of the
                                framework. Whether you are new to the framework or have previous experience with
                                Laravel, we recommend reading all of the documentation from beginning to end.
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                        <div className="flex items-center">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-gray-500"
                            >
                                <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>

                            <div className="ml-4 text-lg leading-7 font-semibold">
                                <a
                                    href="https://laracasts.com"
                                    className="underline text-gray-900 dark:text-white"
                                >
                                    Laracasts
                                </a>
                            </div>
                        </div>

                        <div className="ml-12">
                            <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript
                                development. Check them out, see for yourself, and massively level up your
                                development skills in the process.
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-gray-500"
                            >
                                <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                            </svg>

                            <div className="ml-4 text-lg leading-7 font-semibold">
                                <a
                                    href="https://laravel-news.com/"
                                    className="underline text-gray-900 dark:text-white"
                                >
                                    Laravel News
                                </a>
                            </div>
                        </div>

                        <div className="ml-12">
                            <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                Laravel News is a community driven portal and newsletter aggregating all of the
                                latest and most important news in the Laravel ecosystem, including new package
                                releases and tutorials.
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
                        <div className="flex items-center">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-gray-500"
                            >
                                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>

                            <div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                                Vibrant Ecosystem
                            </div>
                        </div>

                        <div className="ml-12">
                            <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                Laravel's robust library of first-party tools and libraries, such as{' '}
                                <a href="https://forge.laravel.com" className="underline">
                                    Forge
                                </a>
                                ,{' '}
                                <a href="https://vapor.laravel.com" className="underline">
                                    Vapor
                                </a>
                                ,{' '}
                                <a href="https://nova.laravel.com" className="underline">
                                    Nova
                                </a>
                                , and{' '}
                                <a href="https://envoyer.io" className="underline">
                                    Envoyer
                                </a>{' '}
                                help you take your projects to the next level. Pair them with powerful open
                                source libraries like{' '}
                                <a href="https://laravel.com/docs/billing" className="underline">
                                    Cashier
                                </a>
                                ,{' '}
                                <a href="https://laravel.com/docs/dusk" className="underline">
                                    Dusk
                                </a>
                                ,{' '}
                                <a href="https://laravel.com/docs/broadcasting" className="underline">
                                    Echo
                                </a>
                                ,{' '}
                                <a href="https://laravel.com/docs/horizon" className="underline">
                                    Horizon
                                </a>
                                ,{' '}
                                <a href="https://laravel.com/docs/sanctum" className="underline">
                                    Sanctum
                                </a>
                                ,{' '}
                                <a href="https://laravel.com/docs/telescope" className="underline">
                                    Telescope
                                </a>
                                , and more.
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
