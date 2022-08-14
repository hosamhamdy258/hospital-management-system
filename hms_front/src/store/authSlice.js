import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./axios";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (loginData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axiosInstance.post(`api/token/`, loginData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (regData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      console.log(regData);
      const response = await axiosInstance.post(`user/register/`, regData);
      return response;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: false,
    user: {},
    logmsg: "",
    regmsg: "",
    access: "",
    refresh: "",
    detail: "",
  },
  reducers: {
    refresh_set: (state, action) => {
      state.refresh = action.payload;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      // console.log(action.payload);
      state.detail = "";
    },
    [loginUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.refresh = action.payload.data.refresh;
      state.access = action.payload.data.access;

      state.isLogged = true;
    },
    [loginUser.rejected]: (state, action) => {
      // console.log(action.payload.response.data.detail);
      state.detail = action.payload.response.data.detail;
      console.log("failllled");
    },
    [registerUser.pending]: (state, action) => {},
    [registerUser.fulfilled]: (state, action) => {
      // state.user = action.payload.data.user;
      // state.isLogged = true;
      state.isLogged = true;
      console.log(action.payload);
      // state.user = action.payload.data.user;
    },
    [registerUser.rejected]: (state, action) => {
      // state.regmsg = action.payload.response.data;
    },
  },
});
export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
