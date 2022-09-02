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

export const getUpcomingReservationList = createAsyncThunk(
  "reserve/getUpcomingReservationList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance.get(
        "api/list/upcomingreservations/"
      );

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
export const deleteReservation = createAsyncThunk(
  "reserve/deleteReservation",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance.delete(`api/reserve/${id}`);
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
  upComingReservation: [],
  reservationData: { date: "", isDisabled: true },
  details: "",
};
const reservationSlice = createSlice({
  name: "Reservation",
  initialState,
  reducers: {
    restReservationData: (state, action) => {
      state.reservationData = { date: "", isDisabled: true };
      state.details = "";
      console.log("clear");
    },
    restReservationDoctor: (state, action) => {
      // state.reservationData = { date: "", isDisabled: true };
<<<<<<< HEAD
      delete state.reservationData.doctorOptions;
      delete state.reservationData.doctor;

=======
      delete state.reservationData.doctorOptions
      delete state.reservationData.doctor
>>>>>>> 07a2de4035b2a953adee76448c621713048cd319
      // console.log("clear");
    },
    resetReservationDate: (state, action) => {
      delete state.reservationData.datelist;
      delete state.reservationData.date1;
    },
    resetReservationTime: (state, action) => {
      delete state.reservationData.timelist2;
      delete state.reservationData.time;
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
    [getPatientDoctors.pending]: (state, action) => {
      console.log(action);
    },
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

    [getUpcomingReservationList.pending]: (state, action) => {},
    [getUpcomingReservationList.fulfilled]: (state, action) => {
      state.upComingReservation = action.payload.data;
    },
    [getUpcomingReservationList.rejected]: (state, action) => {},
    [makeReservation.pending]: (state, action) => {},
    [makeReservation.fulfilled]: (state, action) => {
      state.details = action.payload.data.details;
    },
    [makeReservation.rejected]: (state, action) => {},
    [deleteReservation.pending]: (state, action) => {},
    [deleteReservation.fulfilled]: (state, action) => {
      // console.log(action.payload.status);
      state.details = "Reservation deleted successfully";
    },
    [deleteReservation.rejected]: (state, action) => {
      state.details = "Something went wrong try again later";
    },
  },
});
export default reservationSlice.reducer;
export const {
  restReservationData,
  addReservationData,
  addReservationLists,
  updateReservationLists,
  restReservationDoctor,
  resetReservationDate,
  resetReservationTime,
} = reservationSlice.actions;
