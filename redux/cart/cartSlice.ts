import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  item_name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Set the full cart (e.g., fetched from API)
    setCart(state, action: PayloadAction<CartItem[]>) {
      state.cart = action.payload;
    },
    
    // Add an item to the cart or update quantity if it already exists
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        // If item exists, update the quantity
        state.cart[itemIndex].quantity += action.payload.quantity;
      } else {
        // If item does not exist, add it to the cart
        state.cart.push(action.payload);
      }
    },

    // Remove an item from the cart
    removeFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },

    // Update quantity of an existing item in the cart
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity = action.payload.quantity;
      }
    },

    // Clear the cart entirely
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { setCart, addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
