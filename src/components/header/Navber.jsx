import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navber() {
    const [isOpen, setIsOpen] = useState(false)


    const menuLinks = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Sign Up',
            link: '/sign Up'
        }


    ]

    return (
        <>
            {/* big screen menu  */}
            <div className='md:flex hidden justify-end lg:gap-12 gap-5 text-base font-poppins font-normal leading-6 text-center text-text2'>

                {
                    menuLinks.map((item, index) => <NavLink key={index} to={item.link} >{item.name} </NavLink>)
                }

            </div>

            {/* small screen menu toggle bars icon*/}

            <div onClick={() => setIsOpen(!isOpen)} className='md:hidden block text-[22px] text-text2'>
                <FontAwesomeIcon icon={faBars} />
            </div>

            {/* small screen menu  */}
            <div className={`md:hidden flex flex-col justify-start bg-primary fixed w-full h-screen top-0 left-0 right-0 z-10 pt-12 gap-6 text-base font-poppins font-normal leading-6 text-center text-text2 
                 duration-300 ease-in-out -translate-x-full ${isOpen && "translate-x-0"}`}>
                {
                    menuLinks.map((item, index) => <NavLink onClick={() => setIsOpen(!isOpen)} key={index} to={item.link} >{item.name} </NavLink>)
                }

                {/* mobile menu toggle bars icon*/}

                <div onClick={() => setIsOpen(!isOpen)} className=' fixed top-5 right-5 block text-[22px] text-button2'>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
        </>
    )
}

export default Navber