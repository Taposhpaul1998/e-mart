import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className='text-center py-[15px] bg-black'>
        <p className='text-white font-normal text-sm'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link className='font-semibold pl-2 leading-6 ' to={'/shop'}> ShopNow </Link></p>
      </div>
    </div>
  )
}

export default Header