import React from "react";
import OurWhy1 from "../components/OurWhy1/OurWhy1";
import OurWhy2 from "../components/OurWhy2/OurWhy2";
import { Helmet } from "react-helmet";

const ourWhy = () => {
  return (
    <>
      <Helmet>
        <title>Our Why?</title>
        <meta name="description" content="Why Braverly Cultured was founded" />
      </Helmet>
      <OurWhy1 />
      <OurWhy2 />
    </>
  );
};

export default ourWhy;
