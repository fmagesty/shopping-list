import { createSlice } from "@reduxjs/toolkit";

export const displayItemsSlice = createSlice({
  name: "displayItems",
  initialState: {
    itemList: [],
    currentItemName: "",
  },
  reducers: {
    addItem: (state, action) => {
      state.itemList.push({
        name: action.payload,
        counter: 1,
        price: 1,
        color: "white",
      });
    },
    addCurrentItemName: (state, action) => {
      state.currentItemName = action.payload;
    },
    addCounter: (state, action) => {
      state.itemList.find((item) =>
        item.name === state.currentItemName
          ? (item.counter = action.payload)
          : null
      );
    },
    addPrice: (state, action) => {
      state.itemList.find((item) =>
        item.name === state.currentItemName
          ? (item.price = action.payload)
          : null
      );
    },
    addColor: (state, action) => {
      state.itemList.find((item) =>
        item.name === state.currentItemName
          ? (item.color = action.payload)
          : null
      );
    },
    removeItem: (state, action) => {
      state.itemList.splice(
        state.itemList.findIndex((item) => item.name === action.payload),
        1
      );
    },
  },
});

export const {
  addItem,
  addCurrentItemName,
  addCounter,
  addPrice,
  addColor,
  removeItem,
} = displayItemsSlice.actions;
export default displayItemsSlice.reducer;
