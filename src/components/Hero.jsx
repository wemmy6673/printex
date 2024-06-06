import React from 'react';
import Cop from '../images/Cop.png';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import ProductDisplay from './ProductDisplay';


const Hero = () =>{

    

    return(
        <>
        <div className='flex flex-col md:flex-row bg-blue-100 mx-6 md:mx-6 my-12'>
            <div className='flex flex-col p-10 md:p-20'>

                <h1 className='text-blue-950 text-4xl font-bold md:w-1/2'>Defence Medal For Distinguished Services</h1>

                <p className='text-gray-400 md:w-1/2 my-6'>
                    For more than 36 years, we have been one of the leading suppliers of embroidered and woven brands.
                </p>
              
                <button className='text-white bg-blue-950 md:w-1/4 py-4 cursor-pointer'><Link to='./ProductDisplay'>See Products</Link></button>
                
              

            </div>

            <div className='md:my-16 md:mr-20'>
                <img src={Cop} alt="" />

            </div>

        </div>

        </>
    )
}


export default Hero;