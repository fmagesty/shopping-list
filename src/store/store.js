import { configureStore } from "@reduxjs/toolkit";
import displayItemsReducer from "../components/DisplayItems/displayItemsSlice";

export default configureStore({
  reducer: {
    addItem: displayItemsReducer,
    addCounter: displayItemsReducer,
    addPrice: displayItemsReducer,
  },
});
