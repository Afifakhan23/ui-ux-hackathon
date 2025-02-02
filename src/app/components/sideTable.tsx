import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SideTable = () => {
  return (
    <div className='bg-mylightcolor flex flex-col md:flex-row justify-evenly items-center h-[600px] md:h-[450px]'>
        <div className='w-[300px] h-[280px] md:w-[400px] md:h-[350px] flex flex-col justify-evenly items-center border-transparent border-2 md:hover:border-black rounded-md transition-all md:hover:bg-white'>
            <Image src={'/assets/sideTable1.png'} className='' width={200} height={200} alt='img1'/>
            <h2 className='font-normal text-[25px] md:text-[30px]'>Side table</h2>
            <Link href={'/shop'} className='py-4 w-[100px] md:w-[130px] h-[49px] text-[18px] md:text-[24px] border-b-2 border-black hover:border-myorange hover:text-myorange transition-all'>View More</Link>
        </div>
        <div className='w-[300px] h-[280px] md:w-[400px] md:h-[350px] flex flex-col justify-evenly items-center border-transparent border-2 md:hover:border-black rounded-md transition-all md:hover:bg-white'>
            <Image src={'/assets/sideTable2.png'} className='' width={200} height={200} alt='img2'/>
            <h2 className='font-normal text-[25px] md:text-[30px] '>Side table</h2>
            <Link href={'/shop'} className='pt-4 w-[100px] md:w-[130px] h-[49px] text-[18px] md:text-[24px] border-b-2 border-black hover:border-myorange hover:text-myorange transition-all'>View More</Link>
        </div>
    </div>
  )
}

export default SideTable