import React from 'react'
import Image from 'next/image'
import { PiCirclesFourFill } from "react-icons/pi";
import { BsViewList } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";

const Page = () => {
  return (
    <div>
      <div className="bg-contact bg-center bg-cover bg-no-repeat min-h-[350px] sm:min-h-[316px] w-full flex flex-col justify-center items-center">
        <Image src={'/assets/logo.png'} alt='logo' width={77} height={77} />
        <h2 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-center">
          Shop
        </h2>
        <p className="my-4 text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center">
          <span className='font-bold'>Home</span> <span className='font-bold w-[14px] h-[8px]'>{'>'}</span> Shop
        </p>
      </div>
      <div className='h-[100px] bg-mylightpink my-[47px] flex flex-col md:flex-row justify-evenly items-center'>
        <ul className='h-[37px] flex space-x-5 items-center'>
          <li className='flex'><IoFilterSharp className='md:w-[28px] h-[20px] w-[20px] md:h-[28px] mr-3' /> Filter</li>
          <li><PiCirclesFourFill className='md:w-[28px] h-[20px] w-[20px] md:h-[28px]' /></li>
          <li><BsViewList className='md:w-[28px] h-[20px] w-[20px] md:h-[28px]' /></li>
          <li className='border-l-2 border-black font-normal text-[10px] md:text-[16px]  pl-3'>Showing 1–16 of 32 results</li>
        </ul>
        <ul className='md:h-[55px] h-[40px] flex items-center space-x-3'>
          <li className='md:w-[126px] w-[90px] h-[30px] md:h-[55px]'>Show
            <input type="text" placeholder='16' className='w-[30px] md:w-[55px] md:h-[55px]
                        h-[30px] text-center ml-3'/>
          </li>
          <li className='w-[200px] md:w-[288px] h-[30px] md:h-[55px]'>Short by
            <input type="text" placeholder='Default' className='w-[80px] h-[30px] md:w-[188px]
                        md:h-[55px] text-center ml-3'/>
          </li>
        </ul>
      </div>
      <div className='md:h-[1808px] h-auto flex justify-center items-center'>
        <div className='md:h-[1791px] w-[310px] md:w-[1242px] flex flex-col justify-between items-center'>

          <ul className="w-[320px] md:w-[1240px] h-[1200px] md:h-[397px] flex flex-col md:flex-row justify-center items-center">
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
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
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
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
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
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
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
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


          <ul className="w-[320px] md:w-[1240px] h-[1200px] md:h-[397px] flex flex-col md:flex-row justify-center items-center">
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
              <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                <Image
                  src="/assets/table1.png"
                  width={240}
                  height={174}
                  alt="table1"

                />
              </div>
              <div className='w-[199px] h-[96px]'>
                <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                  Grain coffee table
                </p>
                <p className="text-[18px] lg:text-[24px] font-normal text-center">
                  Rs. 15,000.00
                </p>
              </div>
            </li>
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
              <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                <Image
                  src="/assets/table2.png"
                  width={240}
                  height={174}
                  alt="table2"

                />
              </div>
              <div className='w-[199px] h-[96px]'>
                <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                  Kent coffee table
                </p>
                <p className="text-[18px] lg:text-[24px] font-normal text-center">
                  Rs. 225,000.00
                </p>
              </div>
            </li>
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
              <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                <Image
                  src="/assets/table3.png"
                  width={240}
                  height={174}
                  alt="table3"

                />
              </div>
              <div className='w-[199px] h-[96px]'>
                <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                  Round coffee table_color 2
                </p>
                <p className="text-[18px] lg:text-[24px] font-normal text-center">
                  Rs. 251,000.00
                </p>
              </div>
            </li>
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
              <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                <Image
                  src="/assets/table4.png"
                  width={240}
                  height={174}
                  alt="table4"

                />
              </div>
              <div className='w-[199px] h-[96px]'>
                <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                  Reclaimed teak coffee table
                </p>
                <p className="text-[18px] lg:text-[24px] font-normal text-center">
                  Rs. 25,200.00
                </p>
              </div>
            </li>
          </ul>
          <ul className="w-[320px] md:w-[1240px] h-[1200px] md:h-[397px] flex flex-col md:flex-row justify-center items-center">
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
              <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                <Image
                  src="/assets/table5.png"
                  width={240}
                  height={174}
                  alt="table5"

                />
              </div>
              <div className='w-[199px] h-[96px]'>
                <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                  Plain console_
                </p>
                <p className="text-[18px] lg:text-[24px] font-normal text-center">
                  Rs. 258,200.00
                </p>
              </div>
            </li>
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
              <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                <Image
                  src="/assets/table6.png"
                  width={240}
                  height={174}
                  alt="table6"

                />
              </div>
              <div className='w-[199px] h-[96px]'>
                <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                  Reclaimed teak Sideboard
                </p>
                <p className="text-[18px] lg:text-[24px] font-normal text-center">
                  Rs. 20,000.00
                </p>
              </div>
            </li>
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
              <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                <Image
                  src="/assets/table7.png"
                  width={240}
                  height={174}
                  alt="table7"

                />
              </div>
              <div className='w-[199px] h-[96px]'>
                <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                  SJP_0825
                </p>
                <p className="text-[18px] lg:text-[24px] font-normal text-center">
                  Rs. 200,000.00
                </p>
              </div>
            </li>
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
              <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                <Image
                  src="/assets/table8.png"
                  width={240}
                  height={174}
                  alt="table8"

                />
              </div>
              <div className='w-[199px] h-[96px]'>
                <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                  Bella chair and table
                </p>
                <p className="text-[18px] lg:text-[24px] font-normal text-center">
                  Rs. 100,000.00
                </p>
              </div>
            </li>
          </ul>
          <ul className="w-[320px] md:w-[1240px] h-[1200px] md:h-[397px] flex flex-col md:flex-row justify-center items-center">
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
              <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                <Image
                  src="/assets/sideTable1.png"
                  width={240}
                  height={174}
                  alt="table9"

                />
              </div>
              <div className='w-[199px] h-[96px]'>
                <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                  Granite square side table
                </p>
                <p className="text-[18px] lg:text-[24px] font-normal text-center">
                  Rs. 258,800.00
                </p>
              </div>
            </li>
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
              <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                <Image
                  src="/assets/asgaardsofa.png"
                  width={240}
                  height={174}
                  alt="table10"

                />
              </div>
              <div className='w-[199px] h-[96px]'>
                <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                  Asgaard sofa
                </p>
                <p className="text-[18px] lg:text-[24px] font-normal text-center">
                  Rs. 250,000.00
                </p>
              </div>
            </li>
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
              <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                <Image
                  src="/assets/table9.png"
                  width={240}
                  height={174}
                  alt="table9"

                />
              </div>
              <div className='w-[199px] h-[96px]'>
                <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                  Maya sofa three seater
                </p>
                <p className="text-[18px] lg:text-[24px] font-normal text-center">
                  Rs. 115,000.00
                </p>
              </div>
            </li>
            <li className="w-[287px] h-[300px] md:h-[397px] flex flex-col items-center hover:bg-mylightblack">
              <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
                <Image
                  src="/assets/table10.png"
                  width={240}
                  height={174}
                  alt="table10"

                />
              </div>
              <div className='w-[199px] h-[96px]'>
                <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                  Outdoor sofa set
                </p>
                <p className="text-[18px] lg:text-[24px] font-normal text-center">
                  Rs. 244,000.00
                </p>
              </div>
            </li>
          </ul>
          <ul className='w-[200px] md:w-[392px]  h-[70px] md:h-[60px] flex justify-between items-center text-[20px] font-normal'>
            <li className='w-[30px] h-[30px] md:w-[60px] md:h-[60px] rounded-[10px] bg-mydarkorange flex justify-center items-center'>1</li>
            <li className='w-[30px] h-[30px] md:w-[60px] md:h-[60px] rounded-[10px] bg-mylightorange flex justify-center items-center'>2</li>
            <li className='w-[30px] h-[30px] md:w-[60px] md:h-[60px] rounded-[10px] bg-mylightorange flex justify-center items-center'>3</li>
            <li className='w-[50px] md:w-[98px] h-[40px] md:h-[60px] flex justify-center items-center  rounded-[10px] bg-mylightorange'>Next</li>
          </ul>
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
      </div>
    </div>
  )
}

export default Page