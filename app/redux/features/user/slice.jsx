"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import actions from "./actions";

const user = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("user")) : null;

const initialState = {
  user,
  isUserLoading: false,
  userSuccess: false,
  userError: false,
  userMessage: "",
};

export const loginUser = createAsyncThunk("user/signin", async (formData, thunkAPI) => {
  try {
    return await actions.loginUser(formData);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

      console.log(message)

    return thunkAPI.rejectWithValue(message);
  }
});

export const logoutUser = createAsyncThunk(
  "user/signout",
  async (_, thunkAPI) => {
    try {
      return actions.logoutUser();
    } catch (error) {
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isUserLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isUserLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.userError = false
        state.userSuccess = false
      });
  },
});

export const { resetUser } = userSlice.actions;

export default userSlice.reducer;
