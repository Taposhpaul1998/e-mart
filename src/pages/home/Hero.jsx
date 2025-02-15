import React from 'react'
import apolelogo from '../../assets/1200px-Apple_gray_logo 1.png'
import heroImg from '../../assets/hero_endframe__cvklg0xk3w6e_large 2.png'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Hero() {

    return (
        <div>
            <div className='mt-10 ml-[45px] bg-black flex justify-between w-[892px]'>
                <div className='mt-[58px] ml-16 mb-[47px]'>
                    <div className='text-text text-base font-normal font-poppins flex justify-start items-center gap-6 mb-5'>
                        <img src={apolelogo} alt="" />
                        <span>iPhone 14 Series</span>
                    </div>
                    <div className='text-text text-5xl leading-[60px] font-poppins font-semibold mb-[22px] xl:w-[290px] w-60'>
                        <h1 className='leading-[60px]'>
                            Up to 10% off Voucher
                        </h1>
                    </div>
                    <Link to='/shop' className=' flex justify-start items-center gap-[11px]'>
                        <span className='text-text text-base font-medium font-poppins relative border-b border-text'>Shop Now</span>
                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>
                </div>
                <div className='relative h-full w-full overflow-hidden z-10'>
                    <div className='absolute right-0 top-4 z-50'>
                        <img src={heroImg} alt="hero image" />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Hero