import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    total: 0,
    loading: false,
    error: false,
  },
  reducers: {
    clearCampers(state) {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;

        const newItems = action.payload.items.filter(
          (item) =>
            !state.items.some((existingItem) => existingItem.id === item.id)
        );
        state.items = [...state.items, ...newItems];
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCampers, addFavorite } = campersSlice.actions;
export default campersSlice.reducer;
