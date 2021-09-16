import { configureStore } from "@reduxjs/toolkit";
import inputItemNameReducer from "../components/InputItemName/inputItemNameSlice";
import addPriceReducer from "../components/AddPrice/addPriceSlice";
import counterReducer from "../components/Counter/counterSlice";
import displayItemsReducer from "../components/DisplayItems/displayItemsSlice";

export default configureStore({
  reducer: {
    inputItemName: inputItemNameReducer,
    addPrice: addPriceReducer,
    counter: counterReducer,
    allItems: displayItemsReducer
  },
});
