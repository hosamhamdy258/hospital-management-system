import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from './axios';

export const getDepartments = createAsyncThunk(
  "department/getDepartments",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance.get("api/department/");
      return response.data;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);
export const getDepartmentDetails = createAsyncThunk(
  "department/getDepartmentDetails",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance.get(`api/department/${id}`);
      return response.data;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

const initialState = { departments: [] , departmentDetails:{}};
const departmentsSlice = createSlice({
  name: "Departments",
  initialState,
  reducers: {},

  extraReducers: {
    // get product from api server
    [getDepartments.pending]: (state, action) => {},
    [getDepartments.fulfilled]: (state, action) => {
      state.departments = action.payload;
    },
    [getDepartments.rejected]: (state, action) => {
      // show erorr tooltip at top of screen
      // state.isLoading = true;
    },
    [getDepartmentDetails.pending]: (state, action) => {},
    [getDepartmentDetails.fulfilled]: (state, action) => {
      state.departmentDetails = action.payload;
    },
    [getDepartmentDetails.rejected]: (state, action) => {
      // show erorr tooltip at top of screen
      // state.isLoading = true;
    },
  },
});
export default departmentsSlice.reducer;
