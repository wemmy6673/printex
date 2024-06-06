import React from 'react';
import { BsSearch } from "react-icons/bs";

const ProductDisplay = () => {


    return(

        <div className='flex flex-row py-10 px-20'>
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
                    <BsSearch className='absolute -bottom-40 mb-1 ml-2 text-blue-950'/>

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

        </div>

    )
}

export default ProductDisplay;