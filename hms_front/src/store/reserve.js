import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axios";
export const getPatientDoctors = createAsyncThunk(
  "reserve/getPatientsDoctors",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance.get("api/list/doctor/");
      const response2 = await axiosInstance.get("api/list/patient/");

      const data = Promise.all([response, response2]);
      //   .then(function (results) {
      //     const cartData = results[1];
      //     return [results[0], results[1]];
      //   });

      return data;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

const initialState = { doctors: [], patients: [] };
const reservationSlice = createSlice({
  name: "Reservation",
  initialState,
  reducers: {},

  extraReducers: {
    // get product from api server
    [getPatientDoctors.pending]: (state, action) => {},
    [getPatientDoctors.fulfilled]: (state, action) => {
      console.log(action.payload);
      //   state.doctors = action.payload;
    },
    [getPatientDoctors.rejected]: (state, action) => {
      // show erorr tooltip at top of screen
      // state.isLoading = true;
    },
  },
});
export default reservationSlice.reducer;
// export const { productsApisetter } = doctorsSlice.actions;
