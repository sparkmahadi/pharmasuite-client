import { useState } from "react";

const RemoveFromFavoritesButton = ({ productId }: { productId: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const removeFromFavorites = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/favorites/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Product removed from favorites");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error removing from favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={removeFromFavorites}
      className="bg-yellow-500 text-white px-4 py-2 rounded"
      disabled={isLoading}
    >
      {isLoading ? "Removing..." : "Remove from Favorites"}
    </button>
  );
};

export default RemoveFromFavoritesButton;
