import React from "react";
import "../styles/BathroomCard.css";

import TempCard from "../images/lib 2nd floor.jpg";
import Counter from "./Counter";

const BathroomCard = (props) => {
  return (
    <div className="card">

      <div className="image-container">
        <img src={TempCard} alt="temp img" />
      </div>

      <div className="title">
        <h2>{props.title}</h2>
      </div>
      
      <div className="counter-container">
        <Counter />
      </div>

    </div>
  );
};

export default BathroomCard;
