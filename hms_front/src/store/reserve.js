import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axios";
export const getPatientDoctors = createAsyncThunk(
  "reserve/getPatientsDoctors",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance.get("api/list/doctor/");
      const response2 = await axiosInstance.get("api/list/patient/");
      const response3 = await axiosInstance.get("api/reserve/");

      const data = Promise.all([response, response2, response3]);
      return data;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

export const getReservationList = createAsyncThunk(
  "reserve/getReservationList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance.get("api/reserve/");

      return response;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

export const makeReservation = createAsyncThunk(
  "reserve/makeReservation",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      console.log(data);
      const response = await axiosInstance.post(`api/reserve/`, data);
      return response;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  doctors: [],
  patients: [],
  reservation: [],
  reservationData: { date: "", isDisabled: true },
};
const reservationSlice = createSlice({
  name: "Reservation",
  initialState,
  reducers: {
    restReservationData: (state, action) => {
      state.reservationData = { date: "", isDisabled: true };
      console.log("clear");
    },
    addReservationData: (state, action) => {
      state.reservationData[action.payload[0]] = action.payload[1].value;
      if (state.reservationData["date1"] && state.reservationData["time"]) {
        state.reservationData["date"] =
          state.reservationData["date1"] + " " + state.reservationData["time"];
      }
    },
    addReservationLists: (state, action) => {
      state.reservationData[action.payload[0]] = action.payload[1];
    },
    updateReservationLists: (state, action) => {
      state.reservationData.isDisabled = action.payload;
    },
  },

  extraReducers: {
    [getPatientDoctors.pending]: (state, action) => {},
    [getPatientDoctors.fulfilled]: (state, action) => {
      state.doctors = action.payload[0].data;
      state.patients = action.payload[1].data;
      state.reservation = action.payload[2].data;
    },
    [getPatientDoctors.rejected]: (state, action) => {
      // show erorr tooltip at top of screen
      // state.isLoading = true;
    },
    [getReservationList.pending]: (state, action) => {},
    [getReservationList.fulfilled]: (state, action) => {
      state.reservation = action.payload.data;
    },
    [getReservationList.rejected]: (state, action) => {},
    [makeReservation.pending]: (state, action) => {},
    [makeReservation.fulfilled]: (state, action) => {},
    [makeReservation.rejected]: (state, action) => {},
  },
});
export default reservationSlice.reducer;
export const {
  restReservationData,
  addReservationData,
  addReservationLists,
  updateReservationLists,
} = reservationSlice.actions;
