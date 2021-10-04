import React, { useState, useEffect } from 'react';

import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, addCounter } from "../DisplayItems/displayItemsSlice";

const Counter = (item) => {
  const itemList = useSelector((state) => state.addItem.value);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const handleClick = (countModifier) => {
    if (count === 1 && countModifier === -1) {
      console.log(item, item.name)
      return count
    }
    setCount(count + countModifier)
  }
  useEffect(() => {
    dispatch(addCounter(count, item.name))
}, [count, dispatch, item.name]);

  return (
    <span id="counter">
      <i className="bi bi-dash-circle" onClick={() => handleClick(-1)}></i>
      <span id="counter">{count}</span>
      <i className="bi-plus-circle" onClick={() => handleClick(+1)}></i>
    </span>
  );
};

export default Counter;
