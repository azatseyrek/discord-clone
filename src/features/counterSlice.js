import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {},
});

export default counter.reducer;
