"use client";
import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  isLoading: boolean;
}

const initialState: UiState = {
  isLoading: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { showLoading, hideLoading } = uiSlice.actions;

export default uiSlice.reducer;
