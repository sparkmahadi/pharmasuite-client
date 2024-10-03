import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavouritesItem {
  id: string;
  item_name: string;
  price: number;
  quantity: number;
}

interface FavouritesState {
  favourites: FavouritesItem[];
}

const initialState: FavouritesState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    // Set the full favourites (e.g., fetched from API)
    setFavourites(state, action: PayloadAction<FavouritesItem[]>) {
      state.favourites = action.payload;
    },
    
    // Add an item to the favourites or update quantity if it already exists
    addToFavourites(state, action: PayloadAction<FavouritesItem>) {
      const itemIndex = state.favourites.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        // If item exists, update the quantity
        state.favourites[itemIndex].quantity += action.payload.quantity;
      } else {
        // If item does not exist, add it to the favourites
        state.favourites.push(action.payload);
      }
    },

    // Remove an item from the favourites
    removeFromFavourites(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter(item => item.id !== action.payload);
    },

    // Update quantity of an existing item in the favourites
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const itemIndex = state.favourites.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.favourites[itemIndex].quantity = action.payload.quantity;
      }
    },

    // Clear the favourites entirely
    clearFavourites(state) {
      state.favourites = [];
    },
  },
});

export const { setFavourites, addToFavourites, removeFromFavourites, updateQuantity, clearFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
