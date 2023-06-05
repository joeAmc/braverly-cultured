import React from "react";
import "./Team.css";
import fed from "../../assets/Fed2.jpg";

const Team = () => {
  return (
    <section>
      <div className="team-container">
        <h1>OUR TEAM</h1>
        <div className="team-cards-container">
          <div className="team-cards">
            <img src={fed} alt="team member"></img>
            <h2>FEDERICA PESCE</h2>
            <h3>COO</h3>
            <p>
              Sustainable Food Systems & Policy Expert UN & European Commission
            </p>
          </div>
          <div className="team-cards">
            <img src={fed} alt="team member"></img>
            <h2>FEDERICA PESCE</h2>
            <h3>COO</h3>
            <p>
              Sustainable Food Systems & Policy Expert UN & European Commission
            </p>
          </div>
          <div className="team-cards">
            <img src={fed} alt="team member"></img>
            <h2>FEDERICA PESCE</h2>
            <h3>COO</h3>
            <p>
              Sustainable Food Systems & Policy Expert UN & European Commission
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
