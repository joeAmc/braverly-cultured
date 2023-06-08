import React from "react";
import "./OurWhy2.css";
import microorganisms from "../../assets/microorganisms_icon.png";
import water from "../../assets/water_icon.png";

const OurWhy2 = () => {
  return (
    <section>
      <div className="ourwhy2-container">
        <div className="overlay"></div>
        <h1 className="ourwhy2-top-text">
          CURRENT PRECISION FERMENTATION TECHNOLOGY IS NOT DESIGNED FOR FOOD
          PRODUCTION
        </h1>
        <h1 className="ourwhy2-bottom-text">
          CURRENT PRECISION FERMENTATION TECHNOLOGY IS NOT DESIGNED FOR FOOD
          PRODUCTION
        </h1>
        <div className="ourwhy2-left">
          <div className="left-items">
            <img src={microorganisms} alt="icon" />
            <div className="ourwhy2-text">
              <h2>UTILISES THE SAME STRAINS OF MICROORGANISMS</h2>
              <h3>that are optimised for biofuels and pharmaceuticals</h3>
            </div>
          </div>
          <div className="left-items">
            <img src={water} alt="icon" />
            <div className="ourwhy2-text">
              <h2>USES A LOT OF FRESH WATER</h2>
              <h3>307 L water/kg protein</h3>
            </div>
          </div>
        </div>
        <div className="ourwhy2-right">
          <div className="left-items">
            <img src={microorganisms} alt="icon" />
            <div className="ourwhy2-text">
              <h2>UTILISES THE SAME STRAINS OF MICROORGANISMS</h2>
              <h3>that are optimised for biofuels and pharmaceuticals</h3>
            </div>
          </div>
          <div className="left-items">
            <img src={water} alt="icon" />
            <div className="ourwhy2-text">
              <h2>USES A LOT OF FRESH WATER</h2>
              <h3>307 L water/kg protein</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWhy2;
