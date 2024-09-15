import { useState } from "react";

const AddToCartButton = ({ productId }: { productId: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, quantity: 1 }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Product added to cart");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={addToCart}
      className="bg-blue-500 text-white px-4 py-2 rounded"
      disabled={isLoading}
    >
      {isLoading ? "Adding..." : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
