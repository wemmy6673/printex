import React from 'react';

function Header(){

    const styles = {

        vl: {
            borderLeft: '1px solid white',
            height: '20px',
        }

    }

    return(
        <>
        <div className='hidden md:flex md:flex-row md:justify-between md:bg-blue-950 text-white'>
            <div className='py-3 px-6'>
                <ul className='flex flex-row space-x-5'>
                    <li>Home</li>
                    <li style={styles.vl}></li>
                    <li>About</li>
                    <li style={styles.vl}></li>
                    <li>Contacts</li>
                </ul>

            </div>

           <div className='bg-blue-950 text-white py-3 px-6'>
             <select id="language" name="language" className='bg-blue-950 text-white'>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="dutch">Dutch</option>
             </select>

           </div>


        </div>

        </>

    )
}

export default Header;