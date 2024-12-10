import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='h-[600px] md:h-[555px] w-full flex flex-col justify-evenly items-center'>
        <div className='h-[500px] md:h-[312px] w-[300px] md:w-[1131px] flex flex-col md:flex-row justify-evenly md:items-start items-center border-b-2 border-mylightblack'>
            <div className='w-[285px] h-[72px] my-0 md:my-20 text-mytextcolor'>400 University Drive Suite 200 Coral Gables,
            FL 33134 USA</div>
            <div className='w-[300px] md:w-[352px] h-[312px] flex justify-between items-start'>
            <ul className='space-y-7 font-medium'>
                <h3 className='font-medium text-[16px] text-mytextcolor'>Links</h3>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/shop'}>Shop</Link>
                </li>
                <li>
                    <Link href={'#'}>About</Link>
                </li>
                <li>
                    <Link href={'/contact'}>Contact</Link>
                </li>
            </ul>
            <ul className='space-y-7'>
                <h3 className='font-medium text-[16px] text-mytextcolor'>Help</h3>
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
                <h3 className='font-medium text-[16px] text-mytextcolor'>Newsletter</h3>
                <div className='w-[286px] h-[24px] flex justify-between items-center'>
                <input type="text" placeholder='Enter Your Email Address' className='w-[173px] text-[14px] outline-none border-b-2 border-black'/>
                <Link href={'#'} className='font-medium text-[14px] h-[24px] border-b-2 border-black'>SUBSCRIBE</Link>
                </div>
            </div>
        </div>
        <p className='text-left font-normal text-[16px] w-[300px] md:w-[1131px]'>2022 Meubel House. All rights reverved</p>
    </div>
  )
}

export default Footer