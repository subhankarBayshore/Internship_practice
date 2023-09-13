import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const ResultSlices = createSlice({
  name: "result",
  initialState: initialState,

  reducers: {
    getResult(state, action) {
      state.users = action.payload;
    },
  },
});

export default ResultSlices.reducer;

export const { getResult } = ResultSlices.actions;
