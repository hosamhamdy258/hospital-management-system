import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import doctorsSlice from "./Doctors";
import patientsSlice from "./patient";
import reservationSlice from "./reserve";

const store = configureStore({
  reducer: {
    doctorsSlice,
    authSlice,
    patientsSlice,
    reservationSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
