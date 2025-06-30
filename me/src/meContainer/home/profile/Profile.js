import React, { useEffect, useRef, useState } from "react";
import "./Profile.css";
import data from "../../../data.json";
import ScrollService from "../../../utilities/ScrollService";

// If using npm:
// import * as THREE from "three";
// import NET from "vanta/dist/vanta.net.min";

export default function Profile() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  const handleContactClick = () => {
    ScrollService.scrollHandler.scrollToContactMe();
  };

  useEffect(() => {
    // Only load Vanta on the client side
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(
        window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff6a00,
          backgroundColor: 0xf7f7f7,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="profile-container" ref={vantaRef}>
      <div className="profile-parent">
        <div className="profile-details">
          <div className="social-icons">
            <a href="https://github.com/sagarshukla010" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github-square"></i>
            </a>
            <a href="https://www.youtube.com/@sagarshukla1194" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/sagar-shukla-b517b416a/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin-square"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Sagar</span>
            </span>
          </div>

          <div className="profile-details-role">
            <h1>Welcome to My Portfolio</h1>
            <span className="profile-role-tagline">
              {data.profile.profileRoleTagLine}
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn" onClick={handleContactClick}>
              Contact Me
            </button>
            <a href="resume.pdf" download="Sagar_Shukla_Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background" />
        </div>
      </div>
    </div>
  );
}
