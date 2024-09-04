import { myStyles } from "@/app/variables/myStyles";
import getAllSubCategories from "@/lib/main-products/getAllSubCategories";
import Link from "next/link";
import React from "react";

export interface SubCategory {
  cat_name: string;
  cat_description: string;
  _id: string;
}

const SubCategory = async () => {
  const categories = await getAllSubCategories("otc-medicines");
  return (
    <div>
      <h3 className={myStyles.pageTitle}>OTC Medicines</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-5 pt-10">
        {categories?.map((cat: SubCategory) => (
          <Link href={`otc-medicines/${cat.cat_name}`} key={cat._id}>
            <div className="card card-bordered bg-base-100 shadow-xl shadow-slate-300 transition-all duration-300 hover:scale-110">
              <div className="card-body">
                <h2 className="card-title">{cat.cat_name}</h2>
                <p>{cat.cat_description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
