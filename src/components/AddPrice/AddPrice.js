import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { allPrices } from "./addPriceSlice";

export default function AddPrice() {
  const [price, setPrice] = useState(0)
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  const handleChange = (e) => {
    setPrice(e.target.value * counter);
    dispatch(allPrices(price));
  };

  return (
    <>
      <span>{price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}</span>
      <input placeholder="Item price" type='number' onChange={handleChange} />
    </>
  );
}
