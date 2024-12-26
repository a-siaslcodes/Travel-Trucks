import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite(state, action) {
      const { id } = action.payload;

      const index = state.items.findIndex((item) => item.id === id);

      if (index !== -1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        state.items = [...state.items, action.payload];
      }
    },
  },
});

export const selectFavorites = (state) => state.favorites?.items;
export const { addFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
