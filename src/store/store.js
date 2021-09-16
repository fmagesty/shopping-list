import { configureStore } from "@reduxjs/toolkit";
import inputItemReducer from "../components/InputItemName/inputItemNameSlice";

export default configureStore({
  reducer: {
    inputItemName: inputItemReducer,
  },
});
