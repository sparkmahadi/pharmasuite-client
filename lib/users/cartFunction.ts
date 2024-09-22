import { CartData } from "@/types/cartData";
import { AppDispatch } from '@/redux/store';
import { setCart } from "@/redux/cart/cartSlice";

export const addToCart = async (cartData: CartData) => {
  try {
    const response = await fetch(
      `http://192.168.0.104:5000/api/v1/carts/add-to-cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      }
    );
    console.log(response);
    const result = await response.json();
    if (response.ok) {
      console.log("Added to cart:", result);
    } else {
      console.error("Error adding to cart:", result.message);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // setIsAdding(false);
  }
};

export const getCart = async (userId: string, dispatch: AppDispatch) => {
  try {
    const response = await fetch(`http://192.168.0.104:5000/api/v1/carts/${userId}`);
    const data = await response.json();
    if (data.success) {
      // Dispatch the cart data to the Redux store
      dispatch(setCart(data.cart));
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};