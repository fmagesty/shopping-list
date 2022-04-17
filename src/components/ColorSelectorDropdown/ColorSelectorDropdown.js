import React, { useState, useEffect } from "react";
import "./styles.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useDispatch } from "react-redux";
import { addColor, addCurrentItemName } from "../DisplayItems/displayItemsSlice";

export default function ColorSelectorDropdown(itemName) {
	const [color, setColor] = useState("white");
	const dispatch = useDispatch();
	itemName = itemName.itemName;

	const handleClick = (selectedColor) => {
		setColor(selectedColor);
	};

	useEffect(() => {
		dispatch(addCurrentItemName(itemName));
		dispatch(addColor(color));
	}, [color, dispatch, itemName]);

	return (
		<>
			<DropdownButton as={ButtonGroup} title="Category" className="bg-vertical-dropdown-1">
				<Dropdown.Item eventKey="1" id="red" onClick={() => handleClick("red")}>
					Red
				</Dropdown.Item>
				<Dropdown.Item eventKey="2" id="cyan" onClick={() => handleClick("cyan")}>
					Cyan
				</Dropdown.Item>
				<Dropdown.Item eventKey="2" id="green" onClick={() => handleClick("green")}>
					Green
				</Dropdown.Item>
				<Dropdown.Item eventKey="2" id="violet" onClick={() => handleClick("mediumvioletred")}>
					Violet
				</Dropdown.Item>
				<Dropdown.Item eventKey="2" id="orange" onClick={() => handleClick("orange")}>
					Orange
				</Dropdown.Item>
				<Dropdown.Item eventKey="2" id="yellow" onClick={() => handleClick("yellow")}>
					Yellow
				</Dropdown.Item>
				<Dropdown.Item eventKey="2" id="brown" onClick={() => handleClick("saddlebrown")}>
					Brown
				</Dropdown.Item>
				<Dropdown.Item eventKey="2" id="purple" onClick={() => handleClick("purple")}>
					Purple
				</Dropdown.Item>
			</DropdownButton>
		</>
	);
}
