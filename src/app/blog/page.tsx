import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/navbar'
import About from '../components/about'

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
            <div className='flex flex-col md:flex-row justify-evenly items-center md:items-start py-10'>
            <ul className='flex flex-col justify-evenly items-center'>
                <li className='w-[300px] md:w-[820px] h-[794px] text-mytextcolor flex flex-col justify-center md:justify-between items-center md:items-start'>
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
            <div className='flex flex-col justify-evenly items-center space-y-10'>
                <input type="text" name="text" id="text" className='w-[311px] h-[58px] border-2 border-mytextcolor rounded-[10px]' />
                <ul className='h-[353px] flex flex-col justify-between'>
                <h2 className='text-[24px] font-medium text-black'>Categories</h2>
                    <li className='w-[241px] flex justify-between text-mytextcolor'>
                        <div>Crafts</div>
                        <div>2</div>
                    </li>
                    <li className='w-[241px] flex justify-between text-mytextcolor'>
                        <div>Design</div>
                        <div>8</div>
                    </li>
                    <li className='w-[241px] flex justify-between text-mytextcolor'>
                        <div>Handmade</div>
                        <div>7</div>
                    </li>
                    <li className='w-[241px] flex justify-between text-mytextcolor'>
                        <div>Interior</div>
                        <div>1</div>
                    </li>
                    <li className='w-[241px] flex justify-between text-mytextcolor'>
                        <div>Wood</div>
                        <div>6</div>
                    </li>
                </ul>
                <div>
                <ul className='space-y-10 text-[14px] font-normal'>
                    <li className='flex justify-between items-center w-[252px]'>
                        <Image src={'/assets/post1.png'} width={80} height={80} alt='img'/>
                        <div className='ml-5'>
                            <h2>Going all-in with millennial design</h2>
                            <p className='text-[12px] font-normal text-mytextcolor'>03 Aug 2022</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center w-[252px]'>
                        <Image src={'/assets/post2.png'} width={80} height={80} alt='img'/>
                        <div className='ml-5'>
                            <h2>Exploring new ways of decorating</h2>
                            <p className='text-[12px] font-normal text-mytextcolor'>03 Aug 2022</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center w-[252px]'>
                        <Image src={'/assets/post3.png'} width={80} height={80} alt='img'/>
                        <div className='ml-5'>
                            <h2>Handmade pieces that took time to make</h2>
                            <p className='text-[12px] font-normal text-mytextcolor'>03 Aug 2022</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center w-[252px]'>
                        <Image src={'/assets/post4.png'} width={80} height={80} alt='img'/>
                        <div className='ml-5'>
                            <h2>Modern home in Milan</h2>
                            <p className='text-[12px] font-normal text-mytextcolor'>03 Aug 2022</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center w-[252px]'>
                        <Image src={'/assets/post5.png'} width={80} height={80} alt='img'/>
                        <div className='ml-5'>
                            <h2>Colorful office redesign</h2>
                            <p className='text-[12px] font-normal text-mytextcolor'>03 Aug 2022</p>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
            </div>
            <About/>
        </div>
    )
}

export default Page