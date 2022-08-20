import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  ACTIVATION_FAIL,
  ACTIVATION_SUCCESS,
  LOGOUT,
  PASSWORD_RESET_CONFIRM_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_SUCCESS,
} from "./typs";

//////////////////////////////////////

export const load_user = createAsyncThunk(
  "users/load_user",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
          Accept: "application/json",
        },
      };

      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/auth/users/me/`,
          config
        );
        console.log(res.data);
        return res.data;
      } catch (err) {
        if (!err.response) {
          throw err;
        }
        return rejectWithValue(err.response.data);
      }
    } else {
      // eslint-disable-next-line no-throw-literal
      throw "Error";
    }
  }
);

export const checkAuthenticated = createAsyncThunk(
  "users/checkAuthenticated",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      const body = JSON.stringify({ token: localStorage.getItem("access") });

      try {
        const res = await axios.post(
          `http://127.0.0.1:8000/auth/jwt/verify/`,
          body,
          config
        );

        if (res.data.code !== "token_not_valid") {
          return res.data;
        }
      } catch (err) {
        if (!err.response) {
          throw err;
        }
        return rejectWithValue(err.response.data);
      }
    } else {
      // eslint-disable-next-line no-throw-literal
      throw "Error";
    }
  }
);

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

export const logout = createAsyncThunk(
  "users/logout",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
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
  user: null,
  erorr: null,
};

const users = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    // Signup Actions
    [Signup.pending]: (state, action) => {
      state.error = null;
    },
    [Signup.fulfilled]: (state, action) => {},
    [Signup.rejected]: (state, action) => {
      state.erorr = action.payload;
    },
    // Signin Actions
    [Signin.pending]: (state, action) => {
      state.error = null;
    },
    [Signin.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      console.log(action.payload);
      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("refresh", action.payload.refresh);
      window.location.reload(false);
    },
    [Signin.rejected]: (state, action) => {
      state.erorr = "Email or Password is incorrect";
    },
    // logout Actions
    [logout.pending]: (state, action) => {
      state.error = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isAuthenticated = false;
      state.user = action.payload;
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
    },
    [logout.rejected]: (state, action) => {
      state.erorr = "Email or Password is incorrect";
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
    // load_user Actions
    [load_user.pending]: (state, action) => {
      state.error = null;
    },
    [load_user.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    [load_user.rejected]: (state, action) => {
      state.erorr = action.payload;
    },
    // checkAuthenticated Actions
    [checkAuthenticated.pending]: (state, action) => {
      state.error = null;
    },
    [checkAuthenticated.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
    },
    [checkAuthenticated.rejected]: (state, action) => {
      state.erorr = action.payload;
    },
  },
});

export default users.reducer;
