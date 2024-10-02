import React from "react";
import ShopByCategory from "./ShopByCategory";
import getAllCategories from "@/lib/other-products/getAllCategories";
import CategorySection from "./CategorySection";

const Homepage = async() => {
    const categories = await getAllCategories();
    console.log("categories", categories);
    console.log('url', process.env.BASE_URL);
  return (
    <div className="max-w-7xl mx-auto">
      {/* <h3 className="text-center text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-teal-800 font-semibold 2xl:font-black py-5 xl:py-10">
        Shop By Category
      </h3> */}
      <div className="py-10">
        <ShopByCategory categories={categories}/>
      </div>
      <div className="py-10">
        <CategorySection catName={"mens-care"} limit={10}/>
      </div>
      <div className="py-10">
        <CategorySection catName={"devices-equipments"} limit={10}/>
      </div>
    </div>
  );
};

export default Homepage;
