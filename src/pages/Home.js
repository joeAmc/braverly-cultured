import React from "react";
import Banner from "../components/Banner/Banner";
// import Contact from "../components/Contact/Contact";
import AboutUs2 from "../components/AboutUs2/AboutUs2";
import AboutUs1 from "../components/AboutUs1/AboutUs1";
import SupportedBy from "../components/SupportBy/SupportedBy";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs1 />
      <AboutUs2 />
      {/* <Contact /> */}
      <SupportedBy />
    </>
  );
};

export default Home;
