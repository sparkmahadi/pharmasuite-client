import { CartData } from "@/types/cartData";
import { AppDispatch } from '@/redux/store';
import { setOrders } from "@/redux/order/orderSlice";


export const getOrderHistory = async (userId: string) => {
  try {
    const response = await fetch(`http://192.168.0.104:5000/api/v1/orders/${userId}`);
    const data = await response.json();
    if (data.success) {
      return data.orders;
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};