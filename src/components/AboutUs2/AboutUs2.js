import React from "react";
import AboutUsCard from "./AboutUsCard";
import "./AboutUs2.css";

const AboutUs2 = () => {
  return (
    <section id="about">
      <div className="aboutus2-container">
        <AboutUsCard />
        <AboutUsCard />
        <AboutUsCard />
      </div>
    </section>
  );
};

export default AboutUs2;
