import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { allPrices } from "./addPriceSlice";
import { useSelector } from "react-redux";

export default function AddPrice() {
  const [price, setPrice] = useState([]);
  const dispatch = useDispatch();

  const input = useSelector((state) => state.itemPrice.value);

  const handleClick = (e) => {
    console.log(`item price is ${price}`);
    e.preventDefault();
    dispatch(allPrices(price));
    // this should open a modal(?) for the user to enter the individual item price
  };

  const handleChange = (e) => {
    setPrice(e.target.value);
  };
  return (
    <>
      <input type="number" placeholder="Item price" onChange={handleChange} />
      <button onClick={handleClick}>Add price</button>
    </>
  );
}
