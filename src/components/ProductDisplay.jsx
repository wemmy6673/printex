import React from 'react';
import { BsSearch } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import {BsHeart} from "react-icons/bs";
import Items from './Items';
import { ShopContext } from './ShopContext';
import { useState, useContext } from 'react';




const ProductDisplay = () => {



    const contextValue = useContext(ShopContext);
    const addToLikes = contextValue;


    const click = (e) =>{

       const currentColor = e.currentTarget.style.color;
       if(currentColor === 'red'){

        e.currentTarget.style.color = '';

       }
       else{
        e.currentTarget.style.color = 'red';
       }
     
    }

   


    return(

        <div className='flex flex-row space-x-16 py-10 md:py-20 px-20'>
            <div className='flex flex-col space-y-6'>
                <div className='text-blue-950 font-semibold'>
                    Product Category
                </div>

                <div className='flex flex-col text-xs space-y-3'>
                    <p>Category One</p>
                    <p>Category Two</p>
                    <p>Category Three</p>
                    <p>Category Four</p>
                    <p>Category Five</p>
                    <p>Category Six</p>
                    <p>Category Seven</p>

                </div>

                <h1 className='text-blue-950 font-semibold'>COLORS</h1>
                <div className='flex flex-col space-y-1'>
                    <div className='flex flex-row space-x-1'>
                        <input type="radio" className='text-green-400' />
                        <input type="radio" className='bg-green-400' />
                        <input type="radio" className='bg-green-400' />
                        <input type="radio" className='bg-green-400' />
                        <input type="radio" className='bg-green-400' />
                        <input type="radio" className='bg-green-400' />
                        
                        

                    </div>

                    <div className='flex flex-row space-x-1'>
                        <input type="radio" className='text-green-400' />
                        <input type="radio" className='bg-green-400' />
                        <input type="radio" className='bg-green-400' />
                        <input type="radio" className='bg-green-400' />
                        
                        
                        

                    </div>

                </div>

                <h1 className='text-blue-950 font-semibold'>Sizes</h1>

                <div className='flex flex-col space-y-2'>
                    <div className='flex flex-row space-x-2'>
                         <div className='p-2 border border-gray-300 text-gray-500'>XS</div>
                         <div className='p-2 border border-gray-300 text-gray-500'>S</div>
                         <div className='p-2 border border-gray-300 text-gray-500'>M</div>
                         <div className='p-2 border border-gray-300 text-gray-500'>L</div>

                    </div>

                    <div className='flex flex-row space-x-2'>
                         <div className='p-2 border border-gray-300 text-gray-500'>XL</div>
                         <div className='p-2 border border-gray-300 text-gray-500'>XXL</div>
                         

                    </div>

                </div>

                <h1 className='text-blue-950 font-semibold'>Brands</h1>

                <div className='flex flex-col space-y-2 py-2'>

                    <input type="text" placeholder='Keyword' className='border border-blue-950 py-2 pl-8 pr-1 relative' />
                    {/* <BsSearch className='absolute -bottom-40 mb-2 ml-2 text-blue-950'/> */}

                    <div className='flex flex-col space-y-3 py-2'>
                    <div className='flex justify-between max-w-sm'>
                        <h1 className='text-xs text-blue-950'>Brand One</h1>
                        <h1 className='text-xs text-blue-950'>65</h1>
                        
                    </div>
                    <div className='flex justify-between max-w-sm'>
                        <h1 className='text-xs text-blue-950'>Brand Two</h1>
                        <h1 className='text-xs text-blue-950'>65</h1>
                        
                    </div>
                    <div className='flex justify-between max-w-sm'>
                        <h1 className='text-xs text-blue-950'>Brand Three</h1>
                        <h1 className='text-xs text-blue-950'>65</h1>
                        
                    </div>
                    <div className='flex justify-between max-w-sm'>
                        <h1 className='text-xs text-blue-950'>Brand Four</h1>
                        <h1 className='text-xs text-blue-950'>65</h1>
                        
                    </div>
                    <div className='flex justify-between max-w-sm'>
                        <h1 className='text-xs text-blue-950'>Brand Five</h1>
                        <h1 className='text-xs text-blue-950'>65</h1>
                        
                    </div>
                    <div className='flex justify-between max-w-sm'>
                        <h1 className='text-xs text-blue-950'>Brand Six</h1>
                        <h1 className='text-xs text-blue-950'>65</h1>
                        
                    </div>
                    <div className='flex justify-between max-w-sm'>
                        <h1 className='text-xs text-blue-950'>Brand Seven</h1>
                        <h1 className='text-xs text-blue-950'>65</h1>
                        
                    </div>
                    <div className='flex justify-between max-w-sm'>
                        <h1 className='text-xs text-blue-950'>Brand Eight</h1>
                        <h1 className='text-xs text-blue-950'>65</h1>
                        
                    </div>
                    
                    </div>

                    <h1 className='text-blue-950 font-semibold'>Price</h1>
                    <div className='flex justify-between'>
                        <h1 className='text-blue-950'>$0</h1>
                        <h1 className='text-blue-950'>$100</h1>
                    </div>
                    

                </div>


            </div>

            <div className='flex flex-col'>
                <div className='flex flex-row text-blue-950 text-sm justify-between px-20'>
                    <div>HOME/PRODUCTS</div>
                    <div>Sort By</div>

                </div>
                <div className='py-10 md:grid md:grid-cols-3 md:gap-10 px-20'>
                    {Items.map(item =>(
                        <div className='' key={item.id}>
                            <div className='flex flex-col space-y-3'>
                                <img src={item.image} alt={item.title} width='200' height='200' />
                                <p className='text-sm'>{item.title}</p>
                                <div className='flex flex-row justify-center space-x-4 mx-auto'>
                                    <p className='text-yellow-400'>${item.new_price}</p>
                                    <div className='text-gray-100 hover:text-red-500 transition duration-0 hover:duration-300  cursor-pointer' onClick={addToLikes}>
                                        <BsHeartFill />

                                    

                                    </div>

                                </div>
                                <button className='text-blue-950 border py-2 font-semibold hover:bg-blue-950 hover:text-white transition duration-0 hover:duration-300 border-blue-950'>ADD TO CART</button>

                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </div>

    )
}

export default ProductDisplay;