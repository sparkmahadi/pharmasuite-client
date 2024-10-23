"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getOrderHistory } from "@/lib/users/orderFunction";

interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

interface Order {
  _id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: string;
  orderDate: string;
}

const OrderHistory = () => {
  const userData = useSelector((state: any) => state.user.userDetails);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const data = await getOrderHistory(userData?._id);
        console.log(data);
        if (data?.success) {
          setOrders(data.orders);
        } else{ 
          window.alert(data.message)
        }
      } catch (error:any) {
        console.error("Error fetching order history:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrderHistory();
  }, [userData]);

  const cancelOrder = async (orderId: string) => {
    try {
      const response = await fetch(
        `${process.env.BASE_URL}/api/v1/orders/cancel/${orderId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        // Update the order status in the local state
        setOrders((prevOrders) =>
          prevOrders.map((order:any) =>
            order._id === orderId ? { ...order, status: "Cancelled" } : order
          )
        );
        alert("Order cancelled successfully.");
      } else {
        alert("Failed to cancel the order.");
      }
    } catch (error) {
      console.error("Error cancelling order:", error);
    }
  };

  const isWithin12Hours = (orderDate: string) => {
    const orderTime = new Date(orderDate).getTime();
    const currentTime = Date.now();
    const twelveHoursInMillis = 12 * 60 * 60 * 1000;
    return currentTime - orderTime <= twelveHoursInMillis;
  };

  if (loading) return <Loader/>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Order History</h2>
      {orders.length ? (
        <div className="space-y-4">
          {orders.map((order: Order) => (
            <div
              key={order._id}
              className="p-4 bg-white shadow rounded-lg border space-y-3"
            >
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-700">
                  Order ID: {order._id}
                </p>
                <p
                  className={`text-sm font-semibold ${
                    order.status === "pending"
                      ? "text-yellow-500"
                      : order.status === "cancelled"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  Status: {order.status}
                </p>
              </div>
              <p className="text-sm text-gray-500">
                Order Date: {new Date(order.orderDate).toLocaleDateString()}
              </p>
              <div>
                {order.items.map((item: OrderItem, index: number) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mt-2"
                  >
                    <p className="text-gray-700">Product ID: {item.productId}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-lg font-semibold text-green-500">
                      BDT {item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-lg font-bold text-gray-700 text-right">
                Total Amount: BDT {order.totalAmount}
              </p>

              {/* Cancel Order Button, only visible if the order is within 12 hours and not cancelled */}
              {order.status === "pending" && isWithin12Hours(order.orderDate) && (
                <div className="flex justify-end mt-4">
                  <button
                    className="px-4 py-2 text-white bg-red-500 rounded-lg"
                    onClick={() => cancelOrder(order._id)}
                  >
                    Cancel Order
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No orders found</p>
      )}
    </div>
  );
};

export default OrderHistory;
