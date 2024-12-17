import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/navbar';

const Page = () => {
    return (
        <>
            <Navbar/>
            <div className="bg-contact bg-center bg-cover bg-no-repeat min-h-[350px] sm:min-h-[316px] w-full flex flex-col justify-center items-center">
                <Image src={'/assets/logo.png'} alt='logo' width={77} height={77} />
                <h2 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-center">
                    Contact
                </h2>
                <p className="my-4 text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center">
                <Link href='/' className='font-bold'>Home</Link> <span className='font-bold w-[14px] h-[8px]'>{'>'}</span> Contact
                </p>
            </div>
            <div className='w-full h-auto md:h-[1144px] flex flex-col  items-center justify-between md:justify-center py-10'>
                <div className='text-center mb-8'>
                    <h2 className='font-semibold text-2xl lg:text-3xl'>Get In Touch With Us</h2>
                    <p className='w-[300px] md:w-[644px] text-sm lg:text-base text-mytextcolor mt-2'>
                        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                    </p>
                </div>
                <div className='w-[320px] md:w-[1058px] h-auto flex flex-col md:flex-row justify-evenly items-center md:items-start'>
                    <ul className='w-[300px] md:w-[393px] h-[537px] flex flex-col justify-evenly items-center'>
                        <li className='w-[301px] flex justify-evenly items-start'>
                            <FaMapMarkerAlt className='w-[22px] h-[28px]' />
                            <div className='w-[212px]'>
                                <h2 className='font-medium text-[24px]'>Address</h2>
                                <p className='text-[16px] font-normal'>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </li>
                        <li className=' w-[301px] flex justify-evenly items-start'>
                            <FaPhoneAlt className='w-[22px] h-[28px]' />
                            <div className='w-[212px]'>
                                <h2 className='font-medium text-[24px]'>Phone</h2>
                                <p className='text-[16px] font-normal'>Mobile: +(84) 546-6789
                                    Hotline: +(84) 456-6789</p>
                            </div>
                        </li>
                        <li className=' w-[301px] flex justify-evenly items-start'>
                            <GoClockFill className='w-[22px] h-[28px]' />
                            <div className='w-[212px]'>
                                <h2 className='font-medium text-[24px]'>Phone</h2>
                                <p className='text-[16px] font-normal'>Monday-Friday: 9:00 - 22:00
                                    Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </li>
                    </ul>
                    <form action="" className='w-[320px] md:w-[531px] h-auto md:h-[739px] flex flex-col justify-center items-center md:items-start'>
                        <label htmlFor="name" className='text-[16px] font-medium'>Your name</label><br />
                        <input type="text" placeholder='abc' className='h-[40px] md:h-[75px] w-[300px] md:w-[526px] outline-none border-2 border-mytextcolor rounded-md mt-3 mb-5 focus:border-myorange' />
                        <label htmlFor="email" className='text-[16px] font-medium'>Email Address</label><br />
                        <input type="text" placeholder='Abc@def.com' className='h-[40px] md:h-[75px] w-[300px] md:w-[526px] outline-none border-2 border-mytextcolor rounded-md mt-3 mb-5 focus:border-myorange' />
                        <label htmlFor="Subject" className='text-[16px] font-medium'>Subject</label><br />
                        <input type="text" placeholder='This is an optional' className='h-[40px] md:h-[75px] w-[300px] md:w-[526px] outline-none border-2 border-mytextcolor rounded-md mt-3 mb-5 focus:border-myorange' />
                        <label htmlFor="Message" className='text-[16px] font-medium'>Message</label><br />
                        <textarea name="Message" id="Message" rows={5} className='w-[300px] md:w-[526px] outline-none border-2 border-mytextcolor rounded-md mt-3 mb-5 focus:border-myorange'>Hi! i’d like to ask about</textarea>

                        <button className='w-[237px] h-[48px] rounded-full border-2 border-black hover:bg-black hover:text-white'>Submit</button>
                    </form>
                </div>
        
            </div>
            <div className="flex justify-evenly items-center bg-mylightpink w-full h-[300px] text-center mt-5">
                <div className='w-[90px] md:w-[376px] h-[108px] '>
                    <h3 className="text-lg font-medium">Free Delivery</h3>
                    <p className="text-sm text-gray-600">
                        For all orders over $50, consectetur adipiscing elit.
                    </p>
                </div>
                <div className='w-[90px] md:w-[376px] h-[108px] '>
                    <h3 className="text-lg font-medium">90 Days Return</h3>
                    <p className="text-sm text-gray-600">
                        If goods have problems, consectetur adipiscing elit.
                    </p>
                </div>
                <div className='w-[90px] md:w-[376px] h-[108px] '>
                    <h3 className="text-lg font-medium">Secure Payment</h3>
                    <p className="text-sm text-gray-600">
                        100% secure payment, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Page