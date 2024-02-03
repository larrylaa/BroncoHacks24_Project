import React from "react";
import "../styles/BathroomCard.css";

import Counter from "./Counter";

const BathroomCard = (props) => {
  return (
    <div className="card">

      <div className="image-container">
        <img src={props.source} alt="temp img" />
      </div>

      <div className="title">
        <h2>{props.title}</h2>
      </div>
      
      <div className="counter-container">
        <Counter count={props.numUpvotes}/>
      </div>

    </div>
  );
};

export default BathroomCard;
