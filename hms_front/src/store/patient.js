import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axios";
export const getPatients = createAsyncThunk(
  "department/getPatient",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance.get("api/patient/");
      return response.data;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

//try patient details
export const getPatientDetails = createAsyncThunk(
  "department/getPatientDetails",
  async (id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const state = getState();
    console.log(state.users.user.linked_users);
    try {
      const response = await axiosInstance.get(`api/patient/${id}`);
      return response.data;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

const initialState = { patients: [], patientDetails: [] };
const patientsSlice = createSlice({
  name: "Patient",
  initialState,
  reducers: {},

  extraReducers: {
    // get product from api server
    [getPatients.pending]: (state, action) => {},
    [getPatients.fulfilled]: (state, action) => {
      state.patients = action.payload;
    },
    [getPatients.rejected]: (state, action) => {
      // show erorr tooltip at top of screen
      // state.isLoading = true;
    },
    //try
    [getPatientDetails.pending]: (state, action) => {},
    [getPatientDetails.fulfilled]: (state, action) => {
      state.patientDetails = action.payload;
    },
    [getPatientDetails.rejected]: (state, action) => {
      // show erorr tooltip at top of screen
      // state.isLoading = true;
    },
  },
});
export default patientsSlice.reducer;
// export const { productsApisetter } = doctorsSlice.actions;
