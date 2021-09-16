import React from "react";
import "./styles.css";
import Item from "../Item/Item";
import InputItemName from "../InputItemName/InputItemName";
import Header from "../Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <InputItemName />
      <Item />
    </>
  );
};

export default App;
