import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ACTIVATION_FAIL,
  ACTIVATION_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_SUCCESS,
} from "./typs";

export const Signup = createAsyncThunk(
  "users/Signup",
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
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const Signin = createAsyncThunk(
  "users/Signin",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/auth/jwt/create/",
        data: userData,
      });
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const Activate = createAsyncThunk(
  "users/Activate",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/auth/users/activation/",
        data: userData,
      });
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const reset_password = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email });

  try {
    await axios.post(
      `http://127.0.0.1:8000/auth/users/reset_password/`,
      body,
      config
    );

    dispatch({
      type: PASSWORD_RESET_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
    });
  }
};

export const reset_password_confirm =
  (uid, token, new_password, re_new_password) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    try {
      await axios.post(
        `http://127.0.0.1:8000/auth/users/reset_password_confirm/`,
        body,
        config
      );

      dispatch({
        type: PASSWORD_RESET_CONFIRM_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: PASSWORD_RESET_CONFIRM_FAIL,
      });
    }
  };

export const verify = (uid, token) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ uid, token });

  try {
    await axios.post(
      `http://127.0.0.1:8000/auth/users/activation/`,
      body,
      config
    );

    dispatch({
      type: ACTIVATION_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL,
    });
  }
};

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  users: null,
  erorr: null,
  verified: null,
};

const users = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    // Signup Actions
    [Signup.pending]: (state, action) => {
      state.error = null;
    },
    [Signup.fulfilled]: (state, action) => {
      // state.users.push(action.payload);
      // console.log(action.payload);
    },
    [Signup.rejected]: (state, action) => {
      state.erorr = action.payload;
    },
    // Signin Actions
    [Signin.pending]: (state, action) => {
      state.error = null;
    },
    [Signin.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.users = action.payload;
    },
    [Signin.rejected]: (state, action) => {
      state.erorr = action.payload;
    },
    // Activation Actions
    [Activate.pending]: (state, action) => {
      state.error = null;
    },
    [Activate.fulfilled]: (state, action) => {
      state.verified = true;
    },
    [Activate.rejected]: (state, action) => {
      state.erorr = action.payload;
    },
  },
});

export default users.reducer;
