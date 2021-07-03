import { createSlice } from "@reduxjs/toolkit";

export const inputItemSlice = createSlice({
  name: "inputItem",
  initialState: {
    value: [],
  },
  reducers: {
    allItems: (state, action) => {
      // state.value += action.payload;
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { allItems } = inputItemSlice.actions;

export default inputItemSlice.reducer;
