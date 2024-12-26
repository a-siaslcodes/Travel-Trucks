import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

const defaultParams = {
  page: 1,
  limit: 4,
};

export const fetchCampers = createAsyncThunk(
  "campers/getAll",
  async (filters = {}, thunkAPI) => {
    try {
      const response = await axios.get("/campers", {
        params: { ...defaultParams, ...filters },
      });

      if (response.data.items.length === 0) {
        return thunkAPI.rejectWithValue("No campers found!");
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchOne",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get("/campers", { id });

      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
