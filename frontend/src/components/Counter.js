import React, { useState } from "react";
import "../styles/Counter.css"; // Import your CSS file for styling

import UpArrowImage from "../icons/Red Arrow Up.png";
import DownArrowImage from "../icons/Red Arrow Down.png";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="voting-container">
      <div className="number-votes">{counter}</div>
      <div className="arrow-buttons">
        <img
          classname="up-arrow"
          src={UpArrowImage}
          alt="up vote arrow"
          onClick={handleIncrement}
        />
        <img
          classname="down-arrow"
          src={DownArrowImage}
          alt="down vote arrow"
          onClick={handleDecrement}
        />
      </div>
    </div>
  );
};

export default Counter;
