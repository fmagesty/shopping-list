import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { allItems } from "../InputItem/inputItemSlice";

export default function AddPrice(item) {
  const input = useSelector((state) => state.inputItem.value);
  const [price, setPrice] = useState(0)
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(allItems(item.price));
    // this should open a modal(?) for the user to enter the individual item price
  };

  const handleChange = (e) => {
    setPrice(e.target.value);
    {console.log(item.item.name, item.item.price)}
  };
  return (
    <>
      <input type="number" placeholder="Item price" onChange={handleChange} />
      <button onClick={handleClick}>Add price</button>
    </>
  );
}
