import React from "react";
import Team from "../components/Team/Team";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Our Team</title>
        <meta name="description" content="The Braverly Cultured Team" />
      </Helmet>
      <Team />
    </>
  );
};

export default Home;
