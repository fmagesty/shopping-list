import { createSlice } from "@reduxjs/toolkit";

export const displayItemsSlice = createSlice({
  name: "displayItems",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push({ name: action.payload, price: 0, count: 1});
    },
    addCounter: (state, action) => {
      state.value.find(item => item.name === action.payload.name ? console.log('achou') : console.log('nao achou: ' + action.payload))
    },
  }
});

// Action creators are generated for each case reducer function
export const { addItem, addCounter } = displayItemsSlice.actions;

export default displayItemsSlice.reducer;
