import React from 'react';
import Cap from '../images/Cap.png';
import Uniform from '../images/Uniform.png';
import Medal from '../images/Medal.png';
import Badge from '../images/Badge.png';


const Items = [
    {
        id: 1,
        image: Uniform,
        title: "Medal",
        directive: "Shop Now",

    },
    {
        id: 2,
        image: Uniform,
        title: "Medal",
        directive: "Shop Now",

    },
    {
        id: 3,
        image: Uniform,
        title: "Medal",
        directive: "Shop Now",

    },
    {
        id: 4,
        image: Uniform,
        title: "Medal",
        directive: "Shop Now",

    },
    {
        id: 5,
        image: Uniform,
        title: "Medal",
        directive: "Shop Now",

    },
    {
        id: 6,
        image: Uniform,
        title: "Medal",
        directive: "Shop Now",

    },
    {
        id: 7,
        image: Uniform,
        title: "Medal",
        directive: "Shop Now",

    },
    {
        id: 8,
        image: Uniform,
        title: "Medal",
        directive: "Shop Now",

    },
    {
        id: 9,
        image: Uniform,
        title: "Medal",
        directive: "Shop Now",

    },
    {  
        id: 10,
        image: Uniform,
        title: "Medal",
        directive: "Shop Now",

    },
    {
        id: 11,
        image: Uniform,
        title: "Medal",
        directive: "Shop Now",

    },
    {
        id: 12,
        image: Uniform,
        title: "Medal",
        directive: "Shop Now",

    }
];

const ShopCategory = () => {
    return(

        <div className='flex flex-col bg-blue-100 space-y-10 mt-20 items-center py-16 px-10'>
            <p className=' text-blue-950 text-3xl text-center'>

                Shop By Category

            </p>
        <div className='md:grid md:grid-cols-6 md:gap-10 mt-10'>
            
            {Items.map((Shop) => (
              <div key={Shop.id} >
                <img src={Shop.image} alt={Shop.title} className='bg-white'/>

                <p className='text-center'>{Shop.title}</p>

                <p className='text-center text-sm'>{Shop.directive}</p>

                </div>
            )
            )}
            </div>
            </div>
            
        
    )

};

export default ShopCategory;