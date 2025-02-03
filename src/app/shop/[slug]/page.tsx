// import { Metadata } from "next";
// import { sanityClient, urlFor } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
// import Navbar from "@/app/components/navbar";
// import Image from "next/image";
// import { AiFillTwitterCircle } from "react-icons/ai";
// import { FaFacebook, FaLinkedin } from "react-icons/fa";
// import { IoIosStar, IoIosStarHalf } from "react-icons/io";
// import ProductPageClient from "./ProductPageClient";
// import Link from "next/link";
// import { FetchProducts } from "@/sanity/lib/fetchProduct"; // Utility function

// type ProductPageProps = {
//   params: { slug: string };
// };

// // Metadata generation for dynamic product pages
// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const product = await FetchProducts(params.slug);

//   if (!product) {
//     return {
//       title: "Product Not Found",
//       description: "The product you're looking for is not available.",
//       keywords: "product not found, unavailable product",
//     };
//   }

//   return {
//     title: `${product.name} | Best Furniture Online`,
//     description: product.description,
//     keywords: `furniture, ${product.category}, ${product.name}, affordable furniture`,
//     authors: {
//       name: "Afifa Khan",
//     },
//   };
// }

// const ProductPage = async ({ params }: ProductPageProps) => {
//   const { slug } = params;
//   const product = await FetchProducts(slug);

//   if (!product) {
//     return <h1 className="text-center text-2xl font-bold mt-10">Product not found</h1>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div>
//         <nav className="text-sm text-gray-500 mb-6 ml-10">
//           <ul className="flex space-x-2">
//             <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
//             <li className="text-black text-bold w-[14px] h-[8px]">{'>'}</li>
//             <li><Link href="/shop" className="hover:text-gray-700">Shop</Link></li>
//             <li className="text-black text-bold w-[14px] h-[8px]">{'>'}</li>
//             <li>|</li>
//             <li>{product.name}</li>
//           </ul>
//         </nav>

//         <div className="w-[320px] md:w-[700px] lg:w-[1241px] grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
//           <div className="w-[320px] md:w-[700px] lg:w-[600px] h-auto lg:h-[350px] flex flex-col-reverse lg:flex-row justify-between lg:items-start">
//             <div className="w-[320px] md:w-[700px] lg:w-[90px] h-[80px] lg:h-[350px] flex flex-row lg:flex-col justify-evenly lg:justify-between items-center lg:items-start mt-5 lg:mt-0">
//               <Image src={urlFor(product.imagePath).url()} alt="pic" width={1000} height={1000} className="bg-mylightorange w-[70px] h-[80px] lg:w-[90px] rounded-md" />
//             </div>
//             <div className="w-[320px] md:w-[700px] lg:w-[450px] h-[360px] lg:h-[350px] bg-mylightorange flex items-center">
//               <Image src={urlFor(product.imagePath).url()} alt="pic" width={1000} height={1000} className="w-[320px] md:w-[700px] lg:w-[450px] h-[360px] lg:h-[350px] rounded-md" />
//             </div>
//           </div>

//           <div className="w-[300px] md:w-[700px] lg:w-[606.01px] h-auto lg:h-[600px] mx-auto">
//             <h1 className="text-[42px] font-normal mb-4">{product.name}</h1>
//             <p className="text-[24px] text-mytextcolor mb-2">$ {product.price}</p>
//             <div className="flex items-center mb-4">
//               <div className="flex text-yellow-500 mr-5 space-x-2">
//                 <IoIosStar className="w-5 h-5" />
//                 <IoIosStar className="w-5 h-5" />
//                 <IoIosStar className="w-5 h-5" />
//                 <IoIosStar className="w-5 h-5" />
//                 <IoIosStarHalf className="w-5 h-5" />
//               </div>
//               <span className="ml-2 text-sm text-gray-500 border-l-2 border-mytextcolor pl-5">5 Customer Reviews</span>
//             </div>
//             <p className="w-[300px] md:w-[700px] lg:w-[424px] mb-6 text-[13px]">
//               {product.description}
//             </p>
//             <ProductPageClient product={product} />
//             <div className="text-sm text-gray-500 space-y-2">
//               <p>SKU : SS001</p>
//               <p>Category : {product.category}</p>
//               <p>Tags : Sofa, Chair, Home, Shop</p>
//               <p className="flex justify-between items-center w-[150px]">
//                 Share : <FaFacebook className="w-5 h-5 text-black" /> <FaLinkedin className="w-5 h-5 text-black" /> <AiFillTwitterCircle className="w-6 h-6 text-black" />
//               </p>
//             </div>
//           </div>
//         </div>
//         <Link href={`/shop/picks/armchair`}>Armchair Coffee Table</Link>
//       </div>
//     </>
//   );
// };

// export default ProductPage;




import { Metadata } from "next";
import { sanityClient, urlFor } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import ProductPageClient from "./ProductPageClient"; // Import Client Component
import Link from "next/link";
import Picks from "@/app/components/picks";
import About from "@/app/components/about";
import { FetchProducts } from "@/sanity/lib/fetchProduct"; // ✅ Import from the utility file

