import React from "react";
import "../Banner/Banner.css";

const Banner = () => {
  return (
    <section>
      <div className="banner-container">
        <div className="overlay"></div>
        <div className="banner-content">
          <h1>
            Harnessing Novel Marine Microorganisms
          </h1>
          <h4>
            <i>For Sustainable Biosurfactants and Beyond</i>
          </h4>
          <div className="banner-mission">
            <h2>On a mission to replace animal- and petroleum-derived products</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
