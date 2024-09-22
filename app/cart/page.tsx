"use client";

import { getCart } from "@/lib/users/cartFunction";
import { setCart } from "@/redux/cart/cartSlice";
import { hideLoader, showLoader } from "@/redux/user/loaderSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";

const Cart = () => {
  const dispatch = useDispatch();
  const { _id: userId } = useSelector((state: any) => state.user.userDetails);
  const { cart } = useSelector((state: any) => state.cart);
  const { loader } = useSelector((state: any) => state.user);
  // const [cart, setCart] = useState<any[]>([]);
  // const [loading, setLoading] = useState(true);
  const [isModified, setIsModified] = useState(false); // Track if cart has been modified

  const increaseQuantity = (productId: string) => {
    const updatedCart = cart.map((item) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
    setIsModified(true);
  };

  const decreaseQuantity = (productId: string) => {
    const updatedCart = cart.map((item) =>
      item.productId === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    setIsModified(true);
  };

  const deleteFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    setIsModified(true);
  };

  const saveCart = async () => {
    try {
      const response = await fetch(`http://192.168.0.104:5000/api/v1/carts/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });
      const data = await response.json();
      if (data.success) {
        console.log("Cart saved successfully");
        setIsModified(false);
      }
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const response = await fetch("http://192.168.0.104:5000/api/v1/orders/place", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      const data = await response.json();
      if (data.success) {
        alert(`Order placed successfully! Order ID: ${data.orderId}`);
        dispatch(setCart([]));
        setIsModified(false);
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order.");
    }
  };

useEffect(() => {
    dispatch(showLoader());
    const loadCart = async () => {
      try {
        await getCart(userId, dispatch);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        dispatch(hideLoader());
      }
    };

    loadCart();
  }, [userId, dispatch]);

  if (loader) return <Loader/>;

  // Calculate total cost for individual items and the final total
  const totalCost = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Cart</h2>
      {cart?.length ? (
        <div className="space-y-4">
          {cart.map((item: any) => (
            <div
              key={item.productId}
              className="flex justify-between items-center p-4 bg-white shadow rounded-lg border"
            >
              <div>
                <p className="text-lg font-semibold text-gray-700">
                  Product: {item.productName}
                </p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 text-white bg-blue-500 rounded"
                    onClick={() => decreaseQuantity(item.productId)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 text-white bg-blue-500 rounded"
                    onClick={() => increaseQuantity(item.productId)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-green-500">
                  BDT {(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  className="px-3 py-1 text-white bg-red-500 rounded ml-4"
                  onClick={() => deleteFromCart(item.productId)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <div className="text-right mt-4">
            <p className="text-xl font-bold text-gray-700">
              Total Cost: BDT {totalCost.toFixed(2)}
            </p>
          </div>
          {isModified && (
            <div className="flex justify-end mt-4 space-x-4">
              <button
                className="px-4 py-2 text-white bg-green-500 rounded-lg"
                onClick={saveCart}
              >
                Save Changes
              </button>
              <button
                className="px-4 py-2 text-white bg-teal-500 rounded-lg"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
