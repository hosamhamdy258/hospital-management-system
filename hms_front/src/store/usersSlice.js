import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  users: null,
  erorr: null,
};

export const addUser = createAsyncThunk(
  "users/insertUser",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/auth/users/",
        data: userData,
      });
      return res.data;
    } catch (err) {
      // return rejectWithValue(error);
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [addUser.pending]: (state, action) => {
      // state.error = null;
    },
    [addUser.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    },
    [addUser.rejected]: (state, action) => {
      state.erorr = action.payload;
    },
  },
});

export default usersSlice.reducer;
