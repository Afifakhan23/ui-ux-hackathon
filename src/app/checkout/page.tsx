"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Page = () => {
    const cart = useSelector((state: RootState) => state.cart.items);
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  return (
    <div>
        <Navbar/>
        <div className="bg-contact bg-center bg-cover bg-no-repeat min-h-[350px] sm:min-h-[316px] w-full flex flex-col justify-center items-center">
                <Image src={'/assets/logo.png'} alt='logo' width={77} height={77} />
                <h2 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-center">
                    Checkout
                </h2>
                <p className="my-4 text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center">
                <Link href='/' className='font-bold'>Home</Link> <span className='font-bold w-[14px] h-[8px]'>{'>'}</span> Checkout
                </p>
            </div>
            <div className='h-auto md:h-[1829px] w-full flex justify-center items-center'>
            <div className='w-[320px] md:w-[1242px] h-auto md:h-[1714px] flex flex-col md:flex-row justify-evenly items-center md:items-start'>
                <div className='w-[300px] md:w-[608px] h-[950px] md:h-[1714px] flex flex-col justify-evenly items-center text-[16px] font-medium'>
                    <h2 className='text-[36px] font-semibold'>Billing details</h2>
                    <div className='w-[300px] md:w-[453px] flex justify-between'>
                    <label htmlFor="fname">
                        First Name<br/>
                        <input type="text" name="name" id="fname" className='w-[140px] md:w-[211px] h-14 md:h-[75px] border-2 border-mytextcolor rounded-[10px]' />
                    </label>
                    <label htmlFor="lname">
                        Last Name<br/>
                        <input type="text" name="name" id="lname" className='w-[140px] md:w-[211px] h-14 md:h-[75px] border-2 border-mytextcolor rounded-[10px]' />
                    </label>
                    </div>
                    <label htmlFor="companyName">
                    Company Name (Optional)<br/>
                        <input type="text" name="name" id="companyName" className='w-[300px] md:w-[453px] h-14 md:h-[75px] border-2 border-mytextcolor rounded-[10px]' />
                    </label>
                    <label htmlFor="country">
                    Country / Region<br/>
                        <select name="country" id="country" className='w-[300px] md:w-[453px] h-14 md:h-[75px] border-2 border-mytextcolor rounded-[10px]'>
                            <option value="SriLanka">Sri Lanka</option>
                        </select>
                    </label>
                    <label htmlFor="streetAddress">
                    Street address<br/>
                        <input type="text" name="name" id="streetAddress" className='w-[300px] md:w-[453px] h-14 md:h-[75px] border-2 border-mytextcolor rounded-[10px]' />
                    </label>
                    <label htmlFor="Town">
                    Town / City<br/>
                        <input type="text" name="name" id="Town" className='w-[300px] md:w-[453px] h-14 md:h-[75px] border-2 border-mytextcolor rounded-[10px]' />
                    </label>
                    <label htmlFor="Province">
                    Province<br/>
                        <select name="country" id="Province" className='w-[300px] md:w-[453px] h-14 md:h-[75px] border-2 border-mytextcolor rounded-[10px]'>
                            <option value="WesternProvince">Western Province</option>
                        </select>
                    </label>
                    <label htmlFor="ZIPcode">
                    ZIP code<br/>
                        <input type="text" pattern="[0-9]{5}" name="name" id="ZIPcode" className='w-[300px] md:w-[453px] h-14 md:h-[75px] border-2 border-mytextcolor rounded-[10px]' />
                    </label>
                    <label htmlFor="Phone">
                    Phone<br/>
                        <input type="tel" name="Phone" id="Phone" className='w-[300px] md:w-[453px] h-14 md:h-[75px] border-2 border-mytextcolor rounded-[10px]' />
                    </label>
                    <label htmlFor="email">
                    Email Address<br/>
                        <input type="email" name="email" id="email" className='w-[300px] md:w-[453px] h-14 md:h-[75px] border-2 border-mytextcolor rounded-[10px]' />
                    </label>
                    <input type="text" name="Phone" id="Phone" placeholder='Additional information' className='w-[300px] md:w-[453px] h-14 md:h-[75px] border-2 border-mytextcolor rounded-[10px]' />
                </div>
                <div className='w-[320px] md:w-[608px] h-auto flex justify-center items-center mt-5 md:mt-32'>
                    <ul className='w-[320px] md:w-[533px] h-auto md:h-[616px] flex flex-col justify-evenly items-center md:items-start'>
                        <li className='w-[300px] md:w-[533px] flex justify-between items-center'>
                            <h2 className='text-[24px] font-medium'>Product</h2>
                            <h2 className='text-[24px] font-medium'>Subtotal</h2>
                        </li>
                        {cart.length > 0 ? (
                                cart.map((item, index) => (
                                    <li key={index} className='w-[300px] md:w-[533px] flex justify-between items-center'>
                                        <p className='text-mytextcolor font-normal'>{item.name} <span className='text-black font-medium text-[12px]'>X {item.quantity}</span></p>
                                        <p>$ {item.price * item.quantity}</p>
                                    </li>
                                ))
                            ) : (
                                <li className='w-[300px] md:w-[533px] text-center'>
                                    <p>Your cart is empty</p>
                                </li>
                            )}
                        <li className='w-[300px] md:w-[533px] flex justify-between items-center font-semibold text-lg'>
                            <p>Subtotal</p>
                            <p>$ {getTotalPrice()}</p>
                        </li>
                        <li className='w-[300px] md:w-[533px] flex justify-between items-center pb-10 border-b-2 border-mylightblack'>
                            <p className='font-semibold'>Total</p>
                            <p className='font-bold text-[24px] text-[#B88E2F]'>$ {getTotalPrice()}</p>
                        </li>
                        <li className='py-10'>
                            <label htmlFor="">
                            <input type="radio" name="name" id="bank" className='accent-black mr-5' />
                            Direct Bank Transfer
                            </label>
                        </li>
                        <li>
                            <p className='w-[300px] md:w-[528px]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        </li>
                        <li className='mt-5'>
                        <label htmlFor="">
                            <input type="radio" name="name" id="bank" className='accent-black mr-5' />
                            Direct Bank Transfer
                            </label><br/>
                            <label htmlFor="">
                            <input type="radio" name="name" id="bank" className='accent-black mr-5' />
                            Cash on Delivery
                            </label>
                        </li>
                        <li className='mt-5'>
                            <p className='w-[300px] md:w-[528px]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                        </li>
                        <li className='w-[320px] md:w-[533px] flex justify-center items-center mt-5'>
                        <button className='text-[20px] font-normal w-[280px] md:w-[318px] h-[64px] border-2 border-black rounded-[15px] flex justify-center items-center hover:bg-black hover:text-white'>Place order</button>
                        </li>
                    </ul>
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
    </div>
  )
}

export default Page