import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BsSquare } from "react-icons/bs";
import "./styles.css";

export default function ColorSelectorDropdown() {
  const [color, setColor] = useState("black");

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <>
      <BsSquare style={{ background: color }} className="category-color" />
      <DropdownButton
        as={ButtonGroup}
        title="Category"
        className="bg-vertical-dropdown-1">
        <Dropdown.Item eventKey="1" id="red" onClick={() => handleClick("red")}>
          Red
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          id="cyan"
          onClick={() => handleClick("cyan")}>
          Cyan
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          id="green"
          onClick={() => handleClick("green")}>
          Green
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          id="violet"
          onClick={() => handleClick("mediumvioletred")}>
          Violet
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          id="orange"
          onClick={() => handleClick("orange")}>
          Orange
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          id="yellow"
          onClick={() => handleClick("yellow")}>
          Yellow
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          id="brown"
          onClick={() => handleClick("saddlebrown")}>
          Brown
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          id="purple"
          onClick={() => handleClick("purple")}>
          Purple
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}
