import { myStyles } from "@/app/variables/myStyles";
import getAllCategories from "@/lib/other-products/getAllCategories";
import { Category, ShopByCategoryProps } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopByCategory: React.FC<ShopByCategoryProps> = async ({categories}) => {
  
  return (
    <div>
      <h3 className={myStyles.pageTitle}>Shop by Categories</h3>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-3 lg:gap-6">
        {
          categories.length > 0 ?
          categories?.map((cat: Category, index: number) => (
            <div
              key={index}
              className="w-full bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="h-20 lg:h-[9rem]">
                <Link href={cat.href}>
                  <Image
                    width={300}
                    height={300}
                    src={cat.imgSrc}
                    alt={cat.imgAlt}
                    priority={false}
                  />
                </Link>
              </div>
              <div className="p-2 text-center">
                <h2
                  className="text-xs md:text-base font-semibold text-gray-800"
                  title={cat.title}
                >
                  {cat.title}
                </h2>
              </div>
            </div>
          ))
          :
          <p>No categories found</p>
        }
      </div>
    </div>
  );
};

export default ShopByCategory;
