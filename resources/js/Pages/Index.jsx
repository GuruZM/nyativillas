import {useState,useEffect} from 'react'
import { Link, Head } from '@inertiajs/inertia-react';
import Hero from './Hero';
import Loader from './Loader';
import AboutUs from './AboutUs';



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
        </>) :  (<Loader/>)
       }
       </>
    );
}
