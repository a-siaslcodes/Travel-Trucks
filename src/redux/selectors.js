import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;

export const selectCamperById = createSelector(
  [selectCampers, (state, id) => id],
  (items, id) => items.find((item) => item.id === id)
);

export const selectLoading = (state) => state.campers.loading;

export const selectError = (state) => state.campers.error;

export const selectTotalCampers = (state) => state.campers.total;

export const selectFavorites = (state) => state.campers.favorites;

export const selectPage = (state) => state.campers.page;

export const selectLimit = (state) => state.campers.limit;

export const selectHasNextPage = (state) => state.campers.hasNextPage;
