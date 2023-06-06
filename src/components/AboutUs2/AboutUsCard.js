import React from "react";
import "./AboutUsCard.css";
import { AboutUs2Data } from "./AboutUs2Data";

const AboutUsCard = () => {
  return (
    <div className="card-container">
      {AboutUs2Data.map(({ image, title, text }) => (
        <div key={title} className="card">
          <h3>{title}</h3>
          <img src={image} alt="" />
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUsCard;
