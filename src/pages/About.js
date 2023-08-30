import React from "react";
import "../styles/About.css";
import profilePicture from "../assets/gorillaSquare.jpg";

function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
        <img src={profilePicture} className="aboutImg" alt="Me" />
        <div className="aboutText">
          <h1 className="header"> {`Hi! I'm Erik :)`}</h1>
          <p className="par">
            Introducing a remarkable individual whose presence enriches every
            space they inhabit. Meet [Your Name], a dynamic and multifaceted
            individual with a passion for [mention your key interests or fields
            of expertise]. With a background in [mention relevant educational or
            professional background], [Your Name] brings a unique perspective to
            every project and endeavor. Their unwavering curiosity and
            dedication drive them to constantly seek new challenges and
            opportunities for growth.
          </p>
          <p className="par">
            Beyond their impressive credentials, [Your Name] possesses an innate
            ability to [highlight a specific skill or quality that sets you
            apart]. Whether it's [describe a notable accomplishment or
            experience that demonstrates your expertise], [Your Name]
            consistently delivers excellence. Their commitment to [mention any
            relevant values or causes you're passionate about] is evident in
            everything they do, reflecting a deep-seated drive to make a
            meaningful impact on [mention relevant industry, community, or
            domain].
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
