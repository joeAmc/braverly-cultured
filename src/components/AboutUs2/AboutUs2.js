import React from "react";
import "./AboutUs2.css";
import { AboutUs2Data } from "./AboutUs2Data";

const AboutUs2 = () => {
  return (
    <section>
      <div className="aboutus2-container">
        {AboutUs2Data.map(({ image, title, text }) => (
          <div key={title} className="card">
            <h3>{title}</h3>
            <img src={image} alt="" />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs2;
