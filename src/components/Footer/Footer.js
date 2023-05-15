import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
// import { Link } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
import { FaEtsy } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "../Footer/Footer.css";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <section>
        {/* <div className="spacer"></div> */}
        <div className="footer">
          <div className="footer-items">
            <Link to="/" onClick={scrollTop}>
              <FaEtsy />
            </Link>
            <ul className="footer-links">
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/#team">Team</Link>
              </li>
              <li>
                <Link smooth to="/#contact">
                  Contact
                </Link>
                {/* <Link smooth to="/#services"></Link> */}
              </li>
            </ul>
            <div className="footer-icons">
              <a href="https://www.linkedin.com/company/bravelycultured/">
                <BsLinkedin />
              </a>
              <a href="https://www.instagram.com/">
                <BsInstagram />
              </a>
            </div>
            <div className="copyright">
              <h5>&copy; Braverly Cultured. All rights reserved</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
