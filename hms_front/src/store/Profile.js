import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "./axios";

export const postProfile = createAsyncThunk(
  "profile/postProfile",
  async (data, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const state = getState();
    console.log(state.users.user.id);
    try {
      let link;
      data["linked_users"] = state.users.user.id;
      data["profile_complete"] = true;
      if (
        !state.users.user.is_doctor &&
        !state.users.user.is_emp &&
        !state.users.user.is_staff
      ) {
        link = "api/patient/";
      }
      if (state.users.user.is_doctor) {
        link = "api/doctor/";
      }
      if (state.users.user.is_staff) {
        link = "api/office/";
      }
      const response = await axiosInstance.post(link, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(link);
      console.log(data);

      return response;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

const initialState = { data: {}, error: [] };
const profileSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {
    restData: (state, action) => {
      state.error = [];
    },
  },

  extraReducers: {
    [postProfile.pending]: (state, action) => {},
    [postProfile.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.data = action.payload.data;
    },
    [postProfile.rejected]: (state, action) => {
      // show erorr tooltip at top of screen
      console.log(action.payload.response.data);
      state["error"] = action.payload.response.data;
    },
  },
});
export default profileSlice.reducer;
export const { restData } = profileSlice.actions;
