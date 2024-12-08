import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegClock } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";

const Blogs = () => {
    return (
        <div className='flex flex-col items-center justify-evenly py-10 px-4'>
            {/* Header */}
            <div className='text-center mb-8'>
                <h2 className='font-normal text-2xl lg:text-3xl'>Top Picks For You</h2>
                <p className='text-sm lg:text-base text-mytextcolor mt-2'>
                    Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
                </p>
            </div>

            {/* Blog List */}
            <ul className='flex flex-wrap justify-center gap-6'>
                {[1, 2, 3].map((_, idx) => (
                    <li key={idx} className='w-full lg:w-[calc(33%-1rem)]'>
                        <Image 
                            src={`/assets/blog${idx + 1}.png`} 
                            className='rounded-sm' 
                            alt={`blog${idx + 1}`} 
                            width={393} 
                            height={393} 
                            layout='responsive' 
                        />
                        <div className='mt-5 flex flex-col justify-between items-center'>
                            <p className='text-lg lg:text-xl font-normal text-center'>
                                Going all in with millennial design
                            </p>
                            <Link 
                                href='#' 
                                className='mt-4 text-center text-base lg:text-lg border-b-2 border-black hover:border-mytextcolor hover:text-mytextcolor'
                            >
                                Read More
                            </Link>
                            <div className='mt-5 flex items-center gap-3 text-sm lg:text-base'>
                                <FaRegClock />
                                <p>5 min</p>
                                <MdOutlineCalendarToday />
                                <p>12th Oct 2022</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {/* View All Post */}
            <Link 
                href='#' 
                className='mt-10 text-base lg:text-lg border-b-2 border-black hover:border-mytextcolor hover:text-mytextcolor'
            >
                View All Posts
            </Link>
        </div>
    );
};

export default Blogs;
