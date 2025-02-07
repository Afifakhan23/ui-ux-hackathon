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

      <SignedIn>
        <div className='w-full h-[200px] flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-semibold'>Welcome to Furniora! You are now signed in and ready to explore. ✨</h2>
          <br />
          <button className='w-[215px] h-[64px] border-2 border-myorange rounded-[15px] hover:bg-myorange hover:text-white'>
            <SignOutButton />
          </button>
        </div>
      </SignedIn>

      <SignedOut>
        <div className='h-[460px] px-0 lg:px-32 flex justify-center items-center'>
          <div className='w-[280px] lg:w-[408px] h-[450px] flex flex-col items-center justify-evenly rounded-md bg-purple-200 border-2 border-purple-400 shadow-lg shadow-slate-300'>
            <Image src={require('@/../public/assets/logo.png')} alt='img' width={100} height={100}/>
            <h2 className="text-[20px] lg:text-[25px] font-semibold">Welcome to Furniora</h2>

          {/* Introductory Paragraph */}
          <p className="text-center text-gray-700 px-4 text-sm">
            Log in to access your personalized furniture store experience. Save your favorite items, and enjoy a seamless shopping journey.
          </p>
            <SignInButton mode="modal">
              <button className="w-[215px] h-[64px] border-2 border-myorange rounded-[15px] hover:bg-myorange hover:text-white">
                Log In
              </button>
            </SignInButton>
             {/* Additional Paragraph */}
          <p className="text-center text-gray-600 px-4 text-xs">
            By logging in, you agree to our Terms of Service and Privacy Policy.
          </p>
          </div>
        </div>
      </SignedOut>
      <About />
    </>
  );
};

export default Page;