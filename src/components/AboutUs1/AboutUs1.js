import React from "react";
import "./AboutUs1.css";
import macroproblems from "../../assets/macroproblems.png";
import microorganisms from "../../assets/microorganisms.png";

const AboutUs1 = () => {
  return (
    <section id="about">
      <div className="spacer"></div>
      <div className="aboutus1-container">
        <div className="left-side">
          <div className="about1-h1">
            <h1>Using MICROorganisms</h1>
            <h1>to solve</h1>
            <h1>MACROproblems</h1>
          </div>
          <img src={microorganisms} alt="logo" />
        </div>
        <div className="right-side">
          <p>
            BravelyCultured has turned to nature to find sustainable and
            scalable precision fermentation solutions. We can accelerate
            industrial R&D and improve the unit economics of precision
            fermentation. <br /> <br />
            We do this by harnessing the vast potential of nature’s largely
            unexplored marine microbiome.
          </p>
          <img src={macroproblems} alt="logo" />
        </div>
        <div className="about1-overlay"></div>{" "}
      </div>
    </section>
  );
};

export default AboutUs1;