// Type for Product Page Props
type ProductPageProps = {
  params: { slug: string };
};

// Define metadata dynamically based on the product
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await FetchProducts(params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you're looking for is not available.",
      keywords: "product not found, unavailable product",
    };
  }

  return {
    title: `${product.name} | Best Furniture Online`,
    description: product.description,
    keywords: `furniture, ${product.category}, ${product.name}, affordable furniture,furni,cheap furniture`,
    authors: {
      name: "Afifa Khan",
    },
  };
}
const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = params;
  const product = await FetchProducts(slug);

  if (!product) {
    return <h1 className="text-center text-2xl font-bold mt-10">Product not found</h1>;
  }

  return (
    <>
      <Navbar />
      <div>
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 ml-10">
          <ul className="flex space-x-2">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li className="text-black text-bold w-[14px] h-[8px]">{'>'}</li>
            <li><Link href="/shop" className="hover:text-gray-700">Shop</Link></li>
            <li className="text-black text-bold w-[14px] h-[8px]">{'>'}</li>
            <li>|</li>
            <li>{product.name}</li>
          </ul>
        </nav>

        <div className="w-[320px] md:w-[700px] lg:w-[1241px] grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
          {/* Product Images */}
          <div className="w-[320px] md:w-[700px] lg:w-[600px] h-auto lg:h-[350px] flex flex-col-reverse lg:flex-row justify-between lg:items-start">
            <div className="w-[320px] md:w-[700px] lg:w-[90px] h-[80px] lg:h-[350px] flex flex-row lg:flex-col justify-evenly lg:justify-between items-center lg:items-start mt-5 lg:mt-0">
              <Image src={urlFor(product.imagePath).url()} alt='pic' width={1000} height={1000} className="bg-mylightorange w-[70px] h-[80px] lg:w-[90px] rounded-md" />
              <Image src={urlFor(product.imagePath).url()} alt='pic' width={1000} height={1000} className="bg-mylightorange w-[70px] h-[80px] lg:w-[90px] rounded-md" />
              <Image src={urlFor(product.imagePath).url()} alt='pic' width={1000} height={1000} className="bg-mylightorange w-[70px] h-[80px] lg:w-[90px] rounded-md" />
              <Image src={urlFor(product.imagePath).url()} alt='pic' width={1000} height={1000} className="bg-mylightorange w-[70px] h-[80px] lg:w-[90px] rounded-md" />
            </div>
            <div className="w-[320px] md:w-[700px] lg:w-[450px] h-[360px] lg:h-[350px] bg-mylightorange flex items-center">
              <Image src={urlFor(product.imagePath).url()} alt='pic' width={1000} height={1000} className="w-[320px] md:w-[700px] lg:w-[450px] h-[360px] lg:h-[350px] rounded-md" />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-[300px] md:w-[700px] lg:w-[606.01px] h-auto lg:h-[600px] mx-auto">
            <h1 className="text-[42px] font-normal mb-4">{product.name}</h1>
            <p className="text-[24px] text-mytextcolor mb-2">$ {product.price}</p>

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

            <p className="w-[300px] md:w-[700px] lg:w-[424px] mb-6 text-[13px]">
              {product.description}
            </p>
            <ProductPageClient product={product} /> {/* Embed Client Component */}

            {/* SKU, Category, Tags */}
            <div className="text-sm text-gray-500 space-y-2">
              <p>SKU : SS001</p>
              <p>Category : {product.category}</p>
              <p>Tags : Sofa, Chair, Home, Shop</p>
              <p className="flex justify-between items-center w-[150px]">
                Share : <FaFacebook className="w-5 h-5 text-black" /> <FaLinkedin className="w-5 h-5 text-black" /> <AiFillTwitterCircle className="w-6 h-6 text-black" />
              </p>
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
            <p className="w-[300px] md:w-[700px] lg:w-[1026px] text-mytextcolor text-[14px] lg:[16px] font-medium">{product.description} Perfect for any modern home & office, this {product.name} is available in multiple sizes to fit your unique style and space.<br /><span className="text-[#B39327]">
              Treat yourself to the ultimate blend of comfort and style with this luxurious {product.name}.
            </span>
            </p>
          </div>
          <div className='h-[410px] md:w-[700px] lg:h-[350px] w-[320px] lg:w-[1110px] flex flex-col md:flex-row justify-between items-center my-2'>
            <Image src={urlFor(product.imagePath).url()} alt='img' width={550} height={350} className="bg-mylightorange h-[200px] lg:h-[350px] w-[320px] lg:w-[550px] " />
            <Image src={urlFor(product.imagePath).url()} alt='img' width={550} height={350} className="bg-mylightorange h-[200px] lg:h-[350px] w-[320px] lg:w-[550px]" />
          </div>
        </div>
        
      </div>
      <Picks/>
      <About/>
    </>
  );
};

export default ProductPage;

