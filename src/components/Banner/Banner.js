import React from "react";
import "../Banner/Banner.css";

const Banner = () => {
  return (
    <section>
      <div className="banner-container">
        <div className="overlay"></div>
        <div className="banner-content">
          <h1>
            Nature's microbiome has the answers to today’s food production
            problems
          </h1>
          <h2>We help to find them</h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
