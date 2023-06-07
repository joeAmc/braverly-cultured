import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BsLinkedin } from "react-icons/bs";
import "../Footer/Footer.css";
import Logo from "../../assets/logo-white.png";

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
            <div className="footer-logo">
              <img onClick={scrollTop} src={Logo} alt="logo" />
            </div>
            <div className="text-linkedin">
              <p>Let’s change the future of food together!</p>
              <a href="https://www.linkedin.com/company/bravelycultured/">
                <BsLinkedin />
              </a>
            </div>
            <div className="copyright">
              <h5>&copy; 2023 by BravelyCultured Ltd.</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
