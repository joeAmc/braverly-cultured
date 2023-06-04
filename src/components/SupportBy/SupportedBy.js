import React from "react";
import "./SupportedBy.css";
import Carbon13_logo from "../../assets/Carbon13_logo.png";
import GFI_logo from "../../assets/GFI_logo.png";
import European from "../../assets/European.png";
import UKRI from "../../assets/UKRI.png";

const SupportedBy = () => {
  return (
    <section>
      <div className="supported-container">
        <div className="supported-overlay">
          <h1>SUPPORTED BY</h1>
          <div className="central-band">
            <img src={Carbon13_logo} alt="logo" />
            <img src={UKRI} alt="logo" />
            <img src={European} alt="logo" />
            <img src={GFI_logo} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBy;
