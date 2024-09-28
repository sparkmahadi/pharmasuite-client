
export const getFavourites = async (userId: string) => {
  try {
    const response = await fetch(`http://192.168.0.104:5000/api/v1/carts/${userId}`);
    const data = await response.json();
    if (data.success) {
      return data.items;
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};