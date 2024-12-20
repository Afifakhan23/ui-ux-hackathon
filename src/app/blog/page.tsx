import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/navbar'

const Page = () => {
    return (
        <div>
            <Navbar/>
            <div className="bg-contact bg-center bg-cover bg-no-repeat min-h-[350px] sm:min-h-[316px] w-full flex flex-col justify-center items-center">
                <Image src={'/assets/logo.png'} alt='logo' width={77} height={77} />
                <h2 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-center">
                    Blog
                </h2>
                <p className="my-4 text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center">
                    <Link href='/' className='font-bold'>Home</Link> <span className='font-bold w-[14px] h-[8px]'>{'>'}</span> Blog
                </p>
            </div>
            <ul className='flex flex-col justify-evenly items-center'>
                <li className='py-10 w-[300px] md:w-[820px] h-[794px] text-mytextcolor flex flex-col justify-center md:justify-between items-center md:items-start'>
                    <Image src={'/assets/blg1.png'} width={817} height={500} alt='img' />
                    <div className='mt-5 flex items-center gap-3 text-sm lg:text-base'>
                        <Image src={'/assets/admin.png'} width={14.48} height={16.15} alt='img'/>
                        <p>Admin</p>
                        <Image src={'/assets/calender.png'} width={16.67} height={16.67} alt='img'/>
                        <p>14th Oct 2022</p>
                        <Image src={'/assets/tag.png'} width={18.91} height={18.91} alt='img'/>
                        <p>Wood</p>
                    </div>
                    <h2 className='text-[30px] font-medium text-black'>Going all-in with millennial design</h2>
                    <p className='text-[15px] font-normal text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    <Link
                        href='#'
                        className='text-[black] mt-4 text-center text-base lg:text-lg border-b-2 border-black hover:border-mytextcolor hover:text-mytextcolor'
                    >
                        Read More
                    </Link>
                </li>
                <li className='py-10 w-[300px] md:w-[820px] h-[794px] text-mytextcolor flex flex-col justify-center md:justify-between items-center md:items-start'>
                    <Image src={'/assets/blg2.png'} width={817} height={500} alt='img' />
                    <div className='mt-5 flex items-center gap-3 text-sm lg:text-base'>
                        <Image src={'/assets/admin.png'} width={14.48} height={16.15} alt='img'/>
                        <p>Admin</p>
                        <Image src={'/assets/calender.png'} width={16.67} height={16.67} alt='img'/>
                        <p>14th Oct 2022</p>
                        <Image src={'/assets/tag.png'} width={18.91} height={18.91} alt='img'/>
                        <p>Wood</p>
                    </div>
                    <h2 className='text-[30px] font-medium text-black'>Going all-in with millennial design</h2>
                    <p className='text-[15px] font-normal text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    <Link
                        href='#'
                        className='text-[black] mt-4 text-center text-base lg:text-lg border-b-2 border-black hover:border-mytextcolor hover:text-mytextcolor'
                    >
                        Read More
                    </Link>
                </li>
                <li className='py-10 w-[300px] md:w-[820px] h-[794px] text-mytextcolor flex flex-col justify-center md:justify-between items-center md:items-start'>
                    <Image src={'/assets/blg3.png'} width={817} height={500} alt='img' />
                    <div className='mt-5 flex items-center gap-3 text-sm lg:text-base'>
                        <Image src={'/assets/admin.png'} width={14.48} height={16.15} alt='img'/>
                        <p>Admin</p>
                        <Image src={'/assets/calender.png'} width={16.67} height={16.67} alt='img'/>
                        <p>14th Oct 2022</p>
                        <Image src={'/assets/tag.png'} width={18.91} height={18.91} alt='img'/>
                        <p>Wood</p>
                    </div>
                    <h2 className='text-[30px] font-medium text-black'>Going all-in with millennial design</h2>
                    <p className='text-[15px] font-normal text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    <Link
                        href='#'
                        className='text-[black] mt-4 text-center text-base lg:text-lg border-b-2 border-black hover:border-mytextcolor hover:text-mytextcolor'
                    >
                        Read More
                    </Link>
                </li>
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
    )
}

export default Page