import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import "./styles.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
        id="decrement"
      >
        -
      </button>
      <span id="counter">{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
        id="increment"
      >
        +
      </button>
    </>
  );
};

export default Counter;
