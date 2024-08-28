import getAllCategories from "@/lib/getAllCategories";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface Category {
  title: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
}

interface ShopByCategoryProps {
  categories: Category[];
}

const ShopByCategory: React.FC = async () => {

  const categories = await getAllCategories();
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-3 lg:gap-6">
        
      {categories.map((category:Category, index:number) => (
        <div
          key={index}
          className="w-full bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="h-20 lg:h-[9rem]">
            <Link href={category.href}>
              <Image
              width={300}
              height={300}
                src={category.imgSrc}
                alt={category.imgAlt}
                priority={false}
              />
            </Link>
          </div>
          <div className="p-2 text-center">
            <h2
              className="text-xs md:text-base font-semibold text-gray-800"
              title={category.title}
            >
              {category.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopByCategory;
