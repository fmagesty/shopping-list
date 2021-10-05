import React, { useState} from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addPrice } from "../DisplayItems/displayItemsSlice";

export default function AddPrice(name) {
  const [price, setPrice] = useState(0)
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.itemList);


  const handleChange = (e) => {
    setPrice(e.target.value * itemList.counter);
    dispatch(addPrice(price));
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
