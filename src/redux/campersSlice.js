import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations";

const initialState = {
  items: [],
  total: 0,
  loading: false,
  error: false,
  hasNextPage: false,
  limit: 4,
  page: 1,
};

const calculateHasNextPage = (state) => {
  const totalPages = Math.ceil(state.total / state.limit);
  console.log(`Total Pages: ${totalPages}, Current Page: ${state.page}`);
  state.hasNextPage = state.page < totalPages;
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    clearCampers(state) {
      state.items = [];
      state.total = 0;
    },
    resetPage(state) {
      state.page = 1;
    },
    incrementPage(state) {
      state.page += 1;
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

        if (action.payload && action.payload.items) {
          state.items = [...state.items, ...action.payload.items];
          state.total = action.payload.total;
          calculateHasNextPage(state);
        }
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

export const { clearCampers, resetPage, incrementPage } = campersSlice.actions;
export default campersSlice.reducer;
