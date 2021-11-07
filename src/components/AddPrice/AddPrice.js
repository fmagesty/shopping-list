import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addPrice,
  addCurrentItemName,
} from "../DisplayItems/displayItemsSlice";

export default function AddPrice(itemName) {
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  itemName = itemName.itemName;
  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    dispatch(addCurrentItemName(itemName));
    dispatch(addPrice(price));
  }, [dispatch, itemName, price]);

  return (
    <>
      <input placeholder="Item price" type="number" onChange={handleChange} />
    </>
  );
}
