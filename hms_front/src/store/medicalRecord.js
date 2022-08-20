import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from './axios';

export const getmedicalRecords = createAsyncThunk(
  "medicalRecord/getmedicalRecord",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance.get("api/record/");
      return response.data;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);
export const getMedicalRecordDetails = createAsyncThunk(
  "medicalRecord/getMedicalRecordDetails",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance.get(`api/record/${id}`);
      return response.data;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

const initialState = { medicalRecord: [] , medicalRecordDetails:{}};
const medicalRecordSlice = createSlice({
  name: "Records",
  initialState,
  reducers: {},

  extraReducers: {
    // get product from api server
    [getmedicalRecords.pending]: (state, action) => {},
    [getmedicalRecords.fulfilled]: (state, action) => {
      state.departments = action.payload;
    },
    [getmedicalRecords.rejected]: (state, action) => {
      
    },
    [getMedicalRecordDetails.pending]: (state, action) => {},
    [getMedicalRecordDetails.fulfilled]: (state, action) => {
      state.departmentDetails = action.payload;
    },
    [getMedicalRecordDetails.rejected]: (state, action) => {
      
    },
  },
});
export default medicalRecordSlice.reducer;
