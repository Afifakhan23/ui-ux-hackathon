'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import Navbar from '../components/navbar';


const Page = () => {
    const [isVisible, setIsVisible] = useState(true);
  
    const handleDelete = () => {
        setIsVisible(false); // Hide the data
        console.log("Delete button clicked!"); // Log to confirm the click
      };
  return (
    <>
    <Navbar/>
        <div className="bg-contact bg-center bg-cover bg-no-repeat min-h-[350px] sm:min-h-[316px] w-full flex flex-col justify-center items-center">
                <Image src={'/assets/logo.png'} alt='logo' width={77} height={77} />
                <h2 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-center">
                    Cart
                </h2>
                <p className="my-4 text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center">
                    <Link href='/' className='font-bold'>Home</Link> <span className='font-bold w-[14px] h-[8px]'>{'>'}</span> Cart
                </p>
            </div>
            <div className='flex justify-center items-start py-10'>
            <div className='w-[320px] md:w-[1240px] h-auto md:h-[390px] flex flex-col md:flex-row justify-between items-center md:items-start'>
                <div className='w-[310px] md:w-[817px] h-auto md:h-[216px] flex flex-col justify-between items-between'>
                    <ul className='flex justify-evenly md:justify-end items-center bg-mylightorange text-[16px] font-medium py-5'>
                        <li className='md:mr-28 mr-0'>Product</li>
                        <li className='md:mr-28 mr-0'>Price</li>
                        <li className='md:mr-16 mr-0'>Quantity</li>
                        <li className='md:mr-28 mr-0'>Subtotal</li>
                    </ul>
                    {isVisible && (
                        <ul className='flex items-center justify-between text-[9px] md:text-[20px]' >
                        <li><Image src={'/assets/asgaardsofa.png'} alt='sofa' width={106} height={106} /></li>
                        <li className='text-mytextcolor'>Asgaard Sofa</li>
                        <li className='text-mytextcolor'>Rs 25,000.00</li>
                        <li><input type='text' name="num" id="num" placeholder='1' className='w-[32px] h-[32px] border-[1px] border-mytextcolor rounded-[5px] text-center' /></li>
                        <li>Rs 25,000.00</li>
                        <AiFillDelete className='text-mydarkorange w-[28] h-[28]' onClick={handleDelete}/>
                    </ul>
                    )}
                    
                </div>
                <div className='w-[320px] md:w-[393px] h-[390px] bg-mylightorange text-center flex flex-col items-center justify-evenly'>
                    <h2 className='text-[32px] font-semibold'>Cart Totals</h2>
                    <pre>Subtotal    <span className='text-mytextcolor'>Rs. 250,000.00</span></pre>
                    <pre>Total    <span className='text-[#B88E2F]'>Rs. 250,000.00</span></pre>
                    <button className='w-[215px] h-[64px] border-2 border-black rounded-[15px] hover:bg-black hover:text-white mr-5'>Register</button>
                </div>
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