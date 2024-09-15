import { useState } from "react";

const RemoveFromCartButton = ({ productId }: { productId: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const removeFromCart = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/cart/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Product removed from cart");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={removeFromCart}
      className="bg-gray-500 text-white px-4 py-2 rounded"
      disabled={isLoading}
    >
      {isLoading ? "Removing..." : "Remove from Cart"}
    </button>
  );
};

export default RemoveFromCartButton;
