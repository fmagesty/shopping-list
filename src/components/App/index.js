import React from "react";
import "./styles.css";
import DisplayCategories from "../DisplayCategories";
import InputItem from "../InputItem";
import TestItem from "../../features/changeItem/TestItem";

const App = () => {
  return (
    <>
      <InputItem />
      <DisplayCategories />
      <TestItem />
    </>
  );
};

export default App;
