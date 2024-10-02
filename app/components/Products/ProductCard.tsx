import { MedicineItem } from "@/types/product";
import { myStyles } from "@/app/variables/myStyles";
import Image from "next/image";
import medicineImg from "@/public/fluclox-500-1631442367478.png"
import discount from "@/public/discount.png";
import React from "react";
import AddToCartButton from "../Cart/AddToCartButton";
import Link from "next/link";

const ProductCard: React.FC<MedicinesProps> = ({ product }) => {
  const buttons = "btn bg-teal-500 hover:bg-green-700 text-white";
  return (
    <div
      className={`border card card-compact bg-base-100 shadow-xl relative ${myStyles.zoomOnHover}`}
    >
      <figure>
        <Image src={medicineImg} alt="med" width={200} />
      </figure>

      {
        product?.inventory[0]?.discount != 0 &&
        <div>
          <Image src={discount} className="absolute top-0 left-3" alt="" />
          <div className="absolute top-0 left-5 text-white font-semibold text-center">
            <p className="text-[0.6rem]">{product?.inventory[0].discount}%</p>
            <p className="text-[0.5rem]">OFF</p>
          </div>
        </div>
      }

      <div className="p-3">
        <Link href={`/products/${product._id}`}><h3 className="card-title">{product.item_name}</h3></Link>
        <p className="text-orange-500 font-semibold text-sm pb-1">{product.manufacturers}</p>
        <p className="text-xs pb-2">
          {product?.item_desc?.length > 70
            ? product?.item_desc?.slice(0, 70) + "..."
            : product?.item_desc}
        </p>
        <p className="font-semibold pb-2">{product.sku_type}</p>

        <div className="flex justify-between items-center">
          <p className="text-sm">
            BDT. {product?.inventory[0].price}{" "}
            <span className="line-through pl-1">
              BDT. {product?.inventory[0].regular_price}
            </span>
          </p>

          

          <AddToCartButton productId={product._id} price={product?.inventory[0].price} productName={product.item_name}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

interface MedicinesProps {
  product: MedicineItem;
}
