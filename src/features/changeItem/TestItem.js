import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./changeItemSlice";

const Item = () => {
  const item = useSelector((state) => state.changeItem.value);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(addItem())}>Add Item</button>
      <p>{item}</p>
    </>
  );
};

export default Item;
