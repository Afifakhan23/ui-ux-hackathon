import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegClock } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";

const Blogs = () => {
    return (
        <div className='h-auto lg:h-[944px] w-full flex flex-col items-center justify-evenly'>
            <div className='text-center'>
                <h2 className='font-normal text-[36px]'>Top Picks For You</h2>
                <p className='text-[15px] lg:text-[16px] font-normal text-mytextcolor'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            </div>
            <ul className='h-auto md:w-[768px] lg:h-[555px] w-[300px] lg:w-full flex flex-col md:flex-row lg:flex-row justify-evenly items-center'>
                <li>
                    <Image src={'/assets/blog1.png'} className='rounded-sm w-[300px] md:w-[223px] lg:w-[393px] h-auto' alt='blog1' width={1000} height={1000}/>
                    <div className='my-5 w-[300px] md:w-[223px] lg:w-[393px] h-auto lg:h-[129px] flex flex-col justify-between items-center'>
                    <p className='text-[20px] font-normal'>Going all in with millennial design</p>
                    <Link href={'/blog'} className='mt-4 w-[140px] h-[46px] text-center text-[24px] border-b-2 border-black transition hover:text-myorange hover:border-myorange'>Read More</Link>
                    <div className='mt-5 w-[223px] h-[24px] flex justify-between items-center text-[16px]'>
                        <FaRegClock className='w-[18px]' />
                        <p> 5 min</p>
                        <MdOutlineCalendarToday className='w-[18.33px] h-[18.33px]' />
                        <p> 12th Oct 2022</p>
                    </div>
                    </div>
                </li>
                <li>
                    <Image src={'/assets/blog2.png'} className='rounded-sm w-[300px] md:w-[223px] lg:w-[393px] h-auto' alt='blog1' width={1000} height={1000}/>
                    <div className='my-5 w-[300px] md:w-[223px] lg:w-[393px] h-auto lg:h-[129px] flex flex-col justify-between items-center'>
                    <p className='text-[20px] font-normal'>Going all in with millennial design</p>
                    <Link href={'/blog'} className='mt-4 w-[140px] h-[46px] text-center text-[24px] border-b-2 border-black transition hover:text-myorange hover:border-myorange'>Read More</Link>
                    <div className='mt-5 w-[223px] h-[24px] flex justify-between items-center text-[16px]'>
                        <FaRegClock className='w-[18px]' />
                        <p> 5 min</p>
                        <MdOutlineCalendarToday className='w-[18.33px] h-[18.33px]' />
                        <p> 12th Oct 2022</p>
                    </div>
                    </div>
                </li>
                <li>
                    <Image src={'/assets/blog3.png'} className='rounded-sm w-[300px] md:w-[223px] lg:w-[393px] h-auto' alt='blog1' width={1000} height={1000}/>
                    <div className='my-5 w-[300px] md:w-[223px] lg:w-[393px] h-auto lg:h-[129px] flex flex-col justify-between items-center'>
                    <p className='text-[20px] font-normal'>Going all in with millennial design</p>
                    <Link href={'/blog'} className='mt-4 w-[140px] h-[46px] text-center text-[24px] border-b-2 border-black transition hover:text-myorange hover:border-myorange'>Read More</Link>
                    <div className='mt-5 w-[223px] h-[24px] flex justify-between items-center text-[16px]'>
                        <FaRegClock className='w-[18px]' />
                        <p> 5 min</p>
                        <MdOutlineCalendarToday className='w-[18.33px] h-[18.33px]' />
                        <p> 12th Oct 2022</p>
                    </div>
                    </div>
                </li>
            </ul>
            <Link href={'/blog'} className='w-[135px] h-[30px] font-normal text-[20px] transition border-b-2 border-black hover:text-myorange hover:border-myorange'>View All Post</Link>
        </div>
    );
};

export default Blogs;