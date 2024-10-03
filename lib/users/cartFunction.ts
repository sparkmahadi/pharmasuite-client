import { CartData } from "@/types/cartData";

export const addToCart = async (cartData: CartData) => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/v1/carts/add-to-cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      }
    );
    const result = await response.json();
    if (response.ok) {
      console.log("Added to cart:", result);
    } else {
      console.error("Error adding to cart:", result.message);
    }
    return result;
  } catch (error) {
    console.error("An error occurred:", error);
    return {
      success: false,
      message: "An error occurred while adding to cart",
    };
  } finally {
    // setIsAdding(false);
  }
};

export const getCart = async (userId: string) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/carts/${userId}`);
    const data = await response.json();
    if (data.success) {
      return data;
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};