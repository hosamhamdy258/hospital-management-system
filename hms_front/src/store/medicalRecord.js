import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "./axios";

// export const getmedicalRecords = createAsyncThunk(
//   "medicalRecord/getmedicalRecord",
//   async (_, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const response = await axiosInstance.get("api/record/");
//       return response.data;
//     } catch (error) {
//       console.error(rejectWithValue);
//       return rejectWithValue(error);
//     }
//   }
// );
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
export const addMedicalRecord = createAsyncThunk(
  "medicalRecord/addMedicalRecord",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance.post(`api/record/`, data);
      return response;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);
export const updateMedicalRecord = createAsyncThunk(
  "medicalRecord/addMedicalRecord",
  async (paramter, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const data = paramter[0];
    console.log(data);
    try {
      const response = await axiosInstance.put(
        `api/record/${paramter[1]}`,
        data
      );
      return response;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

const initialState = { medicalRecord: [], details: "" };
const medicalRecordSlice = createSlice({
  name: "Medical_records",
  initialState,
  reducers: {},

  extraReducers: {
    // get product from api server
    // [getmedicalRecords.pending]: (state, action) => {},
    // [getmedicalRecords.fulfilled]: (state, action) => {
    //   state.departments = action.payload;
    // },
    // [getmedicalRecords.rejected]: (state, action) => {

    // },
    [getMedicalRecordDetails.pending]: (state, action) => {},
    [getMedicalRecordDetails.fulfilled]: (state, action) => {
      state.medicalRecord = action.payload;
    },
    [getMedicalRecordDetails.rejected]: (state, action) => {},
    [addMedicalRecord.pending]: (state, action) => {
      state.details = "";
    },
    [addMedicalRecord.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.details = "Report Created Successfully";
    },
    [addMedicalRecord.rejected]: (state, action) => {
      state.details = "Something went wrong try again later";
    },
    [updateMedicalRecord.pending]: (state, action) => {
      state.details = "";
    },
    [updateMedicalRecord.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.details = "Report Updated Successfully";
    },
    [updateMedicalRecord.rejected]: (state, action) => {
      state.details = "Something went wrong try again later";
    },
  },
});
export default medicalRecordSlice.reducer;
