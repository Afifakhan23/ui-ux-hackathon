import React from 'react'
import Image from 'next/image'

const Page = () => {
    return (
        <>
            <div className="bg-contact bg-center bg-cover bg-no-repeat min-h-[350px] sm:min-h-[316px] w-full flex flex-col justify-center items-center">
                <Image src={'/assets/logo.png'} alt='logo' width={77} height={77} />
                <h2 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-center">
                    Contact
                </h2>
                <p className="my-4 text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center">
                    <span className='font-bold'>Home</span> <span className='font-bold w-[14px] h-[8px]'>{'>'}</span> Contact
                </p>
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
            
        </>
    )
}

export default Page