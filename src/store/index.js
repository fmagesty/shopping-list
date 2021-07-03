import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/Counter/counterSlice";
import inputItemReducer from "../components/InputItem/inputItemSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    inputItem: inputItemReducer,
  },
});
