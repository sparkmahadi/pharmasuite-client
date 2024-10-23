import ProductCard from "@/app/components/Products/ProductCard";
import { myStyles } from "@/app/variables/myStyles";
import getCatByName from "@/lib/other-products/getCatByName";
import getOtherProductsByCat from "@/lib/other-products/getOtherProductsByCat";
import { MedicineItem } from "@/types/product";
import React from "react";

// @ts-ignore
const CategoryDetails = async ({ params }) => {
  const { category } = params;
  const categoryDetails = await getCatByName(category);
  const products = await getOtherProductsByCat(category, 10);
  console.log(category);

  return (
    <div>
      <div>
        <h3 className={myStyles.pageTitle}>
          {categoryDetails?.title} Products
        </h3>
        <div>
          {products?.length ? (
            <div
              className={` px-2 md:px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg:gap-5`}
            >
              {products?.map((product: MedicineItem) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-orange-500 text-xl font-semibold">
              No products found or added yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
