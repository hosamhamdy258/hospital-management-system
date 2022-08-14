import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from './axios';
export const getDoctors = createAsyncThunk(
  "department/getDoctors",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance.get("api/doctor/");
      return response.data;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

const initialState = { doctors: [] };
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
  },
});
export default doctorsSlice.reducer;
// export const { productsApisetter } = doctorsSlice.actions;
