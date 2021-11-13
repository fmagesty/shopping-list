import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./styles.css";

export default function ColorSelectorDropdown() {
  let currentBgColor = "black";

  const handleClick = (selectedColor) => {
    currentBgColor = selectedColor;
  };

  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        title="Color"
        className="bg-vertical-dropdown-1"
        style={{ backgroundColor: currentBgColor }}>
        <Dropdown.Item eventKey="1" id="red" onClick={() => handleClick("red")}>
          Red
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          id="blue"
          onClick={() => handleClick("blue")}>
          Blue
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" id="green">
          Green
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" id="pink">
          Pink
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" id="orange">
          Orange
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" id="yellow">
          Yellow
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" id="brown">
          Brown
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" id="purple">
          Purple
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}
