import React, { useEffect, useRef, useState } from "react";
import data from "../../data.json";
import ScrollService from "../../utilities/ScrollService";
import "./Home.css";

export default function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Contact Me button
  const handleContactClick = () => {
    ScrollService.scrollHandler.scrollToContactMe();
  };

  // Login logic
  const handleLogin = () => {
    if (username === data.user.username && password === data.user.password) {
      setMessage("✅ Login successful!");
      setTimeout(() => {
        setShowLogin(false);
        setMessage("");
        setUsername("");
        setPassword("");
      }, 1200);
    } else {
      setMessage("❌ Invalid username or password");
    }
  };

  // Vanta Globe background
  useEffect(() => {
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
          {/* Social Links */}
          <div className="social-icons">
            <a href="https://github.com/sagarshukla010" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square"></i></a>
            <a href="https://www.youtube.com/@sagarshukla1194" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-square"></i></a>
            <a href="https://www.linkedin.com/in/sagar-shukla-b517b416a/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a>
          </div>

          {/* Name */}
          <div className="profile-details-name">
            <span className="primary-text">Hello, I'm <span className="highlighted-text">Sagar</span></span>
          </div>

          {/* Role & Tagline */}
          <div className="profile-details-role">
            <h1>Welcome to My Portfolio</h1>
            <span className="profile-role-tagline">{data.profile.profileRoleTagLine}</span>
          </div>

          {/* Buttons */}
          <div className="profile-options">
            <button className="btn primary-btn" onClick={handleContactClick}>Contact Me</button>
            <a href="resume.pdf" download="Sagar_Shukla_Resume.pdf"><button className="btn highlighted-btn">Get Resume</button></a>
            <button className="btn primary-btn" onClick={() => setShowLogin(true)}>Login</button>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>

      {/* Login Popup */}
      {showLogin && (
        <div className="login-popup">
          <div className="login-popup-content">
            <h3>Login</h3>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="login-btn-group">
              <button className="btn primary-btn" onClick={handleLogin}>Submit</button>
              <button className="btn highlighted-btn" onClick={() => setShowLogin(false)}>Close</button>
            </div>
            {message && <p className="login-message">{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
