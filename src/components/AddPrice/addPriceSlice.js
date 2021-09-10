import { createSlice } from "@reduxjs/toolkit";

export const inputItemSlice = createSlice({
  name: "itemPrice",
  initialState: {
    value: [],
  },
  reducers: {
    allPrices: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { allPrices } = inputItemSlice.actions;

export default inputItemSlice.reducer;
