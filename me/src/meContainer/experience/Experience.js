import React, { useState } from "react";
import "./Experience.css";
import data from "../../data.json";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const experienceData = data.experience || [];

  const visibleItems = showAll ? experienceData : experienceData.slice(0, 4);

  return (
    <div className="experience-section" id="Experience">
      <ScreenHeading title="Experience" subHeading="My Work Experience" />
      <div className="timeline-container">
        {visibleItems.map((exp, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="timeline-icon">
              <i className="fa fa-briefcase" />
            </div>
            <div className="timeline-content">
              <h3>{exp.company}</h3>
              <h4>
                {exp.role} | {exp.type}
              </h4>
              <span className="timeline-date">{exp.duration}</span>
              {exp.details && exp.details.length > 0 && (
                <ul>
                  {exp.details.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      {experienceData.length > 4 && (
        <div className="view-more-btn-container">
          <button
            className="view-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All →"}
          </button>
        </div>
      )}
    </div>
  );
}
