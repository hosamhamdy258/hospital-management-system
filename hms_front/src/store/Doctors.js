// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import axiosInstance from './axios';

// export const getDoctors = createAsyncThunk(
//   "department/getDoctors",
//   async (_, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const response = await axiosInstance.get('api/doctor/');
//       return response.data;
//     } catch (error) {
//       console.error(rejectWithValue);
//       return rejectWithValue(error);
//     }
//   }
// );
// export const getDoctorDetails = createAsyncThunk(
//   "department/getDoctors",
//   async (id, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const response = await axiosInstance.get(`api/doctor/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error(rejectWithValue);
//       return rejectWithValue(error);
//     }
//   }
// );



// const initialState = { doctors: [] ,doctorDetails:{} };
// const doctorsSlice = createSlice({
//   name: "Doctors",
//   initialState,
//   reducers: {},

//   extraReducers: {
//     [getDoctors.pending]: (state, action) => {},
//     [getDoctors.fulfilled]: (state, action) => {
//       state.doctors = action.payload;
//     },
//     [getDoctors.rejected]: (state, action) => {
     
//     },
//     [getDoctorDetails.pending]: (state, action) => {},
//     [getDoctorDetails.fulfilled]: (state, action) => {
//       state.doctorDetails = action.payload;
//     },
//     [getDoctorDetails.rejected]: (state, action) => {
      
//     },
    
//   },
  
 
// });
// export default doctorsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from './axios';

export const getDoctors = createAsyncThunk(
  "department/getDoctors",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance.get("api/list/doctor/");
      return response.data;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);
export const getDoctorDetails = createAsyncThunk(
  "department/getDoctorDetails",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
      const response = await axiosInstance.get(`api/doctor/${id}`);
      return response.data;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

const initialState = { doctors: [] , doctorDetails:{}};
const doctorsSlice = createSlice({
  name: "Doctors",
  initialState,
  reducers: {},

  extraReducers: {
    // get product from api server
    [getDoctors.pending]: (state, action) => {},
    [getDoctors.fulfilled]: (state, action) => {
      state.doctors = action.payload;
    },
    [getDoctors.rejected]: (state, action) => {
      // show erorr tooltip at top of screen
      // state.isLoading = true;
    },
    [getDoctorDetails.pending]: (state, action) => {},
    [getDoctorDetails.fulfilled]: (state, action) => {
      state.doctorDetails = action.payload;
    },
    [getDoctorDetails.rejected]: (state, action) => {
      // show erorr tooltip at top of screen
      // state.isLoading = true;
    },
  },
});
export default doctorsSlice.reducer;
