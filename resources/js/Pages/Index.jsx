import {useState,useEffect} from 'react'
import { Link, Head } from '@inertiajs/inertia-react';
import Hero from './Hero';
import Loader from './Loader';
import AboutUs from './AboutUs';
import Gallary from './Gallary';
import Reviews from './Reviews';
import Footer from './Footer';




export default function Welcome(props) {

    const [loader,setLoader] =  useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setLoader(true)
        }, 2000);
    })

    return (
        <>
       {
        loader ?  (<>
        <Hero props={props}/>
   
        <AboutUs/>
        <Gallary/>
        <Reviews/>
        <Footer/>
        </>) :  (<Loader/>)
       }
       </>
    );
}
