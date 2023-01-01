import {useState,useEffect} from 'react'
import { Link, Head } from '@inertiajs/inertia-react';
import Hero from './Hero';
import Loader from './Loader';



export default function Welcome(props) {

    const [loader,setLoader] =  useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setLoader(true)
        }, 20000);
    })

    return (
        <>
       {
        loader ?  (<Hero props={props}/>) :  (<Loader/>)
       }
       </>
    );
}
