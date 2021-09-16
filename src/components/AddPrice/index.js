import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function AddPrice() {
  const [price, setPrice] = useState(0)

  const handleClick = (e) => {
    e.preventDefault();
    // this should open a modal(?) for the user to enter the individual item price
  };

  const handleChange = (e) => {
    setPrice(e.target.value);
    // dispatch(allItems(price));
  };
  return (
    <>
      <input type="number" placeholder="Item price" onChange={handleChange} />
      <button onClick={handleClick}>Add price</button>
    </>
  );
}
