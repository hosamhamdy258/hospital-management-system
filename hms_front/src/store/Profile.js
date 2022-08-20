import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "./axios";

export const postProfile = createAsyncThunk(
  "profile/postProfile",
  async (data, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const state = getState();
    console.log(state.users.user.id);
    try {
      data["linked_users"] = state.users.user.id;
      data["profile_complete"] = true;
      const response = await axiosInstance.post("api/patient/", data);

      return response;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

const initialState = {};
const profileSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {},

  extraReducers: {
    [postProfile.pending]: (state, action) => {},
    [postProfile.fulfilled]: (state, action) => {
      console.log(action.payload);
      state = action.payload;
    },
    [postProfile.rejected]: (state, action) => {
      // show erorr tooltip at top of screen
      // state.isLoading = true;
    },
  },
});
export default profileSlice.reducer;
