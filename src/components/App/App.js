import React from "react";
import "./styles.css";
import Item from "../Item/Item";
import InputItem from "../InputItem/InputItem";
import Header from "../Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <InputItem />
      <Item />
    </>
  );
};

export default App;
