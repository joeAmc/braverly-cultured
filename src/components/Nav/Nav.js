import React from "react";
import { useEffect } from "react";
import "../Nav/Nav.css";

import { Link, useLocation } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";

const Header = () => {
  const location = useLocation();

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // useEffect(() => {
  //   const divHeight = document.querySelector(".banner-img").clientHeight;

  //   const navStart = () => {
  //     if (location.pathname === "/" && window.scrollY > divHeight) {
  //       setHeader(true);
  //     } else if (location.pathname !== "/") {
  //       setHeader(true);
  //     } else {
  //       setHeader(false);
  //     }
  //   };

  //   window.addEventListener("scroll", navStart);
  //   return () => window.EventListener("scroll", navStart);
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", isSticky);
  //   return () => {
  //     window.removeEventListener("scroll", isSticky);
  //   };
  // });

  // const isSticky = () => {
  //   const nav = document.querySelector(".nav");
  //   const scrollTop = window.scrollY;
  //   if (location.pathname === "/") {
  //     scrollTop >= window.innerHeight
  //       ? nav.classList.add("active")
  //       : nav.classList.remove("active");
  //   } else nav.classList.add("active");
  // };

  return (
    // <div className="header">
    <div className="nav">
      {/* <div className="nav-text"> */}
      <h1>Braverly Cultured</h1>

      <div className="links">
        <div className="about-link">
          <a href="#about">
            <h3>About</h3>
            <BsThreeDots />
          </a>
        </div>
        <div className="collect-link">
          <a href="#team">
            <h3>Team</h3>
            <BsThreeDots />
          </a>
        </div>
        <div className="contact-link">
          <a href="#contact">
            <h3>Contact</h3>
            <BsThreeDots />
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
