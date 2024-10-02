export const getOrderHistory = async (userId: string) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/orders/${userId}`);
    const data = await response.json();
    if (data.success) {
      return data.orders;
    } else{
      return data;
    }
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};