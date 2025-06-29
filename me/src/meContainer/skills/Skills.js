import React, { useState } from "react";
import "./Skills.css";
import data from "../../data.json";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";

export default function Skills() {
  const categorizedSkills = data?.skillsCategorized || {};
  const categories = Object.keys(categorizedSkills);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="skills-section" id="Skills">
      <ScreenHeading
        title="My Skills"
        subHeading="Explore my tech stack by category"
      />
      <div className="skills-dropdown-container">
        <select
          className="skills-dropdown"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              🔹 {category}
            </option>
          ))}
        </select>
      </div>

      <div className="skills-grid">
        {categorizedSkills[selectedCategory]?.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-logo">
              <img
                src={require(`../../assets/icons/${skill.logo}`)}
                alt={skill.name}
              />
            </div>
            <h4 className="skill-title">{skill.name}</h4>
            <p className="skill-level">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
