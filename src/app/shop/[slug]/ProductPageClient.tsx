'use client';

import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "@/app/redux/cartSlices";
import { urlFor } from "@/sanity/lib/client";
import swal from 'sweetalert2'

// Define the product type
export interface Product {
  _id: string;
  name: string;
  price: number;
  imagePath: string;
}

interface ProductPageClientProps {
  product: Product;
}

const ProductPageClient: React.FC<ProductPageClientProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [popupVisible, setPopupVisible] = useState(false); // State to control popup visibility

  const handleSizeChange = (size: string) => setSelectedSize(size);
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: urlFor(product.imagePath).url(),
      quantity,
      size: selectedSize,
    }));

  swal.fire({
      position:'center',
      icon:'success',
      title:`${product.name} added to cart`,
      showConfirmButton:false,
      timer:1000,
    })
  };

  return (
    <>
      {/* Size Selector */}
      <div className="mb-4">
        <h4 className="text-[14px] text-mytextcolor font-normal mb-2">Size</h4>
        <div className="flex space-x-3">
          {["L", "XL", "XS"].map((size) => (
            <button
              key={size}
              onClick={() => handleSizeChange(size)}
              className={`w-[30px] h-[30px] border rounded-[5px] ${
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
    </>
  );
};

export default ProductPageClient;

