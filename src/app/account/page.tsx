import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Link from 'next/link';
import About from '../components/about';
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs';

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="bg-contact bg-center bg-no-repeat h-[350px] w-full flex flex-col justify-center items-center">
        <Image src={'/assets/logo.png'} alt='logo' width={77} height={77} />
        <h2 className="text-[32px] sm:text-[40px] lg:text-[60px] font-bold text-center">Account</h2>
        <p className="my-4 text-[16px] sm:text-[18px] lg:text-[20px] font-normal text-center">
          <Link href='/' className='font-bold'>Home</Link> <span className='font-bold w-[14px] h-[8px]'>{'>'}</span> Account
        </p>
      </div>

      <SignedOut>
        <div className='h-[850px] md:h-[760px] px-0 lg:px-32 flex justify-center items-center'>
          <div className='w-[300px] lg:w-[508px] h-[600px] flex flex-col items-center justify-evenly rounded-md bg-slate-100'>
            <h2 className='text-[25px] lg:text-[36px] font-semibold'>Log In</h2>
            <SignInButton mode="modal">
              <button className="w-[215px] h-[64px] border-2 border-myorange rounded-[15px] hover:bg-myorange hover:text-white">
                Log In
              </button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className='w-full h-[200px] flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-semibold'>Welcome to Furniora! You are now signed in and ready to explore. ✨</h2>
          <br />
          <button className='w-[215px] h-[64px] border-2 border-myorange rounded-[15px] hover:bg-myorange hover:text-white'>
            <SignOutButton />
          </button>
        </div>
      </SignedIn>

      <About />
    </>
  );
};

export default Page;

// import React from 'react'
// import Image from 'next/image'
// import Navbar from '../components/navbar'
// import Link from 'next/link'
// import About from '../components/about'
// import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'

// const Page = () => {
//     return (
//         <>
//             <Navbar />
//             <div className="bg-contact bg-center bg-no-repeat h-[350px] w-full flex flex-col justify-center items-center">
//                 <Image src={'/assets/logo.png'} alt='logo' width={77} height={77} />
//                 <h2 className="text-[32px] sm:text-[40px] lg:text-[60px] font-bold text-center">
//                     Account
//                 </h2>
//                 <p className="my-4 text-[16px] sm:text-[18px] lg:text-[20px] font-normal text-center">
//                 <Link href='/' className='font-bold'>Home</Link> <span className='font-bold w-[14px] h-[8px]'>{'>'}</span> Account
//                 </p>
//             </div>
//             <div className='h-[850px] md:h-[760px] px-0 lg:px-32 flex flex-col md:flex-row justify-evenly items-center'>
//                 <div className='w-[300px] lg:w-[608px] h-[630px] flex flex-col items-start justify-evenly'>
//                     <h2 className='text-[25px] lg:text-[36px] font-semibold'>Log In</h2>
//                     <label htmlFor="name" className='text-[16px] font-medium'>Username or email address</label>
//                     <input type="text" className='h-[40px] lg:h-[75px] w-[300px] lg:w-[423px] outline-none border-2 border-mytextcolor rounded-md mt-3 mb-5 focus:border-myorange' />
//                     <label htmlFor="name" className='text-[16px] font-medium'>Password</label>
//                     <input type="text" className='h-[40px] lg:h-[75px] w-[300px] lg:w-[423px] outline-none border-2 border-mytextcolor rounded-md mt-3 mb-5 focus:border-myorange' />
//                     <div className='flex items-center'>
//                         <input type="checkbox" name="remember" id="remember" className='w-[30px] h-[27px]  mr-5' />
//                         <p>Remember me</p>
//                     </div>
//                     <div className='flex items-center'>
//                         <button className='w-[215px] h-[64px] border-2 border-myorange rounded-[15px] hover:bg-myorange hover:text-white mr-5'>
//                         <SignedOut>
//                             <SignInButton mode='modal'/>
//                         </SignedOut>
//                         <SignedIn>
//                             <SignOutButton/>
//                         </SignedIn>

//                         </button>
//                         <Link href='#' className='border-transparent border-b-2 hover:border-black'>Lost Your Password?</Link>
//                     </div>
//                 </div>
//                 <div className='w-[300px] lg:w-[608px] h-[630px] flex flex-col items-start justify-evenly'>
//                     <h2 className='text-[25px] lg:text-[36px] font-semibold'>Register</h2>
//                     <label htmlFor="name" className='text-[16px] font-medium'>Email address</label>
//                     <input type="text" className='h-[40px] lg:h-[75px] w-[300px] lg:w-[423px] outline-none border-2 border-mytextcolor rounded-md mt-3 mb-5 focus:border-myorange' />
//                     <p>A link to set a new password will be sent to your email address.</p><br />
//                     <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold'>privacy policy</span>.</p>
//                     <button className='w-[215px] h-[64px] border-2 border-black rounded-[15px] hover:bg-black hover:text-white mr-5'>Register</button>
//                 </div>
//             </div>
//             <About/>


//         </>
//     )
// }

// export default Page