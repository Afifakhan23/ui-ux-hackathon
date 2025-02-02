import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='h-[600px] lg:h-[555px] w-full flex flex-col justify-evenly items-center bg-white'>
        <div className='h-[500px] lg:h-[312px] w-[300px] lg:w-[1131px] flex flex-col lg:flex-row justify-evenly lg:items-start items-center border-b-2 border-mylightblack'>
            <div className='w-[285px] h-[72px] my-0 lg:my-20 text-black'>400 University Drive Suite 200 Coral Gables,
            FL 33134 USA</div>
            <div className='w-[300px] lg:w-[352px] h-[312px] flex justify-between items-start'>
            <ul className='space-y-7 font-medium text-black' >
                <h3 className='font-medium text-[16px]'>Links</h3>
                <li>
                    <Link href={'/'} className='border-transparent border-b-2 hover:border-black'>Home</Link>
                </li>
                <li>
                    <Link href={'/shop'} className='border-transparent border-b-2 hover:border-black'>Shop</Link>
                </li>
                <li>
                    <Link href={'/about'} className='border-transparent border-b-2 hover:border-black'>About</Link>
                </li>
                <li>
                    <Link href={'/contact'} className='border-transparent border-b-2 hover:border-black'>Contact</Link>
                </li>
            </ul>
            <ul className='space-y-7 text-black'>
                <h3 className='font-medium text-[16px]'>Help</h3>
                <li>
                    <Link href={'#'}>Payment Options</Link>
                </li>
                <li>
                    <Link href={'#'}>Returns</Link>
                </li>
                <li>
                    <Link href={'#'}>Privacy Policies</Link>
                </li>
            </ul>
            </div>
            <div className='space-y-7'>
                <h3 className='font-medium text-[16px] text-white'>Newsletter</h3>
                <div className='w-[286px] h-[24px] flex justify-between items-center'>
                <input type="text" placeholder='Enter Your Email Address' className='w-[173px] h-5 text-[14px] outline-none border-b-2 border-black'/>
                <Link href={'#'} className='font-medium text-[14px] h-[24px] border-b-2 border-black'>SUBSCRIBE</Link>
                </div>
            </div>
        </div>
        <p className='text-left font-normal text-[16px] w-[300px] lg:w-[1131px]'>2022 Meubel House. All rights reverved</p>
    </div>
  )
}

export default Footer