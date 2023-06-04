import React from "react";
import Banner from "../components/Banner/Banner";
// import Contact from "../components/Contact/Contact";
import AboutUs2 from "../components/AboutUs2/AboutUs2";
import SupportedBy from "../components/SupportBy/SupportedBy";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs2 />
      {/* <Contact /> */}
      <SupportedBy />
    </>
  );
};

export default Home;
