import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Picks = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center justify-evenly px-4 py-8 lg:py-16">
      <div className="text-center mb-8">
        <h2 className="font-normal text-[24px] lg:text-[36px]">Top Picks For You</h2>
        <p className="text-[14px] lg:text-[16px] font-normal text-mytextcolor mt-2">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <li className="flex flex-col items-center hover:bg-mylightblack">
          <Image src={'/assets/picks1.png'} width={287} height={287} alt="picks1" className="w-[80%] lg:w-auto" />
          <p className="text-[14px] lg:text-[16px] font-light mt-2">Trenton modular sofa_3</p>
          <p className="text-[18px] lg:text-[24px] font-normal">Rs. 25,000.00</p>
        </li>
        <li className="flex flex-col items-center hover:bg-mylightblack">
          <Image src={'/assets/picks2.png'} width={287} height={287} alt="picks2" className="w-[80%] lg:w-auto" />
          <p className="text-[14px] lg:text-[16px] font-light mt-2">Trenton modular sofa_3</p>
          <p className="text-[18px] lg:text-[24px] font-normal">Rs. 25,000.00</p>
        </li>
        <li className="flex flex-col items-center hover:bg-mylightblack">
          <Image src={'/assets/picks3.png'} width={287} height={287} alt="picks3" className="w-[80%] lg:w-auto" />
          <p className="text-[14px] lg:text-[16px] font-light mt-2">Trenton modular sofa_3</p>
          <p className="text-[18px] lg:text-[24px] font-normal">Rs. 25,000.00</p>
        </li>
        <li className="flex flex-col items-center hover:bg-mylightblack">
          <Image src={'/assets/picks4.png'} width={287} height={287} alt="picks4" className="w-[80%] lg:w-auto" />
          <p className="text-[14px] lg:text-[16px] font-light mt-2">Trenton modular sofa_3</p>
          <p className="text-[18px] lg:text-[24px] font-normal">Rs. 25,000.00</p>
        </li>
      </ul>
      <Link
        href={'#'}
        className="mt-8 text-[18px] lg:text-[24px] border-b-2 border-black hover:border-mytextcolor hover:text-mytextcolor"
      >
        View More
      </Link>
    </div>
  )
}

export default Picks
