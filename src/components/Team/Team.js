import React from "react";
import "./Team.css";
import { TeamData } from "./TeamData";
import { BsLinkedin } from "react-icons/bs";

const Team = () => {
  return (
    <section>
      <div className="spacer"></div>
      <div className="team-container">
        <h1>OUR TEAM</h1>
        <div className="team-cards-container">
          {TeamData.map(
            ({
              image,
              title,
              linkedin,
              maintext,
              why,
              funfact,
              name,
              education,
            }) => (
              <div className="team-cards">
                <img src={image} alt="team member" />
                <h2>{name}</h2>
                <h2>{title}</h2>
                <h3>{education}</h3>
                <a href={linkedin}>
                  <BsLinkedin />
                </a>
                <p>{maintext}</p>
                <h2>WHY BRAVELYCULTURED?</h2>
                <p>{why}</p>
                <h2>FUN FACT</h2>
                <p>{funfact}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
