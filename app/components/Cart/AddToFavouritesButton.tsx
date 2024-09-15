"use client"

import { useState } from "react";

const AddToFavoritesButton = ({ productId }: { productId: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const addToFavorites = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Product added to favorites");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error adding to favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={addToFavorites}
      className="bg-red-500 text-white px-4 py-2 rounded"
      disabled={isLoading}
    >
      {isLoading ? "Adding..." : "Add to Favorites"}
    </button>
  );
};

export default AddToFavoritesButton;
