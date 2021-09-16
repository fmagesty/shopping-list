// import React from "react";
import React from "react";
import Counter from "../Counter/Counter";
import CheckCircle from "../CheckCircle/CheckCircle";
import AddPrice from '../AddPrice'
import "./styles.css";
import { useSelector } from "react-redux";

const Item = () => {
  const names = useSelector((state) => state.inputItemName.value);

  return (
    <div id="item-div">
      {names &&
        names.map((item) => (
          <div key={item}>
            <CheckCircle product={item} />
            <span id={item} className="item-name">
              {item}
            </span>
            <Counter />
            <AddPrice/>
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
