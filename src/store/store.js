import { configureStore } from "@reduxjs/toolkit";
import inputItemReducer from "../components/InputItem/inputItemSlice";

export default configureStore({
  reducer: {
    inputItem: inputItemReducer,
  },
});
