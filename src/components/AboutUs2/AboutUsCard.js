import React from "react";
import image from "../../assets/more efficient.png";
import "./AboutUsCard.css";

const AboutUsCard = () => {
  return (
    <div className="card-container">
      <h3>Better Efficiency</h3>
      <img src={image} alt="" />
      <p>
        We scout the environment for microbes that are naturally efficient for
        your production
      </p>
    </div>
  );
};

export default AboutUsCard;
