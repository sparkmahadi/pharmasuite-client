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
  const { loading } = useSelector((state: any) => state.loader);

  const [isModified, setIsModified] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);  // Loading state for saving cart
  const [orderLoading, setOrderLoading] = useState(false); // Loading state for placing an order
  const [errorMessage, setErrorMessage] = useState("");   // Error message

  // Optimistically update cart and save immediately
  const increaseQuantity = async (productId: string) => {
    const updatedCart = cart.map((item) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    dispatch(setCart(updatedCart));
    await saveCart(updatedCart);
  };

  const decreaseQuantity = async (productId: string) => {
    const updatedCart = cart.map((item) =>
      item.productId === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    dispatch(setCart(updatedCart));
    await saveCart(updatedCart);
  };

  const deleteFromCart = async (productId: string) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    dispatch(setCart(updatedCart));
    await saveCart(updatedCart);
  };

  const saveCart = async (updatedCart: any) => {
    setSaveLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch(
        `http://192.168.0.104:5000/api/v1/carts/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart: updatedCart }),
        }
      );
      const data = await response.json();
      if (data.success) {
        console.log("Cart saved successfully");
        setIsModified(false);
      } else {
        throw new Error("Failed to save cart");
      }
    } catch (error) {
      setErrorMessage("Error saving cart. Please try again.");
      console.error("Error saving cart:", error);
    } finally {
      setSaveLoading(false);
    }
  };

  const handlePlaceOrder = async () => {
    setOrderLoading(true);
    setErrorMessage("");
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
        throw new Error("Failed to place order");
      }
    } catch (error) {
      setErrorMessage("Error placing order. Please try again.");
      console.error("Error placing order:", error);
    } finally {
      setOrderLoading(false);
    }
  };

  useEffect(() => {
    dispatch(showLoader());
    const loadCart = async () => {
      try {
        const cart = await getCart(userId);
        if (cart?.length) {
          dispatch(setCart(cart));
        }
      } catch (error) {
        setErrorMessage("Error loading cart. Please try again.");
        console.error("Error:", error);
      } finally {
        dispatch(hideLoader());
      }
    };

    loadCart();
  }, [userId, dispatch]);

  if (loading) return <Loader />;

  const totalCost = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Cart</h2>

      {errorMessage && (
        <p className="text-red-500 text-center">{errorMessage}</p>
      )}

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
                    disabled={saveLoading}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 text-white bg-blue-500 rounded"
                    onClick={() => increaseQuantity(item.productId)}
                    disabled={saveLoading}
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
                  disabled={saveLoading}
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
          <div className="flex justify-end mt-4 space-x-4">
            <button
              className={`px-4 py-2 text-white bg-teal-500 rounded-lg ${orderLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handlePlaceOrder}
              disabled={orderLoading || saveLoading}
            >
              {orderLoading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
