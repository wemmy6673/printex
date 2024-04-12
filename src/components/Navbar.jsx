import React from 'react';
import { BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { useState } from "react";
import {Link} from 'react-router-dom';


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
                    <div className='md:hidden text-2xl text-blue-950'>
                        <BsList />

                    </div>

                ): (
                    <div className='md:hidden text-2xl text-blue-950'>
                        <BsXLg />

                    </div>
                )

                }

            </div>

           {dropDownOpen && ( <div className='absolute z-20 bg-white w-[80%] items-center ml-[5%] mr-[10%]  mt-72 p-8 transition-all ease-in delay-1000'>
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