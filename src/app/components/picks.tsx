'use client';

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const productDetail = [
  {id:'1', href: '/picks/item/armchair-coffee-table', src: '/assets/armchair-coffee-table.png', title: 'Armchair Coffee Table', price: 2100,category:"Chair",description:'The Armchair Coffee Table is a stylish and functional addition to any living space. Designed to complement armchairs and sofas, this table offers a perfect balance of elegance and practicality.' },
  { id:'2',href: '/picks/item/blue-sofa-set', src: '/assets/blue-sofa-set.png',title: 'Blue Sofa Set', price: 2500,category:"Sofa",description:'The Blue Sofa Set brings elegance and comfort to your living space with its sophisticated design and plush seating.' },
  { id:'3',href: '/picks/item/modern-sideboard', src: '/assets/modern-sideboard.png',title: 'Modern Sideboard', price: 1500 ,category:"Sideboard",description:'The Modern Sideboard is a perfect blend of style and functionality, designed to elevate your living or dining space.'},
  { id:'4',href: '/picks/item/elegant-armchair', src: '/assets/elegant-armchair.png', title: 'Elegant Armchair', price: 1800 ,category:"Chair",description:'The Elegant Armchair is a perfect combination of comfort and sophistication, designed to enhance any living space with its timeless appeal.'},
];
const Picks = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 200,
    cssEase: "linear",
    responsive: [
      {
        breakpoint:1540,
        settings:{
          slidesToShow: 4,
        },
      },
      {
        breakpoint:900,
        settings:{
          slidesToShow: 2,
        },
      },
      { 
        breakpoint: 480,
         settings: 
         { slidesToShow: 1 } 
      },
    ],
  };

  return (
    <div className="w-full flex flex-col items-center justify-evenly px-4 py-8 lg:py-16">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-[24px] lg:text-[36px] font-medium">Top Picks For You</h2>
        <p className="text-[14px] lg:text-[16px] text-gray-500 mt-2">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Slider */}
      <div>
        <Slider {...settings} className="w-[270px] md:w-[650px] lg:w-[1200px]">
          {productDetail.map((item,i) => (
            <Link href={item.href} key={i} className="p-2 lg:p-[10px]">
              <div className="w-[260px] md:w-[287px] lg:w-[287px] h-[287px] flex justify-center items-center bg-[#F5EFFF] rounded-lg">
                <Image src={item.src} width={287} height={287} alt={item.title} className="w-[260px] lg:w-[287px] h-[287px] lg:rounded-lg" />
              </div>
              <div className="mt-4 w-[260px] lg:w-[287px] flex flex-col items-center">
                <p className="text-[16px] lg:text-[18px] font-light">{item.title}</p>
                <p className="text-[18px] lg:text-[24px] font-semibold text-gray-700">$ {item.price}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      {/* View More Link */}
      <Link href="/shop" className="mt-8 text-[18px] lg:text-[24px] border-b-2 border-black hover:border-orange-500 hover:text-orange-500">
        View More
      </Link>
    </div>
  );
};

export default Picks;
