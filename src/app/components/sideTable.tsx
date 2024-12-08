import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SideTable = () => {
  return (
    <div className='bg-mylightcolor flex flex-col md:flex-row justify-evenly items-center h-[850px] md:h-[600px]'>
        <div>
            <Image src={'/assets/sideTable1.png'} width={370} height={370} alt='img1'/>
            <h2 className='font-normal text-[30px] md:text-[36px]'>Side table</h2>
            <Link href={'#'} className='pt-4 w-[125px] h-[49px] text-[18px] md:text-[24px] border-b-2 border-black hover:border-mytextcolor hover:text-mytextcolor'>View More</Link>
        </div>
        <div>
            <Image src={'/assets/sideTable2.png'} width={410} height={410} alt='img2'/>
            <h2 className='font-normal text-[30px] md:text-[36px] '>Side table</h2>
            <Link href={'#'} className='pt-4 w-[125px] h-[49px] text-[18px] md:text-[24px] border-b-2 border-black hover:border-mytextcolor hover:text-mytextcolor'>View More</Link>
        </div>
    </div>
  )
}

export default SideTable