import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PiCirclesFourFill } from "react-icons/pi";
import { BsViewList } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";
import Navbar from '../components/navbar';


export const products = [
  { href: '/shop/trenton-modular-sofa_3', src: '/assets/picks1.png', alt: 'picks1', title: 'Trenton modular sofa_3', price: '25,000.00' },
  { href: '/shop/granite-dining-table-with-dining-chair', src: '/assets/picks2.png', alt: 'picks2', title: 'Granite dining table with dining chair', price: '30,000.00' },
  { href: '/shop/outdoor-bar-table-and-stool', src: '/assets/picks3.png', alt: 'picks3', title: 'Outdoor bar table and stool', price: '20,000.00' },
  { href: '/shop/reclaimed-teak-table', src: '/assets/picks4.png', alt: 'picks4', title: 'Reclaimed teak table', price: '18,000.00' },
  { href: '/shop/grain-coffee-table', src: '/assets/table1.png', alt: 'picks5', title: 'Grain coffee table', price: '15,000.00' },
  { href: '/shop/kent-coffee-table', src: '/assets/table2.png', alt: 'picks6', title: 'Kent coffee table', price: '225,000.00' },
  { href: '/shop/round-coffee-table_color-2', src: '/assets/table3.png', alt: 'picks7', title: 'Round coffee table_color 2', price: '251,000.00' },
  { href: '/shop/reclaimed-teak-coffee-table', src: '/assets/table4.png', alt: 'picks8', title: 'Reclaimed teak coffee table', price: '25,200.00' },
  { href: '/shop/plain-console_', src: '/assets/table5.png', alt: 'picks9', title: 'Plain console_', price: '258,200.00' },
  { href: '/shop/reclaimed-teak-sideboard', src: '/assets/table6.png', alt: 'picks10', title: 'Reclaimed teak Sideboard', price: '20,000.00' },
  { href: '/shop/sjp_0825', src: '/assets/table7.png', alt: 'picks11', title: 'SJP_0825', price: '200,000.00' },
  { href: '/shop/bella-chair-and-table', src: '/assets/table8.png', alt: 'picks12', title: 'Bella chair and table', price: '100,000.00' },
  { href: '/shop/granite-square-side-table', src: '/assets/sideTable1.png', alt: 'picks13', title: 'Granite square side table', price: '258,800.00' },
  { href: '/shop/asgaard-sofa', src: '/assets/asgaardsofa.png', alt: 'picks14', title: 'Asgaard sofa', price: '250,000.00' },
  { href: '/shop/maya-sofa-three-seater', src: '/assets/table9.png', alt: 'picks15', title: 'Maya sofa three seater', price: '115,000.00' },
  { href: '/shop/outdoor-sofa-set', src: '/assets/table10.png', alt: 'picks16', title: 'Outdoor sofa set', price: '244,000.00' },

  
  // Add more products as needed
];
const Page = () => {

  return (
    <div>
      <Navbar />

      {/* Header Section */}
      <div className="bg-contact bg-center bg-cover bg-no-repeat min-h-[350px] sm:min-h-[316px] w-full flex flex-col justify-center items-center">
        <Image src={'/assets/logo.png'} alt='logo' width={77} height={77} />
        <h2 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-center">Shop</h2>
        <p className="my-4 text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center">
          <Link href='/' className='font-bold'>Home</Link> <span className='font-bold w-[14px] h-[8px]'>{'>'}</span> Shop
        </p>
      </div>

      {/* Filter Section */}
      <div className='h-[100px] bg-mylightpink my-[47px] flex flex-col md:flex-row justify-evenly items-center'>
        <ul className='h-[37px] flex space-x-5 items-center'>
          <li className='flex'><IoFilterSharp className='md:w-[28px] h-[20px] w-[20px] md:h-[28px] mr-3' /> Filter</li>
          <li><PiCirclesFourFill className='md:w-[28px] h-[20px] w-[20px] md:h-[28px]' /></li>
          <li><BsViewList className='md:w-[28px] h-[20px] w-[20px] md:h-[28px]' /></li>
          <li className='border-l-2 border-black font-normal text-[10px] md:text-[16px] pl-3'>Showing 1–16 of 32 results</li>
        </ul>
        <ul className='md:h-[55px] h-[40px] flex items-center space-x-3'>
          <li className='md:w-[126px] w-[90px] h-[30px] md:h-[55px]'>Show
            <input type="text" placeholder='16' className='w-[30px] md:w-[55px] md:h-[55px] h-[30px] text-center ml-3' />
          </li>
          <li className='w-[200px] md:w-[288px] h-[30px] md:h-[55px]'>Short by
            <input type="text" placeholder='Default' className='w-[80px] h-[30px] md:w-[188px] md:h-[55px] text-center ml-3' />
          </li>
        </ul>
      </div>

      {/* Product List Section */}
      <div className='h-auto flex justify-center items-center'>
        <div className='h-auto md:w-[1242px] flex flex-col justify-between items-center'>
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link href={product.href} key={index}>
              <li className="w-[287px] h-[300px] md:h-[350px] flex flex-col justify-between items-center hover:bg-mylightblack">
              <div className='w-[287px] h-[200px] flex justify-center items-center '>
                <Image
                  src={product.src}
                  width={240}
                  height={174}
                  alt={product.alt}
                />
              </div>
              <div className='w-[199px] h-[96px]'>
                <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                  {product.title}
                </p>
                <p className="text-[18px] lg:text-[24px] font-normal text-center">
                  {product.price}
                </p>
              </div>
            </li>
            </Link>
            ))}
          </ul>
          {/* Pagination Section */}
          <ul className='w-[250px] md:w-[392px] h-[80px] md:h-[60px] flex justify-between items-center text-[20px] font-normal mt-5'>
            <li className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[10px] bg-mydarkorange flex justify-center items-center'>1</li>
            <li className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[10px] bg-mylightorange hover:bg-mydarkorange flex justify-center items-center'>2</li>
            <li className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[10px] bg-mylightorange flex justify-center items-center hover:bg-mydarkorange'>3</li>
            <li className='w-[60px] md:w-[98px] h-[40px] md:h-[60px] flex justify-center items-center  rounded-[10px] bg-mylightorange hover:bg-mydarkorange'>Next</li>
          </ul>
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
  );
};

export default Page;
