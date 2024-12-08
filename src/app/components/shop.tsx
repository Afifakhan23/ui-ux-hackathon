// import React from 'react';

// const products = [
//   { id: 1, name: 'Wooden Chair', price: 12000, image: '/images/chair.jpg' },
//   { id: 2, name: 'Dining Table', price: 25000, image: '/images/table.jpg' },
//   // Add more products as needed
// ];

// const Shop = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <header className="py-6 bg-white shadow">
//         <div className="container mx-auto flex justify-between items-center px-6">
//           <h1 className="text-2xl font-bold">Shop</h1>
//           <nav>
//             <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
//           </nav>
//         </div>
//       </header>

//       <main className="container mx-auto py-10 px-6">
//         <h2 className="text-xl font-bold mb-6">Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map(product => (
//             <div key={product.id} className="bg-white shadow rounded overflow-hidden">
//               <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">{product.name}</h3>
//                 <p className="text-gray-600">Rs. {product.price.toLocaleString()}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       <footer className="bg-gray-100 py-6 mt-10">
//         <div className="container mx-auto text-center text-gray-600">
//           &copy; 2024 My Shop. All Rights Reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Shop;
