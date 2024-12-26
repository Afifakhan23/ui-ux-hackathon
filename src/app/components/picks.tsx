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
      <ul className="w-[320px] md:w-[1240px] h-[1200px] md:h-[397px] flex flex-col md:flex-row justify-center items-center">
                  <li className="w-[287px] h-[300px] md:h-[350px] flex flex-col justify-between items-center hover:bg-mylightblack">
                    <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                      <Image
                        src="/assets/picks1.png"
                        width={240}
                        height={174}
                        alt="picks1"
      
                      />
                    </div>
                    <div className='w-[199px] h-[96px]'>
                      <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                        Trenton modular sofa_3
                      </p>
                      <p className="text-[18px] lg:text-[24px] font-normal text-center">
                        Rs. 25,000.00
                      </p>
                    </div>
                  </li>
                  <li className="w-[287px] h-[300px] md:h-[350px] flex flex-col items-center hover:bg-mylightblack">
                    <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                      <Image
                        src="/assets/picks2.png"
                        width={240}
                        height={174}
                        alt="picks1"
      
                      />
                    </div>
                    <div className='w-[199px] h-[96px]'>
                      <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                        Trenton modular sofa_3
                      </p>
                      <p className="text-[18px] lg:text-[24px] font-normal text-center">
                        Rs. 25,000.00
                      </p>
                    </div>
                  </li>
                  <li className="w-[287px] h-[300px] md:h-[350px] flex flex-col items-center hover:bg-mylightblack">
                    <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                      <Image
                        src="/assets/picks3.png"
                        width={240}
                        height={174}
                        alt="picks1"
      
                      />
                    </div>
                    <div className='w-[199px] h-[96px]'>
                      <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                        Trenton modular sofa_3
                      </p>
                      <p className="text-[18px] lg:text-[24px] font-normal text-center">
                        Rs. 25,000.00
                      </p>
                    </div>
                  </li>
                  <li className="w-[287px] h-[300px] md:h-[350px] flex flex-col items-center hover:bg-mylightblack">
                    <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                      <Image
                        src="/assets/picks4.png"
                        width={240}
                        height={174}
                        alt="picks1"
      
                      />
                    </div>
                    <div className='w-[199px] h-[96px]'>
                      <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                        Trenton modular sofa_3
                      </p>
                      <p className="text-[18px] lg:text-[24px] font-normal text-center">
                        Rs. 25,000.00
                      </p>
                    </div>
                  </li>
                </ul>
      <Link
        href={'#'}
        className="mt-8 text-[18px] lg:text-[24px] border-b-2 border-black hover:border-myorange hover:text-myorange"
      >
        View More
      </Link>
    </div>
  )
}

export default Picks
