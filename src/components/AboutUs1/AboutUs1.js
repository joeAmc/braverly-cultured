import React from "react";
import "./AboutUs1.css";

const AboutUs1 = () => {
  return (
    <section id="about">
      <div className="spacer"></div>
      <div className="aboutus1-container">
        <div className="about1-h1">
          <h1>Using MICROorganisms</h1>
          <h1>to solve</h1>
          <h1>MACROproblems</h1>
        </div>
        <p>
          BravelyCultured has turned to nature to find sustainable and scalable
          precision fermentation solutions. We can accelerate industrial R&D and
          improve the unit economics of precision fermentation. <br /> <br />
          We do this by harnessing the vast potential of nature’s largely
          unexplored marine microbiome.
        </p>
        <div className="about1-overlay"></div>{" "}
      </div>
    </section>
  );
};

export default AboutUs1;
