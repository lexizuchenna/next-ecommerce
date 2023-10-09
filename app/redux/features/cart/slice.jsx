"use client"

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: 0,
  total: 0,
};

export const addItem = createAsyncThunk("cart/add", async () => {
  try {
  } catch (error) {}
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItem.pending, (state, payload) => {
        state.items = 0;
      })
      .addCase(addItem.fulfilled, (state, payload) => {
        state.total = 0;
      });
  },
});

export const { resetCart } = cartSlice.actions;

export default cartSlice.reducer;
