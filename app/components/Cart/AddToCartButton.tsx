"use client";

import { addToCart } from "@/lib/users/cartFunction";
import React, { useState } from "react";
import { useSelector } from "react-redux";

interface AddToCartButtonProps {
  productId: string;
  price: number;
  productName: string
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId, price, productName }) => {
  const [isAdding, setIsAdding] = useState(false);
  const userData = useSelector((state: any) => state.user.userDetails);

  const handleAddToCart = async () => {
    setIsAdding(true);
    if(userData?._id === "" || undefined ){
      setIsAdding(false);
      window.alert("user not logged in");
      return;
    }
    const cartData = {
      userId: userData?._id,
      productId,
      productName,
      quantity: 1,
      price,
    };

    try {
      const postCart = await addToCart(cartData);
      setIsAdding(false);
      if (postCart?.success) {
        window.alert(postCart?.message);
      }
      console.log(postCart);
    } catch (error) {
      setIsAdding(false);
      console.error("Failed to add to cart", error);
    }
  };

  return (
    <button
      className="btn bg-teal-500 hover:bg-green-700 text-white btn-sm"
      onClick={handleAddToCart}
      disabled={isAdding} // Disable button when loading
    >
      {isAdding ? "Adding..." : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
