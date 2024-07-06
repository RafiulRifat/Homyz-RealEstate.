import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>

          <span className="primaryText">Value We Give to You</span>

          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItemWrapper key={i} item={item} uuid={i} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const AccordionItemWrapper = ({ item, uuid }) => {
  const [className, setClassName] = useState("collapsed");

  useEffect(() => {
    // Update className based on expanded state
    const handleStateChange = ({ expanded }) => {
      setClassName(expanded ? "expanded" : "collapsed");
    };

    // Clean up any subscriptions or effects when component unmounts
    return () => {
      // Clean-up code if needed
    };
  }, []); // Ensure useEffect runs only once

  return (
    <AccordionItem className={`accordionItem ${className}`} uuid={uuid}>
      <AccordionItemHeading>
        <AccordionItemButton className="flexCenter accordionButton">
          <div className="flexCenter icon">{item.icon}</div>
          <span className="primaryText">{item.heading}</span>
          <div className="flexCenter icon">
            <MdOutlineArrowDropDown size={20} />
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p className="secondaryText">{item.detail}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default Value;
