import React, { useState } from "react";
import "./Projects.css";
import data from "../../data.json";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";

export default function Projects() {
  const [mainTab, setMainTab] = useState("work");
  const [nestedTab, setNestedTab] = useState(
    "TATA Consultancy Services Limited"
  );

  const nestedTabs = {
    work: [
      "TATA Consultancy Services Limited",
      "Tech Mahindra Limited",
      "Cognizant Technology Solutions",
      "Jio Platforms Limited",
    ],
    college: ["final-year", "mini-project"],
    personal: ["Research", "Other Projects"],
  };

  const handleMainTabClick = (tab) => {
    setMainTab(tab);
    setNestedTab(nestedTabs[tab][0]); // Reset nested tab to first one
  };

  const filteredProjects = data?.projects?.filter(
    (project) =>
      project.category === mainTab && project.subcategory === nestedTab
  );

  return (
    <div className="project-section" id="Projects">
      <ScreenHeading
        title="Projects"
        subHeading="Selected works and technical implementations"
      />
      <div className="project-tabs">
        {["work", "college", "personal"].map((tab) => (
          <button
            key={tab}
            className={`project-tab-button ${
              mainTab === tab ? "project-active" : ""
            }`}
            onClick={() => handleMainTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="nested-tabs">
        {nestedTabs[mainTab].map((subTab) => (
          <button
            key={subTab}
            className={`project-tab-button ${
              nestedTab === subTab ? "project-active" : ""
            }`}
            onClick={() => setNestedTab(subTab)}
          >
            {subTab.charAt(0).toUpperCase() + subTab.slice(1)}
          </button>
        ))}
      </div>

      <div className="project-cards-container">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            {project.githubLink && (
              <a
                href={project.githubLink}
                className="project-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" style={{ marginRight: "8px" }} />
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
