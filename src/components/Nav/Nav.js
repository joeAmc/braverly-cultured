import React, { useState } from "react";
import "../Nav/Nav.css";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../assets/logo-white.png";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleMenuIconClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="nav">
      <div className="nav-logo">
        <Link smooth to="/" onClick={scrollTop}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div
        className={`links${menuOpen ? " open" : ""}`}
        onClick={handleDropdownClick}
      >
        <div className="link">
          <Link smooth to="/" onClick={scrollTop}>
            <h3>home</h3>
          </Link>
        </div>
        <div className="link">
          <Link to="/#about" smooth={true}>
            <h3>about us</h3>
          </Link>
        </div>
        <div className="link">
          <a href="/team">
            <h3>team</h3>
          </a>
        </div>
        <div className="link">
          <a href="/our_why?">
            <h3>our why?</h3>
          </a>
        </div>
      </div>
      <div className="menu" onClick={handleMenuIconClick}>
        <FiMenu className={`menu-icon${menuOpen ? " open" : ""}`} />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Nav;
