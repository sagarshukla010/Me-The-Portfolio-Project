import React from "react";
import "./Education.css";
import data from "../../data.json";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";

export default function Education() {
  const educationData = data?.education || [];

  return (
    <div className="education-section" id="Education">
      <ScreenHeading title="Education" subHeading="My Academic Journey" />

      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="edu-left-border" />
            <div className="edu-content">
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>
              <span className="edu-duration">{edu.duration}</span>
              <p className="edu-description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
