import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className='text-center py-[15px] bg-black'>
        <p className='text-white font-normal font-poppins text-sm'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link className='font-semibold pl-2 leading-6 ' to={'/shop'}> ShopNow </Link></p>
      </div>

      <div className='border-b-[.5px] border-black'>
        <div className='w-[1170px] mx-auto pt-10 pb-4 '>
          <div className='flex justify-between py-[7px]'>
            <div>
              <h5 className='text-text2 font-inter text-2xl font-bold leading-6 tracking-[0.7px]'>Exclusive</h5>
            </div>
            <div className='flex justify-end gap-12 text-base font-poppins font-normal leading-6 text-center text-text2'>
              <NavLink className={'border-b border-text2'} to='/' >Home</NavLink>
              <NavLink to='/contact' >Contact</NavLink>
              <NavLink to='/about' >About</NavLink>
              <NavLink to='/sign Up' >Sign Up</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header