import React from 'react';
import { BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import Popup from '../components/Popup';
import { useState } from "react";
import { Fade } from 'react-awesome-reveal';


const Navbar = () =>{

    const [dropDownOpen, setDropDownOpen]  = useState(false);
    const [link, setLink] = useState("Home");
    const [badgeIcon, setBadgeIcon] = useState('icon');

    const toggleDropDown = () =>{

        setDropDownOpen(!dropDownOpen)

        setBadgeIcon(badgeIcon === 'icon' ? 'secondicon' : 'icon')
    }

    const inputStyle = {
        fontSize: '12px',
    }

    return(
        <>
        <div className='flex flex-row justify-between p-6 items-center'>
            <h1 className='text-2xl text-blue-950 font-bold'>Printex</h1>
            <div className='flex flex-row w-3/6 self-center'>
                <input type='text' placeholder='Search all' style={inputStyle} className='bg-gray-100 rounded-lg px-3 py-2 w-[100%] relative'></input>
                <div className='absolute right-24 top-8 md:right-96 md:top-20'>
                  <BsSearch />

                </div>

            </div>

            {/* <div className='md:hidden text-2xl text-blue-950'>
                <BsList onClick={toggleDropDown} />

            </div> */}

            <div onClick={toggleDropDown}>
                {badgeIcon === 'icon' ? (
                    <div className='md:hidden text-2xl text-blue-950 transition duration-600'>
                        <BsList />

                    </div>

                ): (
                    <div className='md:hidden text-2xl text-blue-950 transition duration-600'>
                        <BsXLg />

                    </div>
                )

                }

            </div>
            
    
           
           {dropDownOpen && ( 

            
            <Popup />
            



            )}
            
            

            <div className='hidden md:flex md:flex-row space-x-5'>
                <BsPerson />
                <BsHeart />
                <BsTrash />

            </div>

        </div>

        <div className='px-32 hidden md:block'>
            <ul className='text-blue-950 text-sm font-bold flex flex-row justify-between'>
                <li className='flex'>All products <span className='self-center px-1'><BsChevronDown /></span></li>
                <li className='flex'>Medal <span className='self-center px-1'><BsChevronDown /></span></li>
                <li className='flex'>Shield <span className='self-center px-1'><BsChevronDown /></span></li>
                <li className='flex'>Badges <span className='self-center px-1'><BsChevronDown /></span></li>
                <li className='flex'>Coins <span className='self-center px-1'><BsChevronDown /></span></li>
                <li className='flex'>Cufflings/Pins <span className='self-center px-1'><BsChevronDown /></span></li>
                <li className='flex'>Engravings <span className='self-center px-1'><BsChevronDown /></span></li>
                <li className='flex'>Embroidered/Woven <span className='self-center px-1'><BsChevronDown /></span></li>
            </ul>

        </div>
        </>
    )

}

export default Navbar;