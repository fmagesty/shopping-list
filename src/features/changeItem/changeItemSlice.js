import { createSlice } from "@reduxjs/toolkit";

export const changeItemSlice = createSlice({
  name: "changeItem",
  initialState: {
    value: "",
  },
  reducers: {
    addItem: (state) => {
      state.value += "a";
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem } = changeItemSlice.actions;

export default changeItemSlice.reducer;
