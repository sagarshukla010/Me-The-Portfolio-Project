import React, { useState } from "react";
import data from "../../data.json";
import "./Certifications.css";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";

export default function Certifications() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const certifications = data?.certifications || {};

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="cert-section-wrapper">
     <div className="cert-section" id="Certifications">
      <ScreenHeading
        title="Certifications"
        subHeading="Professional Certifications & Achievements"
      />{" "}
      <div className="cert-dropdown-container">
        {Object.keys(certifications).map((category, index) => (
          <div className="cert-category" key={index}>
            <button
              className="cert-category-btn"
              onClick={() => toggleCategory(category)}
            >
              <span>{category}</span>
              <i
                className={`fa ${
                  expandedCategory === category
                    ? "fa-chevron-up"
                    : "fa-chevron-down"
                }`}
              />
            </button>
            {expandedCategory === category && (
              <div className="cert-list">
                {certifications[category].map((cert, i) => (
                  <div className="cert-item" key={i}>
                    <div>
                      <strong>{cert.title}</strong>
                      <p className="cert-sub">
                        {cert.organization} • {cert.date}
                      </p>
                    </div>
                    <a
                      className="cert-link"
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-external-link" /> View
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}
