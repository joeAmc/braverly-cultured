import React from "react";
import "../Banner/Banner.css";

const Banner = () => {
  return (
    <section>
      <div className="banner-container">
        <div className="overlay"></div>
        {/* <img className="banner-img" src={banner} alt="" /> */}
        <div className="banner-content">
          <h1>
            Natures microbiome has the answers to today’s food production
            problems
          </h1>
          <h2>We help to find them</h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
