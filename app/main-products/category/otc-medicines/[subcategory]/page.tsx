
import getProductsByCat from "@/lib/main-products/getProductsByCat";
import getProductsBySubCat from "@/lib/main-products/getProductsBySubCat";
import { MedicineItem } from "@/types/product";
import { myStyles } from "@/app/variables/myStyles";
import React from "react";
import ProductCard from "@/app/components/Products/ProductCard";

const OTCMedicines = async ({ params }) => {
  const { subcategory } = params;
  const products = await getProductsBySubCat("otc", subcategory);
  return (
    <div>
      <h3 className={myStyles.pageTitle}>OTC Medicines for {subcategory}</h3>
      <div
        className={`px-2 md:px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg:gap-5`}
      >
        {products?.map((product: MedicineItem) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OTCMedicines;
