import { createSlice } from "@reduxjs/toolkit";

export const displayItemsSlice = createSlice({
  name: "displayItems",
  initialState: {
    value: [],
  },
  reducers: {
    allItems: (state, action) => {
      state.value.push({name: action.payload, price: 0, count: 1})
    },
  },
});

// Action creators are generated for each case reducer function
export const { allItems } = displayItemsSlice.actions;

export default displayItemsSlice.reducer;


// just a test