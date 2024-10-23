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

  const [saveLoading, setSaveLoading] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const updateCartQuantity = async (productId: string, delta: number) => {
    const updatedCart = cart.map((item: any) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + delta }
        : item
    );
    dispatch(setCart(updatedCart));
    await saveCart(updatedCart);
  };

  const increaseQuantity = (productId: string) => updateCartQuantity(productId, 1);

  const decreaseQuantity = (productId: string) => {
    const item = cart.find((i) => i.productId === productId);
    if (item?.quantity > 1) updateCartQuantity(productId, -1);
  };

  const deleteFromCart = async (productId: string) => {
    const updatedCart = cart.filter((item: any) => item.productId !== productId);
    dispatch(setCart(updatedCart));
    await saveCart(updatedCart);
  };

  const saveCart = async (updatedCart: any) => {
    setSaveLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch(
        `${process.env.BASE_URL}/api/v1/carts/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart: updatedCart }),
        }
      );
      const data = await response.json();
      if (!data.success) throw new Error("Failed to save cart");
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
      const response = await fetch(`${process.env.BASE_URL}/api/v1/orders/place`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      const data = await response.json();
      if (data.success) {
        alert(`Order placed successfully! Order ID: ${data.orderId}`);
        dispatch(setCart([])); 
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
    const loadCart = async () => {
      dispatch(showLoader());
      try {
        const data = await getCart(userId);
        if (data?.cart?.length) dispatch(setCart(data.cart));
      } catch (error) {
        setErrorMessage("Error loading cart. Please try again.");
        console.error("Error loading cart:", error);
      } finally {
        dispatch(hideLoader());
      }
    };

    loadCart();
  }, [userId, dispatch]);

  if (loading) return <Loader />;

  const totalCost = cart.reduce((acc:any, item:any) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto p-6 space-y-6 lg:space-y-0 lg:space-x-8">
      {/* Cart Items */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Cart</h2>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        {cart?.length ? (
          <div className="space-y-4">
            {cart.map((item: any) => (
              <div
                key={item.productId}
                className="flex justify-between items-center bg-white p-4 shadow rounded-lg border"
              >
                {/* Product Image */}
                <div className="w-24 h-24">
                  <img src={item.imageUrl} alt={item.productName} className="object-cover w-full h-full" />
                </div>

                {/* Product Details */}
                <div className="flex-1 px-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.productName}</h3>
                  <p className="text-sm text-gray-600">৳{item.price}</p>
                  <p className="text-sm text-gray-500">1 Pc x {item.quantity}</p>
                </div>

                {/* Quantity and Remove Buttons */}
                <div className="flex space-x-2 items-center">
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded"
                    onClick={() => deleteFromCart(item.productId)}
                  >
                    ×
                  </button>
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-2 py-1 bg-teal-500 text-white rounded"
                      onClick={() => decreaseQuantity(item.productId)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-teal-500 text-white rounded"
                      onClick={() => increaseQuantity(item.productId)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Cart Summary */}
      <div className="w-full lg:w-1/3 bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Cart Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>৳{totalCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>৳0.00</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>-৳1.20</span>
          </div>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>৳{(totalCost - 1.2).toFixed(2)}</span>
        </div>

        <div className="flex justify-between space-x-4 mt-6">
          <button className="bg-white text-teal-500 px-4 py-2 rounded-lg hover:bg-gray-100">
            Buy More
          </button>
          <button
            className="bg-white text-teal-500 px-4 py-2 rounded-lg hover:bg-gray-100"
            onClick={handlePlaceOrder}
            disabled={orderLoading}
          >
            {orderLoading ? "Placing Order..." : "Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
