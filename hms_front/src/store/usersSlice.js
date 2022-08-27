import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  ACTIVATION_FAIL,
  ACTIVATION_SUCCESS,
  Local,
  LOGOUT,
  PASSWORD_RESET_CONFIRM_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_SUCCESS,
} from "./typs";

//////////////////////////////////////

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: false,
  user: {},
  signuperr: null,
  err: null,
  loaderror: null,
  signerr: null,
  registered: null,
  requestSent: null,
};

////////////////////////////////////////////////////////
// const local = "http://127.0.0.1:8009";
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
        const res = await axios.get(`${Local}/auth/users/me/`, config);
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
      throw "err";
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
        const res = await axios.post(`${Local}/auth/jwt/verify/`, body, config);

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
      throw "err";
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
        url: `${Local}/auth/users/`,
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
    console.log(userData);
    try {
      const res = await axios({
        method: "post",
        url: `${Local}/auth/jwt/create/`,
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
        url: `${Local}/auth/users/activation/`,
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

// export const reset_password = (email) => async (dispatch) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const body = JSON.stringify({ email });

//   try {
//     await axios.post(
//       `/auth/users/reset_password/`,
//       body,
//       config
//     );

//     dispatch({
//       type: PASSWORD_RESET_SUCCESS,
//     });
//   } catch (err) {
//     dispatch({
//       type: PASSWORD_RESET_FAIL,
//     });
//   }
// };

export const reset_password = createAsyncThunk(
  "users/reset_password",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(userData);
    try {
      const res = await axios({
        method: "post",
        url: `${Local}/auth/users/reset_password/`,
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
        `${Local}/auth/users/reset_password_confirm/`,
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
    await axios.post(`${Local}/auth/users/activation/`, body, config);

    dispatch({
      type: ACTIVATION_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL,
    });
  }
};

const users = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    // Signup Actions
    [Signup.pending]: (state, action) => {
      state.signuperr = null;
    },
    [Signup.fulfilled]: (state, action) => {
      state.registered = true;
    },
    [Signup.rejected]: (state, action) => {
      state.signuperr = action.payload;
    },
    // Signin Actions
    [Signin.pending]: (state, action) => {
      state.signerr = null;
    },
    [Signin.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      console.log(action.payload);
      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("refresh", action.payload.refresh);
      // window.location.reload(false);
    },
    [Signin.rejected]: (state, action) => {
      state.signerr = "Email or Password is incorrect";
    },
    // logout Actions
    [logout.pending]: (state, action) => {
      state.signerr = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isAuthenticated = false;
      state.user = {};
      // console.log(action.payload);

      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
    },
    [logout.rejected]: (state, action) => {},

    // Activation Actions
    [Activate.pending]: (state, action) => {
      state.err = null;
    },
    [Activate.fulfilled]: (state, action) => {
      state.verified = true;
    },
    [Activate.rejected]: (state, action) => {
      state.err = action.payload;
    },
    // load_user Actions
    [load_user.pending]: (state, action) => {
      state.loaderror = null;
    },
    [load_user.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    [load_user.rejected]: (state, action) => {
      state.loaderror = action.payload;
    },
    // checkAuthenticated Actions
    [checkAuthenticated.pending]: (state, action) => {
      state.err = null;
    },
    [checkAuthenticated.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
    },
    [checkAuthenticated.rejected]: (state, action) => {
      state.error = action.payload;
    },
    // reset_password Actions
    [reset_password.pending]: (state, action) => {
      state.err = null;
    },
    [reset_password.fulfilled]: (state, action) => {
      console.log("reset_password fulfilled");
      state.requestSent = true;
    },
    [reset_password.rejected]: (state, action) => {
      console.log("reset_password rejected");
    },
  },
});

export default users.reducer;
