"use client";

import React, { useEffect, useState } from "react";
import { getOrderHistory } from "@/lib/users/orderFunction";
import { useDispatch, useSelector } from "react-redux";
import { hideLoader, showLoader } from "@/redux/user/loaderSlice";
import getMainProducts from "@/lib/main-products/getMainProducts";
import Loader from "../components/Loader";
import { getFavourites } from "@/lib/users/favouriteFunction";
import { getCart } from "@/lib/users/cartFunction";
import { setCart } from "@/redux/cart/cartSlice";
import { setOrders } from "@/redux/order/orderSlice";
import Link from "next/link";
import { setFavourites } from "@/redux/favourites/favouritesSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { _id: userId, name, email, role } = useSelector((state: any) => state.user.userDetails);
  const { cart } = useSelector((state: any) => state.cart);
  const { favourites } = useSelector((state: any) => state.favourites);
  const { orders } = useSelector((state: any) => state.orders);
  const { loading } = useSelector((state: any) => state.loader);
  const [totalProducts, setTotalProducts] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);
  const [spendingSummary, setSpendingSummary] = useState({
    totalSpentThisMonth: 0,
    lastMonthSpent: 0,
  });
  const [notifications, setNotifications] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        dispatch(showLoader());

        // Cart data
        const cartData = await getCart(userId);
        const cart = cartData?.cart;
        if (cart?.length) {
          dispatch(setCart(cart));
        }

        // Order history
        const ordersData = await getOrderHistory(userId);
        const orders = ordersData?.orders;
        if (orders?.length) {
          dispatch(setOrders(orders));
          setRecentOrders(orders.slice(0, 5)); // Display the 5 most recent orders
        }

        // Favourites
        const favsData = await getFavourites(userId);
        const favourites = favsData?.favourites?.products;
        if (favourites?.length) {
          dispatch(setFavourites(favourites));
        }

        // Product data
        const products = await getMainProducts();
        setTotalProducts(products?.length);

        // Simulated spending summary data
        setSpendingSummary({
          totalSpentThisMonth: 500, // Replace with real calculation
          lastMonthSpent: 400, // Replace with real calculation
        });

        // Simulated notifications
        setNotifications([
          { id: 1, message: "Your recent order has been shipped." },
          { id: 2, message: "Don't miss out on the upcoming sale!" },
        ]);

        // Simulated recommended products
        setRecommendedProducts([
          { id: 1, item_name: "Vitamin D Supplement", price: 20 },
          { id: 2, item_name: "Pain Relief Cream", price: 15 },
        ]);

        setCartItems(cart.items);

      } catch (error) {
        console.error("Error loading dashboard data", error);
      } finally {
        dispatch(hideLoader());
      }
    };

    loadDashboardData();
  }, [userId, dispatch]);

  if (loading) return <Loader />;

  return (


        <div className="p-4">
          {/* Profile Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Welcome, {name}</h2>
            <p className="text-gray-500">Email: {email}</p>
          </div>

          {/* Cards Section for Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

            <Link href={"/orders"}>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-bold">Orders</h3>
                <p>Total Orders: {orders?.length}</p>
              </div>
            </Link>

            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-bold">Products</h3>
              <p>Total Products Viewed: {totalProducts}</p>
            </div>

            <Link href={"/favourites"}>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-bold">Favourites</h3>
                <p>Favorite Items: {favourites?.length}</p>
              </div>
            </Link>

            <Link href={'/cart'}>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-bold">Cart</h3>
                <p>Cart Items: {cart?.length}</p>
              </div>
            </Link>

          </div>

          {/* Recent Activity */}
          <div className="p-4 bg-white rounded-lg shadow mb-6">
            <h3 className="text-lg font-bold">Recent Activity</h3>
            {recentOrders.length ? (
              <ul>
                {recentOrders.map((order, idx) => (
                  <li key={idx}>Order #{order._id} placed on {order.date}</li>
                ))}
              </ul>
            ) : (
              <p>No recent orders.</p>
            )}
          </div>

          {/* Order Status */}
          <div className="p-4 bg-white rounded-lg shadow mb-6">
            <h3 className="text-lg font-bold">Order Status</h3>
            <p>Pending Orders: {/* pending orders count */}</p>
            <p>Shipped Orders: {/* shipped orders count */}</p>
            <p>Delivered Orders: {/* delivered orders count */}</p>
          </div>

          {/* Spending Summary */}
          <div className="p-4 bg-white rounded-lg shadow mb-6">
            <h3 className="text-lg font-bold">Spending Summary</h3>
            <p>Total Spent This Month: ${spendingSummary.totalSpentThisMonth}</p>
            <p>Last Month: ${spendingSummary.lastMonthSpent}</p>
          </div>

          {/* Notifications */}
          <div className="p-4 bg-white rounded-lg shadow mb-6">
            <h3 className="text-lg font-bold">Notifications</h3>
            <ul>
              {notifications.map((notification) => (
                <li key={notification.id}>{notification.message}</li>
              ))}
            </ul>
          </div>

          {/* Recommended Products */}
          <div className="p-4 bg-white rounded-lg shadow mb-6">
            <h3 className="text-lg font-bold">Recommended Products</h3>
            <ul>
              {recommendedProducts.map((product) => (
                <li key={product.id}>{product.item_name} - ${product.price}</li>
              ))}
            </ul>
          </div>

        </div>


  );
};

export default Dashboard;
