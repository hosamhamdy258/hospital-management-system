// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "./axios";
// export const getPatientDoctors = createAsyncThunk(
//   "reserve/getPatientsDoctors",
//   async (_, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const response = await axiosInstance.get("api/list/doctor/");
//       const response2 = await axiosInstance.get("api/list/patient/");
//       const response3 = await axiosInstance.get("api/reserve/");

//       const data = Promise.all([response, response2, response3]);
//       return data;
//     } catch (error) {
//       console.error(rejectWithValue);
//       return rejectWithValue(error);
//     }
//   }
// );

// export const makeReservation = createAsyncThunk(
//   "reserve/makeReservation",
//   async (data, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       console.log(data);
//       const response = await axiosInstance.post(`api/reserve/`, data);
//       return response;
//     } catch (error) {
//       console.error(rejectWithValue);
//       return rejectWithValue(error);
//     }
//   }
// );

// const initialState = { doctors: [], patients: [], reservation: [] };
// const reservationSlice = createSlice({
//   name: "Reservation",
//   initialState,
//   reducers: {},

//   extraReducers: {
//     [getPatientDoctors.pending]: (state, action) => {},
//     [getPatientDoctors.fulfilled]: (state, action) => {
//       state.doctors = action.payload[0].data;
//       state.patients = action.payload[1].data;
//       state.reservation = action.payload[2].data;
//     },
//     [getPatientDoctors.rejected]: (state, action) => {
//       // show erorr tooltip at top of screen
//       // state.isLoading = true;
//     },
//     [makeReservation.pending]: (state, action) => {},
//     [makeReservation.fulfilled]: (state, action) => {},
//     [makeReservation.rejected]: (state, action) => {},
//   },
// });
// export default reservationSlice.reducer;
