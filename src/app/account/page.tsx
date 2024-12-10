import React from 'react'
import Image from 'next/image'

const Page = () => {
    return (
        <>
            <div className="bg-contact bg-center bg-cover bg-no-repeat min-h-[350px] sm:min-h-[316px] w-full flex flex-col justify-center items-center">
                <Image src={'/assets/logo.png'} alt='logo' width={77} height={77} />
                <h2 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-center">
                    Account
                </h2>
                <p className="my-4 text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center">
                    <span className='font-bold'>Home</span> <span className='font-bold w-[14px] h-[8px]'>{'>'}</span> Contact
                </p>
            </div>
            <div className='h-[850px] md:h-[760px] flex flex-col md:flex-row justify-evenly items-center'>
                <div className='w-[300px] md:w-[608px] h-[630px] flex flex-col items-start justify-evenly'>
                    <h2 className='text-[25px] md:text-[36px] font-semibold'>Log In</h2>
                    <label htmlFor="name" className='text-[16px] font-medium'>Username or email address</label>
                        <input type="text" className='h-[40px] md:h-[75px] w-[300px] md:w-[423px] outline-none border-2 border-mytextcolor rounded-md mt-3 mb-5' />
                        <label htmlFor="name" className='text-[16px] font-medium'>Password</label>
                        <input type="text" className='h-[40px] md:h-[75px] w-[300px] md:w-[423px] outline-none border-2 border-mytextcolor rounded-md mt-3 mb-5' />
                        <div className='flex items-center'>
                        <input type="checkbox" name="remember" id="remember" className='w-[30px] h-[27px]  mr-5' />
                        <p>Remember me</p>
                        </div>
                        <div className='flex items-center'>
                        <button className='w-[215px] h-[64px] border-2 border-black rounded-[15px] hover:bg-black hover:text-white mr-5'>Log In</button>
                        <p>Lost Your Password?</p>
                        </div>
                </div>
                <div className='w-[300px] md:w-[608px] h-[630px] flex flex-col items-start justify-evenly'>
                    <h2 className='text-[25px] md:text-[36px] font-semibold'>Register</h2>
                    <label htmlFor="name" className='text-[16px] font-medium'>Email address</label>
                        <input type="text"  className='h-[40px] md:h-[75px] w-[300px] md:w-[423px] outline-none border-2 border-mytextcolor rounded-md mt-3 mb-5' />
                        <p>A link to set a new password will be sent to your email address.</p><br/>
                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold'>privacy policy</span>.</p>
                        <button className='w-[215px] h-[64px] border-2 border-black rounded-[15px] hover:bg-black hover:text-white mr-5'>Register</button>
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
                
            
        </>
    )
}

export default Page