import React from "react";
import { useSelector } from "react-redux";

export const TotalPrice = () => {
  let totalPrice = 0;
  const itemList = useSelector((state) => state.addItem.itemList);
  itemList.map((item) => (totalPrice += parseInt(item.price * item.counter)));

  console.log(totalPrice);

  return (
    <>
      <p id="total-price">
        Total price:{" "}
        {totalPrice.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </>
  );
};
