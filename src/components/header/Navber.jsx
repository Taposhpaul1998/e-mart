import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navber({ isOpen, setIsOpen }) {



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
                    menuLinks.map((item, index) => <NavLink key={index} to={item.link} className={({ isActive }) => isActive ? " relative after:contents-[''] after:w-full after:h-[2px] after:bg-text1 after:absolute after:bottom-0 after:left-0 after:border-none after:rounded-full" : "relative after:contents-[''] after:w-0 hover:after:w-full after:duration-300 after:h-[2px] after:bg-text1 after:absolute after:bottom-0 after:left-0 after:border-none after:rounded-full"} >{item.name} </NavLink>)
                }

            </div>

            {/* small screen menu  */}
            <div className={`md:hidden flex flex-col justify-start items-center bg-primary fixed w-full h-screen top-0 left-0 right-0 z-10 pt-12 gap-6 text-base font-poppins font-normal leading-6 text-center text-text2 
                 duration-500 ease-in-out -translate-x-full ${isOpen && "translate-x-0"}`}>
                {
                    menuLinks.map((item, index) => <NavLink onClick={() => setIsOpen(!isOpen)} key={index} to={item.link} className={({ isActive }) => isActive ? " relative after:contents-[''] after:w-full after:h-[2px] after:bg-text1 after:absolute after:bottom-0 after:left-0 after:border-none after:rounded-full" : "relative after:contents-[''] after:w-0 hover:after:w-full after:duration-300 after:h-[2px] after:bg-text1 after:absolute after:bottom-0 after:left-0 after:border-none after:rounded-full"}>{item.name} </NavLink>)
                }
                <div className='flex justify-end items-center gap-5 md:hidden mt-3'>
                    <Link to="/favorite">
                        <svg className='cursor-pointer' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </Link>
                    <Link to="/cart">
                        <svg className='cursor-pointer' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3 5H7L10 22H26" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>
                </div>
                {/* mobile menu toggle bars icon*/}

                <div onClick={() => setIsOpen(!isOpen)} className=' fixed top-5 right-5 block text-[22px] text-button2'>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
        </>
    )
}

export default Navber