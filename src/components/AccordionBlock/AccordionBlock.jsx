import React from "react";
import AccordionOrange from "./AccordionOrange/AccordionOrange";
import AccordionBlue from "./AccordionBlue/AccordionBlue";
import "./accordion-block.css";
import AccordionRed from "./AccordionRed/AccordionRed";

const AccordionBlock = () => {
	return (
		<>
			<AccordionBlue background={'blue'}/>
			<AccordionOrange background={'orange'}/>
			<AccordionRed/>
		</>
	);
};

export default AccordionBlock;
