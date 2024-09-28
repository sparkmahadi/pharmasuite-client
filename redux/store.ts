import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/redux/user/userSlice';
import cartReducer from '@/redux/cart/cartSlice';
import loaderReducer from '@/redux/user/loaderSlice';
import orderReducer from '@/redux/order/orderSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    loader: loaderReducer,
    cart: cartReducer,
    orders: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
