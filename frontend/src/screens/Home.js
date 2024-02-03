import React from "react";
import "../styles/Home.css";
import BathroomMap from "../images/cppmap.jpg";
import BillyBronco from "../images/superhero-billy1.png";
import CPPLogo from "../images/Cal_Poly_Pomona_Broncos_logo.png";

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
      <div className="home-title">Rate My Restroom</div>
      <img className="map" src={BathroomMap} />
      <div className="bottom-container">
        <img className="cpp-logo" src={CPPLogo}/>
        <div className="paragraph">
          This website serves as a valuable tool for the Cal Poly Pomona
          community, aiding in the identification and assessment of restroom
          facilities across the campus. By leveraging data analytics, it
          meticulously tracks and analyzes restroom usage patterns, providing
          insights into which facilities experience the highest foot traffic and
          which maintain optimal cleanliness standards. Through its
          comprehensive reporting system, users can easily identify trends, make
          informed decisions regarding restroom utilization, and contribute to
          the overall campus maintenance efforts. Additionally, this platform
          fosters a culture of accountability and stewardship, encouraging
          individuals to uphold restroom hygiene standards and ensuring that
          facilities remain comfortable and sanitary for all campus occupants.
        </div>
        <img className="billy-bronco" src={BillyBronco}/>
      </div>
    </div>
  );
};

export default Home;
