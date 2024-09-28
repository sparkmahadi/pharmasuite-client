"use client"

import getProductById from '@/lib/all-products/getProductById';
import { hideLoader, showLoader } from '@/redux/user/loaderSlice';
import { ProductProps } from '@/types/product';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState<ProductProps>();
    console.log(product);

    useEffect(() => {
        dispatch(showLoader());
        const loadCart = async () => {
            try {
                const pd = await getProductById(id as string);
                if (pd) {
                    setProduct(pd)
                }
            } catch (error) {
                console.error("Error:", error);
            } finally {
                dispatch(hideLoader());
            }
        };

        loadCart();
    }, []);

    const {
        item_name,
        manufacturers,
        sku_type,
        cat_name,
        path,
        alias,
    } = product || {}; // Destructure only if product is not undefined
    

    const productImage = product?.images[0]?.img || "default-image-path.jpg";
    const price = product?.inventory[0]?.price || 0;
    const regularPrice = product?.inventory[0]?.regular_price || 0;
    const stockQty = product?.inventory[0]?.stock_qty || 0;
    const discount = product?.inventory[0]?.discount || "0.00";
    const variation = product?.inventory[0]?.variation_option_name || "N/A";

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Product Image */}
            <div className="bg-gray-200 p-4">
                <img
                    src={`/${productImage}`}
                    alt={item_name}
                    className="object-cover w-full h-64"
                />
            </div>

            {/* Product Details */}
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{item_name}</h2>

                <p className="text-sm text-gray-500 mt-2">{sku_type}</p>

                <p className="mt-4 text-gray-600">
                    <span className="font-semibold">Manufacturer: </span>
                    {manufacturers}
                </p>

                <p className="mt-4 text-gray-600">
                    <span className="font-semibold">Category: </span>
                    {cat_name}
                </p>

                <p className="mt-4 text-gray-600">
                    <span className="font-semibold">Variation: </span>
                    {variation}
                </p>

                {/* Price and Stock */}
                <div className="mt-6">
                    {discount !== "0.00" && (
                        <span className="text-red-500 line-through mr-4">
                            ${regularPrice.toFixed(2)}
                        </span>
                    )}
                    <span className="text-xl font-bold text-teal-500">
                        ${price.toFixed(2)}
                    </span>
                    <p className="text-gray-500 mt-2">
                        {stockQty > 0 ? `In Stock (${stockQty})` : "Out of Stock"}
                    </p>
                </div>

                {/* Path and Alias */}
                <div className="mt-4">
                    <p className="text-sm text-gray-500">Alias: {alias}</p>
                    <p className="text-sm text-gray-500">Path: {path}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;