import React, { useState, useEffect } from 'react';

import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addCounter } from "../DisplayItems/displayItemsSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const itemList = useSelector((state) => state.addItem.itemList);

  const handleClick = (countModifier) => {
    if (count === 1 && countModifier === -1) {
      return count
    }
    setCount(count + countModifier)
    console.log(itemList)
  }
  useEffect(() => {
    dispatch(addCounter(count))
}, [count, dispatch]);

  return (
    <span id="counter">
      <i className="bi bi-dash-circle" onClick={() => handleClick(-1)}></i>
      <span id="counter">{count}</span>
      <i className="bi-plus-circle" onClick={() => handleClick(+1)}></i>
    </span>
  );
};

export default Counter;
