import authSlice from "./authSlice";
import { configureStore } from "@reduxjs/toolkit";
import departmentsSlice from "./Departments";
import doctorsSlice from "./Doctors";
import patientsSlice from "./patient";
import reservationSlice from "./reserve";

const store = configureStore({
  reducer: {
    doctorsSlice,
    authSlice,
    patientsSlice,
    reservationSlice,
    departmentsSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
