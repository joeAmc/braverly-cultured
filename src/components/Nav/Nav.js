import React from "react";
import "../Nav/Nav.css";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../assets/logo-white.png";

const Header = () => {
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
      <div>
        <img onClick={scrollTop} src={Logo} alt="logo" />
      </div>
      <div className="links">
        <div className="home-link">
          <Link to="/" onClick={scrollTop}>
            <h3>HOME</h3>
          </Link>
        </div>
        <div className="about-link">
          <a href="#about">
            <h3>ABOUT US</h3>
          </a>
        </div>
        <div className="collect-link">
          <a href="#team">
            <h3>TEAM</h3>
          </a>
        </div>
        <div className="contact-link">
          <a href="#contact">
            <h3>OUR WAY?</h3>
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
