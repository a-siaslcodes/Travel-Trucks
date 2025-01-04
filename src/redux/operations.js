import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

const defaultParams = {
  // page: 1,
  // limit: 4,
};

export const fetchCampers = createAsyncThunk(
  "campers/getAll",
  async ({ page, ...filters } = {}, thunkAPI) => {
    try {
      const response = await axios.get("/campers", {
        params: { ...defaultParams, page, ...filters },
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

// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// export const API = axios.create({
//   baseURL: BASE_URL,
// });

// export const getAllCampers = createAsyncThunk(
//   "campers/getAll",
//   async (filters = {}, thunkAPI) => {
//     try {
//       const params = { ...filters };
//       const response = await API.get("/campers", { params });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const getCamperById = createAsyncThunk(
//   "campers/getById",
//   async (id, thunkAPI) => {
//     try {
//       const response = await API.get(`/campers/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
