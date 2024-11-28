import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../types";

interface UserInfo {
  id: string;
  name: string;
  email: string;
  // Add any other properties you expect in the user information
}

interface InitialState {
  cart: ProductData[];
  favorite: ProductData[];
  userInfo: UserInfo | null;
}

const initialState: InitialState = {
  cart: [],
  favorite: [],
  userInfo: null,
};

export const shoppersSlice = createSlice({
  name: "shoppers",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?._id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?._id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity! -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item?._id !== action.payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },
    // Favorite cart
    addToFavorite: (state, action) => {
      const existingProduct = state?.favorite?.find(
        (item) => item?._id === action.payload?._id
      );
      if (existingProduct) {
        state.favorite = state.favorite.filter(
          (item) => item?._id !== action.payload._id
        );
      } else {
        state.favorite.push(action.payload);
      }
    },
    resetFavorite: (state) => {
      state.favorite = [];
    },

    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  addUser,
  removeUser,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  resetCart,
  addToFavorite,
  resetFavorite,
} = shoppersSlice.actions;
export default shoppersSlice.reducer;
