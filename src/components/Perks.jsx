import React from 'react';
import Cart from '../images/Cart.png';
import Guarantee from '../images/Guarantee.png';
import Discount from '../images/Discount.png';
import Delivery from '../images/Delivery.png';

const Perks = () =>{

    return(

        <div className='flex flex-col md:flex-row mx-20 md:justify-center md:mx-16 md:space-x-10 py-10'>
            <div className='py-6 md:py-6 md:px-20 shadow-md items-center'>
                <img src={Delivery} alt="" className='mx-auto' />
                <p className='text-blue-950 text-sm font-bold text-center'>Free Delivery</p>
            </div>

            <div className='py-6 md:py-6 md:px-20 shadow-md items-center'>
                <img src={Guarantee} alt="" className='mx-auto'/>
                <p className='text-blue-950 text-sm font-bold text-center'>Guarantee</p>
            </div>
            

            <div className='py-6 md:py-6 md:px-20 shadow-md items-center'>
                <img src={Discount} alt="" className='mx-auto'/>
                <p className='text-blue-950 text-sm font-bold text-center'>Discount</p>
            </div>
            
            <div className='py-6 md:py-6 md:px-20 shadow-md items-center'>
                <img src={Cart} alt="" className='mx-auto'/>
                <p className='text-blue-950 text-sm font-bold text-center'>High Quality</p>
            </div>
            


        </div>
        
    )
}

export default Perks;