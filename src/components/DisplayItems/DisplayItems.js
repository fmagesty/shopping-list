// import React from "react";
import React from "react";
import Counter from "../Counter/Counter";
import CheckCircle from "../CheckCircle/CheckCircle";
import AddPrice from "../AddPrice/AddPrice";
import { TotalPrice } from "../TotalPrice/TotalPrice";
import "./styles.css";
import { useSelector } from "react-redux";
import ColorSelectorDropdown from "../ColorSelectorModal/ColorSelectorDropdown";

const DisplayItems = () => {
  const itemList = useSelector((state) => state.addItem.itemList);

  return (
    <div id="item-div">
      <h4 id="title">Added items:</h4>
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
            <ColorSelectorDropdown />
          </div>
        ))}
      <TotalPrice />
    </div>
  );
};

export default DisplayItems;

// "bi bi-check-circle";
// "bi-circle";
