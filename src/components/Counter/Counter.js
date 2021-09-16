import React, { useState, useEffect } from 'react';

import "./styles.css";
import { useDispatch } from "react-redux";
import { allCounters } from "./counterSlice";


const Counter = () => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const handleClick = (countModifier) => {
    if (count === 0 && countModifier === -1) {
      return count
    }
    setCount(count + countModifier)
  }
  useEffect(() => {
    dispatch(allCounters(count));
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
