import React from "react";
import "../styles/Home.css";
import BathroomMap from "../images/cppmap.jpg";
import BillyBronco from "../images/superhero-billy1.png";
import CPPLogo from "../images/Cal_Poly_Pomona_Broncos_logo.png";
import RateMyRestroomImage from "../images/RatemyRestroom.png";

const Home = () => {
  return (
    // <div className="home">
    //   <h1 className="home-title">Rate My Restroom</h1>
    //   <div className="image-container">
    //     <div>temp</div>
    //     {/* <img src={BathroomMap} alt="temp img" /> */}
    //   </div>

    // </div>

    <div className="home">
      <img className="home-title" src={RateMyRestroomImage} alt="Rate My Restroom" />
      <img className="map" src={BathroomMap} />
      <div className="bottom-container">
        <img className="cpp-logo" src={CPPLogo} alt="cpp logo"/>
        <div className="paragraph">
          This website was made for the students of Cal Poly Pomona to rate their restroom experiences by being able to upvote or downvote
          a restroom if they enjoyed their time at the respective restroom.
        </div>
        <img className="billy-bronco" src={BillyBronco} alt="billy bronco"/>
      </div>
    </div>
  );
};

export default Home;
