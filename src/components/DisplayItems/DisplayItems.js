// import React from "react";
import React from "react";
import Counter from "../Counter/Counter";
import CheckCircle from "../CheckCircle/CheckCircle";
import AddPrice from "../AddPrice/AddPrice";
import { TotalPrice } from "../TotalPrice/TotalPrice";
import "./styles.css";
import { useSelector } from "react-redux";

const DisplayItems = () => {
  const itemList = useSelector((state) => state.addItem.itemList);

  return (
    <div id="item-div">
      {itemList &&
        itemList.map((item) => (
          <div key={item.name}>
            <CheckCircle product={item.name} />
            <span id={item.name} className="item-name">
              {item.name}
            </span>
            <Counter itemName={item.name} />
            <AddPrice itemName={item.name} />
            <span>
              {(item.price * item.counter).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        ))}
      <TotalPrice />
      <ul>
        {itemList &&
          itemList.map((item) => (
            <li key={item.name}>
              {item.name}--{item.price}--{item.price}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DisplayItems;

// "bi bi-check-circle";
// "bi-circle";
