import { createSlice } from "@reduxjs/toolkit";

export const displayItemsSlice = createSlice({
  name: 'displayItems',
  initialState: {
    itemList: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.itemList.push({name: action.payload, counter: 1, price: 1});
    },
    addCounter: (state, action) => {
      console.log(state.itemList, action.payload)
    },
    addPrice: (state, action) => {
      return
    },
  },
})

export const { addItem, addCounter, addPrice} = displayItemsSlice.actions
export default displayItemsSlice.reducer
