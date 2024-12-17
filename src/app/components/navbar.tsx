'use client'

import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`h-[100px] w-full ${poppins.className} bg-transparent flex justify-end items-center`}>

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
        <li><Link href='/cart'><BsCart3 className='w-[28px] h-[28px] hover:text-[#3867d6]' /></Link></li>
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
            <li><Link href={'/cart'}><BsCart3 className='w-[28px] h-[28px] hover:text-[#3867d6]' /></Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
