'use client'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import { removeFromCart } from "@/app/redux/cartSlices";
import Navbar from "../components/navbar";
import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
import Link from "next/link";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate subtotal for each item and total for all items
  const calculateSubtotal = (price: number, quantity: number) => price * quantity;
  const total = cart.reduce((acc, item) => acc + calculateSubtotal(item.price, item.quantity), 0);

  return (
    <>
      <Navbar />
      <div className="bg-contact bg-center bg-cover bg-no-repeat min-h-[350px] sm:min-h-[316px] w-full flex flex-col justify-center items-center">
        <Image src={'/assets/logo.png'} alt='logo' width={77} height={77} />
        <h2 className="text-[32px] sm:text-[40px] lg:text-[60px] font-bold text-center">
          Cart
        </h2>
        <p className="my-4 text-[16px] sm:text-[18px] lg:text-[20px] font-normal text-center">
          <Link href='/' className='font-bold'>Home</Link> <span className='font-bold w-[14px] h-[8px]'>{'>'}</span> Cart
        </p>
      </div>
      <div className='flex justify-center items-start py-10'>
        <div className='w-[320px] md:w-[730px] lg:w-[1240px] h-auto flex flex-col md:flex-row justify-between items-center lg:items-start'>
          <div className='w-[310px] md:w-[400px] lg:w-[817px] h-auto flex flex-col justify-between items-between'>
            <ul className='flex justify-evenly lg:justify-end items-center bg-mylightorange text-[16px] font-medium py-5'>
              <li className='lg:mr-28 mr-0'>Product</li>
              <li className='lg:mr-28 mr-0'>Price</li>
              <li className='lg:mr-16 mr-0'>Quantity</li>
              <li className='lg:mr-28 mr-0'>Subtotal</li>
            </ul>
            {cart.length === 0 ? (
              <p className="text-center mt-10">Your cart is empty.</p>
            ) : (
              <div className="space-y-6 my-5">
                {cart.map((item) => (
                  <div key={item.id + item.size} className='flex items-center justify-between text-[11px] lg:text-[15px]'>
                    <Image src={item.image} alt={item.name} width={80} height={80} className="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] bg-[#F5EFFF]" />
                    <p className='lg:mr-28 mr-0'>{item.name} - {item.size}</p>
                    <p className='lg:mr-28 mr-0'>$ {item.price}</p>
                    <p className='lg:mr-16 mr-0'>Qty: {item.quantity}</p>
                    <p className='lg:mr-28 mr-0'>$ {calculateSubtotal(item.price, item.quantity)}</p>
                    <button onClick={() => dispatch(removeFromCart({ id: item.id, size: item.size }))}>
                      <AiFillDelete className="text-red-500 h-5 w-5 lg:w-6 lg:h-6" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className='w-[320px] lg:w-[393px] h-[390px] bg-mylightorange text-center flex flex-col items-center justify-evenly'>
            <h2 className='text-[32px] font-semibold'>Cart Totals</h2>
            <pre>Subtotal    <span className='text-mytextcolor'>$ {total}</span></pre>
            <pre>Total    <span className='text-[#B88E2F]'>$ {total}</span></pre>
            <Link href={'/checkout'} className='w-[215px] h-[64px] border-2 flex justify-center items-center border-black rounded-[15px] hover:bg-black hover:text-white'>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
