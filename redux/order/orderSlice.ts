import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderItem {
    id: string;
    userId: string;
    items: any;
    totalAmount: number;
    status: boolean,
    orderDate: string
}

interface OrderState {
    orders: OrderItem[];
}

const initialState: OrderState = {
    orders: [],
};

const cartSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setOrders(state, action: PayloadAction<OrderItem[]>) {
            state.orders = action.payload;
        },

        // Add an item to the cart or update quantity if it already exists
        // addToCart(state, action: PayloadAction<OrderItem>) {
        //     const itemIndex = state.orders.findIndex(item => item.id === action.payload.id);

        //     if (itemIndex >= 0) {
        //         // If item exists, update the quantity
        //         state.orders[itemIndex].quantity += action.payload.quantity;
        //     } else {
        //         // If item does not exist, add it to the cart
        //         state.orders.push(action.payload);
        //     }
        // },

        // Remove an item from the cart
        // removeFromCart(state, action: PayloadAction<string>) {
        //     state.orders = state.orders.filter(item => item.id !== action.payload);
        // },

        // Update quantity of an existing item in the cart
        // updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
        //     const itemIndex = state.orders.findIndex(item => item.id === action.payload.id);

        //     if (itemIndex >= 0) {
        //         state.orders[itemIndex].quantity = action.payload.quantity;
        //     }
        // },

        // Clear the cart entirely
        clearOrders(state) {
            state.orders = [];
        },
    },
});

export const { setOrders, clearOrders } = cartSlice.actions;

export default cartSlice.reducer;
