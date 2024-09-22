import getOtherProductsByCat from "@/lib/other-products/getOtherProductsByCat";
import React from "react";
import ProductCard from "../Products/ProductCard";
import { MedicineItem } from "@/types/product";
import { myStyles } from "@/app/variables/myStyles";
import Image from "next/image";
import catBg from "@/public/category-background.webp";
import getCatByName from "@/lib/other-products/getCatByName";

export interface CatNameProps{
  catName : string,
  limit: number,
}
const CategorySection : React.FC<CatNameProps> = async ({ catName, limit }) => {
    const products = await getOtherProductsByCat(catName, limit);
    const catDetails = await getCatByName(catName);
  //   console.log(products);
  return (
    <div>
      <div className="pb-10">
        <h3 className={myStyles.pageTitle}>{catDetails?.title} Products</h3>
        <div>
          {products?.length ? (
            <div
              className={` px-2 md:px-5 xl:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg:gap-5`}
            >
              {products?.map((product: MedicineItem) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-orange-500 text-xl font-semibold">
              No products found or in stock
            </p>
          )}
        </div>
      </div>
      <div className="relative mb-48">
        <Image src={catBg} alt="" className="overflow-hidden absolute" />
        <div className="flex gap-10 z-50 absolute">
          <div className="w-3/5 relative">
            <Image
              src={catDetails?.banner_imgUrl}
              layout="fill"
              alt=""
              className="absolute min-h-full max-h-full"
            />
          </div>
          <div className="w-1/4 flex items-center text-right">
            <p className="text-6xl text-transparent bg-clip-text bg-gradient-to-b from-teal-400 to-emerald-700 font-black">
              {catDetails?.title}
            </p>
          </div>
          <div className="w-1/4 py-7">
            <p className="font-semibold text-sm">
              {catDetails?.cat_desc}
            </p>
          </div>
          <div className="w-1/6 flex justify-center items-center">
            <button className={`${myStyles.buttons} mx-auto`}>View all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
