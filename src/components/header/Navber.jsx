import React from 'react'
import { NavLink } from 'react-router-dom'

function Navber() {
    return (
        <div className='md:flex hidden justify-end gap-12 text-base font-poppins font-normal leading-6 text-center text-text2'>
            <NavLink to='/' >
                Home
                {/* <hr className='hover:w-full bg-text1 h-[2px] border-none rounded-full focus:outline-none'></hr> */}
            </NavLink>
            <NavLink to='/contact' >Contact</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/sign Up' >Sign Up</NavLink>
        </div>
    )
}

export default Navber