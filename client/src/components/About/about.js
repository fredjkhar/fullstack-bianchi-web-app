import React from "react";

import { useAppContext } from "../../providers/appProvider";

import "./about.scss";

import diamond from "../../Assets/diamond.svg";
import person from "../../Assets/person.svg";

const About = () => {
  const { data } = useAppContext();

  return (
    <section className="about" id="about">
      <div className="wrapper">
        <div className="left-section">
          <div className="about-title">{data.about.a}</div>
          <div className="about-text">{data.about.b}</div>
          <div className="about-achievements">
            <div className="achievement">
              <img
                className="diamond"
                src={diamond}
                style={{ height: "50px", marginTop: "30px" }}
                alt="diamond-icon"
              />

              <div className="achievement-metric">+12</div>
              <div className="achievement-text">
                years of experience and mastery
              </div>
            </div>
            <div className="achievement">
              <img
                className="person"
                src={person}
                style={{ height: "50px" }}
                alt="person-icon"
              />
              <div className="achievement-metric">+5400</div>
              <div className="achievement-text">happy and loyal customers</div>
            </div>
          </div>
        </div>
        <div className="right-section">
          <img src={require("../../Assets/q5.png")} alt="about"></img>
          <img src={require("../../Assets/q6.jpg")} alt="about"></img>
        </div>
      </div>
    </section>
  );
};

export default About;
