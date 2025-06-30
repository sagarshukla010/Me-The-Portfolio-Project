import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Aboutme.css";
import userData from "../../data.json";

export default function Aboutme(props) {

  useEffect(() => {
    const fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };
  
    const subscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    return () => subscription.unsubscribe();
  }, [props.id]);  

  let aboutMe = {};
  if (userData) {
    aboutMe = userData?.aboutMe;
  }

  const SCREEN_CONSTANTS = {
    description: aboutMe?.description,
    highlights: {
      bullets: aboutMe?.highlights?.bullets,
      heading: aboutMe?.highlights?.heading,
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS?.highlights?.bullets?.map((value, i) => {
      return (
        <div className="highlight" key={i}>
          <div className="highlight-blob"></div>
          <span>{value}</span>
        </div>
      );
    });
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading
          title={"About Me"}
          subHeading={"Why Choose me!"}
          id={props.id || ""}
        />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToContactMe()}
              >
                {" "}
                Contact me{" "}
              </button>
              <a href="Sagar_Shukla_Resume_Updated.pdf" download="Sagar Shukla Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
