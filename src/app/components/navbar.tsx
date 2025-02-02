'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { PiShoppingCartFill } from "react-icons/pi";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { BsBagX } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import { removeFromCart } from '../redux/cartSlices';
import Logo from '@/../public/assets/logo.png'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();
  // Calculate subtotal for each item and total for all items
  const calculateSubtotal = (price: number, quantity: number) => price * quantity;
  const total = cart.reduce((acc, item) => acc + calculateSubtotal(item.price, item.quantity), 0);


  return (
    <div className={`h-[60px] w-full ${poppins.className} bg-white flex justify-between items-center z-[999]`}>
          <Link href={'/'}>
          <Image src={Logo} alt='logo' width={60} height={60} className='ml-0 lg:ml-20'/></Link>
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex w-[430px] h-[24px] font-medium text-[16px] space-x-8 ">
        <li><Link href={'/'} className='hover:text-[#FF5733] p-1 border-transparent border-b-2 hover:border-[#fa8231]'>Home</Link></li>
        <li><Link href={'/shop'} className='hover:text-[#FF5733] p-1 border-transparent border-b-2 hover:border-[#fa8231]'>Shop</Link></li>
        <li><Link href={'/about'} className='hover:text-[#FF5733] p-1 border-transparent border-b-2 hover:border-[#fa8231]'>About</Link></li>
        <li><Link href={'/contact'} className='hover:text-[#FF5733] p-1 border-transparent border-b-2 hover:border-[#fa8231]'>Contact</Link></li>
      </ul>

      {/* Desktop Icons */}
      <ul className="hidden lg:flex h-[28px] space-x-6 mr-0 lg:mr-20">
        <li><Link href='/account'><FaUserCircle className='w-[28px] h-[28px] hover:text-[#3867d6]' /></Link></li>
        <li><Link href={'/shop'}><LuSearch className='w-[28px] h-[28px] hover:text-mytextcolor' /></Link></li>
        <li><GoHeart className='w-[28px] h-[28px] hover:text-[#ff3f34]' /></li>
        <div className="relative">
          {/* Button to open the cart */}
          <PiShoppingCartFill className='w-[28px] h-[28px] hover:text-[#3867d6] relative' onClick={toggleCart} />
          <div className='bg-red-600 w-[18px] h-[18px] text-[10px] text-white flex justify-center items-center rounded-full absolute -top-2 -right-2'>{cart.length}</div>

          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-60 transition-opacity z-40"
              onClick={toggleCart}
            />
          )}

          {/* Shopping Cart Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-90 flex flex-col justify-between bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-bold">Shopping Cart</h2>
                <BsBagX onClick={toggleCart} className="text-gray-600 hover:text-red-600 text-2xl" />
              </div>

              {/* Cart Items with Scrollable Area */}
              <div className="flex-1 overflow-y-auto">
                {cart.length === 0 ? (
                  <p className="text-center mt-10">Your cart is empty.</p>
                ) : (
                  <div>
                    {cart.map((items) => (
                      <div key={items.id + items.size} className="flex items-center space-x-4 p-4">
                        <div className="w-[40px] h-[40px] bg-yellow-100 flex items-center justify-center rounded-md">
                          <Image src={items.image} alt={items.name} width={1000} height={1000} className="w-[40px] h-[40px] rounded-md"/>
                        </div>
                        <div className="flex-1">
                          <p className="text-black font-semibold text-[11px] md:text-[16px]">{items.name}- {items.size}</p>
                          <p className="text-sm">
                            {items.quantity} x <span className="text-yellow-600">{items.price}</span>
                          </p>
                        </div>
                        <button onClick={() => dispatch(removeFromCart({ id: items.id, size: items.size }))}>
                          <MdCancel className="text-red-500 h-5 w-5 md:w-6 md:h-6" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Subtotal and Buttons */}
              <div className='flex flex-col border-t'>
                <div className="p-4 flex justify-between items-center">
                  <p className="text-lg font-semibold">Subtotal</p>
                  <p className="text-yellow-600 font-bold">$ {total}</p>
                </div>

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
        <div className="absolute top-[60px] w-full bg-white text-black flex flex-col items-center space-y-6 py-6 lg:hidden">
          <ul className="flex flex-col items-center space-y-2 font-medium text-[16px]">
            <li><Link href={'/'} className='hover:text-[#FF5733] p-2 border-transparent border-b-2 hover:border-[#FF5733]'>Home</Link></li>
            <li><Link href={'/shop'} className='hover:text-[#FF5733] p-2 border-transparent border-b-2 hover:border-[#fa8231]'>Shop</Link></li>
            <li><Link href={'/about'} className='hover:text-[#FF5733] p-2 border-transparent border-b-2 hover:border-[#fa8231]'>About</Link></li>
            <li><Link href={'/contact'} className='hover:text-[#FF5733] p-2 border-transparent border-b-2 hover:border-[#fa8231]'>Contact</Link></li>
          </ul>
          <ul className="flex space-x-6">
            <li><Link href={'/account'}><FaUserCircle className='w-[28px] h-[28px] hover:text-[#3867d6]' /></Link></li>
            <li><LuSearch className='w-[28px] h-[28px] hover:text-mytextcolor' /></li>
            <li><GoHeart className='w-[28px] h-[28px] hover:text-[#ff3f34]' /></li>
            <div className="relative">
              {/* Button to open the cart */}
              <PiShoppingCartFill className='w-[28px] h-[28px] hover:text-[#3867d6]' onClick={toggleCart} />
              <div className='bg-red-600 w-[18px] h-[18px] text-[10px] text-white flex justify-center items-center rounded-full absolute -top-3 -right-2'>{cart.length}</div>

            {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-60 transition-opacity z-40"
              onClick={toggleCart}
            />
          )}
              {/* Shopping Cart Sidebar */}
              <div
                className={`fixed top-0 right-0 z-[999] h-full w-80 flex flex-col justify-between bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                  }`}
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold">Shopping Cart</h2>
                    <BsBagX onClick={toggleCart} className="text-gray-600 hover:text-red-500 text-2xl" />
                  </div>

                  {/* Cart Items with Scrollable Area */}
                  <div className="flex-1 overflow-y-auto">
                    {cart.length === 0 ? (
                      <p className="text-center mt-10">Your cart is empty.</p>
                    ) : (
                      <div>
                        {cart.map((items) => (
                          <div key={items.id + items.size} className="flex items-center space-x-4 p-4">
                            <div className="w-[60px] h-[60px] bg-yellow-100 flex items-center justify-center rounded-md">
                              <Image src={items.image} alt={items.name} width={100} height={100} className="w-[60px] h-[60px] rounded-md"/>
                            </div>
                            <div className="flex-1">
                              <p className="text-black font-semibold text-[11px] md:text-[16px]">{items.name}- {items.size}</p>
                              <p className="text-sm">
                                {items.quantity} x <span className="text-yellow-600">{items.price}</span>
                              </p>
                            </div>
                            <button onClick={() => dispatch(removeFromCart({ id: items.id, size: items.size }))}>
                              <MdCancel className="text-red-500 h-5 w-5 md:w-6 md:h-6" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Subtotal and Buttons */}
                  <div className='flex flex-col border-t'>
                    <div className="p-4 flex justify-between items-center">
                      <p className="text-lg font-semibold">Subtotal</p>
                      <p className="text-yellow-600 font-bold">${total}</p>
                    </div>

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
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;