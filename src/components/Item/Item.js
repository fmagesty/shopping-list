// import React from "react";
import React, { useState } from "react";
import Counter from "../Counter/Counter";
import CheckCircle from "../CheckCircle/CheckCircle";
import "./styles.css";
import { useSelector } from "react-redux";

const Item = () => {
  const input = useSelector((state) => state.inputItem.value);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div id="item-div">
      {input &&
        input.map((item) => (
          <div key={item}>
            <CheckCircle product={item} />
            <span id={item} className="item-name">
              {item}
            </span>
            <Counter />
          </div>
        ))}
      <p id="total-price">
        Total price:{" "}
        {totalPrice.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </div>
  );
};

export default Item;

// "bi bi-check-circle";
// "bi-circle";
