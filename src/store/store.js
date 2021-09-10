import { configureStore } from "@reduxjs/toolkit";
import inputItemReducer from "../components/InputItem/inputItemSlice";
import itemPriceReducer from "../components/AddPrice/addPriceSlice";

export default configureStore({
  reducer: {
    inputItem: inputItemReducer,
    itemPrice: itemPriceReducer,
  },
});
