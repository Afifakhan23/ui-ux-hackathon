import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center h-[600px] md:h-[700px] bg-mydarkorange mx-auto'>
        <div className={`w-[300px] md:w-[440px] h-[100px] md:h-[276px]`}>
            <h1 className='font-normal text-[35px] md:text-[64px]'>Rocket single seater</h1>
            <Link href={'#'} className='w-[60px] md:w-[121px] h-[20px] md:h-[49px] border-b-2 border-black text-[18px] md:text-[24px] font-normal hover:border-mytextcolor hover:text-mytextcolor'>Shop Now</Link>
        </div>
        <div>
            <Image src={'/assets/rocket-single-seater1.png'}  width={600} height={600} alt='img'/>
        </div>
    </div>
  )
}

export default Hero