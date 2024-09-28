"use client";

import React, { useEffect, useState } from "react";
import DashSideNav from "../components/Dashboard/DashSideNav";
import { CiMenuBurger } from "react-icons/ci";
import { getOrderHistory } from "@/lib/users/orderFunction";
import { useDispatch, useSelector } from "react-redux";
import { hideLoader, showLoader } from "@/redux/user/loaderSlice";
import getMainProducts from "@/lib/main-products/getMainProducts";
import Loader from "../components/Loader";
import { getFavourites } from "@/lib/users/favouriteFunction";
import { getCart } from "@/lib/users/cartFunction";
import { setCart } from "@/redux/cart/cartSlice";
import { setOrders } from "@/redux/order/orderSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { _id: userId, name, email } = useSelector((state: any) => state.user.userDetails);
  const { cart } = useSelector((state: any) => state.cart);
  const { orders } = useSelector((state: any) => state.orders);
  const { loading } = useSelector((state: any) => state.loader);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalFavorites, setTotalFavorites] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        dispatch(showLoader());
        const cart = await getCart(userId);
        if(cart?.length){
          dispatch(setCart(cart));
        }
        const orders = await getOrderHistory(userId);
        console.log(orders);
        if(orders?.length){
          dispatch(setOrders(orders));
        }
        const products = await getMainProducts();
        const favorites = await getFavourites(userId);

        setTotalProducts(products.total);
        setTotalFavorites(favorites.length);
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
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Menu button */}
        <label htmlFor="my-drawer" className="btn drawer-button">
          <CiMenuBurger className="w-5 h-5" />
        </label>

        <div className="p-4">
          {/* Profile Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Welcome, {name}</h2>
            <p className="text-gray-500">Email: {email}</p>
          </div>

          {/* Cards Section for Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-bold">Orders</h3>
              <p>Total Orders: {orders?.length}</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-bold">Products</h3>
              <p>Total Products Viewed: {totalProducts}</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-bold">Favorites</h3>
              <p>Favorite Items: {totalFavorites}</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-bold">Cart</h3>
              <p>Cart Items: {cart?.length}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <DashSideNav />
      </div>
    </div>
  );
};

export default Dashboard;
