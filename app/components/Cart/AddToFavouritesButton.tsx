"use client"

import { addToFavourites } from "@/lib/users/favouriteFunction";
import { useState } from "react";
import { useSelector } from "react-redux";

const AddToFavoritesButton = ({ productId }: { productId: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector((state: any) => state.user.userDetails);

  const handleAddToFavs = async () => {
    setIsLoading(true);
    if(userData?._id === "" || undefined ){
      setIsLoading(false);
      window.alert("user not logged in");
      return;
    }
    const favData = {
      userId: userData?._id,
      productId,
    };

    try {
      const postFavourite = await addToFavourites(favData);
      setIsLoading(false);
      if (postFavourite?.success) {
        window.alert(postFavourite?.message);
      }
      console.log(postFavourite);
    } catch (error) {
      setIsLoading(false);
      console.error("Failed to add to favourites", error);
    }
  };

  return (
    <button
      onClick={handleAddToFavs}
      className="bg-red-500 text-white px-4 py-2 rounded"
      disabled={isLoading}
    >
      {isLoading ? "Adding..." : "Add to Favorites"}
    </button>
  );
};

export default AddToFavoritesButton;
