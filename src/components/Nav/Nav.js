import React, { useState } from "react";
import "../Nav/Nav.css";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../assets/logo-white.png";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="nav">
      <div className="nav-logo">
        <img onClick={scrollTop} src={Logo} alt="logo" />
      </div>
      <div className={`links${menuOpen ? " open" : ""}`}>
        <div className="home-link">
          <Link smooth to="/" onClick={scrollTop}>
            <h3>home</h3>
          </Link>
        </div>
        <div className="about-link">
          <Link to="#about" smooth={true}>
            <h3>about us</h3>
          </Link>
        </div>
        <div className="collect-link">
          <a href="/team">
            <h3>team</h3>
          </a>
        </div>
        <div className="contact-link">
          <a href="#contact">
            <h3>our why?</h3>
          </a>
        </div>
      </div>
      <div className="menu">
        <FiMenu
          className={`menu-icon${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Header;
