import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import changeItemReducer from "../features/changeItem/changeItemSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    changeItem: changeItemReducer,
  },
});
