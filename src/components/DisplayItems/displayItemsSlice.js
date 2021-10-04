import { createReducer, createSlice } from "@reduxjs/toolkit";

export const displayItemsSlice = createSlice({
  name: 'displayItems',
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.push({ name: action.payload, price: 0, count: 1});
    },
    addCounter: (state, action) => {
      state.value.count = action.payload
    },
  },
})

export const { addItem, addCounter} = displayItemsSlice.actions
export default displayItemsSlice.reducer
