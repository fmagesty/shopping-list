import React from "react";
import "./styles.css";
import DisplayCategories from "../DisplayCategories/DisplayCategories";
import InputItem from "../InputItem/InputItem";
import Header from "../Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <InputItem />
      <DisplayCategories />
    </>
  );
};

export default App;
