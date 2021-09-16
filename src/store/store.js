import { configureStore } from "@reduxjs/toolkit";
import inputItemNameReducer from "../components/InputItemName/inputItemNameSlice";
import addPriceReducer from "../components/AddPrice/addPriceSlice";
import counterReducer from "../components/Counter/counterSlice";

export default configureStore({
  reducer: {
    inputItemName: inputItemNameReducer,
    addPrice: addPriceReducer,
    counter: counterReducer
  },
});
