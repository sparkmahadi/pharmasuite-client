import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/redux/user/userSlice';
import cartReducer from '@/redux/cart/cartSlice';
import loaderReducer from '@/redux/user/loaderSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    loader: loaderReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
