import React, { useEffect, useState } from "react";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import data from "../../data.json";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " - " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      {data.resume.resumeDetails.educationDetails.map((eduD) => (
        <ResumeHeading
          heading={eduD.heading}
          subHeading={eduD.subHeading}
          fromDate={eduD.fromDate}
          toDate={eduD.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="work-history">
      {data.resume.resumeDetails.workHistory.map((wH) => (
        <>
          <ResumeHeading
            heading={wH.heading}
            subHeading={wH.subHeading}
            fromDate={wH.fromDate}
            toDate={wH.toDate}
          />
          <div className="experience-description">
            {wH.descriptions.map((wHD) => (
              <>
                <span className="resume-description-text">{wHD}</span>
                <br />
              </>
            ))}
          </div>
        </>
      ))}
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {data.resume.resumeDetails.programmingSkillsDetails.map(
        (skill, index) => {
          return (
            <div className="skill-parent" key={index}>
              <div className="heading-bullet"></div>
              <span>{skill.skills}</span>
              <div className="skill-percentage">
                <div
                  className="active-percentage-bar"
                  style={{ width: skill.ratingPercentage + "%" }}
                ></div>
              </div>
            </div>
          );
        }
      )}
    </div>,
    <div className="resume-screen-container" key="projects">
      {data.resume.resumeDetails.projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {data.resume.resumeDetails.projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offSetHeight = 360;
    let newCarousalOffSet = {
      style: { transform: "translateY(" + index + offSetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffSet);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    let resumeBullets = data.resume.resumeBullets;
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops... no internet connection"
        />
        <span>{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        className="resume-details-carousal"
        style={carousalOffSetStyle.style}
      >
        {resumeDetails[selectedBulletIndex]}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details!"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
