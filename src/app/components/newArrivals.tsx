import Image from 'next/image';
import React from 'react';
import Link from 'next/link'

const NewArrivals = () => {
  return (
    <div className="w-full bg-mylightorange flex flex-col lg:flex-row justify-evenly items-center p-4">
      <Image
        src={'/assets/asgaardsofa.png'}
        alt="sofa"
        width={1000}
        height={1000}
        className="w-[300px] lg:w-[639px] lg:h-[639px] h-auto"
      />
      <div className="w-full lg:w-[331px] flex flex-col justify-between items-center mt-6 lg:mt-0">
        <p className="font-normal text-[18px] sm:text-[20px] lg:text-[24px]">New Arrivals</p>
        <h2 className="font-bold text-[32px] sm:text-[40px] lg:text-[48px] text-center lg:text-left">Asgaard sofa</h2>
        <Link href={'/shop'} className="w-full max-w-[255px] h-[64px] font-light text-[16px] sm:text-[18px] lg:text-[20px] border-2 border-black flex justify-center items-center mt-4 lg:mt-0 hover:bg-black hover:text-mylightorange">
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default NewArrivals;
