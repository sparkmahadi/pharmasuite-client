import { useState } from "react";

const PlaceOrderButton = ({ cartItems, shippingAddress }: { cartItems: any[]; shippingAddress: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const placeOrder = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems, shippingAddress }),
      });

      const result = await response.json();
      if (result.success) {
        alert(`Order placed successfully! Order ID: ${result.orderId}`);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error placing order:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={placeOrder}
      className="bg-green-500 text-white px-4 py-2 rounded"
      disabled={isLoading}
    >
      {isLoading ? "Placing Order..." : "Place Order"}
    </button>
  );
};

export default PlaceOrderButton;
