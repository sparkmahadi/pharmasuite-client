import Image from "next/image";
import React from "react";

const ShopByCategory: React.FC = () => {
  const categories = [
    {
      title: "COVID Essentials",
      href: "/category/covid-essentials?cat_id=61d4321937005564c2588116",
      imgSrc: "https://imgur.com/nZsuHYh.jpg",
      imgAlt: "COVID Essentials",
    },
    {
      title: "Sexual Wellness",
      href: "/category/sexual-wellness-product?cat_id=61b9d572c407792bd45399e8",
      imgSrc: "https://imgur.com/LZC5mMh.jpg",
      imgAlt: "Sexual Wellness",
    },
    {
      title: "Diabetes Care",
      href: "/category/Diabetes-care-product?cat_id=61d4361d37005564c258a2c8",
      imgSrc: "https://imgur.com/MlpIZ2w.jpg",
      imgAlt: "Diabetes Care",
    },
    {
      title: "Womens Care",
      href: "/category/womens-care?cat_id=61ee4b9bb22e362b6cb7fbfc",
      imgSrc: "https://imgur.com/QokqtQB.jpg",
      imgAlt: "Womens Care",
    },
    {
      title: "Natural Food",
      href: "/category/natural-food?cat_id=61b9d5edc407792bd45399ec",
      imgSrc: "https://imgur.com/5h4cAhu.jpg",
      imgAlt: "Natural Food",
    },
    {
      title: "Men's Products",
      href: "/category/men's-products?cat_id=5f72eea24ff3e17a905c4ed6",
      imgSrc: "https://imgur.com/aXIuBBs.jpg",
      imgAlt: "Men's Products",
    },
    {
      title: "Devices & Equipment",
      href: "/category/devices-equipment?cat_id=61ee33390247a4272852cb05",
      imgSrc: "https://imgur.com/qPHYeWZ.jpg",
      imgAlt: "Devices & Equipment",
    },
    {
      title: "Herbal",
      href: "/category/herbal-product?cat_id=61b9d7ff2e015112dc6cc3d0",
      imgSrc: "https://imgur.com/MlpIZ2w.jpg",
      imgAlt: "Herbal",
    },
    {
      title: "Family Nutrition",
      href: "/category/herbal-product?cat_id=61b9d7ff2e015112dc6cc3d0",
      imgSrc: "https://imgur.com/otfb0IL.jpg",
      imgAlt: "Herbal",
    },
    {
      title: "Health and Beauty",
      href: "/category/herbal-product?cat_id=61b9d7ff2e015112dc6cc3d0",
      imgSrc: "https://imgur.com/otfb0IL.jpg",
      imgAlt: "Herbal",
    },
    {
      title: "Laundry and Households",
      href: "/category/herbal-product?cat_id=61b9d7ff2e015112dc6cc3d0",
      imgSrc: "https://imgur.com/MlpIZ2w.jpg",
      imgAlt: "Herbal",
    },
    {
      title: "Family Nutrition",
      href: "/category/herbal-product?cat_id=61b9d7ff2e015112dc6cc3d0",
      imgSrc: "https://imgur.com/MlpIZ2w.jpg",
      imgAlt: "Herbal",
    },
    {
      title: "Surgical",
      href: "/category/herbal-product?cat_id=61b9d7ff2e015112dc6cc3d0",
      imgSrc: "https://imgur.com/MlpIZ2w.jpg",
      imgAlt: "Herbal",
    },
    {
      title: "Health and Dental",
      href: "/category/herbal-product?cat_id=61b9d7ff2e015112dc6cc3d0",
      imgSrc: "https://imgur.com/MlpIZ2w.jpg",
      imgAlt: "Herbal",
    },
    {
      title: "Personal Care",
      href: "/category/herbal-product?cat_id=61b9d7ff2e015112dc6cc3d0",
      imgSrc: "https://imgur.com/MlpIZ2w.jpg",
      imgAlt: "Herbal",
    },
    {
      title: "Baby Care",
      href: "/category/herbal-product?cat_id=61b9d7ff2e015112dc6cc3d0",
      imgSrc: "https://imgur.com/MlpIZ2w.jpg",
      imgAlt: "Herbal",
    },
    {
      title: "Beverages",
      href: "/category/herbal-product?cat_id=61b9d7ff2e015112dc6cc3d0",
      imgSrc: "https://imgur.com/MlpIZ2w.jpg",
      imgAlt: "Herbal",
    },
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-3 lg:gap-6">
        
      {categories.map((category, index) => (
        <div
          key={index}
          className="w-full bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="relative h-20 lg:h-[9rem]">
            <a href={category.href} className="block h-full w-full">
              <Image
                layout="fill"
                src={category.imgSrc}
                alt={category.imgAlt}
                objectFit="cover"
              />
            </a>
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
