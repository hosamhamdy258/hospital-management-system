import authSlice from "./authSlice";
import { configureStore } from "@reduxjs/toolkit";
import departmentsSlice from "./Departments";
import doctorsSlice from "./Doctors";
import medicalRecordSlice from "./medicalRecord";
import patientsSlice from "./patient";
import reservationSlice from "./reserve";
import users from "./usersSlice";
import profileSlice from "./Profile";

const store = configureStore({
  reducer: {
    doctorsSlice,
    authSlice,
    patientsSlice,
    reservationSlice,
    departmentsSlice,
    users,
    medicalRecordSlice,
    profileSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
