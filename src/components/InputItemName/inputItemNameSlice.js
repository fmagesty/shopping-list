import { createSlice } from "@reduxjs/toolkit";

export const inputItemNameSlice = createSlice({
  name: "inputItemName",
  initialState: {
    value: [],
  },
  reducers: {
    allItems: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { allItems } = inputItemNameSlice.actions;

export default inputItemNameSlice.reducer;
