"use client"

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isUserLoading: false,
  userSuccess: false,
  userError: false
};

export const addItem = createAsyncThunk("user/signin", async () => {
  try {
  } catch (error) {}
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItem.pending, (state, payload) => {
        state.user = 0;
      })
      .addCase(addItem.fulfilled, (state, payload) => {
        state.isUserLoading = 0;
      });
  },
});

export const { resetUser } = userSlice.actions;

export default userSlice.reducer;
