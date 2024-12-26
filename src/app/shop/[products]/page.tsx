'use client'
import React, { useState } from "react";
import Image from 'next/image'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from 'next/link'

import { products } from '@/app/shop/page'
import Navbar from "@/app/components/navbar";

const ProductPage = ({ params }: { params: { products: string } }) => {
  const productName = params.products; // `products` matches the [products] folder
  const [selectedSize, setSelectedSize] = useState("L");
  const [count, setCount] = useState(0); // Initialize state to hold the count value

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0)); // Prevent count from going below 0
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };
  const product = products.find(
    (prod) => prod.title.replace(/\s+/g, "-").toLowerCase() === productName
  );

  if (!product) {
    return <div>Product not found </div>;
  }

  return (
    <>
      <Navbar />
      <div>
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 ml-10">
          <ul className="flex space-x-2">
          <li><a href="/" className="hover:text-gray-700">Home</a></li>
          <li className="text-black text-bold w-[14px] h-[8px]">{'>'}</li>
            <li><a href="/shop" className="hover:text-gray-700">Shop</a></li>
          <li className="text-black text-bold w-[14px] h-[8px]">{'>'}</li>
            <li>|</li>
            <li>{product.title}</li>
          </ul>
        </nav>

        <div className="w-[320px] md:w-[1241px] grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          {/* Product Images */}
          <div className="w-[320px] md:w-[553px] h-auto md:h-[500px] flex justify-evenly md:justify-between items-start">
            <div className="w-[76px] h-[380px] md:h-[416px] flex flex-col justify-between items-start">
              <Image src={product.src} alt='pic' width={76} height={76} className="bg-mylightorange" />
              <Image src={product.src} alt='pic' width={76} height={76} className="bg-mylightorange" />
              <Image src={product.src} alt='pic' width={76} height={76} className="bg-mylightorange" />
              <Image src={product.src} alt='pic' width={76} height={76} className="bg-mylightorange" />

            </div>
            <div className="w-[210px] md:w-[423px] h-[380px] md:h-[500px] bg-mylightorange flex items-center">
              <Image src={product.src} alt='pic' width={423} height={391} />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-[300px] md:w-[606.01px] h-auto md:h-[730.87px] mx-auto my-5">
            <h1 className="text-[42px] font-normal mb-4">{product.title}</h1>
            <p className="text-[24px] text-mytextcolor mb-2">Rs. {product.price}</p>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-500 mr-5 space-x-2">
                <IoIosStar className="w-5 h-5" />
                <IoIosStar className="w-5 h-5" />
                <IoIosStar className="w-5 h-5" />
                <IoIosStar className="w-5 h-5" />
                <IoIosStarHalf className="w-5 h-5" />
              </div>
              <span className="ml-2 text-sm text-gray-500 border-l-2 border-mytextcolor pl-5">5 Customer Review</span>
            </div>

            <p className="w-[300px] md:w-[424px]  mb-6 text-[13px]">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>

            {/* Size Selector */}
            <div className="mb-4">
              <h4 className="text-[14px] text-mytextcolor font-normal mb-2">Size</h4>
              <div className="flex space-x-3">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeChange(size)}
                    className={`w-[30px] h-[30px] border rounded-[5px] ${selectedSize === size ? "bg-mydarkorange" : "bg-mylightpink"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="text-[14px] text-mytextcolor font-normal mb-2">Color</h3>
              <div className="flex space-x-2">
                <div className="bg-[#816DFA] w-8 h-8 rounded-full cursor-pointer" />
                <div className="bg-[#000000] w-8 h-8 rounded-full cursor-pointer" />
                <div className="bg-[#CDBA7B] w-8 h-8 rounded-full cursor-pointer" />
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button className="px-4 py-2" onClick={handleDecrement}>-</button>
                <div className="w-12 text-center border-l border-r border-gray-300">{count}
                </div>
                <button className="px-4 py-2" onClick={handleIncrement}>+</button>
              </div>
              <button className="px-6 py-3 text-black border-2 border-black rounded-lg hover:bg-black hover:text-white">
                Add To Cart
              </button>
            </div>

            {/* SKU, Category, Tags */}
            <div className="text-sm text-gray-500 space-y-2">
              <p>
                SKU : SS001
              </p>
              <p>
                Category : Sofas
              </p>
              <p>
                Tags : Sofa, Chair, Home, Shop
              </p>
              <p className="flex justify-between items-center w-[150px]">
                Share : <FaFacebook className="w-5 h-5 text-black" /> <FaLinkedin className="w-5 h-5 text-black" /> <AiFillTwitterCircle className="w-6 h-6 text-black" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto md:h-[744px] flex flex-col justify-evenly items-center">
      <div className="w-[320px] md:w-[700px] flex justify-evenly items-center">
        <h2 className="font-normal text-[14px] md:text-[24px]">Description</h2>
        <h2 className="font-normal text-[14px] md:text-[24px] text-mytextcolor">Additional Information</h2>
        <h2 className="font-normal text-[14px] md:text-[24px] text-mytextcolor">Reviews [5]</h2>
      </div><br/>
      <div>
      <p className="w-[300px] md:w-[1026px] text-mytextcolor text-[14px] md:[16px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores explicabo quasi modi consequatur? Ratione, laborum, nobis in similique quod, veniam aut animi quae dignissimos natus modi! Quaerat, impedit quisquam!</p><br />
      <p className="w-[300px] md:w-[1026px] text-mytextcolor text-[14px] md:[16px] font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo velit ab, sit quas non voluptatum vitae quam blanditiis aliquid molestias nisi facere provident, harum ratione saepe porro culpa, fuga laboriosam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo velit ab, sit quas non voluptatum vitae quam blanditiis aliquid molestias nisi facere provident, harum ratione saepe porro culpa, fuga laboriosam.</p>
      </div>
      <div className='h-[350px] md:h-[348px] w-[300px] md:w-[1239px] flex flex-col md:flex-row justify-between items-center'>
        <Image src={'/assets/othersofa1.png'} alt='img' width={605} height={348} className="bg-mylightorange"/>
        <Image src={'/assets/othersofa2.png'} alt='img' width={605} height={348} className="bg-mylightorange"/>
      </div>
      </div>

      <div className="h-auto w-full flex flex-col items-center justify-evenly px-4 py-8 lg:py-16">
        <div className="text-center mb-8">
          <h2 className="font-normal text-[24px] lg:text-[36px]">Related Products</h2>
        </div>
        <ul className="w-[320px] md:w-[1240px] h-[1200px] md:h-[397px] flex flex-col md:flex-row justify-center items-center">
          <li className="w-[287px] h-[300px] md:h-[350px] flex flex-col justify-between items-center hover:bg-mylightblack">
            <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
              <Image
                src="/assets/picks1.png"
                width={240}
                height={174}
                alt="picks1"

              />
            </div>
            <div className='w-[199px] h-[96px]'>
              <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                Trenton modular sofa_3
              </p>
              <p className="text-[18px] lg:text-[24px] font-normal text-center">
                Rs. 25,000.00
              </p>
            </div>
          </li>
          <li className="w-[287px] h-[300px] md:h-[350px] flex flex-col items-center hover:bg-mylightblack">
            <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
              <Image
                src="/assets/picks2.png"
                width={240}
                height={174}
                alt="picks1"

              />
            </div>
            <div className='w-[199px] h-[96px]'>
              <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                Trenton modular sofa_3
              </p>
              <p className="text-[18px] lg:text-[24px] font-normal text-center">
                Rs. 25,000.00
              </p>
            </div>
          </li>
          <li className="w-[287px] h-[300px] md:h-[350px] flex flex-col items-center hover:bg-mylightblack">
            <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
              <Image
                src="/assets/picks3.png"
                width={240}
                height={174}
                alt="picks1"

              />
            </div>
            <div className='w-[199px] h-[96px]'>
              <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                Trenton modular sofa_3
              </p>
              <p className="text-[18px] lg:text-[24px] font-normal text-center">
                Rs. 25,000.00
              </p>
            </div>
          </li>
          <li className="w-[287px] h-[300px] md:h-[350px] flex flex-col items-center hover:bg-mylightblack">
            <div className='w-[287px] h-[200px] md:h-[287px] flex justify-center items-center '>
              <Image
                src="/assets/picks4.png"
                width={240}
                height={174}
                alt="picks1"

              />
            </div>
            <div className='w-[199px] h-[96px]'>
              <p className="text-[14px] lg:text-[16px] font-light mt-2 text-center">
                Trenton modular sofa_3
              </p>
              <p className="text-[18px] lg:text-[24px] font-normal text-center">
                Rs. 25,000.00
              </p>
            </div>
          </li>
        </ul>
        <Link
          href={'#'}
          className="mt-8 text-[18px] lg:text-[24px] border-b-2 border-black hover:border-myorange hover:text-myorange"
        >
          View More
        </Link>
      </div>
    </>
  );
};

export default ProductPage;
