// import React from "react";
import React from "react";
import "./styles.css";
import CheckCircle from "../CheckCircle/CheckCircle";
import Counter from "../Counter/Counter";
import ItemName from "../ItemName/ItemName";
import AddPrice from "../AddPrice/AddPrice";
import ColorSelectorDropdown from "../ColorSelectorModal/ColorSelectorDropdown";
import { TotalPrice } from "../TotalPrice/TotalPrice";
import { useSelector } from "react-redux";

const DisplayItems = () => {
  const itemList = useSelector((state) => state.addItem.itemList);

  return (
    <div id="item-div">
      <h4 id="title">Added items:</h4>
      {itemList &&
        itemList.map((item) => (
          <div key={item.name}>
            <CheckCircle product={item.name} />
            <ItemName itemName={item.name} />
            <Counter itemName={item.name} />
            <AddPrice itemName={item.name} />
            <span>
              {(item.price * item.counter).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <ColorSelectorDropdown itemName={item.name} />
          </div>
        ))}
      <TotalPrice />
    </div>
  );
};

export default DisplayItems;

// "bi bi-check-circle";
// "bi-circle";
