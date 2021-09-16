import { createSlice } from "@reduxjs/toolkit";

export const addPriceSlice = createSlice({
  name: "itemPrice",
  initialState: {
    value: 0,
  },
  reducers: {
    allPrices: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { allPrices } = addPriceSlice.actions;

export default addPriceSlice.reducer;
