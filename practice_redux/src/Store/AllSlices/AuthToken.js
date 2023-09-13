import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDk3YzAxMzg2NjlhNjAxMGZiN2E3YzMiLCJpYXQiOjE2OTE3MzQ2NDcsImV4cCI6MTY5NDMyNjY0N30.zK0DPel338yPhNJwcb7iQLBq4ZolcPh8mRxxlSQx4Qc",
  refreshToken: null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState: initialState,
  reducers: {
    apiUrl1Token(state, action) {
      state.refreshToken = action.payload;
    },
    apiUrl2Token(state, action) {
      state.token = action.payload;
    },
  },
});

export default tokenSlice.reducer;

export const { apiUrl1Token, apiUrl2Token } = tokenSlice.actions;
