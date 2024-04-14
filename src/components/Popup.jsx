import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { BsPerson } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";


function Popup(){

    const [link, setLink] = useState("Home");

    return(
        <div className='absolute md:hidden z-20 bg-white w-[80%] items-center ml-[5%] mr-[10%]  mt-72 p-8 transition-all ease-in delay-1000'>
            <ul className='flex flex-col space-y-5'>
                    <li className='pointer'onClick={()=>{setLink("Home")}}><Link to='./'>Home</Link>{link === "Home"}</li>

                    <li className='pointer' onClick={()=>{setLink("About")}}><Link to='./About'>About</Link>{link === "About"}</li>
                
                    <li className='pointer' onClick={()=>{setLink("Contacts")}}><Link to='./Contacts'>Contacts</Link>{link === "Contacts"}</li>
                </ul>

            <div className='md:hidden flex flex-col space-y-5'>
                <BsPerson />
                <BsHeart />
                <BsTrash />

            </div>

            </div>

    )
}

export default Popup;