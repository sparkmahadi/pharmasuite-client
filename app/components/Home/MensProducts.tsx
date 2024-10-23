// import getOtherProductsByCat from "@/lib/other-products/getOtherProductsByCat";
// import React from "react";
// import ProductCard from "../Products/ProductCard";
// import { MedicineItem } from "@/types/product";
// import { myStyles } from "@/app/variables/myStyles";
// import Image from "next/image";
// import mensImage from "@/public/Men&apos; Products.webp";
// import catBg from "@/public/category-background.webp";

// const MensProducts:React.FC = async ({ products }) => {
//   //   console.log(products);
//   return (
//     <div>
//       <div className="pb-10">
//         <h3 className={myStyles.pageTitle}>Men&apos; Products</h3>
//         <div>
//           {products?.length ? (
//             <div
//               className={` px-2 md:px-5 xl:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg:gap-5`}
//             >
//               {products?.map((product: MedicineItem) => (
//                 <ProductCard key={product._id} product={product} />
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-orange-500 text-xl font-semibold">
//               No products found or added yet
//             </p>
//           )}
//         </div>
//       </div>
//       <div className="relative mb-48">
//         <Image src={catBg} alt="" className="overflow-hidden absolute" />
//         <div className="flex gap-10 z-50 absolute">
//           <div className="w-3/5 relative">
//             <Image
//               src={mensImage}
//               alt=""
//               className="absolute min-h-full max-h-full"
//             />
//           </div>
//           <div className="w-1/4 flex items-center text-right">
//             <p className="text-6xl text-transparent bg-clip-text bg-gradient-to-b from-teal-400 to-emerald-700 font-black">
//               Men&apos; Products
//             </p>
//           </div>
//           <div className="w-1/4 py-7">
//             <p className="font-semibold text-sm">
//               Men&apos; Products include all cosmetic products intended for use by
//               men, such as skincare products, hair care products, body care
//               products, sun care products, perfumes, and other decorative
//               cosmetics.
//             </p>
//           </div>
//           <div className="w-1/6 flex justify-center items-center">
//             <button className={`${myStyles.buttons} mx-auto`}>View all</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MensProducts;
