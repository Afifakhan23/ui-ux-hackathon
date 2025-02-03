"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Picks, { productDetail } from "@/app/components/picks";
import Navbar from "@/app/components/navbar";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/cartSlices";
import Swal from "sweetalert2";

const ProductPage = ({ params }: { params: { data: string } }) => {
  const dispatch = useDispatch();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");

  // Get Product Details
  const productSlug = params.data; // ✅ Corrected variable name
  const product = productDetail.find(
    (prod) => prod.title.replace(/\s+/g, "-").toLowerCase() === productSlug
  );

  if (!product) {
    return <div className="text-center text-2xl mt-10">Product not found</div>;
  }

  // Handlers
  const handleSizeChange = (size: string) => setSelectedSize(size);
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.src,
        quantity,
        size: selectedSize,
      })
    );
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1300,
    });
  };

  return (
    <>
      <Navbar />
      <div>
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 ml-10">
          <ul className="flex space-x-2">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li className="text-black">{'>'}</li>
            <li><Link href="/shop" className="hover:text-gray-700">picks</Link></li>
            <li className="text-black">{'>'}</li>
            <li>{product.title}</li>
          </ul>
        </nav>

        <div className="w-[320px] md:w-[700px] lg:w-[1241px] grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
          {/* Product Images */}
          <div className="w-[320px] md:w-[700px] lg:w-[600px] h-auto lg:h-[350px] flex flex-col-reverse lg:flex-row justify-between lg:items-start">
            <div className="w-[320px] md:w-[700px] lg:w-[90px] h-[80px] lg:h-[350px] flex flex-row lg:flex-col justify-evenly lg:justify-between items-center lg:items-start mt-5 lg:mt-0">
              {[...Array(4)].map((_, index) => (
                <Image key={index} src={product.src} alt='pic' width={90} height={90} className="bg-mylightorange w-[70px] h-[80px] lg:w-[90px] rounded-md" />
              ))}
            </div>
            <div className="w-[320px] md:w-[700px] lg:w-[450px] h-[360px] lg:h-[350px] bg-mylightorange flex items-center">
              <Image src={product.src} alt='pic' width={1000} height={1000} className="w-[320px] md:w-[700px] lg:w-[450px] h-[360px] lg:h-[350px] rounded-md" />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-[300px] md:w-[700px] lg:w-[606.01px] h-auto lg:h-[600px] mx-auto">
            <h1 className="text-[42px] font-normal mb-4">{product.title}</h1>
            <p className="text-[24px] text-mytextcolor mb-2">$ {product.price}</p>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-500 space-x-2">
                <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf />
              </div>
              <span className="ml-2 text-sm text-gray-500 border-l-2 border-mytextcolor pl-5">5 Customer Reviews</span>
            </div>

            <p className="mb-6 text-sm">{product.description}</p>

            {/* Size Selector */}
            <div className="mb-4">
              <h4 className="text-sm text-mytextcolor font-semibold mb-2">Size</h4>
              <div className="flex space-x-3">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeChange(size)}
                    className={`w-10 h-10 border rounded-md ${
                      selectedSize === size ? "bg-mydarkorange" : "bg-mylightpink"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add To Cart */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button onClick={handleDecrease} className="px-4 py-2">-</button>
                <div className="w-12 text-center border-l border-r border-gray-300">{quantity}</div>
                <button onClick={handleIncrease} className="px-4 py-2">+</button>
              </div>
              <button
                className="px-6 py-3 text-black border-2 border-black rounded-lg hover:bg-black hover:text-white"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>

            {/* SKU, Category, Tags */}
            <div className="text-sm text-gray-500 space-y-2">
              <p>SKU: SS001</p>
              <p>Category: {product.category}</p>
              <p>Tags: Sofa, Chair, Home, Shop</p>
              <div className="flex space-x-2">
                <span>Share:</span>
                <FaFacebook className="w-5 h-5 text-black" />
                <FaLinkedin className="w-5 h-5 text-black" />
                <AiFillTwitterCircle className="w-6 h-6 text-black" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto flex flex-col justify-evenly items-center mt-5">
                  <div className="w-[320px] md:w-[700px] flex flex-col lg:flex-row justify-evenly items-center">
                    <h2 className="font-normal text-[14px] lg:text-[24px]">Description</h2>
                    <h2 className="font-normal text-[14px] lg:text-[24px] text-mytextcolor">Additional Information</h2>
                    <h2 className="font-normal text-[14px] lg:text-[24px] text-mytextcolor">Reviews [5]</h2>
                  </div><br />
                  <div>
                    <p className="w-[300px] md:w-[700px] lg:w-[1026px] text-mytextcolor text-[14px] lg:[16px] font-medium">{product.description} Perfect for any modern home & office, this {product.title} is available in multiple sizes to fit your unique style and space.<br /><span className="text-[#B39327]">
                      Treat yourself to the ultimate blend of comfort and style with this luxurious {product.title}.
                    </span>
                    </p>
                  </div>
                  <div className='h-[410px] md:w-[700px] lg:h-[350px] w-[320px] lg:w-[1110px] flex flex-col md:flex-row justify-between items-center my-2'>
                    <Image src={product.src} alt='img' width={550} height={350} className="bg-mylightorange h-[200px] lg:h-[350px] w-[320px] lg:w-[550px] " />
                    <Image src={product.src} alt='img' width={550} height={350} className="bg-mylightorange h-[200px] lg:h-[350px] w-[320px] lg:w-[550px]" />
                  </div>
                </div>
        {/* Picks Component */}
        <Picks />
      </div>
    </>
  );
};

export default ProductPage;

