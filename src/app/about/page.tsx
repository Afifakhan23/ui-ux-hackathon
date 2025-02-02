import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/navbar'
import About from '../components/about'

const Page = () => {
    return (
        <div>
            <Navbar/>
            <div className="bg-contact bg-center bg-cover bg-no-repeat h-[350px] w-full flex flex-col justify-center items-center">
                <Image src={'/assets/logo.png'} alt='logo' width={77} height={77} />
                <h2 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-center">
                    About
                </h2>
                <p className="my-4 text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center">
                    <Link href='/' className='font-bold'>Home</Link> <span className='font-bold w-[14px] h-[8px]'>{'>'}</span> About
                </p>
            </div>
            <About/>
        </div>
    )
}

export default Page