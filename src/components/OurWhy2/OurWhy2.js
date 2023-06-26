import React from "react";
import "./OurWhy2.css";
import microorganisms from "../../assets/microorganisms_icon.png";
import water from "../../assets/water_icon.png";
import agriculture from "../../assets/agriculture_icon.png";
import electricity from "../../assets/electricity_icon.png";

const OurWhy2 = () => {
  return (
    <section>
      <div className="ourwhy2-container">
        <div className="overlay"></div>
        <div className="ourwhy2-left">
          <h1 className="ourwhy2-top-text">
            CURRENT PRECISION FERMENTATION TECHNOLOGY IS <strong>NOT</strong>{" "}
            DESIGNED <strong>FOR FOOD PRODUCTION</strong>
          </h1>
          <div className="left-items1">
            <div className="icons">
              <img src={microorganisms} alt="icon" />
            </div>
            <div className="ourwhy2-text">
              <h2>UTILISES THE SAME STRAINS OF MICROORGANISMS</h2>
              <h3>that are optimised for biofuels and pharmaceuticals</h3>
            </div>
          </div>
          <div className="left-items2">
            <div className="icons">
              <img src={water} alt="icon" />
            </div>
            <div className="ourwhy2-text">
              <h2>USES A LOT OF FRESH WATER</h2>
              <h3>307 L water/kg protein</h3>
            </div>
          </div>
        </div>
        <div className="ourwhy2-right">
          <div className="right-items1">
            <div className="icons">
              <img src={agriculture} alt="icon" />
            </div>
            <div className="ourwhy2-text">
              <h2>RELIES ON AGRICULTURE-DERIVED INPUTS</h2>
              <h3>
                0.9 kg eCO2/kg glucose<br></br> 3.4 kg eCO2/kg yeast extract
              </h3>
            </div>
          </div>
          <div className="right-items2">
            <div className="icons">
              <img src={electricity} alt="icon" />
            </div>
            <div className="ourwhy2-text">
              <h2>ENERGY INTENSIVE</h2>
              <h3>13 kWh electricity/kg protein</h3>
            </div>
          </div>
          <h1 className="ourwhy2-bottom-text">
            BECAUSE IT IS OPTIMISED FOR PHARMACEUTICALS & BIOFUELS PRODUCTION
          </h1>
        </div>
      </div>
    </section>
  );
};

export default OurWhy2;
