import React from "react";
import "./styles.css";
import DisplayCategories from "../DisplayCategories";
import AddItem from "../AddItem";
import Counter from "../../features/counter/Counter";

const App = () => {
  return (
    <>
      <AddItem />
      <Counter />
      <DisplayCategories />
    </>
  );
};

export default App;
