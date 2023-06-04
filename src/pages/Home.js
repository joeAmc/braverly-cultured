import React from "react";
import Nav from "../components/Nav/Nav";
import Banner from "../components/Banner/Banner";
// import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import AboutUs2 from "../components/AboutUs2/AboutUs2";
import SupportedBy from "../components/SupportBy/SupportedBy";

const Home = () => {
  return (
    <>
      <Nav />
      <Banner />
      <AboutUs2 />
      {/* <Contact /> */}
      <SupportedBy />
      <Footer />
    </>
  );
};

export default Home;
