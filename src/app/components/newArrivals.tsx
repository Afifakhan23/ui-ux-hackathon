import Image from 'next/image';
import React from 'react';
import Link from 'next/link'

const NewArrivals = () => {
  return (
    <div className="w-full bg-mylightorange flex flex-col md:flex-row justify-evenly items-center p-4">
      <Image
        src={'/assets/asgaardsofa.png'}
        alt="sofa"
        width={639}
        height={639}
        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[639px] h-auto"
      />
      <div className="w-full md:w-[331px] flex flex-col justify-between items-center mt-6 md:mt-0">
        <p className="font-normal text-[18px] sm:text-[20px] md:text-[24px]">New Arrivals</p>
        <h2 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] text-center md:text-left">Asgaard sofa</h2>
        <Link href={'#'} className="w-full max-w-[255px] h-[64px] font-light text-[16px] sm:text-[18px] md:text-[20px] border-2 border-black flex justify-center items-center mt-4 md:mt-0 hover:bg-black hover:text-mylightorange">
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default NewArrivals;
