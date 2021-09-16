import { createSlice } from "@reduxjs/toolkit";

export const displayItemsSlice = createSlice({
  name: "displayItems",
  initialState: {
    value: [],
  },
  reducers: {
    allItems: (state, action) => {
      if (state.value.indexOf(action.payload.itemName) === -1) {
        state.value.push({itemName: action.payload, price: 0, count: 1})
        console.log(action.payload)
      }
      else {
        state.value.push(action.payload);
        console.log('action.payload nao pode ser inserido')
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { allItems } = displayItemsSlice.actions;

export default displayItemsSlice.reducer;
