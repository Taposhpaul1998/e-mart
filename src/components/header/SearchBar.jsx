import React from 'react'

function SearchBar() {
    return (
        <div className='flex justify-start items-center lg:gap-[34px] gap-5 bg-secondary md:pl-5 pl-3 py-[7px] pr-3'>
            <input type="text" placeholder='What are you looking for?' className='md:w-[153px] w-32 bg-secondary focus:outline-hidden md:text-xs text-[10px] leading-[18px]' />
            <svg className='cursor-pointer' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z" stroke="black" stroke-width="1.5" stroke-linecap="round" />
            </svg>

        </div>
    )
}

export default SearchBar