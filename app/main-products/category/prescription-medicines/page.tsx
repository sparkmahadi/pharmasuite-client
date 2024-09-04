
import { myStyles } from "@/app/variables/myStyles";
import getProductsByCat from "@/lib/main-products/getProductsByCat";
import React from "react";
import { MedicineItem } from "@/types/product";
import ProductCard from "@/app/components/Products/ProductCard";

const PrescriptionMedicines = async () => {
  const products = await getProductsByCat("prescription");
  return (
    <div>
      <h3 className={myStyles.pageTitle}>Prescription Medicines</h3>
      <div
        className={` px-2 md:px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg:gap-5`}
      >
        {products?.map((product: MedicineItem) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PrescriptionMedicines;
