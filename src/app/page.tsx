'use client'

import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import { BsBagX } from "react-icons/bs";
import Image from 'next/image'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

import Hero from "./components/hero";
import SideTable from "./components/sideTable";
import Picks from "./components/picks";
import NewArrivals from "./components/newArrivals";
import MyBlogs from "./components/blogs";
import OurInstagram from "./components/ourInstagram";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={`h-[100px] w-full ${poppins.className} bg-mydarkorange flex justify-end items-center`}>
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex w-[430px] h-[24px] font-medium text-[16px] space-x-8 mr-0 lg:mr-40 ">
          <li><Link href={'/'} className='hover:text-[#FF5733] p-3 border-transparent border-b-2 hover:border-[#fa8231]'>Home</Link></li>
          <li><Link href={'/shop'} className='hover:text-[#FF5733] p-3 border-transparent border-b-2 hover:border-[#fa8231]'>Shop</Link></li>
          <li><Link href={'/about'} className='hover:text-[#FF5733] p-3 border-transparent border-b-2 hover:border-[#fa8231]'>About</Link></li>
          <li><Link href={'/contact'} className='hover:text-[#FF5733] p-3 border-transparent border-b-2 hover:border-[#fa8231]'>Contact</Link></li>
        </ul>

        {/* Desktop Icons */}
        <ul className="hidden lg:flex h-[28px] space-x-6 mr-0 lg:mr-20">
          <li><Link href='/account'><FaRegUser className='w-[28px] h-[28px] hover:text-[#3867d6]' /></Link></li>
          <li><LuSearch className='w-[28px] h-[28px] hover:text-mytextcolor' /></li>
          <li><GoHeart className='w-[28px] h-[28px] hover:text-[#ff3f34]' /></li>
          <div className="relative">
            {/* Button to open the cart */}
            <BsCart3 className='w-[28px] h-[28px] hover:text-[#3867d6]' onClick={toggleCart} />

            {/* Overlay */}
            {isOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-70 transition-opacity z-40"
                onClick={toggleCart}
              />
            )}

            {/* Shopping Cart Sidebar */}
            <div
              className={`fixed top-0 right-0 h-full w-80 flex flex-col justify-between bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-lg font-bold">Shopping Cart</h2>
                  <BsBagX onClick={toggleCart} className="text-gray-600 hover:text-red-500 text-2xl" />
                </div>

                {/* Cart Item */}
                <div className="flex items-center space-x-4 p-4">
                  <div className="w-16 h-16 bg-yellow-100 flex items-center justify-center rounded-md">
                    <Image src={'/assets/asgaardsofa.png'} alt='pic' width={100} height={100} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-semibold">Asgaard Sofa</p>
                    <p className="text-sm">
                      1 x <span className="text-yellow-600">Rs. 250,000.00</span>
                    </p>
                  </div>
                  <MdCancel className="text-gray-500 hover:text-red-600 text-2xl" />
                </div>
              </div>

              <div className='flex flex-col'>
                {/* Subtotal */}
                <div className="p-4 mt-4 border-b flex justify-between items-center">
                  <p className="text-lg font-semibold">Subtotal</p>
                  <p className="text-yellow-600 font-bold">Rs. 250,000.00</p>
                </div>

                {/* Buttons */}
                <div className="flex justify-around p-4">
                  <Link href='/cart' className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white">
                    View Cart
                  </Link>
                  <Link href='/checkout' className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black text-2xl mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[100px] left-0 w-full bg-mydarkorange text-black flex flex-col items-center space-y-6 py-6 lg:hidden">
            <ul className="flex flex-col items-center space-y-4 font-medium text-[16px]">
              <li><Link href={'/'} className='hover:text-[#FF5733] p-3 border-transparent border-b-2 hover:border-[#FF5733]'>Home</Link></li>
              <li><Link href={'/shop'} className='hover:text-[#FF5733] p-3 border-transparent border-b-2 hover:border-[#fa8231]'>Shop</Link></li>
              <li><Link href={'/about'} className='hover:text-[#FF5733] p-3 border-transparent border-b-2 hover:border-[#fa8231]'>About</Link></li>
              <li><Link href={'/contact'} className='hover:text-[#FF5733] p-3 border-transparent border-b-2 hover:border-[#fa8231]'>Contact</Link></li>
            </ul>
            <ul className="flex space-x-6">
              <li><Link href={'/account'}><FaRegUser className='w-[28px] h-[28px] hover:text-[#3867d6]' /></Link></li>
              <li><LuSearch className='w-[28px] h-[28px] hover:text-mytextcolor' /></li>
              <li><GoHeart className='w-[28px] h-[28px] hover:text-[#ff3f34]' /></li>
              <div className="relative">
                {/* Button to open the cart */}
                <BsCart3 className='w-[28px] h-[28px] hover:text-[#3867d6]' onClick={toggleCart} />

                {/* Shopping Cart Sidebar */}
                <div
                  className={`fixed top-0 right-0 h-full w-80 flex flex-col justify-between bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                      <h2 className="text-lg font-bold">Shopping Cart</h2>
                      <BsBagX onClick={toggleCart} className="text-gray-600 hover:text-red-500 text-2xl" />
                    </div>

                    {/* Cart Item */}
                    <div className="flex items-center space-x-4 p-4">
                      {/* Item Image */}
                      <div className="w-16 h-16 bg-yellow-100 flex items-center justify-center rounded-md">
                        <Image src={'/assets/asgaardsofa.png'} alt='pic' width={100} height={100} />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1">
                        <p className="text-gray-800 font-semibold">Asgaard Sofa</p>
                        <p className="text-sm">
                          1 x <span className="text-yellow-600">Rs. 250,000.00</span>
                        </p>
                      </div>

                      {/* Remove Item Button */}
                      <MdCancel className="text-gray-500 hover:text-red-600 text-2xl" />
                    </div>
                  </div>


                  <div className='flex flex-col'>
                    {/* Subtotal */}
                    <div className="p-4 mt-4 border-b flex justify-between items-center">
                      <p className="text-lg font-semibold">Subtotal</p>
                      <p className="text-yellow-600 font-bold">Rs. 250,000.00</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-around p-4">
                      <Link href='/cart' className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white">
                        View Cart
                      </Link>
                      <Link href='/checkout' className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white">
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        )}
      </div>
      <Hero />
      <SideTable />
      <Picks />
      <NewArrivals />
      <MyBlogs />
      <OurInstagram />
    </>
  );
}
