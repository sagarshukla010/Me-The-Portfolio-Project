// import React, { useEffect, useState } from "react";
import React from "react";
// import axios from "axios";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Aboutme.css";
import userData from "../../data.json"

export default function Aboutme(props) {

  // const [aboutMe, setAboutMe] = useState(null);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // const fadeInSubscription =
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post(
  //         "https://me-the-portfolio-project-backend.onrender.com/fetchUserDetails", {},
  //         {
  //           params: {
  //             userId: "admin",
  //             db: "aboutMe",
  //           },
  //         }
  //       )
  //       console.log("response for aboutMe: ", response);
  //       let responseObj;
  //       if(response?.status === 200){
  //         responseObj = response?.data?.response;
  //       }else{
  //         responseObj = {};
  //       }
  //       setAboutMe(responseObj);
  //     } catch (error) {
  //       console.error("error: ",error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  let aboutMe = {};
  if(userData){
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
              <a href="resume.pdf" download="Sagar Shukla Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
