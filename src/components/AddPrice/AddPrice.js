import React, { useState} from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { allItems } from "../DisplayItems/displayItemsSlice";

export default function AddPrice(itemName) {
  const [price, setPrice] = useState(0)
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const item = useSelector((state) => state.allItems.value);

  const handleChange = (e) => {
    console.log(item)
    setPrice(e.target.value * counter);
    dispatch(allItems(item.price =  price));
    console.log(item)
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
