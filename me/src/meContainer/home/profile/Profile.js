import React from "react";
// import Typical from "react-typical";
import "./Profile.css";
import data from "../../../data.json";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              {/* <a href="/#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="/#">
                <i className="fa fa-google-plus-square"></i>
              </a> */}
              <a href="https://github.com/sagarshukla010">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.youtube.com/@sagarshukla1194">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/sagar-shukla-b517b416a/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello I'm <span className="highlighted-text">Sagar</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                {/* <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer",
                    2000,
                    "Mobile app Developer",
                    2000,
                    "Web app Developer",
                    2000,
                  ]}
                /> */}
                Welcome In My Portfolio
              </h1>
              <span className="profile-role-tagline">
                {data.profile.profileRoleTagLine}
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToContactMe()}
            >
              {" "}
              Contact me{" "}
            </button>
            <a href="resume.pdf" download="Sagar Shukla Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
