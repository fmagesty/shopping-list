// import React from "react";
import React, { useState } from "react";
import Counter from "../Counter/Counter";
import CheckCircle from "../CheckCircle/CheckCircle";
import AddPrice from '../AddPrice'
import "./styles.css";
import { useSelector } from "react-redux";

const Item = () => {
  const input = useSelector((state) => state.inputItem.value);

  return (
    <div id="item-div">
      {input &&
        input.map((item) => (
          <div key={item.name}>
            <CheckCircle product={item} />
            <span id={item.name} className="item-name">
              {item.name}
            </span>
            <Counter />
            <AddPrice item={item}/>
            <span>Item price: {item.price}</span>
          </div>
        ))}
      <p id="total-price">
        Total price:{" "}
        {/* {totalPrice.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })} */}
      </p>
    </div>
  );
};

export default Item;

// "bi bi-check-circle";
// "bi-circle";
