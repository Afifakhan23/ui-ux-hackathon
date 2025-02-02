'use client'
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoFilterSharp } from "react-icons/io5";
import Navbar from "../components/navbar";
import { sanityClient, urlFor } from "@/sanity/lib/client";
import SearchBar from "./searchBar";
import About from "../components/about";

interface Product {
  slug: { current: string };
  _id: string;
  name: string;
  imagePath: any;
  price: number;
  description: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = [12, 8, 4]; // Fixed number of products per page
  const [filterVisible, setFilterVisible] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false); // New state to track component mount

  const handleSearch = (searchText: string) => {
    filterProducts(searchText, selectedPriceRange);
  };
  const handlePriceFilter = () => {
    filterProducts("", selectedPriceRange);
    setFilterVisible(false); // Hide dropdown after applying filter
  };
  const filterProducts = (searchText: string, priceRange: string) => {
    let filtered = products;

    if (searchText) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = filtered.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]`;
        const data: Product[] = await sanityClient.fetch(query);
        setProducts(data);
        setFilteredProducts(data); // Initially set filteredProducts to all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
    // Set component mounted state to true after fetching products
    setIsMounted(true);
  }, []);

  // Prevent rendering dynamic content (filteredProducts) until after the component is mounted
  if (!isMounted) {
    return null; // Optionally return a loading indicator here instead of null
  }
  // Pagination Logic
  const startIndex = productsPerPage.slice(0, currentPage - 1).reduce((a, b) => a + b, 0);
  const endIndex = startIndex + productsPerPage[currentPage - 1];
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const toggleFilter = () => {
    setFilterVisible((prev) => !prev); // Toggle filter dropdown visibility
  };
  return (
    <>
      <Navbar />
      {/* Header Section */}
      <div className="bg-contact bg-center bg-cover bg-no-repeat h-[350px] w-full flex flex-col justify-center items-center">
        <Image src={'/assets/logo.png'} alt='logo' width={77} height={77} />
        <h2 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-center">Shop</h2>
        <p className="my-4 text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center">
          <Link href={'/'} className='font-bold'>Home</Link> <span className='font-bold w-[14px] h-[8px]'>{'>'}</span><Link href={'/shop'}>Shop</Link>
        </p>
      </div>

      {/* Filter & Search Section */}
      <div className="h-[100px] bg-mylightpink my-[47px] flex flex-col md:flex-row justify-evenly items-center relative">
        <ul className="h-[37px] flex space-x-5 items-center relative">
          <li className="flex cursor-pointer" onClick={toggleFilter}>
            <IoFilterSharp className="md:w-[28px] h-[20px] w-[20px] md:h-[28px] mr-3" />
            Filter
          </li>
          {/* Filter Dropdown Menu */}
          {filterVisible && (
            <div
              ref={filterRef}
              className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-4 w-[200px] z-10"
            >
              <p className="text-lg font-semibold mb-2">Filter by Price</p>
              <select
                className="w-full p-2 border border-gray-300 rounded-md mb-3"
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
              >
                <option value="1000-2000">$1000 - $2000</option>
                <option value="500-999">$500 - $999</option>
                <option value="100-499">$100 - $499</option>
              </select>
              <button
                onClick={handlePriceFilter}
                className="w-full bg-mytextcolor text-white px-4 py-2 rounded-md"
              >
                Apply
              </button>
            </div>
          )}
          <li className="border-l-2 border-black font-normal text-[10px] md:text-[16px] pl-3">
            Showing {currentProducts.length} of {filteredProducts.length} results
          </li>
        </ul>

        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Products Grid */}
      <div className="h-auto flex justify-center items-center">
        <div className="h-auto w-[320px] md:w-[1242px] flex flex-col justify-between items-center">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5">
            {currentProducts.map((product) => {
              if (!product.slug?.current) return null;

              const imageUrl = product.imagePath?.asset ? urlFor(product.imagePath).url() : null;

              return (
                <Link href={`/shop/${product.slug.current}`} key={product._id}>
                  <li className="w-[155px] h-[155px] md:w-[287px] md:h-[320px] flex flex-col justify-between items-center group">
                    <div className="relative w-[150px] h-[150px] md:w-[287px] md:h-[320px] flex justify-center items-center">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={product.name}
                          width={1000}
                          height={1000}
                          className="bg-violet-200 w-[150px] h-[150px]  md:w-[287px] md:h-[320px] rounded-md"
                        />
                      ) : (
                        <p className="text-red-500">Image not found</p>
                      )}
                      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-b-md">
                        <p className="text-[14px] lg:text-[16px] font-light">{product.name}</p>
                        <p className="text-[18px] lg:text-[24px] font-normal">${product.price}</p>
                      </div>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>

          {/* Pagination Section */}
          <ul className="w-[250px] h-[60px] flex justify-between items-center text-[20px] font-medium my-7">
            {[1, 2, 3].map((pageNumber) => (
              <li
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`w-[40px] h-[40px] rounded-[10px] flex justify-center items-center cursor-pointer 
                ${currentPage === pageNumber ? "bg-mydarkorange border-2 border-orange-300" : "bg-mylightorange hover:bg-mydarkorange"}`}
              >
                {pageNumber}
              </li>
            ))}

            {/* Next Button */}
            {currentPage < 3 && (
              <li
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="w-[60px] h-[40px] flex justify-center items-center cursor-pointer rounded-[10px] bg-mylightorange hover:bg-mydarkorange"
              >
                Next
              </li>
            )}
          </ul>
        </div>
      </div>
      <About/>
    </>
  );
};

export default ProductsPage;