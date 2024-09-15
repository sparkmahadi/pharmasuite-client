import { useState } from "react";

const CancelOrderButton = ({ orderId }: { orderId: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const cancelOrder = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/orders/cancel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Order cancelled successfully");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error cancelling order:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={cancelOrder}
      className="bg-red-500 text-white px-4 py-2 rounded"
      disabled={isLoading}
    >
      {isLoading ? "Cancelling..." : "Cancel Order"}
    </button>
  );
};

export default CancelOrderButton;
