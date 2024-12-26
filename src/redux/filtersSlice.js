import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    items: {},
  },
  reducers: {
    setFilter(state, action) {
      state.items = action.payload;
    },
    clearFilter(state) {
      state.items = {};
    },
  },
});

export const selectFilters = (state) => state.filters.items;

export const { setFilter, clearFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
