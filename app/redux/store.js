"use client"

import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/slice";
import userReducer from "./features/user/slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
