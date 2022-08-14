import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const delCart = createAsyncThunk("cart/delCart", async (_, thunkAPI) => {
  // const { rejectWithValue } = thunkAPI;
  try {
    for (let index = 0; index < 31; index++) {
      axios.delete(`http://localhost:3010/cart/${index}`);
    }
    // const response = await axios.delete(`http://localhost:3010/cart/${id}`);
    // return response.data;
  } catch (error) {
    // console.error(rejectWithValue);
    // return rejectWithValue(error);
  }
});

export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get("http://localhost:3010/cart");
    return response.data;
  } catch (error) {
    console.error(rejectWithValue);
    return rejectWithValue(error);
  }
});

export const addProduct = createAsyncThunk(
  "cart/addProduct",
  async (productData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const options = { responseType: "json", responseEncoding: "utf8" };
    let response;
    let response2;
    let itemCopy;
    let itemCopy2;
    let data;

    try {
      if (
        (itemCopy = getState().cartSlice.cart.find((element) => {
          return element.id === productData.id;
        }))
      ) {
        itemCopy2 = { ...itemCopy };
        itemCopy2.count += 1;

        response = await axios.put(
          `http://localhost:3010/cart/${itemCopy.id}`,
          itemCopy2,
          options
        );
        response2 = await axios.get("http://localhost:3010/cart");

        data = Promise.all([response, response2]).then(function (results) {
          // results[0] >> is return object from api
          const cartData = results[1];

          return cartData;
        });
      } else {
        itemCopy2 = { ...productData };
        itemCopy2.count = 1;
        response = await axios.post(
          `http://localhost:3010/cart/`,
          itemCopy2,
          options
        );
        response2 = await axios.get("http://localhost:3010/cart");
        data = Promise.all([response, response2]).then(function (results) {
          // results[0] >> is return object from api
          const cartData = results[1];
          return cartData;
        });
      }
      return data;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

export const removeProduct = createAsyncThunk(
  "cart/removeProduct",
  async (productData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const options = { responseType: "json", responseEncoding: "utf8" };
    let response;
    let response2;
    let itemCopy;
    let itemCopy2;
    let data;

    try {
      if (
        (itemCopy = getState().cartSlice.cart.find((element) => {
          return element.id === productData.id;
        }))
      ) {
        itemCopy2 = { ...itemCopy };

        if (itemCopy2.count > 1) {
          itemCopy2.count -= 1;
          response = await axios.put(
            `http://localhost:3010/cart/${itemCopy2.id}`,
            itemCopy2,
            options
          );
          response2 = await axios.get("http://localhost:3010/cart");
          data = Promise.all([response, response2]).then(function (results) {
            const cartData = results[1];
            return cartData;
          });
        } else {
          response = await axios.delete(
            `http://localhost:3010/cart/${itemCopy2.id}`,
            options
          );
          response2 = await axios.get("http://localhost:3010/cart");
          data = Promise.all([response, response2]).then(function (results) {
            const cartData = results[1];
            return cartData;
          });
        }
      } else {
        // not found in cart
        console.log("not in cart");
        return rejectWithValue("not in cart2");
      }
      return data;
    } catch (error) {
      console.error(rejectWithValue);
      return rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {},
  extraReducers: {
    [getCart.pending]: (state, action) => {},
    [getCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },
    [getCart.rejected]: (state, action) => {},
    [addProduct.pending]: (state, action) => {},
    [addProduct.fulfilled]: (state, action) => {
      state.cart = action.payload.data;
    },
    [addProduct.rejected]: (state, action) => {},
    [removeProduct.pending]: (state, action) => {},
    [removeProduct.fulfilled]: (state, action) => {
      console.log(state);
      console.log(action.payload);
      state.cart = action.payload.data;
    },
    [removeProduct.rejected]: (state, action) => {},
    [delCart.pending]: (state, action) => {},
    [delCart.fulfilled]: (state, action) => {
      // state.cart = action.payload.data;
    },
    [delCart.rejected]: (state, action) => {},
  },
});
// export const {} = cartSlice.actions;
export default cartSlice.reducer;
